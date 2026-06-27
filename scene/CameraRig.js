import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class CameraRig {
  constructor(renderer, config) {
    this.config = config;
    this.camera = new THREE.PerspectiveCamera(config.fov, window.innerWidth / window.innerHeight, 0.1, 100);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.enableDamping = true;
    this.basePosition = new THREE.Vector3();
    this.baseTarget = new THREE.Vector3();
    this.viewDirection = new THREE.Vector3();
    this.viewRight = new THREE.Vector3();
    this.viewUp = new THREE.Vector3();
    this.panOffset = new THREE.Vector3();
    this.parallaxCameraOffset = new THREE.Vector3();
    this.parallaxTargetOffset = new THREE.Vector3();
    this.apply();
  }

  setOrbitEnabled(enabled) {
    this.controls.enabled = enabled;
  }

  setParallax(cameraX, cameraY, targetX, targetY) {
    this.parallaxCameraOffset
      .copy(this.viewRight)
      .multiplyScalar(cameraX)
      .addScaledVector(this.viewUp, cameraY);
    this.parallaxTargetOffset
      .copy(this.viewRight)
      .multiplyScalar(targetX)
      .addScaledVector(this.viewUp, targetY);
  }

  apply() {
    this.basePosition.set(this.config.x, this.config.y, this.config.z);
    this.baseTarget.set(this.config.targetX, this.config.targetY, this.config.targetZ);
    this.viewDirection.subVectors(this.baseTarget, this.basePosition).normalize();
    this.viewRight.crossVectors(this.viewDirection, this.camera.up).normalize();
    this.viewUp.crossVectors(this.viewRight, this.viewDirection).normalize();
    this.panOffset
      .copy(this.viewRight)
      .multiplyScalar(this.config.panX)
      .addScaledVector(this.viewUp, this.config.panY);

    this.camera.position.copy(this.basePosition).add(this.panOffset).add(this.parallaxCameraOffset);
    this.camera.fov = this.config.fov;
    this.camera.updateProjectionMatrix();
    this.controls.target.copy(this.baseTarget).add(this.panOffset).add(this.parallaxTargetOffset);
    this.controls.update();
  }

  resize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
