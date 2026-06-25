import * as THREE from "three";
import { radians, roundedRectShape } from "../utils/geometry.js";

function makeRoundedBox(width, height, depth, radius) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: false,
    curveSegments: 18
  });
  geometry.center();
  return geometry;
}

export class PhoneScene {
  constructor(scene, config) {
    this.config = config;
    this.group = new THREE.Group();

    this.bodyMaterial = new THREE.MeshStandardMaterial({ color: config.bodyColor, roughness: 0.86 });
    this.screenMaterial = new THREE.MeshStandardMaterial({ color: config.screenColor, roughness: 0.72, emissive: config.screenColor, emissiveIntensity: 0.06 });
    this.detailMaterial = new THREE.MeshStandardMaterial({ color: config.detailColor, roughness: 0.9 });
    this.timeMaterial = new THREE.MeshBasicMaterial({ color: config.timeColor });
    this.fingerprintMaterial = new THREE.MeshBasicMaterial({ color: config.fingerprintColor, transparent: true, opacity: 0.8 });

    this.body = new THREE.Mesh(makeRoundedBox(0.5, 0.92, 0.06, 0.08), this.bodyMaterial);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.group.add(this.body);

    this.screen = new THREE.Mesh(makeRoundedBox(0.42, 0.74, 0.012, 0.055), this.screenMaterial);
    this.screen.castShadow = false;
    this.screen.receiveShadow = true;
    this.group.add(this.screen);

    this.cameraDot = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.012, 18), this.detailMaterial);
    this.cameraDot.rotation.x = Math.PI / 2;
    this.group.add(this.cameraDot);

    this.timeGroup = new THREE.Group();
    this.group.add(this.timeGroup);

    this.fingerprint = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.012, 32), this.fingerprintMaterial);
    this.fingerprint.rotation.x = Math.PI / 2;
    this.group.add(this.fingerprint);

    scene.add(this.group);
    this.apply();
  }

  clearTime() {
    while (this.timeGroup.children.length > 0) {
      const child = this.timeGroup.children.pop();
      this.timeGroup.remove(child);
      child.geometry.dispose();
    }
  }

  addSegment(x, y, width, height, horizontal) {
    const segment = new THREE.Mesh(
      new THREE.BoxGeometry(horizontal ? width : height, horizontal ? height : width, this.config.timeThickness),
      this.timeMaterial
    );
    segment.position.set(x, y, 0);
    this.timeGroup.add(segment);
  }

  addDigit(character, x) {
    const active = {
      "0": ["a", "b", "c", "d", "e", "f"],
      "1": ["b", "c"],
      "2": ["a", "b", "g", "e", "d"],
      "3": ["a", "b", "g", "c", "d"],
      "4": ["f", "g", "b", "c"],
      "5": ["a", "f", "g", "c", "d"],
      "6": ["a", "f", "g", "e", "c", "d"],
      "7": ["a", "b", "c"],
      "8": ["a", "b", "c", "d", "e", "f", "g"],
      "9": ["a", "b", "c", "d", "f", "g"]
    }[character];

    const w = this.config.timeWidth;
    const h = this.config.timeHeight;
    const t = Math.max(0.004, w * 0.18);

    if (!active) {
      this.addSegment(x + w * 0.5, 0, t, t, true);
      this.addSegment(x + w * 0.5, h * 0.36, t, t, true);
      return;
    }

    if (active.includes("a")) this.addSegment(x + w * 0.5, h, w, t, true);
    if (active.includes("g")) this.addSegment(x + w * 0.5, h * 0.5, w, t, true);
    if (active.includes("d")) this.addSegment(x + w * 0.5, 0, w, t, true);
    if (active.includes("f")) this.addSegment(x, h * 0.75, h * 0.5, t, false);
    if (active.includes("b")) this.addSegment(x + w, h * 0.75, h * 0.5, t, false);
    if (active.includes("e")) this.addSegment(x, h * 0.25, h * 0.5, t, false);
    if (active.includes("c")) this.addSegment(x + w, h * 0.25, h * 0.5, t, false);
  }

  buildTime() {
    this.clearTime();
    this.timeMaterial.color.set(this.config.timeColor);
    let cursor = 0;
    String(this.config.timeText).split("").forEach((character) => {
      this.addDigit(character, cursor);
      cursor += character === ":" ? this.config.timeWidth * 0.55 : this.config.timeWidth + this.config.timeGap;
    });
    this.timeGroup.position.set(this.config.timeX, this.config.timeY, this.config.depth * 0.68 + this.config.timeZ);
    this.timeGroup.rotation.x = radians(this.config.timeRotX);
    this.timeGroup.rotation.y = radians(this.config.timeRotY);
    this.timeGroup.rotation.z = radians(this.config.timeRotZ);
  }

  apply() {
    this.bodyMaterial.color.set(this.config.bodyColor);
    this.screenMaterial.color.set(this.config.screenColor);
    this.screenMaterial.emissive.set(this.config.screenColor);
    this.screenMaterial.emissiveIntensity = this.config.screenGlow;
    this.detailMaterial.color.set(this.config.detailColor);
    this.timeMaterial.color.set(this.config.timeColor);
    this.fingerprintMaterial.color.set(this.config.fingerprintColor);

    this.body.geometry.dispose();
    this.body.geometry = makeRoundedBox(this.config.width, this.config.height, this.config.depth, this.config.radius);

    this.screen.geometry.dispose();
    this.screen.geometry = makeRoundedBox(
      this.config.screenWidth,
      this.config.screenHeight,
      this.config.screenDepth,
      this.config.screenRadius
    );
    this.screen.position.set(this.config.screenX, this.config.screenY, this.config.depth * 0.52 + this.config.screenZ);

    this.cameraDot.geometry.dispose();
    this.cameraDot.geometry = new THREE.CylinderGeometry(this.config.cameraRadius, this.config.cameraRadius, this.config.cameraDepth, 18);
    this.cameraDot.position.set(this.config.cameraX, this.config.cameraY, this.config.depth * 0.62 + this.config.cameraZ);

    this.buildTime();

    this.fingerprint.geometry.dispose();
    this.fingerprint.geometry = new THREE.CylinderGeometry(this.config.fingerprintRadius, this.config.fingerprintRadius, this.config.fingerprintDepth, 32);
    this.fingerprint.position.set(this.config.fingerprintX, this.config.fingerprintY, this.config.depth * 0.68 + this.config.fingerprintZ);

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
    this.group.scale.set(this.config.scaleX, this.config.scaleY, this.config.scaleZ);
  }
}
