import * as THREE from "three";
import { radians } from "../utils/geometry.js";

export class Room {
  constructor(scene, config) {
    this.scene = scene;
    this.config = config;

    this.wallMaterial = new THREE.MeshStandardMaterial({ color: 0xf7efe2, roughness: 1 });
    this.floorMaterial = new THREE.MeshStandardMaterial({ color: 0xf7efe2, roughness: config.floor.roughness });

    this.backdrop = new THREE.Mesh(
      new THREE.BoxGeometry(config.wall.width, config.wall.height, config.wall.depth),
      this.wallMaterial
    );
    this.backdrop.name = "room-wall";
    this.backdrop.castShadow = true;
    this.backdrop.receiveShadow = true;

    this.floor = new THREE.Mesh(
      new THREE.BoxGeometry(config.floor.width, 0.04, config.floor.height),
      this.floorMaterial
    );
    this.floor.name = "room-floor";
    this.floor.castShadow = false;
    this.floor.receiveShadow = true;

    scene.add(this.backdrop, this.floor);
    this.applyWall();
    this.applyFloor();
  }

  applyWall() {
    this.backdrop.position.set(this.config.wall.x, this.config.wall.y, this.config.wall.z);
    this.wallMaterial.color.setHex(0xf7efe2);
    this.wallMaterial.roughness = 1;
  }

  applyFloor() {
    const floorConfig = this.config.floor;
    this.floor.geometry.dispose();
    this.floor.geometry = new THREE.BoxGeometry(floorConfig.width, 0.04, floorConfig.height);
    this.floor.position.set(floorConfig.x, floorConfig.y, floorConfig.z);
    this.floor.rotation.x = radians(floorConfig.rotX);
    this.floor.rotation.y = radians(floorConfig.rotY);
    this.floor.rotation.z = radians(floorConfig.rotZ);
    this.floorMaterial.color.setHex(0xf7efe2).multiplyScalar(floorConfig.tone);
    this.floorMaterial.roughness = floorConfig.roughness;
  }
}
