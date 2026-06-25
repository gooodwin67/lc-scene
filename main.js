import "./style.css";
import * as THREE from "three";
import {
  createControlPanel,
  createFolder,
  createToggleRow,
  createNumberRow,
  createPapersControls,
  createPinsControls,
  createLightingControls,
  createCameraControls,
  createFloorControls,
  createRugControls,
  createBoardTransformControls,
  createShelfControls,
  createPotControls,
  createCactusControls,
  createBooksControls,
  createPictureControls,
  createDeskControls,
  createMonitorControls,
  createFloorPotControls,
  createFloorPlantControls,
  createKeyboardControls,
  createMouseControls,
  createSpeakerControls,
  createMugControls,
  createPhoneControls,
  createChairControls,
  createCharacterRotationControls,
  createCharacterOffsetControls,
  createCharacterSizeControls,
  createCharacterHairControls,
  createCharacterSleeveControls,
  createCharacterColorControls,
  createCharacterFootControls
} from "./gui/panel.js";
import {
  atmosphereConfig,
  cameraConfig,
  lightingConfig,
  roomConfig,
  boardTransformConfig,
  paperConfigs,
  pinConfigs,
  shelfConfig,
  potConfig,
  cactusConfig,
  bookConfig,
  bookTwoConfig,
  deskConfig,
  pictureConfig,
  monitorOneConfig,
  monitorTwoConfig,
  floorPotConfig,
  floorPlantConfig,
  keyboardConfig,
  mouseConfig,
  speakerConfig,
  mugConfig,
  phoneConfig,
  rugConfig,
  chairConfig,
  characterConfig,
  cloneConfig
} from "./scene/config/defaults.js";
import { CameraRig } from "./scene/CameraRig.js";
import { LightingRig } from "./scene/LightingRig.js";
import { Room } from "./scene/objects/Room.js";
import { BoardScene } from "./scene/objects/BoardScene.js";
import { ShelfScene } from "./scene/objects/ShelfScene.js";
import { DeskScene } from "./scene/objects/DeskScene.js";
import { PictureScene } from "./scene/objects/PictureScene.js";
import { MonitorScene } from "./scene/objects/MonitorScene.js";
import { FloorPlantScene } from "./scene/objects/FloorPlantScene.js";
import { InputDevicesScene } from "./scene/objects/InputDevicesScene.js";
import { SpeakerScene } from "./scene/objects/SpeakerScene.js";
import { MugScene } from "./scene/objects/MugScene.js";
import { PhoneScene } from "./scene/objects/PhoneScene.js";
import { RugScene } from "./scene/objects/RugScene.js";
import { ChairScene } from "./scene/objects/ChairScene.js";
import { CharacterScene } from "./scene/objects/CharacterScene.js";

if (new URLSearchParams(window.location.search).get("embed") === "1") {
  document.documentElement.classList.add("is-embedded");
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfbf4e8);
scene.fog = new THREE.Fog(0xfbf4e8, 14, 28);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const cameraState = cloneConfig(cameraConfig);
const lightingState = cloneConfig(lightingConfig);
const roomState = cloneConfig(roomConfig);
const boardState = cloneConfig(boardTransformConfig);
const papersState = cloneConfig(paperConfigs);
const pinsState = cloneConfig(pinConfigs);
const shelfState = cloneConfig(shelfConfig);
const potState = cloneConfig(potConfig);
const cactusState = cloneConfig(cactusConfig);
const bookState = cloneConfig(bookConfig);
const bookTwoState = cloneConfig(bookTwoConfig);
const deskState = cloneConfig(deskConfig);
const pictureState = cloneConfig(pictureConfig);
const monitorOneState = cloneConfig(monitorOneConfig);
const monitorTwoState = cloneConfig(monitorTwoConfig);
const floorPotState = cloneConfig(floorPotConfig);
const floorPlantState = cloneConfig(floorPlantConfig);
const keyboardState = cloneConfig(keyboardConfig);
const mouseState = cloneConfig(mouseConfig);
const speakerState = cloneConfig(speakerConfig);
const mugState = cloneConfig(mugConfig);
const phoneState = cloneConfig(phoneConfig);
const rugState = cloneConfig(rugConfig);
const chairState = cloneConfig(chairConfig);
const characterState = cloneConfig(characterConfig);
const atmosphereState = cloneConfig(atmosphereConfig);

const cameraRig = new CameraRig(renderer, cameraState);
const lightingRig = new LightingRig(scene, lightingState);
const room = new Room(scene, roomState);
const board = new BoardScene(scene, boardState, papersState, pinsState);
const desk = new DeskScene(scene, deskState);
const shelf = new ShelfScene(scene, shelfState, potState, cactusState, bookState, bookTwoState);
const picture = new PictureScene(scene, pictureState);
const monitorOne = new MonitorScene(scene, monitorOneState);
const monitorTwo = new MonitorScene(scene, monitorTwoState);
const floorPlant = new FloorPlantScene(scene, floorPotState, floorPlantState);
const inputDevices = new InputDevicesScene(scene, keyboardState, mouseState);
const speaker = new SpeakerScene(scene, speakerState);
const mug = new MugScene(scene, mugState);
const phone = new PhoneScene(scene, phoneState);
const rug = new RugScene(scene, rugState);
const chair = new ChairScene(scene, chairState);
const character = new CharacterScene(scene, characterState);
const characterDefaultPose = cloneConfig(characterConfig);
const idleMouseBaseState = cloneConfig(mouseConfig);
const idleCharacterBaseState = cloneConfig(characterConfig);
idleCharacterBaseState.headYaw = 32;
const leftMonitorIdleBaseState = cloneConfig(monitorTwoConfig);
const rightMonitorIdleBaseState = cloneConfig(monitorOneConfig);

const controlPanel = createControlPanel("Board Controls");
document.body.appendChild(controlPanel);

const panelActions = document.createElement("div");
panelActions.className = "panel-actions";
controlPanel.appendChild(panelActions);

const allGuiFolder = createFolder(controlPanel, "Scene", true);
const manFolder = createFolder(controlPanel, "man", true);

createToggleRow(allGuiFolder, "Fog", atmosphereState.fogEnabled, (next) => {
  atmosphereState.fogEnabled = next;
  scene.fog = next ? new THREE.Fog(0xfbf4e8, 14, 28) : null;
});
createNumberRow(allGuiFolder, "Music Pulse Speed", 0.25, 8, 0.05, atmosphereState.musicPulseSpeed, (next) => {
  atmosphereState.musicPulseSpeed = next;
});

