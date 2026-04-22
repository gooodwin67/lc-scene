import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class CameraRig {
  constructor(renderer, config) {
    this.config = config;
    this.camera = new THREE.PerspectiveCamera(config.fov, window.innerWidth / window.innerHeight, 0.1, 100);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.enableDamping = true;
    this.apply();
  }

  apply() {
    this.camera.position.set(this.config.x, this.config.y, this.config.z);
    this.camera.fov = this.config.fov;
    this.camera.updateProjectionMatrix();
    this.controls.target.set(this.config.targetX, this.config.targetY, this.config.targetZ);
    this.controls.update();
  }

  resize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
