import * as THREE from "three";
import { makePictureFrameGeometry, makePictureInnerGeometry, makeTrianglePlateGeometry, radians } from "../utils/geometry.js";

export class PictureScene {
  constructor(scene, config) {
    this.config = config;
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0xb8d1ef, roughness: 0.9 });
    const innerMaterial = new THREE.MeshStandardMaterial({ color: 0xd9e8fb, roughness: 0.95 });
    const shapeMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f7f4, roughness: 0.95 });

    this.group = new THREE.Group();
    this.frame = new THREE.Mesh(makePictureFrameGeometry(config.width, config.height, config.depth, config.innerInset), frameMaterial);
    this.frame.name = "picture-frame";
    this.frame.castShadow = true;
    this.frame.receiveShadow = true;
    this.group.add(this.frame);

    this.inner = new THREE.Mesh(makePictureInnerGeometry(config.width, config.height, 0.03, config.innerInset), innerMaterial);
    this.inner.name = "picture-inner";
    this.inner.receiveShadow = true;
    this.group.add(this.inner);

    this.sun = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.03, 24), shapeMaterial);
    this.sun.name = "picture-sun";
    this.sun.rotation.x = Math.PI / 2;
    this.group.add(this.sun);

    this.mountainA = new THREE.Mesh(makeTrianglePlateGeometry(0.72, 0.55, 0.03), shapeMaterial);
    this.mountainA.name = "picture-mountain-a";
    this.group.add(this.mountainA);

    this.mountainB = new THREE.Mesh(makeTrianglePlateGeometry(0.44, 0.34, 0.03), shapeMaterial);
    this.mountainB.name = "picture-mountain-b";
    this.group.add(this.mountainB);

    scene.add(this.group);
    this.apply();
  }

  apply() {
    this.frame.geometry.dispose();
    this.frame.geometry = makePictureFrameGeometry(this.config.width, this.config.height, this.config.depth, this.config.innerInset);

    this.inner.geometry.dispose();
    this.inner.geometry = makePictureInnerGeometry(this.config.width, this.config.height, 0.03, this.config.innerInset);
    this.inner.position.z = this.config.depth * 0.18;

    this.sun.geometry.dispose();
    this.sun.geometry = new THREE.CylinderGeometry(this.config.sunRadius, this.config.sunRadius, 0.03, 24);
    this.sun.position.set(this.config.sunX, this.config.sunY, 0.06);

    this.mountainA.geometry.dispose();
    this.mountainA.geometry = makeTrianglePlateGeometry(this.config.mountainAWidth, this.config.mountainAHeight, 0.03);
    this.mountainA.position.set(this.config.mountainAX, this.config.mountainAY, 0.05);
    this.mountainA.scale.set(this.config.mountainAScaleX, this.config.mountainAScaleY, this.config.mountainAScaleZ);
    this.mountainA.rotation.z = radians(this.config.mountainARotZ);

    this.mountainB.geometry.dispose();
    this.mountainB.geometry = makeTrianglePlateGeometry(this.config.mountainBWidth, this.config.mountainBHeight, 0.03);
    this.mountainB.position.set(this.config.mountainBX, this.config.mountainBY, 0.05);
    this.mountainB.scale.set(this.config.mountainBScaleX, this.config.mountainBScaleY, this.config.mountainBScaleZ);
    this.mountainB.rotation.z = radians(this.config.mountainBRotZ);

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
  }
}
