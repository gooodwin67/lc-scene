export const atmosphereConfig = {
  fogEnabled: true
};

export const cameraConfig = {
  x: 9.14,
  y: 0.46,
  z: 13.71,
  targetX: 0.38,
  targetY: -2.56,
  targetZ: -2.15,
  fov: 34
};

export const lightingConfig = {
  ambient: 1.40,
  key: 1.10,
  fill: 1.35,
  front: 1.05,
  shadowRadius: 22,
  blurSamples: 16,
  bias: 0,
  normalBias: 0
};

export const roomConfig = {
  wall: {
    x: 0,
    y: 0,
    z: -1.8,
    width: 20,
    height: 14,
    depth: 0.04
  },
  floor: {
    x: 0,
    y: -5.52,
    z: 8.0,
    rotX: 0,
    rotY: 0,
  rotZ: 0,
  width: 36.29,
  height: 38.89,
  tone: 1.33,
  roughness: 1
  }
};

export const boardTransformConfig = {
  x: 0.15,
  y: 0.15,
  z: -1.74,
  rotX: 0.5,
  rotY: -0.5,
  rotZ: 1.0
};

export const paperConfigs = {
  backPaper: { x: -1.71, y: 1.19, z: -0.01, rotX: -5.5, rotZ: 0.5 },
  frontPaper: { x: -1.58, y: 1.33, z: -0.01, rotX: -6.5, rotZ: 8.5 },
  rightPaper: { x: 1.58, y: -0.83, z: -0.01, rotX: -10, rotZ: -6.5 }
};

export const pinConfigs = {
  leftPin: {
    x: -1.56,
    y: 1.18,
    z: 0.58,
    topRadius: 0.16,
    topHeight: 0.06,
    stemRadius: 0.07,
    stemHeight: 0.30,
    baseRadius: 0.20,
    baseHeight: 0.07,
    pinRadius: 0.01,
    pinHeight: 0.35,
    pinInset: 0.21
  },
  rightPin: {
    x: 1.56,
    y: -0.94,
    z: 0.56,
    topRadius: 0.16,
    topHeight: 0.06,
    stemRadius: 0.07,
    stemHeight: 0.30,
    baseRadius: 0.20,
    baseHeight: 0.07,
    pinRadius: 0.01,
    pinHeight: 0.35,
    pinInset: 0.26
  }
};

export const shelfConfig = {
  x: -5.00,
  y: -1.18,
  z: -1.30,
  rotX: -87.5,
  rotY: -2.5,
  rotZ: 0,
  width: 1.75,
  height: 0.88,
  depth: 0.24,
  radius: 0.26
};

export const potConfig = {
  x: 0.42,
  y: 0.02,
  z: 0.18,
  rotX: 90,
  rotY: 0,
  rotZ: 0,
  radius: 0.24,
  height: 0.49,
  neck: 0.15,
  bulge: 0.64,
  soilRadius: 0.15,
  soilHeight: 0.45,
  soilOffsetY: 0.00
};

export const cactusConfig = {
  x: 0.50,
  y: 0.03,
  z: 0.53,
  rotX: 97.5,
  rotY: 12.5,
  rotZ: -10.0,
  mainRadius: 0.10,
  mainHeight: 0.32,
  mainLean: -0.07,
  armRadius: 0.06,
  armHeight: 0.19,
  armOffsetX: 0.03,
  armOffsetY: -0.01,
  armLean: -0.58
};

export const bookConfig = {
  x: -0.40,
  y: -0.04,
  z: 0.39,
  rotX: 90,
  rotY: 0,
  rotZ: 0,
  width: 0.22,
  height: 0.72,
  depth: 0.49,
  pagesX: 0,
  pagesY: 0.04,
  pagesZ: -0.01,
  pagesWidth: 0.19,
  pagesHeight: 0.65,
  pagesDepth: 0.50,
  spineX: 0,
  spineY: 0.03,
  spineZ: 0.26,
  spineWidth: 0.03,
  spineHeight: 0.67,
  spineDepth: 0.22,
  spineRotY: 90
};

