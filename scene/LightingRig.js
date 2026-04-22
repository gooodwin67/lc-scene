import * as THREE from "three";

export class LightingRig {
  constructor(scene, config) {
    this.scene = scene;
    this.config = config;

    this.ambient = new THREE.HemisphereLight(0xfffdf9, 0xeadcc6, config.ambient);
    this.keyLight = new THREE.DirectionalLight(0xfff6ed, config.key);
    this.fillLight = new THREE.PointLight(0xffead4, config.fill, 30);
    this.frontLight = new THREE.DirectionalLight(0xffffff, config.front);

    this.keyLight.position.set(1.6, 5.3, 8.4);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(4096, 4096);
    this.keyLight.shadow.camera.left = -10;
    this.keyLight.shadow.camera.right = 10;
    this.keyLight.shadow.camera.top = 8;
    this.keyLight.shadow.camera.bottom = -8;

    this.fillLight.position.set(-2.2, 3.1, 5.8);
    this.frontLight.position.set(-0.6, 2.4, 9);

    scene.add(this.ambient, this.keyLight, this.fillLight, this.frontLight);
    this.apply();
  }

  apply() {
    this.ambient.intensity = this.config.ambient;
    this.keyLight.intensity = this.config.key;
    this.fillLight.intensity = this.config.fill;
    this.frontLight.intensity = this.config.front;
    this.keyLight.shadow.radius = this.config.shadowRadius;
    this.keyLight.shadow.blurSamples = Math.round(this.config.blurSamples);
    this.keyLight.shadow.bias = this.config.bias;
    this.keyLight.shadow.normalBias = this.config.normalBias;
  }
}
