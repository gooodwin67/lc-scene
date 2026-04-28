import * as THREE from "three";
import { makePotGeometry, radians } from "../utils/geometry.js";

function makeLeafGeometry(width, height, depth, options) {
  const shape = new THREE.Shape();
  shape.moveTo(0, -height / 2);
  shape.bezierCurveTo(width * 0.55, -height * 0.28, width * 0.62, height * 0.22, 0, height / 2);
  shape.bezierCurveTo(-width * 0.62, height * 0.22, -width * 0.55, -height * 0.28, 0, -height / 2);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 10,
    bevelSize: width * options.bevelSize,
    bevelThickness: depth * options.bevelThickness,
    curveSegments: 24
  });
  geometry.center();

  const position = geometry.attributes.position;
  const halfWidth = width * 0.5;
  const halfHeight = height * 0.5;

  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index);
    const y = position.getY(index);
    let z = position.getZ(index);

    const xFalloff = Math.max(0, 1 - Math.abs(x) / halfWidth);
    const yFalloff = Math.max(0, 1 - Math.abs(y) / halfHeight);
    const centerBulge = xFalloff * yFalloff;
    const ridgeBulge = Math.max(0, 1 - Math.abs(x) / (halfWidth * options.ridgeWidth)) * yFalloff;
    const bulge = depth * options.bodyBulge * centerBulge + depth * options.ridgeBulge * ridgeBulge;

    z += z >= 0 ? bulge : -bulge;
    position.setZ(index, z);
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function createLeaf(material) {
  const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.02), material);
  leaf.castShadow = true;
  leaf.receiveShadow = true;
  return leaf;
}

export class FloorPlantScene {
  constructor(scene, potConfig, plantConfig) {
    this.potConfig = potConfig;
    this.plantConfig = plantConfig;

    this.group = new THREE.Group();

    this.potMaterial = new THREE.MeshStandardMaterial({ color: 0xf8f8f5, roughness: 0.94 });
    this.bandMaterial = new THREE.MeshStandardMaterial({ color: 0xc8b29a, roughness: 0.96 });
    this.soilMaterial = new THREE.MeshStandardMaterial({ color: 0x6c4b32, roughness: 1 });
    this.leafMaterial = new THREE.MeshStandardMaterial({ color: 0xa6df19, roughness: 0.86 });

    this.pot = new THREE.Mesh(makePotGeometry(potConfig.radius, potConfig.height, potConfig.neck, potConfig.bulge), this.potMaterial);
    this.pot.castShadow = true;
    this.pot.receiveShadow = true;
    this.group.add(this.pot);

    this.middleBand = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.1, 48), this.bandMaterial);
    this.middleBand.castShadow = false;
    this.middleBand.receiveShadow = true;
    this.group.add(this.middleBand);

    this.bottomBand = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.30, 0.08, 48), this.bandMaterial);
    this.bottomBand.castShadow = false;
    this.bottomBand.receiveShadow = true;
    this.group.add(this.bottomBand);

    this.soil = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.03, 32), this.soilMaterial);
    this.soil.receiveShadow = true;
    this.group.add(this.soil);

    this.plant = new THREE.Group();
    this.centerLeaf = createLeaf(this.leafMaterial);
    this.leftLeaf = createLeaf(this.leafMaterial);
    this.rightLeaf = createLeaf(this.leafMaterial);
    this.plant.add(this.centerLeaf, this.leftLeaf, this.rightLeaf);
    this.group.add(this.plant);

    scene.add(this.group);
    this.applyPot();
    this.applyPlant();
  }

  applyPot() {
    this.pot.geometry.dispose();
    this.pot.geometry = makePotGeometry(this.potConfig.radius, this.potConfig.height, this.potConfig.neck, this.potConfig.bulge);
    this.group.position.set(this.potConfig.x, this.potConfig.y, this.potConfig.z);
    this.group.rotation.x = radians(this.potConfig.rotX);
    this.group.rotation.y = radians(this.potConfig.rotY);
    this.group.rotation.z = radians(this.potConfig.rotZ);

    this.middleBand.geometry.dispose();
    this.middleBand.geometry = new THREE.CylinderGeometry(
      this.potConfig.bandRadiusTop,
      this.potConfig.bandRadiusBottom,
      this.potConfig.bandHeight,
      48
    );
    this.middleBand.position.set(0, this.potConfig.bandY, 0);

    this.bottomBand.geometry.dispose();
    this.bottomBand.geometry = new THREE.CylinderGeometry(
      this.potConfig.bottomBandRadiusTop,
      this.potConfig.bottomBandRadiusBottom,
      this.potConfig.bottomBandHeight,
      48
    );
    this.bottomBand.position.set(0, this.potConfig.bottomBandY, 0);

    this.soil.geometry.dispose();
    this.soil.geometry = new THREE.CylinderGeometry(this.potConfig.soilRadius, this.potConfig.soilRadius, this.potConfig.soilHeight, 32);
    this.soil.position.set(0, this.potConfig.soilY, 0);
  }

  applyLeaf(mesh, width, height, depth, x, y, z, rotX, rotY, rotZ) {
    mesh.geometry.dispose();
    mesh.geometry = makeLeafGeometry(width, height, depth, {
      bevelSize: this.plantConfig.bevelSize,
      bevelThickness: this.plantConfig.bevelThickness,
      bodyBulge: this.plantConfig.bodyBulge,
      ridgeBulge: this.plantConfig.ridgeBulge,
      ridgeWidth: this.plantConfig.ridgeWidth
    });
    mesh.position.set(x, y, z);
    mesh.rotation.x = radians(rotX);
    mesh.rotation.y = radians(rotY);
    mesh.rotation.z = radians(rotZ);
  }

  applyPlant() {
    this.plant.position.set(this.plantConfig.x, this.plantConfig.y, this.plantConfig.z);
    this.plant.rotation.x = radians(this.plantConfig.rotX);
    this.plant.rotation.y = radians(this.plantConfig.rotY);
    this.plant.rotation.z = radians(this.plantConfig.rotZ);

    this.applyLeaf(
      this.centerLeaf,
      this.plantConfig.centerWidth,
      this.plantConfig.centerHeight,
      this.plantConfig.depth,
      this.plantConfig.centerX,
      this.plantConfig.centerY,
      this.plantConfig.centerZ,
      this.plantConfig.centerRotX,
      this.plantConfig.centerRotY,
      this.plantConfig.centerRotZ
    );

    this.applyLeaf(
      this.leftLeaf,
      this.plantConfig.leftWidth,
      this.plantConfig.leftHeight,
      this.plantConfig.depth,
      this.plantConfig.leftX,
      this.plantConfig.leftY,
      this.plantConfig.leftZ,
      this.plantConfig.leftRotX,
      this.plantConfig.leftRotY,
      this.plantConfig.leftRotZ
    );

    this.applyLeaf(
      this.rightLeaf,
      this.plantConfig.rightWidth,
      this.plantConfig.rightHeight,
      this.plantConfig.depth,
      this.plantConfig.rightX,
      this.plantConfig.rightY,
      this.plantConfig.rightZ,
      this.plantConfig.rightRotX,
      this.plantConfig.rightRotY,
      this.plantConfig.rightRotZ
    );
  }
}