export const bookTwoConfig = {
  x: -0.68,
  y: -0.06,
  z: 0.37,
  rotX: 90,
  rotY: 0,
  rotZ: 0,
  width: 0.18,
  height: 0.68,
  depth: 0.47,
  pagesX: 0,
  pagesY: 0.045,
  pagesZ: -0.03,
  pagesWidth: 0.19,
  pagesHeight: 0.60,
  pagesDepth: 0.48,
  spineX: 0.00,
  spineY: 0.03,
  spineZ: 0.23,
  spineWidth: 0.025,
  spineHeight: 0.62,
  spineDepth: 0.20,
  spineRotY: 90
};

export const deskConfig = {
  x: 0.36,
  y: -3.46,
  z: 1.08,
  topX: 0,
  topY: -0.08,
  topZ: 0.60,
  rotX: 92,
  rotY: 0,
  rotZ: 0,
  mainWidth: 7.74,
  mainDepth: 3.22,
  returnWidth: 2.88,
  returnDepth: 5.00,
  innerCut: 4.55,
  thickness: 0.24,
  radius: 0.31,
  legHeight: 1.98,
  legRadius: 0.18,
  legInset: 0.53
};

export const pictureConfig = {
  x: 5.59,
  y: 0.85,
  z: -1.74,
  rotX: 0,
  rotY: 0,
  rotZ: 0,
  width: 1.98,
  height: 1.35,
  depth: 0.18,
  innerInset: 0.13,
  sunX: 0.34,
  sunY: 0.20,
  sunRadius: 0.18,
  mountainAX: -0.16,
  mountainAY: -0.24,
  mountainAScaleX: 1.14,
  mountainAScaleY: 1.00,
  mountainAScaleZ: 1.38,
  mountainAWidth: 0.90,
  mountainAHeight: 0.69,
  mountainARotZ: 1.0,
  mountainBX: 0.33,
  mountainBY: -0.36,
  mountainBScaleX: 0.78,
  mountainBScaleY: 0.84,
  mountainBScaleZ: 3.00,
  mountainBWidth: 0.83,
  mountainBHeight: 0.44,
  mountainBRotZ: 1.0
};

export const monitorOneConfig = {
  screenMode: "code",
  x: 1.9,
  y: -1.65,
  z: 0.56,
  rotX: -7,
  rotY: -4.5,
  rotZ: -1,
  width: 3.27,
  height: 2.28,
  depth: 0.18,
  radius: 0.22,
  screenInset: 0.11,
  screenDepth: 0.15,
  standWidth: 0.80,
  standHeight: 1.07,
  standDepth: 0.05,
  standOffsetZ: 0.19,
  standRotX: 14,
  standRotZ: 1,
  baseWidth: 0.80,
  baseHeight: 0.02,
  baseDepth: 0.55,
  baseOffsetY: 0.13,
  baseOffsetZ: -0.07,
  baseRotX: 8.5,
  baseRotZ: 1,
  lineGap: 0.10
};

export const monitorTwoConfig = {
  screenMode: "ui",
  x: -1.55,
  y: -1.67,
  z: 0.87,
  rotX: -6,
  rotY: 12,
  rotZ: 1.5,
  width: 3.10,
  height: 2.24,
  depth: 0.18,
  radius: 0.22,
  screenInset: 0.11,
  screenDepth: 0.15,
  standWidth: 0.68,
  standHeight: 1.00,
  standDepth: 0.05,
  standOffsetZ: 0.19,
  standRotX: 14,
  standRotZ: -1.0,
  baseWidth: 0.68,
  baseHeight: 0.02,
  baseDepth: 0.52,
  baseOffsetY: 0.15,
  baseOffsetZ: -0.07,
  baseRotX: 8.5,
  baseRotZ: -1.0,
  lineGap: 0.10
};

export function cloneConfig(value) {
  return JSON.parse(JSON.stringify(value));
}