createBoardTransformControls(allGuiFolder, boardState, () => board.apply(), true);
createCameraControls(allGuiFolder, cameraState, () => cameraRig.apply(), true);
createFloorControls(allGuiFolder, roomState.floor, () => room.applyFloor(), true);
createRugControls(allGuiFolder, rugState, () => rug.apply(), true);
createLightingControls(allGuiFolder, lightingState, () => lightingRig.apply(), true);
createDeskControls(allGuiFolder, deskState, () => desk.apply(), true);
createMonitorControls(allGuiFolder, "Monitor 1", monitorOneState, () => monitorOne.apply(), true);
createMonitorControls(allGuiFolder, "Monitor 2", monitorTwoState, () => monitorTwo.apply(), true);
createFloorPotControls(allGuiFolder, floorPotState, () => floorPlant.applyPot(), true);
createFloorPlantControls(allGuiFolder, floorPlantState, () => floorPlant.applyPlant(), true);
createKeyboardControls(allGuiFolder, keyboardState, () => inputDevices.applyKeyboard(), true);
createMouseControls(allGuiFolder, mouseState, () => inputDevices.applyMouse(), true);
createSpeakerControls(allGuiFolder, speakerState, () => speaker.apply(), true);
createMugControls(allGuiFolder, mugState, () => mug.apply(), true);
createPhoneControls(allGuiFolder, phoneState, () => phone.apply(), true);
createChairControls(allGuiFolder, chairState, () => chair.apply(), true);
createShelfControls(allGuiFolder, shelfState, () => shelf.applyShelfTransform(), true);
createPictureControls(allGuiFolder, pictureState, () => picture.apply(), true);
createPotControls(allGuiFolder, potState, () => shelf.applyPotTransform(), true);
createCactusControls(allGuiFolder, cactusState, () => shelf.applyCactusTransform(), true);
createBooksControls(allGuiFolder, shelf.getBookSections(), true);
createPapersControls(allGuiFolder, board.getPaperSections(), true);
createPinsControls(allGuiFolder, board.getPinSections(), true);
createCharacterOffsetControls(manFolder, characterState, () => character.apply(), false);
createCharacterRotationControls(manFolder, characterState, () => character.apply(), true);
createCharacterSizeControls(manFolder, characterState, () => character.apply(), true);
createCharacterHairControls(controlPanel, characterState, () => character.apply(), false);
createCharacterSleeveControls(controlPanel, characterState, () => character.apply(), false);
createCharacterColorControls(controlPanel, characterState, () => character.apply(), false);
createCharacterFootControls(controlPanel, characterState, () => character.apply(), false);

const copyGuiButton = document.createElement("button");
copyGuiButton.className = "panel-button";
copyGuiButton.type = "button";
copyGuiButton.textContent = "Скопировать GUI";
panelActions.appendChild(copyGuiButton);

const actionStack = document.createElement("div");
actionStack.className = "action-stack";
document.body.appendChild(actionStack);

const idleToggleButton = document.createElement("button");
idleToggleButton.className = "action-button";
idleToggleButton.type = "button";
idleToggleButton.textContent = "left_monitor_idle";
actionStack.appendChild(idleToggleButton);
const rightMonitorIdleButton = document.createElement("button");
rightMonitorIdleButton.className = "action-button";
rightMonitorIdleButton.type = "button";
rightMonitorIdleButton.textContent = "right_monitor_idle";
actionStack.appendChild(rightMonitorIdleButton);
const stopButton = document.createElement("button");
stopButton.className = "action-button";
stopButton.type = "button";
stopButton.textContent = "Стоп";
actionStack.appendChild(stopButton);

const waveButton = document.createElement("button");
waveButton.className = "action-button";
waveButton.type = "button";
waveButton.textContent = "Привет";
actionStack.appendChild(waveButton);

const mouseOneButton = document.createElement("button");
mouseOneButton.className = "action-button";
mouseOneButton.type = "button";
mouseOneButton.textContent = "Mouse 1";
actionStack.appendChild(mouseOneButton);

const mouseTwoButton = document.createElement("button");
mouseTwoButton.className = "action-button";
mouseTwoButton.type = "button";
mouseTwoButton.textContent = "Mouse 2";
actionStack.appendChild(mouseTwoButton);

const mouseThreeButton = document.createElement("button");
mouseThreeButton.className = "action-button";
mouseThreeButton.type = "button";
mouseThreeButton.textContent = "Mouse 3";
actionStack.appendChild(mouseThreeButton);

const mouseFourButton = document.createElement("button");
mouseFourButton.className = "action-button";
mouseFourButton.type = "button";
mouseFourButton.textContent = "Mouse 4";
actionStack.appendChild(mouseFourButton);

let characterAnimation = null;
let idleEnabled = false;
let idleMode = null;
let pendingIdleMode = null;
const poseAnimations = [];
let nextIdleMovementTime = 0;
let lastPoseUpdateTime = null;
let smoothReturnTarget = null;
let idleHeadYawValue = 32;
let idleHeadYawStart = 32;
let idleHeadYawTarget = 32;
let idleHeadYawMoveStartTime = 0;
let idleHeadYawMoveDuration = 600;
let idleHeadYawHoldUntil = 0;
let nextIdleMonitorActionTime = 0;
let lastMonitorUpdateTime = null;
let nextRightMonitorActionTime = 0;
let lastRightMonitorUpdateTime = null;
let nextRightCodeEnterTime = 0;
let rightMonitorIdlePhase = "typing";
let nextRightMonitorPhaseTime = 0;
let rightMonitorHeadYawValue = -24;
let rightMonitorHeadYawStart = -24;
let rightMonitorHeadYawTarget = -24;
let rightMonitorHeadYawMoveStartTime = 0;
let rightMonitorHeadYawMoveDuration = 700;
let rightMonitorHeadYawHoldUntil = 0;
const musicHeadBaseState = {
  pitch: characterState.headPitch,
  leftAnkleX: characterState.leftAnkleX
};
const musicHeadLastPulse = {
  pitch: 0,
  leftAnkleX: 0
};
let leftMonitorLineScrollValue = 0;
let leftMonitorLineScrollStart = 0;
let leftMonitorLineScrollTarget = 0;
let leftMonitorLineScrollStartTime = 0;
let leftMonitorLineScrollDuration = 500;
let leftMonitorLineScrollHoldUntil = 0;
let leftMonitorPendingIconIndex = null;
let leftMonitorPendingIconStartTime = 0;

