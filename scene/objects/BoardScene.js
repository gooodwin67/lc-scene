import * as THREE from "three";
import { makeFrameGeometry, makeCorkGeometry, radians } from "../utils/geometry.js";

function makePaper(width, height, material, linesColor) {
  const group = new THREE.Group();
  const sheet = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.018), material);
  sheet.name = "paper-sheet";
  sheet.castShadow = true;
  sheet.receiveShadow = true;
  sheet.position.y = -height / 2;
  group.add(sheet);

  for (let index = 0; index < 4; index += 1) {
    const line = new THREE.Mesh(
      new THREE.BoxGeometry(width * (0.38 + (index % 2) * 0.16), 0.022, 0.004),
      new THREE.MeshStandardMaterial({ color: linesColor, roughness: 0.95, transparent: true, opacity: 0.35 })
    );
    line.position.set(-width * 0.08, -height * 0.32 - index * 0.18, 0.012);
    group.add(line);
  }

  return group;
}

function createPushpin(cork, pinMaterial, pinSideMaterial, needleMaterial) {
  const pushpin = new THREE.Group();

  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.08, 32), pinMaterial);
  top.name = "pin-top";
  top.castShadow = true;
  top.receiveShadow = true;
  top.rotation.x = Math.PI / 2;
  pushpin.add(top);

  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.4, 32), pinSideMaterial);
  stem.name = "pin-stem";
  stem.receiveShadow = true;
  stem.rotation.x = Math.PI / 2;
  pushpin.add(stem);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.08, 32), pinMaterial);
  base.name = "pin-base";
  base.castShadow = true;
  base.receiveShadow = true;
  base.rotation.x = Math.PI / 2;
  pushpin.add(base);

  const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.3, 16), needleMaterial);
  pin.name = "pin-needle";
  pin.receiveShadow = true;
  pin.rotation.x = Math.PI / 2;
  pushpin.add(pin);

  cork.add(pushpin);
  return { pushpin, top, stem, base, pin };
}

export class BoardScene {
  constructor(scene, transformConfig, paperConfigs, pinConfigs) {
    this.config = transformConfig;
    this.paperConfigs = paperConfigs;
    this.pinConfigs = pinConfigs;

    this.group = new THREE.Group();

    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0xead19c, roughness: 0.9 });
    const corkMaterial = new THREE.MeshStandardMaterial({ color: 0xb7957d, roughness: 1 });
    const paperMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f4ef, roughness: 0.97 });
    const bluePaperMaterial = new THREE.MeshStandardMaterial({ color: 0xbfd6ee, roughness: 0.97 });
    const pinMaterial = new THREE.MeshStandardMaterial({ color: 0xeb717f, roughness: 0.72 });
    const pinSideMaterial = new THREE.MeshStandardMaterial({ color: 0xd45a67, roughness: 0.76 });
    const needleMaterial = new THREE.MeshStandardMaterial({ color: 0x717171, roughness: 0.35, metalness: 0.7 });

    this.frame = new THREE.Mesh(makeFrameGeometry(), frameMaterial);
    this.frame.name = "board-frame";
    this.frame.castShadow = true;
    this.frame.receiveShadow = true;
    this.group.add(this.frame);

    this.cork = new THREE.Mesh(makeCorkGeometry(), corkMaterial);
    this.cork.name = "board-cork";
    this.cork.position.z = -0.02;
    this.cork.receiveShadow = true;
    this.group.add(this.cork);

    this.paperLayer = new THREE.Group();
    this.paperLayer.position.z = 0.055;
    this.cork.add(this.paperLayer);

    this.papers = {
      backPaper: makePaper(0.92, 1.24, paperMaterial, 0xcfc7bf),
      frontPaper: makePaper(1, 1.34, bluePaperMaterial, 0x9db9d7),
      rightPaper: makePaper(0.94, 1.28, paperMaterial, 0xd4cec7)
    };

    Object.values(this.papers).forEach((paper) => this.paperLayer.add(paper));

    this.pins = {
      leftPin: createPushpin(this.cork, pinMaterial, pinSideMaterial, needleMaterial),
      rightPin: createPushpin(this.cork, pinMaterial, pinSideMaterial, needleMaterial)
    };

    scene.add(this.group);
    this.apply();
  }

  applyPaperTransform(key) {
    const mesh = this.papers[key];
    const config = this.paperConfigs[key];
    mesh.position.set(config.x, config.y, config.z);
    mesh.rotation.x = radians(config.rotX);
    mesh.rotation.z = radians(config.rotZ);
  }

  applyPinTransform(key) {
    const parts = this.pins[key];
    const config = this.pinConfigs[key];
    parts.pushpin.position.set(config.x, config.y, config.z);

    parts.top.geometry.dispose();
    parts.top.geometry = new THREE.CylinderGeometry(config.topRadius, config.topRadius, config.topHeight, 32);
    parts.top.position.z = 0;

    parts.stem.geometry.dispose();
    parts.stem.geometry = new THREE.CylinderGeometry(config.stemRadius, config.stemRadius, config.stemHeight, 32);
    parts.stem.position.z = -(config.topHeight * 0.5 + config.stemHeight * 0.5);

    parts.base.geometry.dispose();
    parts.base.geometry = new THREE.CylinderGeometry(config.baseRadius, config.baseRadius, config.baseHeight, 32);
    parts.base.position.z = -(config.topHeight + config.stemHeight) + config.baseHeight * 0.5;

    parts.pin.geometry.dispose();
    parts.pin.geometry = new THREE.CylinderGeometry(config.pinRadius, config.pinRadius, config.pinHeight, 16);
    parts.pin.position.z = -(config.topHeight + config.stemHeight + config.baseHeight + config.pinHeight * 0.5 - config.pinInset);
  }

  apply() {
    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);

    Object.keys(this.papers).forEach((key) => this.applyPaperTransform(key));
    Object.keys(this.pins).forEach((key) => this.applyPinTransform(key));
  }

  getPaperSections() {
    return [
      { title: "Left Back", mesh: this.papers.backPaper, config: this.paperConfigs.backPaper, applyPaperTransform: () => this.applyPaperTransform("backPaper") },
      { title: "Left Front", mesh: this.papers.frontPaper, config: this.paperConfigs.frontPaper, applyPaperTransform: () => this.applyPaperTransform("frontPaper") },
      { title: "Right", mesh: this.papers.rightPaper, config: this.paperConfigs.rightPaper, applyPaperTransform: () => this.applyPaperTransform("rightPaper") }
    ];
  }

  getPinSections() {
    return [
      { title: "Left Pin", config: this.pinConfigs.leftPin, applyPinTransform: () => this.applyPinTransform("leftPin") },
      { title: "Right Pin", config: this.pinConfigs.rightPin, applyPinTransform: () => this.applyPinTransform("rightPin") }
    ];
  }
}
