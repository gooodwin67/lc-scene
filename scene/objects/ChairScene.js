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

function makeQuarterShellGeometry(width, innerRadius, thickness) {
  const outerRadius = innerRadius + thickness;
  const shape = new THREE.Shape();
  shape.absarc(0, 0, outerRadius, 0, Math.PI / 2, false);
  shape.lineTo(0, innerRadius);
  shape.absarc(0, 0, innerRadius, Math.PI / 2, 0, true);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: width,
    bevelEnabled: false,
    curveSegments: 24
  });
  geometry.center();
  geometry.rotateY(Math.PI / 2);
  return geometry;
}

function makeTubePath(config) {
  const points = [
    new THREE.Vector3(-config.frameWidth / 2, -config.frameDepth / 2, 0),
    new THREE.Vector3(config.frameWidth / 2, -config.frameDepth / 2, 0),
    new THREE.Vector3(config.frameWidth / 2, config.frameDepth / 2, 0),
    new THREE.Vector3(config.backLegSpread / 2, config.frameDepth / 2, config.frameLift),
    new THREE.Vector3(config.backLegSpread / 2, config.frameDepth / 2 + config.backLegOffset, config.frameLift + config.backLegHeight),
    new THREE.Vector3(-config.backLegSpread / 2, config.frameDepth / 2 + config.backLegOffset, config.frameLift + config.backLegHeight),
    new THREE.Vector3(-config.backLegSpread / 2, config.frameDepth / 2, config.frameLift),
    new THREE.Vector3(-config.frameWidth / 2, config.frameDepth / 2, 0),
    new THREE.Vector3(-config.frameWidth / 2, -config.frameDepth / 2, 0)
  ];

  return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.2);
}

export class ChairScene {
  constructor(scene, config) {
    this.config = config;

    this.shellMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f1e9, roughness: 0.96 });
    this.frameMaterial = new THREE.MeshStandardMaterial({ color: 0x8e9098, roughness: 0.72, metalness: 0.25 });

    this.group = new THREE.Group();

    this.shell = new THREE.Group();

    this.shellBack = new THREE.Mesh(makeRoundedBox(1, 1, 0.1, 0.08), this.shellMaterial);
    this.shellBack.castShadow = true;
    this.shellBack.receiveShadow = true;
    this.shell.add(this.shellBack);

    this.shellSeat = new THREE.Mesh(makeRoundedBox(1, 1, 0.1, 0.08), this.shellMaterial);
    this.shellSeat.castShadow = true;
    this.shellSeat.receiveShadow = true;
    this.shell.add(this.shellSeat);

    this.shellBend = new THREE.Mesh(makeQuarterShellGeometry(1, 0.2, 0.1), this.shellMaterial);
    this.shellBend.castShadow = true;
    this.shellBend.receiveShadow = true;
    this.shell.add(this.shellBend);

    this.group.add(this.shell);

    this.frame = new THREE.Mesh(new THREE.TubeGeometry(makeTubePath(config), 64, 0.06, 18, false), this.frameMaterial);
    this.frame.castShadow = true;
    this.frame.receiveShadow = true;
    this.group.add(this.frame);

    scene.add(this.group);
    this.apply();
  }

  apply() {
    this.shellBack.geometry.dispose();
    this.shellBack.geometry = makeRoundedBox(
      this.config.shellBackWidth,
      this.config.shellBackHeight,
      this.config.shellBackDepth,
      this.config.shellBackRadius
    );
    this.shellBack.position.set(
      this.config.shellBackX,
      this.config.shellBackY,
      this.config.shellBackZ
    );
    this.shellBack.rotation.x = radians(this.config.shellBackRotX);
    this.shellBack.rotation.y = radians(this.config.shellBackRotY);
    this.shellBack.rotation.z = radians(this.config.shellBackRotZ);

    this.shellSeat.geometry.dispose();
    this.shellSeat.geometry = makeRoundedBox(
      this.config.shellSeatWidth,
      this.config.shellSeatHeight,
      this.config.shellSeatDepth,
      this.config.shellSeatRadius
    );
    this.shellSeat.position.set(
      this.config.shellSeatX,
      this.config.shellSeatY,
      this.config.shellSeatZ
    );
    this.shellSeat.rotation.x = radians(this.config.shellSeatRotX);
    this.shellSeat.rotation.y = radians(this.config.shellSeatRotY);
    this.shellSeat.rotation.z = radians(this.config.shellSeatRotZ);

    this.shellBend.geometry.dispose();
    this.shellBend.geometry = makeQuarterShellGeometry(
      this.config.shellBendWidth,
      this.config.shellBendInnerRadius,
      this.config.shellBendThickness
    );
    this.shellBend.position.set(this.config.shellBendX, this.config.shellBendY, this.config.shellBendZ);
    this.shellBend.rotation.x = radians(this.config.shellBendRotX);
    this.shellBend.rotation.y = radians(this.config.shellBendRotY);
    this.shellBend.rotation.z = radians(this.config.shellBendRotZ);

    this.shell.position.set(this.config.shellX, this.config.shellY, this.config.shellZ);
    this.shell.rotation.x = radians(this.config.shellRotX);
    this.shell.rotation.y = radians(this.config.shellRotY);
    this.shell.rotation.z = radians(this.config.shellRotZ);

    this.frame.geometry.dispose();
    this.frame.geometry = new THREE.TubeGeometry(makeTubePath(this.config), 64, this.config.tubeRadius, 18, false);
    this.frame.position.set(this.config.frameX, this.config.frameY, this.config.frameZ);
    this.frame.rotation.x = radians(this.config.frameRotX);
    this.frame.rotation.y = radians(this.config.frameRotY);
    this.frame.rotation.z = radians(this.config.frameRotZ);

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
  }
}
