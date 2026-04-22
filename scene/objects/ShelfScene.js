import * as THREE from "three";
import { makeShelfGeometry, makePotGeometry, radians } from "../utils/geometry.js";

function createBookModel(parent, coverMaterial, pagesMaterial, spineMaterial) {
  const group = new THREE.Group();
  const cover = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), coverMaterial);
  const pages = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), pagesMaterial);
  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), spineMaterial);
  cover.name = "book-cover";
  pages.name = "book-pages";
  spine.name = "book-spine";

  [cover, pages, spine].forEach((part) => {
    part.castShadow = true;
    part.receiveShadow = true;
    group.add(part);
  });

  parent.add(group);
  return { group, cover, pages, spine };
}

export class ShelfScene {
  constructor(scene, shelfConfig, potConfig, cactusConfig, bookConfig, bookTwoConfig) {
    this.shelfConfig = shelfConfig;
    this.potConfig = potConfig;
    this.cactusConfig = cactusConfig;
    this.bookConfig = bookConfig;
    this.bookTwoConfig = bookTwoConfig;

    const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0xf3e3bc, roughness: 0.92 });
    const potMaterial = new THREE.MeshStandardMaterial({ color: 0xf9f9f5, roughness: 0.95 });
    const soilMaterial = new THREE.MeshStandardMaterial({ color: 0x6c4b32, roughness: 1 });
    const cactusMaterial = new THREE.MeshStandardMaterial({ color: 0xa6df19, roughness: 0.88 });
    const bookMaterial = new THREE.MeshStandardMaterial({ color: 0xf2bf43, roughness: 0.9 });
    const bookSpineMaterial = new THREE.MeshStandardMaterial({ color: 0xdd9e25, roughness: 0.9 });
    const bookTwoMaterial = new THREE.MeshStandardMaterial({ color: 0xdbe2ec, roughness: 0.92 });
    const bookTwoSpineMaterial = new THREE.MeshStandardMaterial({ color: 0xc7d0dc, roughness: 0.94 });
    this.bookPagesMaterial = new THREE.MeshStandardMaterial({ color: 0xe8edf5, roughness: 0.96 });

    this.shelf = new THREE.Mesh(makeShelfGeometry(shelfConfig.width, shelfConfig.height, shelfConfig.depth, shelfConfig.radius), shelfMaterial);
    this.shelf.name = "shelf";
    this.shelf.castShadow = true;
    this.shelf.receiveShadow = true;
    scene.add(this.shelf);

    this.pot = new THREE.Mesh(makePotGeometry(potConfig.radius, potConfig.height, potConfig.neck, potConfig.bulge), potMaterial);
    this.pot.name = "pot";
    this.pot.castShadow = true;
    this.pot.receiveShadow = true;
    this.shelf.add(this.pot);

    this.soil = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.03, 32), soilMaterial);
    this.soil.name = "pot-soil";
    this.soil.receiveShadow = true;
    this.shelf.add(this.soil);

    this.cactus = new THREE.Group();
    this.cactusMain = new THREE.Mesh(new THREE.SphereGeometry(0.14, 28, 28), cactusMaterial);
    this.cactusArm = new THREE.Mesh(new THREE.SphereGeometry(0.1, 28, 28), cactusMaterial);
    this.cactusMain.name = "cactus-main";
    this.cactusArm.name = "cactus-arm";
    [this.cactusMain, this.cactusArm].forEach((part) => {
      part.castShadow = true;
      part.receiveShadow = true;
      this.cactus.add(part);
    });
    this.shelf.add(this.cactus);

    this.book = createBookModel(this.shelf, bookMaterial, this.bookPagesMaterial, bookSpineMaterial);
    this.bookTwo = createBookModel(this.shelf, bookTwoMaterial, this.bookPagesMaterial, bookTwoSpineMaterial);

    this.applyAll();
  }

  applyShelfTransform() {
    this.shelf.geometry.dispose();
    this.shelf.geometry = makeShelfGeometry(this.shelfConfig.width, this.shelfConfig.height, this.shelfConfig.depth, this.shelfConfig.radius);
    this.shelf.position.set(this.shelfConfig.x, this.shelfConfig.y, this.shelfConfig.z);
    this.shelf.rotation.x = radians(this.shelfConfig.rotX);
    this.shelf.rotation.y = radians(this.shelfConfig.rotY);
    this.shelf.rotation.z = radians(this.shelfConfig.rotZ);
  }

  applyPotTransform() {
    this.pot.geometry.dispose();
    this.pot.geometry = makePotGeometry(this.potConfig.radius, this.potConfig.height, this.potConfig.neck, this.potConfig.bulge);
    this.pot.position.set(this.potConfig.x, this.potConfig.y, this.potConfig.z);
    this.pot.rotation.x = radians(this.potConfig.rotX);
    this.pot.rotation.y = radians(this.potConfig.rotY);
    this.pot.rotation.z = radians(this.potConfig.rotZ);

    this.soil.geometry.dispose();
    this.soil.geometry = new THREE.CylinderGeometry(this.potConfig.soilRadius, this.potConfig.soilRadius, this.potConfig.soilHeight, 32);
    this.soil.position.copy(this.pot.position);
    this.soil.rotation.copy(this.pot.rotation);
    this.soil.position.y += this.potConfig.soilOffsetY;
  }

  applyCactusTransform() {
    this.cactus.position.set(this.cactusConfig.x, this.cactusConfig.y, this.cactusConfig.z);
    this.cactus.rotation.x = radians(this.cactusConfig.rotX);
    this.cactus.rotation.y = radians(this.cactusConfig.rotY);
    this.cactus.rotation.z = radians(this.cactusConfig.rotZ);

    this.cactusMain.geometry.dispose();
    this.cactusMain.geometry = new THREE.SphereGeometry(this.cactusConfig.mainRadius, 28, 28);
    this.cactusMain.scale.set(0.9, this.cactusConfig.mainHeight / (this.cactusConfig.mainRadius * 2), 0.72);
    this.cactusMain.position.set(this.cactusConfig.mainLean, 0, 0);

    this.cactusArm.geometry.dispose();
    this.cactusArm.geometry = new THREE.SphereGeometry(this.cactusConfig.armRadius, 28, 28);
    this.cactusArm.scale.set(0.9, this.cactusConfig.armHeight / (this.cactusConfig.armRadius * 2), 0.72);
    this.cactusArm.position.set(this.cactusConfig.armOffsetX, this.cactusConfig.armOffsetY, 0);
    this.cactusArm.rotation.z = this.cactusConfig.armLean;
  }

  applyBookModelTransform(model, config) {
    model.cover.geometry.dispose();
    model.cover.geometry = new THREE.BoxGeometry(config.width, config.height, config.depth);

    model.pages.geometry.dispose();
    model.pages.geometry = new THREE.BoxGeometry(config.pagesWidth, config.pagesHeight, config.pagesDepth);
    model.pages.position.set(config.pagesX, config.pagesY, config.pagesZ);

    model.spine.geometry.dispose();
    model.spine.geometry = new THREE.BoxGeometry(config.spineWidth, config.spineHeight, config.spineDepth);
    model.spine.position.set(config.spineX, config.spineY, config.spineZ);
    model.spine.rotation.y = radians(config.spineRotY);

    model.group.position.set(config.x, config.y, config.z);
    model.group.rotation.x = radians(config.rotX);
    model.group.rotation.y = radians(config.rotY);
    model.group.rotation.z = radians(config.rotZ);
  }

  applyBookTransform() {
    this.applyBookModelTransform(this.book, this.bookConfig);
  }

  applyBookTwoTransform() {
    this.applyBookModelTransform(this.bookTwo, this.bookTwoConfig);
  }

  applyAll() {
    this.applyShelfTransform();
    this.applyPotTransform();
    this.applyCactusTransform();
    this.applyBookTransform();
    this.applyBookTwoTransform();
  }

  getBookSections() {
    return [
      { title: "Orange Book", config: this.bookConfig, applyBookTransform: () => this.applyBookTransform() },
      { title: "Blue Book", config: this.bookTwoConfig, applyBookTransform: () => this.applyBookTwoTransform() }
    ];
  }
}