const mouseMovementOne = {
  mouse: {
    x: 1.815,
    z: 2.5
  },
  character: {
    leftShoulderX: -78.625,
    leftShoulderY: -176.25,
    leftShoulderZ: 32.5,
    leftElbowX: 30.875,
    leftElbowY: -1.5,
    leftElbowZ: -15,
    leftWristX: 1,
    leftWristY: -42,
    leftWristZ: -13.5
  }
};

const mouseMovementTwo = {
  mouse: {
    x: 1.90,
    z: 2.5275
  },
  character: {
    leftShoulderX: -80.25,
    leftShoulderY: -183.25,
    leftShoulderZ: 31,
    leftElbowX: 30.5,
    leftElbowY: 0,
    leftElbowZ: -14.5,
    leftWristX: 1,
    leftWristY: -42,
    leftWristZ: -13.5
  }
};

const mouseMovementThree = {
  mouse: {
    x: 1.985,
    z: 2.5
  },
  character: {
    leftShoulderX: -82.375,
    leftShoulderY: -178,
    leftShoulderZ: 33.5,
    leftElbowX: 22.625,
    leftElbowY: 1.5,
    leftElbowZ: -14,
    leftWristX: 1,
    leftWristY: -42,
    leftWristZ: -13.5
  }
};

const mouseMovementFour = {
  mouse: {
    x: 1.90,
    z: 2.4725
  },
  character: {
    leftShoulderX: -81.25,
    leftShoulderY: -170.75,
    leftShoulderZ: 35,
    leftElbowX: 20.375,
    leftElbowY: 0,
    leftElbowZ: -14.5,
    leftWristX: 1,
    leftWristY: -42,
    leftWristZ: -13.5
  }
};

const idleCategories = {
  mouse: [mouseMovementOne, mouseMovementTwo, mouseMovementThree, mouseMovementFour]
};

const guiDiffSources = [
  ["Atmosphere", atmosphereState, atmosphereConfig],
  ["Board", boardState, boardTransformConfig],
  ["Camera", cameraState, cameraConfig],
  ["Floor", roomState.floor, roomConfig.floor],
  ["Rug", rugState, rugConfig],
  ["Lighting", lightingState, lightingConfig],
  ["Desk", deskState, deskConfig],
  ["Monitor 1", monitorOneState, monitorOneConfig],
  ["Monitor 2", monitorTwoState, monitorTwoConfig],
  ["Floor Pot", floorPotState, floorPotConfig],
  ["Floor Plant", floorPlantState, floorPlantConfig],
  ["Keyboard", keyboardState, keyboardConfig],
  ["Mouse", mouseState, mouseConfig],
  ["Speaker", speakerState, speakerConfig],
  ["Mug", mugState, mugConfig],
  ["Phone", phoneState, phoneConfig],
  ["Chair", chairState, chairConfig],
  ["Shelf", shelfState, shelfConfig],
  ["Shelf Pot", potState, potConfig],
  ["Shelf Cactus", cactusState, cactusConfig],
  ["Orange Book", bookState, bookConfig],
  ["Blue Book", bookTwoState, bookTwoConfig],
  ["Picture", pictureState, pictureConfig],
  ["Papers", papersState, paperConfigs],
  ["Pins", pinsState, pinConfigs],
  ["Character", characterState, characterConfig]
];

function lerp(start, end, alpha) {
  return start + (end - start) * alpha;
}

function formatDiffValue(value) {
  if (typeof value === "number") {
    return Number.isInteger(value) ? String(value) : value.toFixed(3).replace(/\.?0+$/, "");
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return String(value);
}

function shouldSkipGuiDiffEntry(prefix) {
  return prefix === "codeCursorVisible";
}

function collectDiffEntries(current, base, prefix = "") {
  if (current && typeof current === "object" && !Array.isArray(current)) {
    const keys = [...new Set([...Object.keys(base ?? {}), ...Object.keys(current)])];
    return keys.flatMap((key) => collectDiffEntries(current[key], base?.[key], prefix ? `${prefix}.${key}` : key));
  }

  if (shouldSkipGuiDiffEntry(prefix)) {
    return [];
  }

  if (current !== base) {
    return [`${prefix}: ${formatDiffValue(current)}`];
  }

  return [];
}

function buildGuiDiffText() {
  const blocks = guiDiffSources
    .map(([title, state, defaults]) => {
      const lines = collectDiffEntries(state, defaults);
      if (lines.length === 0) {
        return "";
      }
      return `[${title}]\n${lines.join("\n")}`;
    })
    .filter(Boolean);

  return blocks.length > 0 ? blocks.join("\n\n") : "Изменений нет";
}

async function copyGuiDiff() {
  const text = buildGuiDiffText();
  try {
    await navigator.clipboard.writeText(text);
    const prev = copyGuiButton.textContent;
    copyGuiButton.textContent = "Скопировано";
    window.setTimeout(() => {
      copyGuiButton.textContent = prev;
    }, 1200);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    const prev = copyGuiButton.textContent;
    copyGuiButton.textContent = "Скопировано";
    window.setTimeout(() => {
      copyGuiButton.textContent = prev;
    }, 1200);
  }
}

copyGuiButton.addEventListener("click", copyGuiDiff);

function easeOutCubic(alpha) {
  return 1 - Math.pow(1 - alpha, 3);
}

function easeInOutSine(alpha) {
  return -(Math.cos(Math.PI * alpha) - 1) / 2;
}

function easeOutBack(alpha) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(alpha - 1, 3) + c1 * Math.pow(alpha - 1, 2);
}

function setCharacterPoseFromMap(values) {
  Object.entries(values).forEach(([key, value]) => {
    characterState[key] = value;
  });
  character.apply();
}

function setMousePoseFromMap(values) {
  Object.entries(values).forEach(([key, value]) => {
    mouseState[key] = value;
  });
  inputDevices.applyMouse();
}

function smoothValuesToTarget(state, target, alpha) {
  Object.entries(target).forEach(([key, value]) => {
    const current = state[key];
    if (typeof current !== "number" || typeof value !== "number") {
      state[key] = value;
      return;
    }

    const next = lerp(current, value, alpha);
    state[key] = Math.abs(next - value) < 0.001 ? value : next;
  });
}

function applySmoothedPoseTargets(mouseTarget, characterTarget, time) {
  if (lastPoseUpdateTime === null) {
    lastPoseUpdateTime = time;
  }

  const delta = Math.min(64, Math.max(0, time - lastPoseUpdateTime));
  const alpha = 1 - Math.pow(0.001, delta / 420);
  lastPoseUpdateTime = time;

  if (Object.keys(mouseTarget).length > 0) {
    smoothValuesToTarget(mouseState, mouseTarget, alpha);
    inputDevices.applyMouse();
  }
  if (Object.keys(characterTarget).length > 0) {
    smoothValuesToTarget(characterState, characterTarget, alpha);
    character.apply();
  }
}

