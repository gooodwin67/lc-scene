import * as THREE from "three";
import { radians, roundedRectShape } from "../utils/geometry.js";

function applyShadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createCapsule(radius, length, material) {
  return applyShadow(new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 8, 16), material));
}

function createSphere(radius, material) {
  return applyShadow(new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 24), material));
}

function createBox(width, height, depth, material) {
  return applyShadow(new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material));
}

function createRoundedBox(width, height, depth, radius, material) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: false,
    curveSegments: 16
  });
  geometry.center();
  return applyShadow(new THREE.Mesh(geometry, material));
}

function seededRandom(index, salt) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function createHairStripTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 64;

  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(0.16, "rgba(255, 255, 255, 0.85)");
  gradient.addColorStop(0.84, "rgba(255, 255, 255, 0.85)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  context.fillStyle = gradient;
  context.beginPath();
  context.moveTo(8, 0);
  context.quadraticCurveTo(14, 0, 14, 8);
  context.lineTo(14, 56);
  context.quadraticCurveTo(14, 64, 8, 64);
  context.quadraticCurveTo(2, 64, 2, 56);
  context.lineTo(2, 8);
  context.quadraticCurveTo(2, 0, 8, 0);
  context.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export class CharacterScene {
  constructor(scene, config) {
    this.config = config;

    this.skinMaterial = new THREE.MeshStandardMaterial({ color: 0xf7cdaa, roughness: 0.95 });
    this.hairStripTexture = createHairStripTexture();
    this.hairStripObject = new THREE.Object3D();
    this.shirtMaterial = new THREE.MeshStandardMaterial({ color: 0x3a4d50, roughness: 0.92 });
    this.sleeveMaterial = new THREE.MeshStandardMaterial({ color: 0x3a4d50, roughness: 0.92 });
    this.pelvisMaterial = new THREE.MeshStandardMaterial({ color: 0x262537, roughness: 0.94 });
    this.pantsMaterial = new THREE.MeshStandardMaterial({ color: 0x19182b, roughness: 0.94 });
    this.sockMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f7f6, roughness: 0.96 });
    this.shoeMaterial = new THREE.MeshStandardMaterial({ color: 0x3c414a, roughness: 0.9 });
    this.shoeToeMaterial = new THREE.MeshStandardMaterial({ color: 0xf6f6f6, roughness: 0.95 });
    this.eyeWhiteMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92 });
    this.eyePupilMaterial = new THREE.MeshStandardMaterial({ color: 0x5a3428, roughness: 0.85 });
    this.browMaterial = new THREE.MeshStandardMaterial({ color: 0x5a3428, roughness: 0.9 });

    this.group = new THREE.Group();
    this.group.name = "character-root";
    scene.add(this.group);

    this.buildBody();
    this.apply();
  }

  buildBody() {
    this.torsoPivot = new THREE.Group();
    this.group.add(this.torsoPivot);

    this.torso = createCapsule(0.42, 0.75, this.shirtMaterial);
    this.torso.position.y = 0.6;
    this.torsoPivot.add(this.torso);

    this.pelvis = createSphere(0.32, this.pelvisMaterial);
    this.pelvis.scale.set(1.1, 0.75, 0.95);
    this.pelvis.position.y = 0.08;
    this.group.add(this.pelvis);

    this.headPivot = new THREE.Group();
    this.headPivot.position.y = 1.36;
    this.torsoPivot.add(this.headPivot);

    this.head = createSphere(0.55, this.skinMaterial);
    this.head.scale.set(1.08, 1.0, 1.03);
    this.headPivot.add(this.head);

    this.hairGroup = new THREE.Group();
    this.headPivot.add(this.hairGroup);

    this.hair = this.createHairStrips(45000);
    this.hairGroup.add(this.hair);

    this.fringe = this.createHairStrips(360);
    this.hairGroup.add(this.fringe);

    this.earLeft = createSphere(0.12, this.skinMaterial);
    this.earLeft.position.set(-0.5, -0.02, 0.04);
    this.headPivot.add(this.earLeft);

    this.earRight = createSphere(0.12, this.skinMaterial);
    this.earRight.position.set(0.5, -0.02, 0.04);
    this.headPivot.add(this.earRight);

    this.leftEye = new THREE.Group();
    this.leftEye.position.set(-0.18, 0.02, 0.48);
    this.headPivot.add(this.leftEye);

    this.rightEye = new THREE.Group();
    this.rightEye.position.set(0.18, 0.02, 0.48);
    this.headPivot.add(this.rightEye);

    this.leftEyeWhite = createSphere(0.12, this.eyeWhiteMaterial);
    this.leftEyeWhite.scale.set(0.92, 1.08, 0.45);
    this.leftEye.add(this.leftEyeWhite);

    this.rightEyeWhite = createSphere(0.12, this.eyeWhiteMaterial);
    this.rightEyeWhite.scale.set(0.92, 1.08, 0.45);
    this.rightEye.add(this.rightEyeWhite);

    this.leftPupil = createSphere(0.065, this.eyePupilMaterial);
    this.leftPupil.position.z = 0.04;
    this.leftEye.add(this.leftPupil);

    this.rightPupil = createSphere(0.065, this.eyePupilMaterial);
    this.rightPupil.position.z = 0.04;
    this.rightEye.add(this.rightPupil);

    this.leftBrow = createBox(0.16, 0.04, 0.03, this.browMaterial);
    this.leftBrow.position.set(-0.18, 0.23, 0.45);
    this.headPivot.add(this.leftBrow);

    this.rightBrow = createBox(0.16, 0.04, 0.03, this.browMaterial);
    this.rightBrow.position.set(0.18, 0.23, 0.45);
    this.headPivot.add(this.rightBrow);

    this.leftArm = this.buildArm(-1);
    this.rightArm = this.buildArm(1);
    this.leftLeg = this.buildLeg(-1);
    this.rightLeg = this.buildLeg(1);
  }

  buildArm(side) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.48, 1.02, 0.02);
    this.torsoPivot.add(shoulder);

    const upperArm = createCapsule(0.115, 0.5, this.skinMaterial);
    upperArm.position.y = -0.32;
    shoulder.add(upperArm);

    const sleeve = createCapsule(0.14, 0.56, this.sleeveMaterial);
    sleeve.position.y = -0.33;
    sleeve.scale.set(1.08, 1, 1.02);
    shoulder.add(sleeve);

    const elbow = new THREE.Group();
    elbow.position.y = -0.56;
    shoulder.add(elbow);

    const lowerArm = createCapsule(0.105, 0.5, this.skinMaterial);
    lowerArm.position.y = -0.26;
    elbow.add(lowerArm);

    const wrist = new THREE.Group();
    wrist.position.y = -0.52;
    elbow.add(wrist);

    const hand = createCapsule(0.105, 0.08, this.skinMaterial);
    hand.position.y = -0.055;
    hand.scale.set(1.02, 0.95, 0.76);
    wrist.add(hand);

    return { shoulder, elbow, wrist, upperArm, sleeve, lowerArm, hand };
  }

  buildLeg(side) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.2, -0.08, 0);
    this.group.add(hip);

    const upperLeg = createCapsule(0.15, 0.64, this.pantsMaterial);
    upperLeg.position.y = -0.46;
    hip.add(upperLeg);

    const knee = new THREE.Group();
    knee.position.y = -0.82;
    hip.add(knee);

    const lowerLeg = createCapsule(0.13, 0.56, this.pantsMaterial);
    lowerLeg.position.y = -0.40;
    knee.add(lowerLeg);

    const sock = createCapsule(0.12, 0.08, this.sockMaterial);
    sock.position.y = -0.77;
    knee.add(sock);

    const ankle = new THREE.Group();
    ankle.position.y = -0.76;
    knee.add(ankle);

    const shoe = new THREE.Group();
    const sole = createRoundedBox(0.34, 0.045, 0.38, 0.035, this.shoeMaterial);
    shoe.add(sole);

    const upperShoe = createSphere(0.18, this.shoeMaterial);
    shoe.add(upperShoe);

    ankle.add(shoe);

    const toe = createSphere(0.13, this.shoeToeMaterial);
    ankle.add(toe);

    return { hip, knee, ankle, upperLeg, lowerLeg, sock, shoe, sole, upperShoe, toe };
  }

  applyEyePupils() {
    const eyeYaw = THREE.MathUtils.clamp(this.config.eyeYaw, -1, 1);
    const eyePitch = THREE.MathUtils.clamp(this.config.eyePitch, -1, 1);
    const offsetX = eyeYaw * 0.035;
    const offsetY = eyePitch * 0.028;

    this.leftPupil.position.x = offsetX;
    this.leftPupil.position.y = offsetY;
    this.rightPupil.position.x = offsetX;
    this.rightPupil.position.y = offsetY;
  }

  createHairStrips(maxCount) {
    const geometry = new THREE.PlaneGeometry(0.03, 0.12);
    const material = new THREE.MeshBasicMaterial({
      color: 0x6a3e2b,
      map: this.hairStripTexture,
      alphaTest: 0.08,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    const strips = new THREE.InstancedMesh(geometry, material, maxCount);
    strips.frustumCulled = false;
    return strips;
  }

  apply() {
    const sit = THREE.MathUtils.clamp(this.config.sitAmount, 0, 1);
    const bodyScale = 1.5;

    this.shirtMaterial.color.set(this.config.shirtColor ?? 0x3a4d50);
    this.sleeveMaterial.color.set(this.config.sleeveColor ?? 0x3a4d50);
    this.pelvisMaterial.color.set(this.config.pelvisColor ?? 0x262537);
    this.pantsMaterial.color.set(this.config.pantsColor ?? 0x19182b);
    this.sockMaterial.color.set(this.config.sockColor ?? 0xf7f7f6);
    this.shoeMaterial.color.set(this.config.shoeColor ?? 0x3c414a);
    this.shoeToeMaterial.color.set(this.config.shoeToeColor ?? 0xf6f6f6);

    this.group.position.set(
      this.config.x + this.config.sitOffsetX * sit,
      this.config.y + this.config.sitOffsetY * sit,
      this.config.z + this.config.sitOffsetZ * sit
    );
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);

    this.torso.scale.set(
      bodyScale * this.config.torsoScaleX,
      bodyScale * this.config.torsoScaleY,
      bodyScale * this.config.torsoScaleZ
    );
    this.torso.position.set(
      this.config.torsoOffsetX,
      0.6 * bodyScale + this.config.torsoOffsetY,
      this.config.torsoOffsetZ
    );

    this.pelvis.scale.set(
      1.18 * bodyScale * this.config.pelvisScaleX,
      0.62 * bodyScale * this.config.pelvisScaleY,
      0.92 * bodyScale * this.config.pelvisScaleZ
    );
    this.pelvis.position.set(
      this.config.pelvisOffsetX,
      0.08 * bodyScale + this.config.pelvisOffsetY,
      this.config.pelvisOffsetZ
    );

    this.headPivot.position.set(
      this.config.headOffsetX,
      1.36 * bodyScale + this.config.headOffsetY,
      this.config.headOffsetZ
    );
    this.head.scale.set(1.08 * this.config.headScaleX, 1.0 * this.config.headScaleY, 1.03 * this.config.headScaleZ);
    this.applyHair();
    this.earLeft.scale.set(this.config.earScaleX, this.config.earScaleY, this.config.earScaleZ);
    this.earRight.scale.set(this.config.earScaleX, this.config.earScaleY, this.config.earScaleZ);
    this.leftEyeWhite.scale.set(0.92 * this.config.eyeScaleX, 1.08 * this.config.eyeScaleY, 0.45 * this.config.eyeScaleZ);
    this.rightEyeWhite.scale.set(0.92 * this.config.eyeScaleX, 1.08 * this.config.eyeScaleY, 0.45 * this.config.eyeScaleZ);
    this.leftPupil.scale.setScalar(this.config.pupilScale);
    this.rightPupil.scale.setScalar(this.config.pupilScale);
    this.leftBrow.scale.set(this.config.browScaleX, this.config.browScaleY, this.config.browScaleZ);
    this.rightBrow.scale.set(this.config.browScaleX, this.config.browScaleY, this.config.browScaleZ);

    this.earLeft.position.set(
      -0.5 + this.config.leftEarOffsetX,
      -0.02 + this.config.leftEarOffsetY,
      0.04 + this.config.leftEarOffsetZ
    );
    this.earRight.position.set(
      0.5 + this.config.rightEarOffsetX,
      -0.02 + this.config.rightEarOffsetY,
      0.04 + this.config.rightEarOffsetZ
    );

    this.leftEye.position.set(
      -0.18 + this.config.leftEyeOffsetX,
      0.02 + this.config.leftEyeOffsetY,
      0.48 + this.config.leftEyeOffsetZ
    );
    this.rightEye.position.set(
      0.18 + this.config.rightEyeOffsetX,
      0.02 + this.config.rightEyeOffsetY,
      0.48 + this.config.rightEyeOffsetZ
    );

    this.leftBrow.position.set(
      -0.18 + this.config.leftBrowOffsetX,
      0.23 + this.config.leftBrowOffsetY,
      0.45 + this.config.leftBrowOffsetZ
    );
    this.rightBrow.position.set(
      0.18 + this.config.rightBrowOffsetX,
      0.23 + this.config.rightBrowOffsetY,
      0.45 + this.config.rightBrowOffsetZ
    );

    this.leftArm.shoulder.position.set(
      -0.48 * bodyScale + this.config.leftShoulderOffsetX,
      1.02 * bodyScale + this.config.leftShoulderOffsetY,
      0.02 * bodyScale + this.config.leftShoulderOffsetZ
    );
    this.leftArm.shoulder.scale.set(bodyScale, bodyScale, bodyScale);
    this.leftArm.upperArm.scale.set(this.config.upperArmScaleX, this.config.upperArmScaleY, this.config.upperArmScaleZ);
    this.applySleeve(this.leftArm.sleeve);
    this.leftArm.lowerArm.scale.set(this.config.lowerArmScaleX, this.config.lowerArmScaleY, this.config.lowerArmScaleZ);
    this.leftArm.hand.scale.set(0.95 * this.config.handScaleX, 1.12 * this.config.handScaleY, 0.75 * this.config.handScaleZ);
    this.rightArm.shoulder.position.set(
      0.48 * bodyScale + this.config.rightShoulderOffsetX,
      1.02 * bodyScale + this.config.rightShoulderOffsetY,
      0.02 * bodyScale + this.config.rightShoulderOffsetZ
    );
    this.rightArm.shoulder.scale.set(bodyScale, bodyScale, bodyScale);
    this.rightArm.upperArm.scale.set(this.config.upperArmScaleX, this.config.upperArmScaleY, this.config.upperArmScaleZ);
    this.applySleeve(this.rightArm.sleeve);
    this.rightArm.lowerArm.scale.set(this.config.lowerArmScaleX, this.config.lowerArmScaleY, this.config.lowerArmScaleZ);
    this.rightArm.hand.scale.set(0.95 * this.config.handScaleX, 1.12 * this.config.handScaleY, 0.75 * this.config.handScaleZ);

    this.leftArm.elbow.position.set(
      this.config.leftElbowOffsetX,
      -0.62 + this.config.leftElbowOffsetY,
      this.config.leftElbowOffsetZ
    );
    this.rightArm.elbow.position.set(
      this.config.rightElbowOffsetX,
      -0.62 + this.config.rightElbowOffsetY,
      this.config.rightElbowOffsetZ
    );

    this.leftLeg.hip.position.set(
      -0.2 * bodyScale + this.config.leftHipOffsetX,
      -0.08 * bodyScale + this.config.leftHipOffsetY,
      this.config.leftHipOffsetZ
    );
    this.leftLeg.hip.scale.set(bodyScale, bodyScale, bodyScale);
    this.leftLeg.upperLeg.scale.set(this.config.upperLegScaleX, this.config.upperLegScaleY, this.config.upperLegScaleZ);
    this.leftLeg.lowerLeg.scale.set(this.config.lowerLegScaleX, this.config.lowerLegScaleY, this.config.lowerLegScaleZ);
    this.applyFoot(this.leftLeg);
    this.rightLeg.hip.position.set(
      0.2 * bodyScale + this.config.rightHipOffsetX,
      -0.08 * bodyScale + this.config.rightHipOffsetY,
      this.config.rightHipOffsetZ
    );
    this.rightLeg.hip.scale.set(bodyScale, bodyScale, bodyScale);
    this.rightLeg.upperLeg.scale.set(this.config.upperLegScaleX, this.config.upperLegScaleY, this.config.upperLegScaleZ);
    this.rightLeg.lowerLeg.scale.set(this.config.lowerLegScaleX, this.config.lowerLegScaleY, this.config.lowerLegScaleZ);
    this.applyFoot(this.rightLeg);

    this.leftLeg.knee.position.set(
      this.config.leftKneeOffsetX,
      -0.82 + this.config.leftKneeOffsetY,
      this.config.leftKneeOffsetZ
    );
    this.rightLeg.knee.position.set(
      this.config.rightKneeOffsetX,
      -0.82 + this.config.rightKneeOffsetY,
      this.config.rightKneeOffsetZ
    );

    this.leftLeg.ankle.position.set(
      this.config.leftAnkleOffsetX,
      -0.76 + this.config.leftAnkleOffsetY,
      this.config.leftAnkleOffsetZ
    );
    this.rightLeg.ankle.position.set(
      this.config.rightAnkleOffsetX,
      -0.76 + this.config.rightAnkleOffsetY,
      this.config.rightAnkleOffsetZ
    );

    this.torsoPivot.rotation.x = radians(this.config.torsoPitch + sit * 8);
    this.torsoPivot.rotation.y = radians(this.config.torsoYaw);
    this.torsoPivot.rotation.z = radians(this.config.torsoRoll);

    this.headPivot.rotation.x = radians(this.config.headPitch);
    this.headPivot.rotation.y = radians(this.config.headYaw);
    this.headPivot.rotation.z = radians(this.config.headRoll);

    this.leftBrow.rotation.z = radians(-10 + this.config.browTilt);
    this.rightBrow.rotation.z = radians(10 - this.config.browTilt);

    const leftShoulderBaseX = sit * 38;
    const rightShoulderBaseX = sit * 38;
    const elbowBase = sit * 28;
    const hipBase = -sit * 96;
    const kneeBase = sit * 96;
    const ankleBase = -sit * 8;

    this.leftArm.shoulder.rotation.x = radians(leftShoulderBaseX + this.config.leftShoulderX);
    this.leftArm.shoulder.rotation.y = radians(this.config.leftShoulderY);
    this.leftArm.shoulder.rotation.z = radians(this.config.leftShoulderZ);
    this.leftArm.elbow.rotation.x = radians(elbowBase + this.config.leftElbowX);
    this.leftArm.elbow.rotation.y = radians(this.config.leftElbowY);
    this.leftArm.elbow.rotation.z = radians(this.config.leftElbowZ);
    this.leftArm.wrist.rotation.x = radians(this.config.leftWristX);
    this.leftArm.wrist.rotation.y = radians(this.config.leftWristY);
    this.leftArm.wrist.rotation.z = radians(this.config.leftWristZ);

    this.rightArm.shoulder.rotation.x = radians(rightShoulderBaseX + this.config.rightShoulderX);
    this.rightArm.shoulder.rotation.y = radians(this.config.rightShoulderY);
    this.rightArm.shoulder.rotation.z = radians(this.config.rightShoulderZ);
    this.rightArm.elbow.rotation.x = radians(elbowBase + this.config.rightElbowX);
    this.rightArm.elbow.rotation.y = radians(this.config.rightElbowY);
    this.rightArm.elbow.rotation.z = radians(this.config.rightElbowZ);
    this.rightArm.wrist.rotation.x = radians(this.config.rightWristX);
    this.rightArm.wrist.rotation.y = radians(this.config.rightWristY);
    this.rightArm.wrist.rotation.z = radians(this.config.rightWristZ);

    this.leftLeg.hip.rotation.x = radians(hipBase + this.config.leftHipX);
    this.leftLeg.hip.rotation.y = radians(this.config.leftHipY);
    this.leftLeg.hip.rotation.z = radians(this.config.leftHipZ);
    this.leftLeg.knee.rotation.x = radians(kneeBase + this.config.leftKneeX);
    this.leftLeg.ankle.rotation.x = radians(ankleBase + this.config.leftAnkleX);
    this.leftLeg.ankle.rotation.y = radians(this.config.leftAnkleY);
    this.leftLeg.ankle.rotation.z = radians(this.config.leftAnkleZ);

    this.rightLeg.hip.rotation.x = radians(hipBase + this.config.rightHipX);
    this.rightLeg.hip.rotation.y = radians(this.config.rightHipY);
    this.rightLeg.hip.rotation.z = radians(this.config.rightHipZ);
    this.rightLeg.knee.rotation.x = radians(kneeBase + this.config.rightKneeX);
    this.rightLeg.ankle.rotation.x = radians(ankleBase + this.config.rightAnkleX);
    this.rightLeg.ankle.rotation.y = radians(this.config.rightAnkleY);
    this.rightLeg.ankle.rotation.z = radians(this.config.rightAnkleZ);

    this.applyEyePupils();
  }

  applySleeve(sleeve) {
    const length = THREE.MathUtils.clamp(this.config.sleeveLength ?? 1, 0.4, 1.6);
    const volume = THREE.MathUtils.clamp(this.config.sleeveVolume ?? 1, 0.6, 1.8);

    sleeve.position.y = 0.09 - 0.42 * length;
    sleeve.scale.set(1.08 * volume, length, 1.02 * volume);
  }

  applyHair() {
    this.hairGroup.position.set(0, 0, 0);
    this.hairGroup.rotation.set(0, 0, 0);
    this.hairGroup.scale.set(1, 1, 1);
    this.updateHairCloud(this.hair, "hair", (index) => {
      const angle = seededRandom(index, 1) * Math.PI * 2;
      const radius = Math.sqrt(seededRandom(index, 2));
      const x = Math.cos(angle) * 0.49 * radius;
      const z = -0.07 + Math.sin(angle) * 0.43 * radius;
      const lift = Math.sqrt(Math.max(0, 1 - (x / 0.54) ** 2 - ((z + 0.06) / 0.48) ** 2));
      const jitter = (seededRandom(index, 3) - 0.5) * this.config.hairScatter;
      return [x + jitter * 0.4, 0.08 + lift * 0.44 + jitter, z + jitter * 0.5];
    });

    this.updateHairCloud(this.fringe, "fringe", (index) => {
      const u = seededRandom(index, 11);
      const v = seededRandom(index, 12);
      const x = -0.40 + u * 0.74;
      const curve = Math.sin(u * Math.PI);
      const y = 0.34 - v * 0.23 - curve * 0.07;
      const z = 0.33 + v * 0.11 + curve * 0.04;
      return [x, y, z];
    });

  }

  updateHairCloud(strips, prefix, getPoint) {
    const maxCount = strips.instanceMatrix.count;
    const count = Math.min(maxCount, Math.max(0, Math.round(this.config[`${prefix}Count`])));
    const object = this.hairStripObject;
    const particleSize = prefix === "hair"
      ? this.config.hairParticleSize
      : this.config[`${prefix}ParticleSize`] * this.config.hairParticleSize;

    for (let index = 0; index < count; index += 1) {
      const [x, y, z] = getPoint(index);
      const lean = (seededRandom(index, 44) - 0.5) * 0.9;
      const twist = (seededRandom(index, 45) - 0.5) * Math.PI;
      const length = particleSize * (0.85 + seededRandom(index, 46) * 0.55);
      const width = particleSize * (0.16 + seededRandom(index, 47) * 0.08);

      object.position.set(x, y, z);
      object.rotation.set(lean, twist, seededRandom(index, 48) * Math.PI);
      object.scale.set(width, length, 1);
      object.updateMatrix();
      strips.setMatrixAt(index, object.matrix);
    }

    strips.count = count;
    strips.instanceMatrix.needsUpdate = true;
    strips.material.color.set(this.config.hairColor ?? 0x6a3e2b);
    strips.material.opacity = prefix === "hair"
      ? this.config.hairParticleOpacity
      : this.config[`${prefix}ParticleOpacity`];
    strips.position.set(
      this.config[`${prefix}OffsetX`],
      this.config[`${prefix}OffsetY`],
      this.config[`${prefix}OffsetZ`]
    );
    strips.rotation.set(
      radians(this.config[`${prefix}RotX`]),
      radians(this.config[`${prefix}RotY`]),
      radians(this.config[`${prefix}RotZ`])
    );
    strips.scale.set(
      this.config[`${prefix}ScaleX`],
      this.config[`${prefix}ScaleY`],
      this.config[`${prefix}ScaleZ`]
    );
  }

  applyFoot(leg) {
    leg.sock.position.set(this.config.sockOffsetX, -0.77 + this.config.sockOffsetY, this.config.sockOffsetZ);
    leg.sock.rotation.set(radians(this.config.sockRotX), radians(this.config.sockRotY), radians(this.config.sockRotZ));
    leg.sock.scale.set(this.config.sockScaleX, this.config.sockScaleY, this.config.sockScaleZ);

    leg.shoe.position.set(this.config.shoeOffsetX, this.config.shoeOffsetY, this.config.shoeOffsetZ);
    leg.shoe.rotation.set(radians(this.config.shoeRotX), radians(this.config.shoeRotY), radians(this.config.shoeRotZ));
    leg.shoe.scale.set(this.config.shoeScaleX, this.config.shoeScaleY, this.config.shoeScaleZ);

    leg.sole.position.set(this.config.soleOffsetX, this.config.soleOffsetY, this.config.soleOffsetZ);
    leg.sole.rotation.set(radians(this.config.soleRotX), radians(this.config.soleRotY), radians(this.config.soleRotZ));
    leg.sole.scale.set(this.config.soleScaleX, this.config.soleScaleY, this.config.soleScaleZ);

    leg.upperShoe.position.set(this.config.upperShoeOffsetX, this.config.upperShoeOffsetY, this.config.upperShoeOffsetZ);
    leg.upperShoe.rotation.set(radians(this.config.upperShoeRotX), radians(this.config.upperShoeRotY), radians(this.config.upperShoeRotZ));
    leg.upperShoe.scale.set(this.config.upperShoeScaleX, this.config.upperShoeScaleY, this.config.upperShoeScaleZ);

    leg.toe.position.set(this.config.toeOffsetX, this.config.toeOffsetY, this.config.toeOffsetZ);
    leg.toe.rotation.set(radians(this.config.toeRotX), radians(this.config.toeRotY), radians(this.config.toeRotZ));
    leg.toe.scale.set(0.92 * this.config.toeScaleX, 0.52 * this.config.toeScaleY, 0.66 * this.config.toeScaleZ);
  }
}
