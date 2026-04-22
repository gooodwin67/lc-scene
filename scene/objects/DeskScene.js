import * as THREE from "three";
import { makeDeskTopGeometry, radians } from "../utils/geometry.js";

export class DeskScene {
  constructor(scene, config) {
    this.config = config;
    this.group = new THREE.Group();
    this.topMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f7f4, roughness: 0.94 });
    this.legMaterial = new THREE.MeshStandardMaterial({ color: 0xc8a06b, roughness: 0.88 });

    this.top = new THREE.Mesh(
      makeDeskTopGeometry(config.mainWidth, config.mainDepth, config.returnWidth, config.returnDepth, config.innerCut, config.thickness, config.radius),
      this.topMaterial
    );
    this.top.name = "desk-top";
    this.top.castShadow = true;
    this.top.receiveShadow = true;
    this.group.add(this.top);

    this.legs = [];
    for (let index = 0; index < 5; index += 1) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(config.legRadius, config.legRadius * 1.08, config.legHeight, 20), this.legMaterial);
      leg.name = `desk-leg-${index + 1}`;
      leg.castShadow = true;
      leg.receiveShadow = true;
      this.group.add(leg);
      this.legs.push(leg);
    }

    scene.add(this.group);
    this.apply();
  }

  apply() {
    this.top.castShadow = true;
    this.top.receiveShadow = true;
    this.top.geometry.dispose();
    this.top.geometry = makeDeskTopGeometry(
      this.config.mainWidth,
      this.config.mainDepth,
      this.config.returnWidth,
      this.config.returnDepth,
      this.config.innerCut,
      this.config.thickness,
      this.config.radius
    );

    const left = -this.config.mainWidth / 2;
    const right = this.config.mainWidth / 2;
    const back = -this.config.mainDepth / 2;
    const mainFront = this.config.mainDepth / 2;
    const returnRight = left + this.config.returnWidth;
    const returnFront = this.config.returnDepth / 2;
    const inset = Math.max(this.config.legRadius * 1.8, this.config.legInset);
    const legY = -(this.config.legHeight / 2 + this.config.thickness / 2);

    const positions = [
      [left + inset, legY, back + inset],
      [right - inset, legY, back + inset],
      [right - inset, legY, mainFront - inset],
      [left + inset, legY, returnFront - inset],
      [returnRight - inset, legY, returnFront - inset]
    ];

    this.legs.forEach((leg, index) => {
      leg.castShadow = false;
      leg.receiveShadow = true;
      leg.geometry.dispose();
      leg.geometry = new THREE.CylinderGeometry(this.config.legRadius, this.config.legRadius * 1.08, this.config.legHeight, 20);
      leg.position.set(...positions[index]);
      leg.rotation.set(0, 0, 0);
    });

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.set(0, 0, 0);

    this.top.position.set(this.config.topX, this.config.topY, this.config.topZ);
    this.top.rotation.x = radians(this.config.rotX);
    this.top.rotation.y = radians(this.config.rotY);
    this.top.rotation.z = radians(this.config.rotZ);
  }
}