function isNearTarget(state, target) {
  return Object.entries(target).every(([key, value]) => {
    return typeof state[key] !== "number" || typeof value !== "number" || Math.abs(state[key] - value) < 0.01;
  });
}

function blendPoseValues(base, target, eased) {
  const result = {};
  Object.keys(target).forEach((key) => {
    result[key] = lerp(base[key], target[key], eased);
  });
  return result;
}

function pickPoseValues(source, keys) {
  const result = {};
  keys.forEach((key) => {
    result[key] = source[key];
  });
  return result;
}

function updateActionButtons() {
  idleToggleButton.style.opacity = idleEnabled ? "1" : "";
  rightMonitorIdleButton.style.opacity = idleEnabled && idleMode === "right_monitor_idle" ? "1" : "";
}

function createPoseAnimation(movement, options = {}) {
  const mouseTarget = movement.mouse ?? {};
  const characterTarget = movement.character ?? {};
  const mouseKeys = Object.keys(mouseTarget);
  const characterKeys = Object.keys(characterTarget);

  return {
    stage: "to",
    stageStartTime: null,
    mouseTarget,
    characterTarget,
    mouseKeys,
    characterKeys,
    speed: options.speed ?? 1,
    movement,
    onComplete: options.onComplete ?? null
  };
}

function playMouseMovement(movement, options = {}) {
  characterAnimation = null;
  smoothReturnTarget = null;
  if (!options.allowOverlap) {
    poseAnimations.length = 0;
  }
  poseAnimations.push(createPoseAnimation(movement, options));
  waveButton.disabled = false;
}

function pickRandomMouseMovement() {
  const activeMovements = new Set(poseAnimations.map((animation) => animation.movement));
  const availableMovements = idleCategories.mouse.filter((movement) => !activeMovements.has(movement));
  const movements = availableMovements.length > 0 ? availableMovements : idleCategories.mouse;
  const index = Math.floor(Math.random() * movements.length);
  return movements[index];
}

function isLeftHandReadyForMouse() {
  const keys = [
    "leftShoulderX",
    "leftShoulderY",
    "leftShoulderZ",
    "leftElbowX",
    "leftElbowY",
    "leftElbowZ",
    "leftWristX",
    "leftWristY",
    "leftWristZ"
  ];

  return keys.every((key) => Math.abs(characterState[key] - characterDefaultPose[key]) < 1.5);
}

function queueNextIdleMovement(time) {
  if (!idleEnabled || idleMode !== "left_monitor_idle" || characterAnimation || poseAnimations.length >= 2 || time < nextIdleMovementTime) {
    return;
  }
  if (!isLeftHandReadyForMouse()) {
    nextIdleMovementTime = time + 120;
    return;
  }

  playMouseMovement(pickRandomMouseMovement(), {
    allowOverlap: true,
    speed: 1.8 + Math.random() * 3,
    onComplete: () => {
      if (!idleEnabled) {
        return;
      }
    }
  });
  nextIdleMovementTime = time + Math.random() * 2000;
}

function stopAllAnimations() {
  const returnCharacter = pendingIdleMode
    ? {
      leftShoulderX: characterDefaultPose.leftShoulderX,
      leftShoulderY: characterDefaultPose.leftShoulderY,
      leftShoulderZ: characterDefaultPose.leftShoulderZ,
      leftElbowX: characterDefaultPose.leftElbowX,
      leftElbowY: characterDefaultPose.leftElbowY,
      leftElbowZ: characterDefaultPose.leftElbowZ,
      leftWristX: characterDefaultPose.leftWristX,
      leftWristY: characterDefaultPose.leftWristY,
      leftWristZ: characterDefaultPose.leftWristZ
    }
    : characterDefaultPose;

  characterAnimation = null;
  poseAnimations.length = 0;
  nextIdleMovementTime = 0;
  resetIdleHeadYaw();
  resetIdleMonitor();
  idleEnabled = false;
  idleMode = null;
  smoothReturnTarget = {
    mouse: idleMouseBaseState,
    character: returnCharacter
  };
  waveButton.disabled = false;
  updateActionButtons();
}

function beginIdleMode(nextMode) {
  characterAnimation = null;
  poseAnimations.length = 0;
  nextIdleMovementTime = 0;
  resetIdleHeadYaw();
  resetIdleMonitor();
  smoothReturnTarget = null;
  lastPoseUpdateTime = null;
  idleEnabled = true;
  idleMode = nextMode;
  updateActionButtons();
}

function updatePoseStage(animation, time) {
  if (animation.stageStartTime === null) {
    animation.stageStartTime = time;
  }

  const elapsed = time - animation.stageStartTime;
  const speed = animation.speed;

  if (animation.stage === "to") {
    const t = Math.min(1, elapsed / (1100 / speed));
    animation.weight = easeInOutSine(t);
    if (t >= 1) {
      animation.stage = "hold";
      animation.stageStartTime = time;
    }
    return false;
  }

  if (animation.stage === "hold") {
    animation.weight = 1;
    if (elapsed >= 320 / speed) {
      animation.stage = "from";
      animation.stageStartTime = time;
    }
    return false;
  }

  const t = Math.min(1, elapsed / (1200 / speed));
  animation.weight = 1 - easeInOutSine(t);
  return t >= 1;
}

function addWeightedPoseContribution(values, base, target, keys, weight) {
  keys.forEach((key) => {
    values[key] = (values[key] ?? base[key]) + (target[key] - base[key]) * weight;
  });
}

function resetIdleHeadYaw() {
  idleHeadYawValue = characterState.headYaw;
  idleHeadYawStart = idleHeadYawValue;
  idleHeadYawTarget = idleHeadYawValue;
  idleHeadYawMoveStartTime = 0;
  idleHeadYawMoveDuration = 600;
  idleHeadYawHoldUntil = 0;
}

function updateIdleHeadYaw(time) {
  if (time < idleHeadYawHoldUntil) {
    return idleHeadYawTarget;
  }

  if (idleHeadYawMoveStartTime === 0) {
    idleHeadYawStart = idleHeadYawValue;
    idleHeadYawTarget = 11 + Math.random() * 29;
    idleHeadYawMoveStartTime = time;
    idleHeadYawMoveDuration = 420 + Math.random() * 680;
  }

  const t = Math.min(1, (time - idleHeadYawMoveStartTime) / idleHeadYawMoveDuration);
  idleHeadYawValue = lerp(idleHeadYawStart, idleHeadYawTarget, easeInOutSine(t));

  if (t >= 1) {
    idleHeadYawValue = idleHeadYawTarget;
    idleHeadYawMoveStartTime = 0;
    idleHeadYawHoldUntil = time + 180 + Math.random() * 420;
  }

  return idleHeadYawValue;
}

