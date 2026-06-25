import * as THREE from "three";
import { radians } from "../utils/geometry.js";

export class MugScene {
  constructor(scene, config) {
    this.config = config;
    this.group = new THREE.Group();

    this.bodyMaterial = new THREE.MeshStandardMaterial({ color: config.bodyColor, roughness: 0.9 });
    this.coffeeMaterial = new THREE.MeshStandardMaterial({ color: config.coffeeColor, roughness: 0.78 });
    this.handleMaterial = new THREE.MeshStandardMaterial({ color: config.bodyColor, roughness: 0.9 });

    this.body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.36, 0.7, 48), this.bodyMaterial);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.group.add(this.body);

    this.coffee = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.02, 48), this.coffeeMaterial);
    this.coffee.receiveShadow = true;
    this.group.add(this.coffee);

    this.handle = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.04, 12, 32, Math.PI * 1.32), this.handleMaterial);
    this.handle.castShadow = true;
    this.handle.receiveShadow = true;
    this.group.add(this.handle);

    this.steamGroup = new THREE.Group();
    this.steamLines = [];
    this.group.add(this.steamGroup);

    scene.add(this.group);
    this.apply();
  }

  rebuildSteam() {
    while (this.steamGroup.children.length > 0) {
      const child = this.steamGroup.children.pop();
      this.steamGroup.remove(child);
      child.geometry.dispose();
      child.material.dispose();
    }

    this.steamLines = [];
    const count = Math.max(0, Math.round(this.config.steamCount));
    for (let index = 0; index < count; index += 1) {
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.MeshBasicMaterial({
        color: this.config.steamColor,
        transparent: true,
        opacity: this.config.steamOpacity,
        depthWrite: false
      });
      const line = new THREE.Mesh(geometry, material);
      this.steamGroup.add(line);
      this.steamLines.push(line);
    }
  }

  apply() {
    this.bodyMaterial.color.set(this.config.bodyColor);
    this.handleMaterial.color.set(this.config.bodyColor);
    this.coffeeMaterial.color.set(this.config.coffeeColor);

    this.body.geometry.dispose();
    this.body.geometry = new THREE.CylinderGeometry(
      this.config.topRadius,
      this.config.bottomRadius,
      this.config.height,
      48
    );
    this.body.position.set(0, this.config.height * 0.5, 0);

    this.coffee.geometry.dispose();
    this.coffee.geometry = new THREE.CylinderGeometry(
      this.config.coffeeRadius,
      this.config.coffeeRadius,
      this.config.coffeeDepth,
      48
    );
    this.coffee.position.set(0, this.config.height + this.config.coffeeOffsetY, 0);

    this.handle.geometry.dispose();
    this.handle.geometry = new THREE.TorusGeometry(
      this.config.handleRadius,
      this.config.handleTube,
      12,
      32,
      Math.PI * this.config.handleArc
    );
    this.handle.position.set(this.config.handleX, this.config.handleY, this.config.handleZ);
    this.handle.rotation.x = radians(this.config.handleRotX);
    this.handle.rotation.y = radians(this.config.handleRotY);
    this.handle.rotation.z = radians(this.config.handleRotZ);
    this.handle.scale.set(this.config.handleScaleX, this.config.handleScaleY, this.config.handleScaleZ);

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
    this.group.scale.set(this.config.scaleX, this.config.scaleY, this.config.scaleZ);

    this.steamGroup.position.set(
      this.config.steamOffsetX,
      this.config.height + 0.06 + this.config.steamOffsetY,
      this.config.steamOffsetZ
    );
    this.steamGroup.rotation.x = radians(-this.config.rotX + this.config.steamRotX);
    this.steamGroup.rotation.y = radians(-this.config.rotY + this.config.steamRotY);
    this.steamGroup.rotation.z = radians(-this.config.rotZ + this.config.steamRotZ);
    this.rebuildSteam();
  }

  updateSteam(time) {
    if (!this.config.steamEnabled) {
      this.steamGroup.visible = false;
      return;
    }

    this.steamGroup.visible = true;
    const speed = this.config.steamSpeed;
    const spread = this.config.steamSpread;
    const height = this.config.steamHeight;

    this.steamLines.forEach((line, lineIndex) => {
      line.material.color.set(this.config.steamColor);
      line.material.opacity = this.config.steamOpacity;
      const baseAngle = (lineIndex / Math.max(1, this.steamLines.length)) * Math.PI * 2;
      const phase = time * 0.0012 * speed + lineIndex * 1.7;
      const baseX = Math.cos(baseAngle) * spread * 0.26;
      const baseZ = Math.sin(baseAngle) * spread * 0.18;
      const points = [];

      for (let pointIndex = 0; pointIndex < 8; pointIndex += 1) {
        const t = pointIndex / 7;
        const curl = Math.sin(phase + t * Math.PI * 2.2) * spread * t;
        const curlZ = Math.cos(phase * 0.8 + t * Math.PI * 1.9) * spread * 0.45 * t;
        points.push(new THREE.Vector3(
          baseX + curl,
          t * height,
          baseZ + curlZ
        ));
      }

      line.geometry.dispose();
      line.geometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        16,
        this.config.steamThickness,
        6,
        false
      );
    });
  }
}
