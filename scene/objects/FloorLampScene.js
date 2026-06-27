import * as THREE from "three";
import { radians } from "../utils/geometry.js";

export class FloorLampScene {
  constructor(scene, config) {
    this.config = config;
    this.group = new THREE.Group();

    this.baseMaterial = new THREE.MeshStandardMaterial({ color: 0xc69a55, roughness: 0.72, metalness: 0.18 });
    this.poleMaterial = new THREE.MeshStandardMaterial({ color: 0xc59a57, roughness: 0.62, metalness: 0.28 });
    this.shadeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffe7b4,
      emissive: 0xffd37a,
      emissiveIntensity: 0.45,
      roughness: 0.88,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide
    });

    this.base = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.08, 48), this.baseMaterial);
    this.base.castShadow = true;
    this.base.receiveShadow = true;
    this.group.add(this.base);

    this.pole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 3, 32), this.poleMaterial);
    this.pole.castShadow = true;
    this.pole.receiveShadow = true;
    this.group.add(this.pole);

    this.shade = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.78, 0.58, 64, 1, true), this.shadeMaterial);
    this.shade.castShadow = true;
    this.shade.receiveShadow = true;
    this.group.add(this.shade);

    this.bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 24, 16),
      new THREE.MeshStandardMaterial({
        color: 0xfff1c5,
        emissive: 0xffd37a,
        emissiveIntensity: 1.1,
        roughness: 0.5
      })
    );
    this.group.add(this.bulb);

    this.light = new THREE.PointLight(0xffd895, 0.8, 8, 1.6);
    this.light.castShadow = false;
    this.group.add(this.light);

    this.hitArea = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 4.4, 1.0),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
    );
    this.hitArea.name = "floor-lamp-hit-area";
    this.hitArea.userData.isFloorLampHitArea = true;
    this.group.add(this.hitArea);

    scene.add(this.group);
    this.apply();
  }

  apply() {
    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
    this.group.scale.set(this.config.scaleX, this.config.scaleY, this.config.scaleZ);

    this.base.geometry.dispose();
    this.base.geometry = new THREE.CylinderGeometry(this.config.baseRadius, this.config.baseRadius, this.config.baseHeight, 48);
    this.base.position.set(0, this.config.baseY, 0);

    this.pole.geometry.dispose();
    this.pole.geometry = new THREE.CylinderGeometry(this.config.poleRadius, this.config.poleRadius, this.config.poleHeight, 32);
    this.pole.position.set(0, this.config.baseY + this.config.baseHeight * 0.5 + this.config.poleHeight * 0.5, 0);

    this.shade.geometry.dispose();
    this.shade.geometry = new THREE.CylinderGeometry(
      this.config.shadeTopRadius,
      this.config.shadeBottomRadius,
      this.config.shadeHeight,
      64,
      1,
      true
    );
    this.shade.position.set(this.config.shadeX, this.config.shadeY, this.config.shadeZ);
    this.shade.rotation.x = radians(this.config.shadeRotX);
    this.shade.rotation.y = radians(this.config.shadeRotY);
    this.shade.rotation.z = radians(this.config.shadeRotZ);

    this.bulb.geometry.dispose();
    this.bulb.geometry = new THREE.SphereGeometry(this.config.bulbRadius, 24, 16);
    this.bulb.position.set(this.config.bulbX, this.config.bulbY, this.config.bulbZ);

    this.light.position.set(this.config.lightX, this.config.lightY, this.config.lightZ);
    this.light.intensity = this.config.lightIntensity;
    this.light.distance = this.config.lightDistance;
    this.light.decay = this.config.lightDecay;

    this.hitArea.position.set(0, 1.85, 0);
    this.hitArea.scale.set(
      Math.max(0.4, this.config.shadeBottomRadius * 1.6),
      Math.max(0.5, this.config.poleHeight / 4.4 + this.config.shadeHeight / 4.4),
      Math.max(0.4, this.config.shadeBottomRadius * 1.15)
    );

    this.baseMaterial.color.set(this.config.baseColor);
    this.poleMaterial.color.set(this.config.poleColor);
    this.shadeMaterial.color.set(this.config.shadeColor);
    this.shadeMaterial.emissive.set(this.config.shadeGlowColor);
    this.shadeMaterial.emissiveIntensity = this.config.shadeGlow;
    this.shadeMaterial.opacity = this.config.shadeOpacity;
    this.bulb.material.color.set(this.config.bulbColor);
    this.bulb.material.emissive.set(this.config.bulbGlowColor);
    this.bulb.material.emissiveIntensity = this.config.bulbGlow;
    this.light.color.set(this.config.lightColor);
  }
}