function resetIdleMonitor() {
  const now = performance.now();
  nextIdleMonitorActionTime = 0;
  lastMonitorUpdateTime = null;
  nextRightMonitorActionTime = Infinity;
  lastRightMonitorUpdateTime = null;
  nextRightCodeEnterTime = Infinity;
  rightMonitorIdlePhase = "typing";
  nextRightMonitorPhaseTime = Infinity;
  rightMonitorHeadYawValue = -24;
  rightMonitorHeadYawStart = -24;
  rightMonitorHeadYawTarget = -24;
  rightMonitorHeadYawMoveStartTime = 0;
  rightMonitorHeadYawMoveDuration = 700;
  rightMonitorHeadYawHoldUntil = 0;
  leftMonitorLineScrollValue = monitorTwoState.uiLinesScroll ?? 0;
  leftMonitorLineScrollStart = leftMonitorLineScrollValue;
  leftMonitorLineScrollTarget = leftMonitorLineScrollValue;
  leftMonitorLineScrollStartTime = 0;
  leftMonitorLineScrollDuration = 500;
  leftMonitorLineScrollHoldUntil = 0;
  leftMonitorPendingIconIndex = null;
  leftMonitorPendingIconStartTime = 0;
}

function pickIdleMonitorTarget(time) {
  const currentIndex = monitorTwoState.uiActiveIconIndex ?? 0;
  const candidates = [0, 1, 2, 3].filter((index) => index !== currentIndex);
  leftMonitorPendingIconIndex = candidates[Math.floor(Math.random() * candidates.length)];
  leftMonitorPendingIconStartTime = time;
  monitorTwoState.uiDotIconIndex = leftMonitorPendingIconIndex;
  monitorTwoState.uiDotVisible = true;
  monitorTwoState.uiLinesWidthScale = 0.72 + Math.random() * 0.66;

  nextIdleMonitorActionTime = Infinity;
}

function updateLeftMonitorIconSelection(time) {
  if (leftMonitorPendingIconIndex === null) {
    return;
  }

  monitorTwoState.uiDotIconIndex = leftMonitorPendingIconIndex;
  monitorTwoState.uiDotVisible = true;

  if (time - leftMonitorPendingIconStartTime < 1000) {
    return;
  }

  monitorTwoState.uiActiveIconIndex = leftMonitorPendingIconIndex;
  leftMonitorPendingIconIndex = null;
  leftMonitorPendingIconStartTime = 0;
  nextIdleMonitorActionTime = time + 1300 + Math.random() * 1800;
}

function updateLeftMonitorLineScroll(time) {
  if (time < leftMonitorLineScrollHoldUntil) {
    return leftMonitorLineScrollValue;
  }

  if (leftMonitorLineScrollStartTime === 0) {
    leftMonitorLineScrollStart = leftMonitorLineScrollValue;
    leftMonitorLineScrollTarget = (leftMonitorLineScrollValue + 0.35 + Math.random() * 0.75) % 7;
    leftMonitorLineScrollStartTime = time;
    leftMonitorLineScrollDuration = 360 + Math.random() * 720;
  }

  const t = Math.min(1, (time - leftMonitorLineScrollStartTime) / leftMonitorLineScrollDuration);
  leftMonitorLineScrollValue = lerp(leftMonitorLineScrollStart, leftMonitorLineScrollTarget, easeInOutSine(t));

  if (t >= 1) {
    leftMonitorLineScrollValue = leftMonitorLineScrollTarget;
    leftMonitorLineScrollStartTime = 0;
    leftMonitorLineScrollHoldUntil = time + 350 + Math.random() * 1100;
  }

  return leftMonitorLineScrollValue;
}

function updateIdleMonitor(time) {
  if (lastMonitorUpdateTime === null) {
    lastMonitorUpdateTime = time;
  }

  const delta = Math.min(64, Math.max(0, time - lastMonitorUpdateTime));
  const alpha = 1 - Math.pow(0.001, delta / 520);
  lastMonitorUpdateTime = time;

  if (idleEnabled && idleMode === "left_monitor_idle" && time >= nextIdleMonitorActionTime) {
    pickIdleMonitorTarget(time);
  }

  if (idleEnabled && idleMode === "left_monitor_idle") {
    monitorTwoState.uiLinesScroll = updateLeftMonitorLineScroll(time);
    updateLeftMonitorIconSelection(time);
  }

  smoothValuesToTarget(monitorTwoState, {
    uiDotX: leftMonitorIdleBaseState.uiDotX,
    uiDotY: leftMonitorIdleBaseState.uiDotY,
    uiPanelX: leftMonitorIdleBaseState.uiPanelX,
    uiIconStartY: leftMonitorIdleBaseState.uiIconStartY,
    uiLinesX: leftMonitorIdleBaseState.uiLinesX,
    uiLinesY: leftMonitorIdleBaseState.uiLinesY,
    uiTopIconWidth: leftMonitorIdleBaseState.uiTopIconWidth,
    uiTopIconY: leftMonitorIdleBaseState.uiTopIconY
  }, alpha);
  if (!idleEnabled || idleMode !== "left_monitor_idle") {
    monitorTwoState.uiActiveIconIndex = leftMonitorIdleBaseState.uiActiveIconIndex;
    monitorTwoState.uiDotIconIndex = leftMonitorIdleBaseState.uiDotIconIndex;
    monitorTwoState.uiDotVisible = leftMonitorIdleBaseState.uiDotVisible;
    monitorTwoState.uiLinesWidthScale = leftMonitorIdleBaseState.uiLinesWidthScale;
    monitorTwoState.uiLinesScroll = leftMonitorIdleBaseState.uiLinesScroll;
    leftMonitorPendingIconIndex = null;
    leftMonitorPendingIconStartTime = 0;
  }
  monitorTwo.apply();
}

function pickRightMonitorTarget(time) {
  monitorOneState.codeScroll = (Math.floor(monitorOneState.codeScroll) + 1) % 14;
  monitorOneState.codeVariant = Math.floor(Math.random() * 8);
  monitorOneState.codeWidthScale = 0.92 + Math.random() * 0.18;
  monitorOneState.codeActiveLine = 13;
  monitorOneState.codeTypingProgress = 0.18;
  nextRightCodeEnterTime = time + 700 + Math.random() * 900;
}

