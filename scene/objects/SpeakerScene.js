import * as THREE from "three";
import { radians, roundedRectShape } from "../utils/geometry.js";

function makeRoundedBox(width, height, depth, radius) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: false,
    curveSegments: 20
  });
  geometry.center();
  return geometry;
}

export class SpeakerScene {
  constructor(scene, config) {
    this.config = config;

    this.bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xe0a31f, roughness: 0.82 });
    this.frontMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f4ef, roughness: 0.95 });
    this.coneMaterial = new THREE.MeshStandardMaterial({ color: 0x4f5067, roughness: 0.88 });

    this.group = new THREE.Group();

    this.body = new THREE.Mesh(makeRoundedBox(0.8, 1, 0.6, 0.08), this.bodyMaterial);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.group.add(this.body);

    this.frontPanel = new THREE.Mesh(makeRoundedBox(0.62, 0.82, 0.04, 0.04), this.frontMaterial);
    this.frontPanel.castShadow = true;
    this.frontPanel.receiveShadow = true;
    this.group.add(this.frontPanel);

    this.cone = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.06, 32), this.coneMaterial);
    this.cone.castShadow = true;
    this.cone.receiveShadow = true;
    this.cone.rotation.x = Math.PI / 2;
    this.group.add(this.cone);

    this.smallCone = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.03, 32), this.coneMaterial);
    this.smallCone.castShadow = true;
    this.smallCone.receiveShadow = true;
    this.smallCone.rotation.x = Math.PI / 2;
    this.group.add(this.smallCone);

    scene.add(this.group);
    this.apply();
  }

  apply() {
    this.body.geometry.dispose();
    this.body.geometry = makeRoundedBox(this.config.width, this.config.height, this.config.depth, this.config.radius);

    this.frontPanel.geometry.dispose();
    this.frontPanel.geometry = makeRoundedBox(
      this.config.panelWidth,
      this.config.panelHeight,
      this.config.panelDepth,
      this.config.panelRadius
    );
    this.frontPanel.position.set(this.config.panelX, this.config.panelY, this.config.panelZ);

    this.cone.geometry.dispose();
    this.cone.geometry = new THREE.CylinderGeometry(this.config.coneRadius, this.config.coneRadius, this.config.coneDepth, 32);
    this.cone.position.set(this.config.coneX, this.config.coneY, this.config.coneZ);

    this.smallCone.geometry.dispose();
    this.smallCone.geometry = new THREE.CylinderGeometry(this.config.smallConeRadius, this.config.smallConeRadius, this.config.smallConeDepth, 32);
    this.smallCone.position.set(this.config.smallConeX, this.config.smallConeY, this.config.smallConeZ);

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
  }

  setConePulse(scale) {
    this.cone.scale.set(scale, 1, scale);
  }
}
