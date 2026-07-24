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
  createFloorLampControls,
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
  createCharacterFaceControls,
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
  floorLampConfig,
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
import { FloorLampScene } from "./scene/objects/FloorLampScene.js";
import { InputDevicesScene } from "./scene/objects/InputDevicesScene.js";
import { SpeakerScene } from "./scene/objects/SpeakerScene.js";
import { MugScene } from "./scene/objects/MugScene.js";
import { PhoneScene } from "./scene/objects/PhoneScene.js";
import { RugScene } from "./scene/objects/RugScene.js";
import { ChairScene } from "./scene/objects/ChairScene.js";
import { CharacterScene } from "./scene/objects/CharacterScene.js";

if (new URLSearchParams(window.location.search).get("embed") === "1") {
  document.documentElement.classList.add("is-embedded");
  document.documentElement.classList.add("is-ui-hidden");
}

const uiToggleButton = document.createElement("button");
uiToggleButton.className = "ui-toggle-button";
uiToggleButton.type = "button";
uiToggleButton.textContent = "GUI";
uiToggleButton.setAttribute("aria-pressed", String(document.documentElement.classList.contains("is-ui-hidden")));
uiToggleButton.addEventListener("click", () => {
  const isHidden = document.documentElement.classList.toggle("is-ui-hidden");
  uiToggleButton.setAttribute("aria-pressed", String(isHidden));
});
document.body.appendChild(uiToggleButton);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfbf4e8);
scene.fog = new THREE.Fog(0xfbf4e8, 14, 28);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.shadowMap.type = THREE.VSMShadowMap;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1.05;



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
const floorLampState = cloneConfig(floorLampConfig);
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
cameraRig.setOrbitEnabled(atmosphereState.orbitControlsEnabled);
const lightingRig = new LightingRig(scene, lightingState);
const room = new Room(scene, roomState);
const board = new BoardScene(scene, boardState, papersState, pinsState);
const desk = new DeskScene(scene, deskState);
const shelf = new ShelfScene(scene, shelfState, potState, cactusState, bookState, bookTwoState);
const picture = new PictureScene(scene, pictureState);
const monitorOne = new MonitorScene(scene, monitorOneState);
const monitorTwo = new MonitorScene(scene, monitorTwoState);
const floorPlant = new FloorPlantScene(scene, floorPotState, floorPlantState);
const floorLamp = new FloorLampScene(scene, floorLampState);
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
const cameraIntroStartState = cloneConfig(cameraConfig);
const cameraIntroDesktopTargetState = {
  ...cameraIntroStartState,
  x: 15.6,
  y: 1.2,
  z: 12.51,
  targetX: 1.94,
  targetY: -0.8,
  targetZ: -8.34,
  panX: -8.63,
  fov: 28
};
const cameraIntroMobileTargetState = {
  ...cameraIntroDesktopTargetState,
  panX: -7.26,
  fov: 39
};
const cameraIntroDelay = 300;
const cameraIntroDuration = 4600;
const cameraIntroGreetingLead = 2000;
const cameraIntroHeadTurnDuration = 600;
const cameraIntroHeadYawTarget = -68;
let cameraIntroStartTime = null;
let cameraIntroDone = false;
let introGreetingStarted = false;
let introGreetingDone = false;
let ambientInterruptMode = "right_monitor_idle";
let nextAmbientInterruptTime = Infinity;
let ambientInterruptEndTime = Infinity;
let earlyLeftMonitorShown = false;
let earlyPhoneRingShown = false;
const pointerParallaxTarget = { x: 0, y: 0 };
const pointerParallaxState = { x: 0, y: 0 };
let animationPausedAt = atmosphereState.orbitControlsEnabled ? performance.now() : null;
let totalAnimationPauseTime = 0;
const raycaster = new THREE.Raycaster();
const clickPointer = new THREE.Vector2();
const lampLightingTarget = {
  ambient: 0.1,
  key: 0.05,
  fill: 1.2,
  front: 0
};
const lampMonitorTarget = {
  screenColor: "#dedede",
  screenGlowColor: "#8e98a9"
};
let lampLightingBase = null;
let lampMonitorBase = null;
let lampLightingAnimation = null;
let lampLightingEnabled = false;