function updateRightMonitorPhase(time) {
  if (time < nextRightMonitorPhaseTime) {
    return;
  }

  rightMonitorIdlePhase = rightMonitorIdlePhase === "typing" ? "reading" : "typing";
  nextRightMonitorPhaseTime = time + (rightMonitorIdlePhase === "typing"
    ? 2200 + Math.random() * 2600
    : 3200 + Math.random() * 2800);
}

function updateRightMonitorReadingHeadYaw(time) {
  if (time < rightMonitorHeadYawHoldUntil) {
    return rightMonitorHeadYawTarget;
  }

  if (rightMonitorHeadYawMoveStartTime === 0) {
    rightMonitorHeadYawStart = rightMonitorHeadYawValue;
    rightMonitorHeadYawTarget = -34 + Math.random() * 20;
    rightMonitorHeadYawMoveStartTime = time;
    rightMonitorHeadYawMoveDuration = 650 + Math.random() * 850;
  }

  const t = Math.min(1, (time - rightMonitorHeadYawMoveStartTime) / rightMonitorHeadYawMoveDuration);
  rightMonitorHeadYawValue = lerp(rightMonitorHeadYawStart, rightMonitorHeadYawTarget, easeInOutSine(t));

  if (t >= 1) {
    rightMonitorHeadYawValue = rightMonitorHeadYawTarget;
    rightMonitorHeadYawMoveStartTime = 0;
    rightMonitorHeadYawHoldUntil = time + 250 + Math.random() * 550;
  }

  return rightMonitorHeadYawValue;
}

function updateRightMonitorIdle(time) {
  if (lastRightMonitorUpdateTime === null) {
    lastRightMonitorUpdateTime = time;
    if (idleEnabled && idleMode === "right_monitor_idle") {
      nextRightMonitorActionTime = time + 1600 + Math.random() * 1800;
      nextRightCodeEnterTime = time + 700 + Math.random() * 900;
      nextRightMonitorPhaseTime = time + 2200 + Math.random() * 2600;
    }
  }

  const delta = Math.min(64, Math.max(0, time - lastRightMonitorUpdateTime));
  lastRightMonitorUpdateTime = time;

  if (idleEnabled && idleMode === "right_monitor_idle") {
    updateRightMonitorPhase(time);
    if (rightMonitorIdlePhase === "typing" && time >= nextRightMonitorActionTime) {
      monitorOneState.codeVariant = Math.floor(Math.random() * 8);
      monitorOneState.codeWidthScale = 0.92 + Math.random() * 0.18;
      nextRightMonitorActionTime = time + 1600 + Math.random() * 1800;
    }
    if (rightMonitorIdlePhase === "typing") {
      monitorOneState.codeTypingProgress = Math.min(1, monitorOneState.codeTypingProgress + delta / 650);
      if (time >= nextRightCodeEnterTime && monitorOneState.codeTypingProgress >= 0.95) {
        pickRightMonitorTarget(time);
      }
      monitorOneState.codeCursorVisible = Math.floor(time / 260) % 2 === 0;
    } else {
      monitorOneState.codeCursorVisible = Math.floor(time / 420) % 2 === 0;
    }
  }

  monitorOneState.codeCursorVisible = Math.floor(time / 420) % 2 === 0;
  monitorOne.apply();
}

function updatePoseAnimations(time) {
  if (characterAnimation) {
    return;
  }

  if (!idleEnabled && poseAnimations.length === 0 && smoothReturnTarget) {
    applySmoothedPoseTargets(smoothReturnTarget.mouse, smoothReturnTarget.character, time);
    if (isNearTarget(mouseState, smoothReturnTarget.mouse) && isNearTarget(characterState, smoothReturnTarget.character)) {
      smoothReturnTarget = null;
      if (pendingIdleMode) {
        const nextMode = pendingIdleMode;
        pendingIdleMode = null;
        beginIdleMode(nextMode);
      }
    }
    return;
  }

  for (let index = poseAnimations.length - 1; index >= 0; index -= 1) {
    const animation = poseAnimations[index];
    if (updatePoseStage(animation, time)) {
      const onComplete = animation.onComplete;
      poseAnimations.splice(index, 1);
      if (onComplete) {
        onComplete();
      }
    }
  }

  const mouseValues = {};
  const characterValues = {};
  if (idleEnabled && idleMode === "left_monitor_idle") {
    mouseValues.x = idleMouseBaseState.x;
    mouseValues.z = idleMouseBaseState.z;
    characterValues.headYaw = updateIdleHeadYaw(time);
    characterValues.torsoYaw = idleCharacterBaseState.torsoYaw;
    characterValues.headPitch = idleCharacterBaseState.headPitch;
    characterValues.leftShoulderX = idleCharacterBaseState.leftShoulderX;
    characterValues.leftShoulderY = idleCharacterBaseState.leftShoulderY;
    characterValues.leftShoulderZ = idleCharacterBaseState.leftShoulderZ;
    characterValues.leftElbowX = idleCharacterBaseState.leftElbowX;
    characterValues.leftElbowY = idleCharacterBaseState.leftElbowY;
    characterValues.leftElbowZ = idleCharacterBaseState.leftElbowZ;
    characterValues.leftWristX = idleCharacterBaseState.leftWristX;
    characterValues.leftWristY = idleCharacterBaseState.leftWristY;
    characterValues.leftWristZ = idleCharacterBaseState.leftWristZ;
  } else if (idleEnabled && idleMode === "right_monitor_idle") {
    const typing = rightMonitorIdlePhase === "typing";
    const tap = Math.sin(time * 0.018);
    const altTap = Math.sin(time * 0.023 + Math.PI);
    mouseValues.x = idleMouseBaseState.x;
    mouseValues.z = idleMouseBaseState.z;
    characterValues.torsoYaw = 29;
    characterValues.headYaw = typing ? -4 : updateRightMonitorReadingHeadYaw(time);
    characterValues.headPitch = typing ? 12 : -7;
    characterValues.leftShoulderX = -72 + (typing ? tap * 2 : 0);
    characterValues.leftShoulderY = -154;
    characterValues.leftShoulderZ = 24;
    characterValues.leftElbowX = 42 + (typing ? altTap * 3 : 0);
    characterValues.leftElbowY = -7;
    characterValues.leftElbowZ = -10;
    characterValues.leftWristX = -9 + (typing ? tap * 5 : 0);
    characterValues.leftWristY = -28;
    characterValues.leftWristZ = -9;
    characterValues.rightShoulderX = -76 + (typing ? altTap * 2 : 0);
    characterValues.rightShoulderY = -202;
    characterValues.rightShoulderZ = -8;
    characterValues.rightElbowX = 39 + (typing ? tap * 3 : 0);
    characterValues.rightElbowY = 8;
    characterValues.rightElbowZ = 9;
    characterValues.rightWristX = -8 + (typing ? altTap * 5 : 0);
    characterValues.rightWristY = 24;
    characterValues.rightWristZ = 7;
  }

  if (idleMode === "left_monitor_idle") {
    poseAnimations.forEach((animation) => {
      addWeightedPoseContribution(mouseValues, idleMouseBaseState, animation.mouseTarget, animation.mouseKeys, animation.weight ?? 0);
      addWeightedPoseContribution(
        characterValues,
        idleCharacterBaseState,
        animation.characterTarget,
        animation.characterKeys,
        animation.weight ?? 0
      );
    });
  }

  applySmoothedPoseTargets(mouseValues, characterValues, time);
}

