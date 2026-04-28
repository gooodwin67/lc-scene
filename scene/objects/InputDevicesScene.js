import * as THREE from "three";
import { roundedRectShape, radians } from "../utils/geometry.js";

function makeRoundedBox(width, height, depth, radius) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: false,
    curveSegments: 16
  });
  geometry.center();
  return geometry;
}

export class InputDevicesScene {
  constructor(scene, keyboardConfig, mouseConfig) {
    this.keyboardConfig = keyboardConfig;
    this.mouseConfig = mouseConfig;

    this.keyboardMaterial = new THREE.MeshStandardMaterial({ color: 0xe9ecef, roughness: 0.94 });
    this.keyMaterial = new THREE.MeshStandardMaterial({ color: 0xf6f7f8, roughness: 0.9 });
    this.mouseMaterial = new THREE.MeshStandardMaterial({ color: 0xdfe4ea, roughness: 0.93 });

    this.keyboard = new THREE.Group();
    this.keyboardBody = new THREE.Mesh(makeRoundedBox(1, 0.35, 0.05, 0.08), this.keyboardMaterial);
    this.keyboardBody.castShadow = true;
    this.keyboardBody.receiveShadow = true;
    this.keyboard.add(this.keyboardBody);

    this.keys = [];
    this.createKeys();

    this.mouse = new THREE.Group();
    this.mouseBody = new THREE.Mesh(makeRoundedBox(0.22, 0.34, 0.06, 0.1), this.mouseMaterial);
    this.mouseBody.castShadow = true;
    this.mouseBody.receiveShadow = true;
    this.mouse.add(this.mouseBody);

    this.mouseSplit = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.12, 0.008), new THREE.MeshStandardMaterial({ color: 0xc6ccd3, roughness: 0.9 }));
    this.mouse.add(this.mouseSplit);

    scene.add(this.keyboard, this.mouse);
    this.applyKeyboard();
    this.applyMouse();
  }

  createKeys() {
    this.keys.forEach((key) => {
      this.keyboard.remove(key);
      key.geometry.dispose();
    });
    this.keys = [];

    const rows = Math.max(1, Math.round(this.keyboardConfig.keyRows));
    const cols = Math.max(1, Math.round(this.keyboardConfig.keyCols));
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const key = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.05, 0.012), this.keyMaterial);
        key.castShadow = false;
        key.receiveShadow = true;
        this.keyboard.add(key);
        this.keys.push(key);
      }
    }
  }

  applyKeyboard() {
    this.keyboardBody.geometry.dispose();
    this.keyboardBody.geometry = makeRoundedBox(
      this.keyboardConfig.width,
      this.keyboardConfig.height,
      this.keyboardConfig.depth,
      this.keyboardConfig.radius
    );

    this.keyboard.position.set(this.keyboardConfig.x, this.keyboardConfig.y, this.keyboardConfig.z);
    this.keyboard.rotation.x = radians(this.keyboardConfig.rotX);
    this.keyboard.rotation.y = radians(this.keyboardConfig.rotY);
    this.keyboard.rotation.z = radians(this.keyboardConfig.rotZ);

    const cols = Math.max(1, Math.round(this.keyboardConfig.keyCols));
    const rows = Math.max(1, Math.round(this.keyboardConfig.keyRows));
    if (this.keys.length !== cols * rows) {
      this.createKeys();
    }

    const usableWidth = this.keyboardConfig.width * 0.95;
    const usableHeight = this.keyboardConfig.height * 0.74;
    const keyWidth = usableWidth / cols * this.keyboardConfig.keyWidthScale;
    const keyHeight = usableHeight / rows * this.keyboardConfig.keyHeightScale;

    this.keys.forEach((key, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      key.geometry.dispose();
      key.geometry = new THREE.BoxGeometry(keyWidth, keyHeight, this.keyboardConfig.keyDepth);
      key.position.set(
        -usableWidth / 2 + col * (usableWidth / cols) + keyWidth * 0.5,
        usableHeight / 2 - row * (usableHeight / rows) - keyHeight * 0.5,
        this.keyboardConfig.depth * 0.35
      );
    });
  }

  applyMouse() {
    this.mouseBody.geometry.dispose();
    this.mouseBody.geometry = makeRoundedBox(
      this.mouseConfig.width,
      this.mouseConfig.height,
      this.mouseConfig.depth,
      this.mouseConfig.radius
    );

    this.mouse.position.set(this.mouseConfig.x, this.mouseConfig.y, this.mouseConfig.z);
    this.mouse.rotation.x = radians(this.mouseConfig.rotX);
    this.mouse.rotation.y = radians(this.mouseConfig.rotY);
    this.mouse.rotation.z = radians(this.mouseConfig.rotZ);

    this.mouseSplit.position.set(0, this.mouseConfig.height * 0.14, this.mouseConfig.depth * 0.4);
    this.mouseSplit.scale.y = this.mouseConfig.splitHeight;
  }
}