function getCameraIntroTargetState() {
  return window.matchMedia("(max-width: 959px)").matches
    ? cameraIntroMobileTargetState
    : cameraIntroDesktopTargetState;
}

function resetPointerParallax() {
  pointerParallaxTarget.x = 0;
  pointerParallaxTarget.y = 0;
  pointerParallaxState.x = 0;
  pointerParallaxState.y = 0;
  cameraRig.setParallax(0, 0, 0, 0);
}

function setOrbitControlsEnabled(enabled) {
  const now = performance.now();
  if (enabled && animationPausedAt === null) {
    animationPausedAt = now;
    saccadeYaw = 0;
    saccadePitch = 0;
    saccadeTargetYaw = 0;
    saccadeTargetPitch = 0;
    character.setFaceMotion(character.blinkAmount, 0, 0);
  } else if (!enabled && animationPausedAt !== null) {
    totalAnimationPauseTime += now - animationPausedAt;
    animationPausedAt = null;
  }

  atmosphereState.orbitControlsEnabled = enabled;
  resetPointerParallax();
  cameraRig.apply();
  cameraRig.setOrbitEnabled(enabled);
}

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
createToggleRow(allGuiFolder, "Orbit Controls", atmosphereState.orbitControlsEnabled, (next) => {
  setOrbitControlsEnabled(next);
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
createFloorLampControls(allGuiFolder, floorLampState, () => floorLamp.apply(), true);
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
createCharacterFaceControls(controlPanel, characterState, () => character.apply(), false);
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

const phoneRingButton = document.createElement("button");
phoneRingButton.className = "action-button";
phoneRingButton.type = "button";
phoneRingButton.textContent = "Phone Ring";
actionStack.appendChild(phoneRingButton);

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
let phoneRingAnimation = null;
let blinkStartTime = null;
let nextBlinkTime = 0;
let nextSaccadeTime = 0;
let saccadeYaw = 0;
let saccadePitch = 0;
let saccadeTargetYaw = 0;
let saccadeTargetPitch = 0;
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
  ["Floor Lamp", floorLampState, floorLampConfig],
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

function easeInOutCubic(alpha) {
  return alpha < 0.5 ? 4 * alpha * alpha * alpha : 1 - Math.pow(-2 * alpha + 2, 3) / 2;
}

function easeOutBack(alpha) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(alpha - 1, 3) + c1 * Math.pow(alpha - 1, 2);
}

function updateCameraIntro(time) {
  if (cameraIntroDone) {
    return;
  }

  if (cameraIntroStartTime === null) {
    cameraIntroStartTime = time;
  }

  const elapsed = time - cameraIntroStartTime - cameraIntroDelay;
  if (elapsed < 0) {
    cameraRig.apply();
    return;
  }

  const t = Math.min(1, elapsed / cameraIntroDuration);
  const eased = easeOutCubic(t);
  const cameraIntroTargetState = getCameraIntroTargetState();

  Object.keys(cameraIntroTargetState).forEach((key) => {
    const start = cameraIntroStartState[key];
    const target = cameraIntroTargetState[key];
    cameraState[key] = typeof start === "number" && typeof target === "number"
      ? lerp(start, target, eased)
      : target;
  });
  cameraRig.apply();

  if (!introGreetingStarted) {
    const headTurnStart = Math.max(0, cameraIntroDuration - cameraIntroGreetingLead - cameraIntroHeadTurnDuration);
    const headTurnT = Math.min(1, Math.max(0, elapsed - headTurnStart) / cameraIntroHeadTurnDuration);
    characterState.headYaw = lerp(characterDefaultPose.headYaw, cameraIntroHeadYawTarget, easeOutCubic(headTurnT));
    character.apply();
  }

  if (t >= 1) {
    Object.assign(cameraState, cameraIntroTargetState);
    cameraRig.apply();
    cameraIntroDone = true;
  }
}

function scheduleNextAmbientInterrupt(time) {
  if (!earlyLeftMonitorShown) {
    nextAmbientInterruptTime = time + 2500;
    return;
  }
  if (!earlyPhoneRingShown) {
    nextAmbientInterruptTime = time + 5000;
    return;
  }
  nextAmbientInterruptTime = time + 7000 + Math.random() * 6000;
}

function startMainAmbientMode(time) {
  ambientInterruptMode = "right_monitor_idle";
  ambientInterruptEndTime = Infinity;
  startIdleMode("right_monitor_idle");
  scheduleNextAmbientInterrupt(time);
}

function startAmbientInterrupt(time) {
  if (!idleEnabled || characterAnimation || phoneRingAnimation) {
    scheduleNextAmbientInterrupt(time + 3000);
    return;
  }

  if (!earlyLeftMonitorShown) {
    earlyLeftMonitorShown = true;
    ambientInterruptMode = "left_monitor_idle";
    ambientInterruptEndTime = time + 5000;
    startIdleMode("left_monitor_idle");
    return;
  }

  if (!earlyPhoneRingShown) {
    earlyPhoneRingShown = true;
    ambientInterruptMode = "phone_ring";
    ambientInterruptEndTime = time + 4600;
    beginPhoneRing();
    return;
  }

  if (Math.random() < 0.36) {
    ambientInterruptMode = "phone_ring";
    ambientInterruptEndTime = time + 4600;
    beginPhoneRing();
    return;
  }

  ambientInterruptMode = "left_monitor_idle";
  ambientInterruptEndTime = time + 5000;
  startIdleMode("left_monitor_idle");
}

function updateSceneAutoplay(time) {
  const introElapsed = cameraIntroStartTime === null
    ? -Infinity
    : time - cameraIntroStartTime - cameraIntroDelay;
  const shouldStartGreeting = cameraIntroDone || introElapsed >= Math.max(0, cameraIntroDuration - cameraIntroGreetingLead);

  if (shouldStartGreeting && !introGreetingStarted) {
    introGreetingStarted = true;
    beginCharacterGreeting();
    return;
  }

  if (!introGreetingDone) {
    return;
  }

  if (time >= ambientInterruptEndTime) {
    startMainAmbientMode(time);
    return;
  }

  if (ambientInterruptMode === "right_monitor_idle" && time >= nextAmbientInterruptTime) {
    startAmbientInterrupt(time);
  }
}

function updatePointerParallax() {
  if (atmosphereState.orbitControlsEnabled) {
    return;
  }

  pointerParallaxState.x += (pointerParallaxTarget.x - pointerParallaxState.x) * cameraState.mouseSmooth;
  pointerParallaxState.y += (pointerParallaxTarget.y - pointerParallaxState.y) * cameraState.mouseSmooth;
  const parallaxX = pointerParallaxState.x * cameraState.mouseXAmount;
  const parallaxY = pointerParallaxState.y * cameraState.mouseYAmount;
  cameraRig.setParallax(
    cameraState.mouseXCamera ? parallaxX : 0,
    cameraState.mouseYCamera ? parallaxY : 0,
    cameraState.mouseXTarget ? parallaxX : 0,
    cameraState.mouseYTarget ? parallaxY : 0
  );
  cameraRig.apply();
}

function startLampLightingTransition() {
  lampLightingAnimation = {
    startTime: null,
    duration: 850,
    lightingFrom: {
      ambient: lightingState.ambient,
      key: lightingState.key,
      fill: lightingState.fill,
      front: lightingState.front
    },
    lightingTarget: lampLightingEnabled ? lampLightingTarget : lampLightingBase,
    monitorOneFrom: {
      screenColor: monitorOneState.screenColor,
      screenGlowColor: monitorOneState.screenGlowColor
    },
    monitorTwoFrom: {
      screenColor: monitorTwoState.screenColor,
      screenGlowColor: monitorTwoState.screenGlowColor
    },
    monitorTarget: lampLightingEnabled ? lampMonitorTarget : lampMonitorBase
  };
}

function toggleLampLighting() {
  if (!lampLightingEnabled) {
    lampLightingBase = {
      ambient: lightingState.ambient,
      key: lightingState.key,
      fill: lightingState.fill,
      front: lightingState.front
    };
    lampMonitorBase = {
      screenColor: monitorOneState.screenColor,
      screenGlowColor: monitorOneState.screenGlowColor
    };
    lampLightingEnabled = true;
    startLampLightingTransition();
    return;
  }

  lampLightingEnabled = false;
  startLampLightingTransition();
}

function updateLampLighting(time) {
  if (!lampLightingAnimation) {
    return;
  }

  if (lampLightingAnimation.startTime === null) {
    lampLightingAnimation.startTime = time;
  }

  const t = Math.min(1, (time - lampLightingAnimation.startTime) / lampLightingAnimation.duration);
  const eased = easeInOutSine(t);
  if (lampLightingAnimation.lightingTarget) {
    Object.keys(lampLightingAnimation.lightingTarget).forEach((key) => {
      lightingState[key] = lerp(lampLightingAnimation.lightingFrom[key], lampLightingAnimation.lightingTarget[key], eased);
    });
    lightingRig.apply();
  }
  if (lampLightingAnimation.monitorTarget) {
    monitorOneState.screenColor = mixHexColor(lampLightingAnimation.monitorOneFrom.screenColor, lampLightingAnimation.monitorTarget.screenColor, eased);
    monitorOneState.screenGlowColor = mixHexColor(
      lampLightingAnimation.monitorOneFrom.screenGlowColor,
      lampLightingAnimation.monitorTarget.screenGlowColor,
      eased
    );
    monitorTwoState.screenColor = mixHexColor(lampLightingAnimation.monitorTwoFrom.screenColor, lampLightingAnimation.monitorTarget.screenColor, eased);
    monitorTwoState.screenGlowColor = mixHexColor(
      lampLightingAnimation.monitorTwoFrom.screenGlowColor,
      lampLightingAnimation.monitorTarget.screenGlowColor,
      eased
    );
    monitorOne.apply();
    monitorTwo.apply();
  }
  if (t >= 1) {
    if (lampLightingAnimation.lightingTarget) {
      Object.assign(lightingState, lampLightingAnimation.lightingTarget);
      lightingRig.apply();
    }
    if (lampLightingAnimation.monitorTarget) {
      Object.assign(monitorOneState, lampLightingAnimation.monitorTarget);
      Object.assign(monitorTwoState, lampLightingAnimation.monitorTarget);
      monitorOne.apply();
      monitorTwo.apply();
    }
    lampLightingAnimation = null;
  }
}

function mixHexColor(start, end, alpha) {
  const startColor = new THREE.Color(start);
  const endColor = new THREE.Color(end);
  return `#${startColor.lerp(endColor, alpha).getHexString()}`;
}

function beginPhoneRing() {
  if (phoneRingAnimation) {
    return;
  }

  characterAnimation = null;
  poseAnimations.length = 0;
  nextIdleMovementTime = 0;
  pendingIdleMode = null;
  resetIdleHeadYaw();
  resetIdleMonitor();
  smoothReturnTarget = null;
  idleEnabled = false;
  idleMode = null;
  phoneRingButton.disabled = true;
  waveButton.disabled = false;
  phoneRingAnimation = {
    stage: "ring",
    startTime: null,
    phoneStart: {
      x: phoneState.x,
      y: phoneState.y,
      z: phoneState.z,
      rotX: phoneState.rotX,
      rotY: phoneState.rotY,
      rotZ: phoneState.rotZ,
      screenColor: phoneState.screenColor,
      screenGlow: phoneState.screenGlow,
      timeText: phoneState.timeText
    },
    headYawStart: characterState.headYaw
  };
  updateActionButtons();
}

function updatePhoneRing(time) {
  if (!phoneRingAnimation) {
    return;
  }

  if (phoneRingAnimation.startTime === null) {
    phoneRingAnimation.startTime = time;
  }

  const elapsed = time - phoneRingAnimation.startTime;
  const ringDuration = 3000;
  const returnDuration = 850;
  const phoneStart = phoneRingAnimation.phoneStart;

  if (phoneRingAnimation.stage === "ring") {
    const t = Math.min(1, elapsed / ringDuration);
    const headT = easeInOutSine(Math.min(1, elapsed / 550));
    const buzz = Math.sin(time * 0.07);
    const altBuzz = Math.sin(time * 0.105 + 1.4);
    const screenLift = 0.72 + Math.sin(time * 0.018) * 0.035;

    phoneState.x = phoneStart.x + buzz * 0.0018;
    phoneState.y = phoneStart.y + altBuzz * 0.0012;
    phoneState.z = phoneStart.z + altBuzz * 0.0018;
    phoneState.rotX = phoneStart.rotX + altBuzz * 0.12;
    phoneState.rotY = phoneStart.rotY + buzz * 0.12;
    phoneState.rotZ = phoneStart.rotZ + buzz * 0.18;
    phoneState.screenColor = mixHexColor(phoneStart.screenColor, "#dfeaff", screenLift);
    phoneState.screenGlow = phoneStart.screenGlow + 1.05 + Math.sin(time * 0.021) * 0.04;
    phoneState.timeText = "88888";
    characterState.headYaw = lerp(phoneRingAnimation.headYawStart, 61, headT);
    phone.apply();
    character.apply();

    if (t >= 1) {
      phoneRingAnimation.stage = "return";
      phoneRingAnimation.startTime = time;
      phoneRingAnimation.returnStart = {
        x: phoneState.x,
        y: phoneState.y,
        z: phoneState.z,
        rotX: phoneState.rotX,
        rotY: phoneState.rotY,
        rotZ: phoneState.rotZ,
        screenColor: phoneState.screenColor,
        screenGlow: phoneState.screenGlow,
        timeText: phoneState.timeText,
        headYaw: characterState.headYaw
      };
    }
    return;
  }

  const t = Math.min(1, elapsed / returnDuration);
  const eased = easeInOutSine(t);
  phoneState.x = lerp(phoneRingAnimation.returnStart.x, phoneStart.x, eased);
  phoneState.y = lerp(phoneRingAnimation.returnStart.y, phoneStart.y, eased);
  phoneState.z = lerp(phoneRingAnimation.returnStart.z, phoneStart.z, eased);
  phoneState.rotX = lerp(phoneRingAnimation.returnStart.rotX, phoneStart.rotX, eased);
  phoneState.rotY = lerp(phoneRingAnimation.returnStart.rotY, phoneStart.rotY, eased);
  phoneState.rotZ = lerp(phoneRingAnimation.returnStart.rotZ, phoneStart.rotZ, eased);
  phoneState.screenColor = mixHexColor(phoneRingAnimation.returnStart.screenColor, phoneStart.screenColor, eased);
  phoneState.screenGlow = lerp(phoneRingAnimation.returnStart.screenGlow, phoneStart.screenGlow, eased);
  phoneState.timeText = t < 0.5 ? phoneRingAnimation.returnStart.timeText : phoneStart.timeText;
  characterState.headYaw = lerp(phoneRingAnimation.returnStart.headYaw, phoneRingAnimation.headYawStart, eased);
  phone.apply();
  character.apply();

  if (t >= 1) {
    Object.assign(phoneState, phoneStart);
    characterState.headYaw = phoneRingAnimation.headYawStart;
    phone.apply();
    character.apply();
    phoneRingAnimation = null;
    phoneRingButton.disabled = false;
    updateActionButtons();
  }
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
  phoneRingButton.style.opacity = phoneRingAnimation ? "1" : "";
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
  phoneRingAnimation = null;
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
  phoneState.x = phoneConfig.x;
  phoneState.y = phoneConfig.y;
  phoneState.z = phoneConfig.z;
  phoneState.rotX = phoneConfig.rotX;
  phoneState.rotY = phoneConfig.rotY;
  phoneState.rotZ = phoneConfig.rotZ;
  phoneState.screenColor = phoneConfig.screenColor;
  phoneState.screenGlow = phoneConfig.screenGlow;
  phone.apply();
  waveButton.disabled = false;
  phoneRingButton.disabled = false;
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

  phoneRingAnimation = null;
  phoneRingButton.disabled = false;
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
      if (introGreetingStarted && !introGreetingDone) {
        introGreetingDone = true;
        startMainAmbientMode(time);
      }
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
phoneRingButton.addEventListener("click", beginPhoneRing);
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

window.addEventListener("pointermove", (event) => {
  if (atmosphereState.orbitControlsEnabled) {
    return;
  }

  pointerParallaxTarget.x = -(event.clientX / window.innerWidth - 0.5) * 2;
  pointerParallaxTarget.y = -(event.clientY / window.innerHeight - 0.5) * 2;
});

renderer.domElement.addEventListener("pointerdown", (event) => {
  const rect = renderer.domElement.getBoundingClientRect();
  clickPointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  clickPointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(clickPointer, cameraRig.camera);
  if (raycaster.intersectObjects(floorLamp.group.children, true).length > 0) {
    toggleLampLighting();
  }
});

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

function randomTimeBetween(time, min, max) {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  return time + lower + Math.random() * (upper - lower);
}

function updateFaceMotion(time, allowEyeMotion = true) {
  let blink = 0;

  if (characterState.blinkEnabled) {
    if (nextBlinkTime === 0) {
      nextBlinkTime = randomTimeBetween(time, characterState.blinkIntervalMin, characterState.blinkIntervalMax);
    }
    if (blinkStartTime === null && time >= nextBlinkTime) {
      blinkStartTime = time;
    }
    if (blinkStartTime !== null) {
      const progress = Math.min(1, (time - blinkStartTime) / Math.max(1, characterState.blinkDuration));
      blink = Math.sin(progress * Math.PI);
      if (progress >= 1) {
        blinkStartTime = null;
        nextBlinkTime = randomTimeBetween(time, characterState.blinkIntervalMin, characterState.blinkIntervalMax);
      }
    }
  } else {
    blinkStartTime = null;
    nextBlinkTime = 0;
  }

  if (allowEyeMotion && characterState.saccadeEnabled) {
    if (nextSaccadeTime === 0 || time >= nextSaccadeTime) {
      saccadeTargetYaw = (Math.random() * 2 - 1) * characterState.saccadeAmount;
      saccadeTargetPitch = (Math.random() * 2 - 1) * characterState.saccadeAmount * 0.65;
      nextSaccadeTime = randomTimeBetween(time, characterState.saccadeIntervalMin, characterState.saccadeIntervalMax);
    }
  } else {
    saccadeTargetYaw = 0;
    saccadeTargetPitch = 0;
    nextSaccadeTime = 0;
  }

  const smooth = THREE.MathUtils.clamp(characterState.saccadeSmooth, 0.01, 1);
  saccadeYaw += (saccadeTargetYaw - saccadeYaw) * smooth;
  saccadePitch += (saccadeTargetPitch - saccadePitch) * smooth;
  character.setFaceMotion(blink, saccadeYaw, saccadePitch);
}

function animate(time) {
  const animationTime = (animationPausedAt ?? time) - totalAnimationPauseTime;

  if (!atmosphereState.orbitControlsEnabled) {
    const pulseTime = animationTime * atmosphereState.musicPulseSpeed;
    speaker.setConePulse(1 + Math.sin(pulseTime * 0.0048) * 0.045 + Math.sin(pulseTime * 0.013) * 0.018);
    mug.updateSteam(animationTime);
    updatePoseAnimations(animationTime);
    if (idleEnabled && !characterAnimation) {
      queueNextIdleMovement(animationTime);
    }
    updateIdleMonitor(animationTime);
    updateRightMonitorIdle(animationTime);
    updateCharacterAnimation(animationTime);
    updateMusicHeadPulse(animationTime);
    updatePhoneRing(animationTime);
    updateLampLighting(animationTime);
    updateCameraIntro(animationTime);
    updateSceneAutoplay(animationTime);
    updatePointerParallax();
  }

  updateFaceMotion(time, !atmosphereState.orbitControlsEnabled);

  cameraRig.controls.update();
  renderer.render(scene, cameraRig.camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  cameraRig.resize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});