function beginCharacterGreeting() {
  if (characterAnimation) {
    return;
  }

  poseAnimations.length = 0;
  nextIdleMovementTime = 0;
  pendingIdleMode = null;
  resetIdleHeadYaw();
  resetIdleMonitor();
  smoothReturnTarget = null;
  idleEnabled = false;
  idleMode = null;
  updateActionButtons();
  waveButton.disabled = true;

  const startPose = {
    torsoYaw: characterState.torsoYaw,
    headYaw: characterState.headYaw,
    leftShoulderZ: characterState.leftShoulderZ,
    leftElbowX: characterState.leftElbowX,
    rightShoulderX: characterState.rightShoulderX,
    rightShoulderZ: characterState.rightShoulderZ,
    rightElbowX: characterState.rightElbowX,
    leftHipY: characterState.leftHipY,
    leftHipZ: characterState.leftHipZ,
    rightHipZ: characterState.rightHipZ
  };

  const phaseOneTarget = {
    torsoYaw: -60,
    headYaw: -65,
    leftShoulderZ: 149,
    leftElbowX: 1.5,
    rightShoulderX: -126,
    rightShoulderZ: -20,
    rightElbowX: 24,
    leftHipY: 7,
    leftHipZ: -56.5,
    rightHipZ: -28
  };

  const waveValues = [1.5, 22, 1.5, 22, 1.5, 22];

  characterAnimation = {
    stage: "turn",
    startTime: null,
    startPose,
    phaseOneTarget,
    waveValues,
    waveIndex: 0,
    waveStartValue: 1.5
  };
}

function updateCharacterAnimation(time) {
  if (!characterAnimation) {
    return;
  }

  if (characterAnimation.startTime === null) {
    characterAnimation.startTime = time;
  }

  const elapsed = time - characterAnimation.startTime;

  if (characterAnimation.stage === "turn") {
    const rightDuration = 900;
    const delayedDuration = 900;
    const delayedStart = rightDuration * 0.1;
    const rightT = Math.min(1, elapsed / rightDuration);
    const delayedT = Math.min(1, Math.max(0, elapsed - delayedStart) / delayedDuration);
    const rightEased = easeOutCubic(rightT);
    const delayedEased = easeOutCubic(delayedT);
    setCharacterPoseFromMap({
      rightHipZ: lerp(characterAnimation.startPose.rightHipZ, characterAnimation.phaseOneTarget.rightHipZ, rightEased),
      torsoYaw: lerp(characterAnimation.startPose.torsoYaw, characterAnimation.phaseOneTarget.torsoYaw, delayedEased),
      headYaw: lerp(characterAnimation.startPose.headYaw, characterAnimation.phaseOneTarget.headYaw, delayedEased),
      leftShoulderZ: lerp(characterAnimation.startPose.leftShoulderZ, characterAnimation.phaseOneTarget.leftShoulderZ, delayedEased),
      leftElbowX: lerp(characterAnimation.startPose.leftElbowX, characterAnimation.phaseOneTarget.leftElbowX, delayedEased),
      rightShoulderX: lerp(characterAnimation.startPose.rightShoulderX, characterAnimation.phaseOneTarget.rightShoulderX, delayedEased),
      rightShoulderZ: lerp(characterAnimation.startPose.rightShoulderZ, characterAnimation.phaseOneTarget.rightShoulderZ, delayedEased),
      rightElbowX: lerp(characterAnimation.startPose.rightElbowX, characterAnimation.phaseOneTarget.rightElbowX, delayedEased),
      leftHipY: lerp(characterAnimation.startPose.leftHipY, characterAnimation.phaseOneTarget.leftHipY, delayedEased),
      leftHipZ: lerp(characterAnimation.startPose.leftHipZ, characterAnimation.phaseOneTarget.leftHipZ, delayedEased)
    });

    if (rightT >= 1 && delayedT >= 1) {
      characterAnimation.stage = "wave";
      characterAnimation.startTime = time;
      characterAnimation.waveIndex = 0;
      characterAnimation.waveStartValue = 1.5;
    }
    return;
  }

  if (characterAnimation.stage === "wave") {
    const duration = 200;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutSine(t);
    const target = characterAnimation.waveValues[characterAnimation.waveIndex];
    setCharacterPoseFromMap({
      torsoYaw: characterAnimation.phaseOneTarget.torsoYaw,
      headYaw: characterAnimation.phaseOneTarget.headYaw,
      leftShoulderZ: characterAnimation.phaseOneTarget.leftShoulderZ,
      leftElbowX: lerp(characterAnimation.waveStartValue, target, eased),
      rightShoulderX: characterAnimation.phaseOneTarget.rightShoulderX,
      rightShoulderZ: characterAnimation.phaseOneTarget.rightShoulderZ,
      rightElbowX: characterAnimation.phaseOneTarget.rightElbowX,
      leftHipY: characterAnimation.phaseOneTarget.leftHipY,
      leftHipZ: characterAnimation.phaseOneTarget.leftHipZ,
      rightHipZ: characterAnimation.phaseOneTarget.rightHipZ
    });

    if (t >= 1) {
      characterAnimation.waveStartValue = target;
      characterAnimation.waveIndex += 1;
      characterAnimation.startTime = time;

      if (characterAnimation.waveIndex >= characterAnimation.waveValues.length) {
        characterAnimation.stage = "right-leg-out";
        characterAnimation.startTime = time;
      }
    }
    return;
  }

  if (characterAnimation.stage === "right-leg-out") {
    const duration = 730;
    const t = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(t);
    setCharacterPoseFromMap({
      torsoYaw: lerp(characterAnimation.phaseOneTarget.torsoYaw, characterDefaultPose.torsoYaw, eased),
      headYaw: lerp(characterAnimation.phaseOneTarget.headYaw, characterDefaultPose.headYaw, eased),
      leftShoulderZ: lerp(characterAnimation.phaseOneTarget.leftShoulderZ, characterDefaultPose.leftShoulderZ, eased),
      leftElbowX: lerp(characterAnimation.waveStartValue, characterDefaultPose.leftElbowX, eased),
      rightShoulderX: lerp(characterAnimation.phaseOneTarget.rightShoulderX, characterDefaultPose.rightShoulderX, eased),
      rightShoulderZ: lerp(characterAnimation.phaseOneTarget.rightShoulderZ, characterDefaultPose.rightShoulderZ, eased),
      rightElbowX: lerp(characterAnimation.phaseOneTarget.rightElbowX, characterDefaultPose.rightElbowX, eased),
      leftHipY: characterAnimation.phaseOneTarget.leftHipY,
      leftHipZ: characterAnimation.phaseOneTarget.leftHipZ,
      rightHipZ: lerp(characterAnimation.phaseOneTarget.rightHipZ, characterDefaultPose.rightHipZ, eased)
    });

    if (t >= 1) {
      characterAnimation.stage = "left-leg-out";
      characterAnimation.startTime = time;
    }
    return;
  }

  if (characterAnimation.stage === "left-leg-out") {
    const duration = 540;
    const t = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(t);
    setCharacterPoseFromMap({
      torsoYaw: characterDefaultPose.torsoYaw,
      headYaw: characterDefaultPose.headYaw,
      leftShoulderZ: characterDefaultPose.leftShoulderZ,
      leftElbowX: characterDefaultPose.leftElbowX,
      rightShoulderX: characterDefaultPose.rightShoulderX,
      rightShoulderZ: characterDefaultPose.rightShoulderZ,
      rightElbowX: characterDefaultPose.rightElbowX,
      leftHipY: lerp(characterAnimation.phaseOneTarget.leftHipY, characterDefaultPose.leftHipY, eased),
      leftHipZ: lerp(characterAnimation.phaseOneTarget.leftHipZ, characterDefaultPose.leftHipZ, eased),
      rightHipZ: characterDefaultPose.rightHipZ
    });

    if (t >= 1) {
      setCharacterPoseFromMap({
        torsoYaw: characterDefaultPose.torsoYaw,
        headYaw: characterDefaultPose.headYaw,
        leftShoulderZ: characterDefaultPose.leftShoulderZ,
        leftElbowX: characterDefaultPose.leftElbowX,
        rightShoulderX: characterDefaultPose.rightShoulderX,
        rightShoulderZ: characterDefaultPose.rightShoulderZ,
        rightElbowX: characterDefaultPose.rightElbowX,
        leftHipY: characterDefaultPose.leftHipY,
        leftHipZ: characterDefaultPose.leftHipZ,
        rightHipZ: characterDefaultPose.rightHipZ
      });
      characterAnimation = null;
      waveButton.disabled = false;
      if (idleEnabled) {
        nextIdleMovementTime = 0;
      }
    }
  }
}

