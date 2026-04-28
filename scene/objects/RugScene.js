import * as THREE from "three";
import { radians, roundedRectShape } from "../utils/geometry.js";

function makeRoundedPlate(width, height, depth, radius) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: false,
    curveSegments: 24
  });
  geometry.center();
  return geometry;
}

export class RugScene {
  constructor(scene, config) {
    this.config = config;

    this.group = new THREE.Group();
    this.colors = [0xe79316, 0xf5ea88, 0xf0ab2a, 0xf6ee9a];
    this.layers = this.colors.map((color, index) => {
      const mesh = new THREE.Mesh(
        makeRoundedPlate(1, 1, 0.04, 0.1),
        new THREE.MeshStandardMaterial({ color, roughness: 0.95 })
      );
      mesh.name = `rug-layer-${index + 1}`;
      mesh.castShadow = false;
      mesh.receiveShadow = true;
      mesh.rotation.x = -Math.PI / 2;
      this.group.add(mesh);
      return mesh;
    });

    scene.add(this.group);
    this.apply();
  }

  apply() {
    const sizes = [
      { width: this.config.width, height: this.config.height, inset: 0 },
      { width: this.config.width - this.config.inset1 * 2, height: this.config.height - this.config.inset1 * 2, inset: this.config.inset1 },
      { width: this.config.width - this.config.inset2 * 2, height: this.config.height - this.config.inset2 * 2, inset: this.config.inset2 },
      { width: this.config.width - this.config.inset3 * 2, height: this.config.height - this.config.inset3 * 2, inset: this.config.inset3 }
    ];

    this.layers.forEach((mesh, index) => {
      const layer = sizes[index];
      mesh.geometry.dispose();
      mesh.geometry = makeRoundedPlate(
        Math.max(0.2, layer.width),
        Math.max(0.2, layer.height),
        this.config.depth,
        Math.max(0.05, this.config.radius - index * this.config.radiusFalloff)
      );
      mesh.position.y = index * this.config.layerLift;
    });

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
  }
}