function startIdleMode(nextMode) {
  if (idleEnabled) {
    if (idleMode === nextMode) {
      pendingIdleMode = null;
      stopAllAnimations();
      return;
    }
    poseAnimations.length = 0;
    nextIdleMovementTime = 0;
    resetIdleHeadYaw();
    resetIdleMonitor();
    idleMode = nextMode;
    updateActionButtons();
    return;
  }

  beginIdleMode(nextMode);
}

function toggleIdleLoop() {
  startIdleMode("left_monitor_idle");
}

waveButton.addEventListener("click", beginCharacterGreeting);
mouseOneButton.addEventListener("click", () => {
  idleEnabled = false;
  pendingIdleMode = null;
  updateActionButtons();
  playMouseMovement(mouseMovementOne);
});
mouseTwoButton.addEventListener("click", () => {
  idleEnabled = false;
  pendingIdleMode = null;
  updateActionButtons();
  playMouseMovement(mouseMovementTwo);
});
mouseThreeButton.addEventListener("click", () => {
  idleEnabled = false;
  pendingIdleMode = null;
  updateActionButtons();
  playMouseMovement(mouseMovementThree);
});
mouseFourButton.addEventListener("click", () => {
  idleEnabled = false;
  pendingIdleMode = null;
  updateActionButtons();
  playMouseMovement(mouseMovementFour);
});
idleToggleButton.addEventListener("click", toggleIdleLoop);
rightMonitorIdleButton.addEventListener("click", () => startIdleMode("right_monitor_idle"));
stopButton.addEventListener("click", stopAllAnimations);
updateActionButtons();

function updateMusicHeadPulse(time) {
  const pulseTime = time * atmosphereState.musicPulseSpeed;
  const rawPitch = characterState.headPitch - musicHeadLastPulse.pitch;
  const rawLeftAnkleX = characterState.leftAnkleX - musicHeadLastPulse.leftAnkleX;
  musicHeadBaseState.pitch += (rawPitch - musicHeadBaseState.pitch) * 0.08;
  musicHeadBaseState.leftAnkleX += (rawLeftAnkleX - musicHeadBaseState.leftAnkleX) * 0.08;

  musicHeadLastPulse.pitch = Math.sin(pulseTime * 0.0038) * 0.55 + Math.sin(pulseTime * 0.009) * 0.18;
  musicHeadLastPulse.leftAnkleX = Math.sin(pulseTime * 0.0042 + 0.7) * 0.9;
  characterState.headPitch = musicHeadBaseState.pitch + musicHeadLastPulse.pitch;
  characterState.leftAnkleX = musicHeadBaseState.leftAnkleX + musicHeadLastPulse.leftAnkleX;
  character.apply();
}

function animate(time) {
  const pulseTime = time * atmosphereState.musicPulseSpeed;
  speaker.setConePulse(1 + Math.sin(pulseTime * 0.0048) * 0.045 + Math.sin(pulseTime * 0.013) * 0.018);
  mug.updateSteam(time);
  updatePoseAnimations(time);
  if (idleEnabled && !characterAnimation) {
    queueNextIdleMovement(time);
  }
  updateIdleMonitor(time);
  updateRightMonitorIdle(time);
  updateCharacterAnimation(time);
  updateMusicHeadPulse(time);
  cameraRig.controls.update();
  renderer.render(scene, cameraRig.camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  cameraRig.resize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});
