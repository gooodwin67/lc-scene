import "./style.css";
import * as THREE from "three";
import {
  createControlPanel,
  createFolder,
  createToggleRow,
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
  createChairControls,
  createCharacterRotationControls,
  createCharacterOffsetControls,
  createCharacterSizeControls
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
import { RugScene } from "./scene/objects/RugScene.js";
import { ChairScene } from "./scene/objects/ChairScene.js";
import { CharacterScene } from "./scene/objects/CharacterScene.js";

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
const rug = new RugScene(scene, rugState);
const chair = new ChairScene(scene, chairState);
const character = new CharacterScene(scene, characterState);
const characterDefaultPose = cloneConfig(characterConfig);
const idleMouseBaseState = cloneConfig(mouseConfig);
const idleCharacterBaseState = cloneConfig(characterConfig);

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
idleToggleButton.textContent = "Idle Start/Stop";
actionStack.appendChild(idleToggleButton);
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

let characterAnimation = null;
let idleEnabled = false;
let poseAnimation = null;

const mouseMovementOne = {
  mouse: {
    x: 1.89
  },
  character: {
    leftShoulderX: -79,
    leftShoulderY: -162.5,
    leftShoulderZ: 36,
    leftElbowX: 21,
    leftElbowY: -3,
    leftElbowZ: -15.5
  }
};

const mouseMovementTwo = {
  mouse: {
    z: 2.69
  },
  character: {
    leftShoulderX: -85.5,
    leftShoulderY: -203.5,
    leftShoulderZ: 23.5,
    leftElbowX: 32.5
  }
};

const idleCategories = {
  mouse: [mouseMovementOne, mouseMovementTwo]
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

function collectDiffEntries(current, base, prefix = "") {
  if (current && typeof current === "object" && !Array.isArray(current)) {
    const keys = [...new Set([...Object.keys(base ?? {}), ...Object.keys(current)])];
    return keys.flatMap((key) => collectDiffEntries(current[key], base?.[key], prefix ? `${prefix}.${key}` : key));
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
    mouseStart: pickPoseValues(mouseState, mouseKeys),
    characterStart: pickPoseValues(characterState, characterKeys),
    mouseEnd: pickPoseValues(idleMouseBaseState, mouseKeys),
    characterEnd: pickPoseValues(idleCharacterBaseState, characterKeys),
    onComplete: options.onComplete ?? null
  };
}

function playMouseMovement(movement, options = {}) {
  characterAnimation = null;
  poseAnimation = createPoseAnimation(movement, options);
  waveButton.disabled = false;
}

function pickRandomMouseMovement() {
  const movements = idleCategories.mouse;
  const index = Math.floor(Math.random() * movements.length);
  return movements[index];
}

function queueNextIdleMovement() {
  if (!idleEnabled || characterAnimation || poseAnimation) {
    return;
  }

  playMouseMovement(pickRandomMouseMovement(), {
    onComplete: () => {
      if (!idleEnabled) {
        return;
      }
      poseAnimation = null;
      queueNextIdleMovement();
    }
  });
}

function stopAllAnimations() {
  characterAnimation = null;
  poseAnimation = null;
  idleEnabled = false;
  setMousePoseFromMap(idleMouseBaseState);
  setCharacterPoseFromMap(idleCharacterBaseState);
  waveButton.disabled = false;
  updateActionButtons();
}

function updatePoseAnimation(time) {
  if (!poseAnimation || characterAnimation) {
    return;
  }

  if (poseAnimation.stageStartTime === null) {
    poseAnimation.stageStartTime = time;
  }

  const elapsed = time - poseAnimation.stageStartTime;

  if (poseAnimation.stage === "to") {
    const duration = 1100;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutSine(t);
    if (poseAnimation.mouseKeys.length > 0) {
      setMousePoseFromMap(blendPoseValues(poseAnimation.mouseStart, poseAnimation.mouseTarget, eased));
    }
    if (poseAnimation.characterKeys.length > 0) {
      setCharacterPoseFromMap(blendPoseValues(poseAnimation.characterStart, poseAnimation.characterTarget, eased));
    }

    if (t >= 1) {
      poseAnimation.stage = "hold";
      poseAnimation.stageStartTime = time;
    }
    return;
  }

  if (poseAnimation.stage === "hold") {
    if (poseAnimation.mouseKeys.length > 0) {
      setMousePoseFromMap(poseAnimation.mouseTarget);
    }
    if (poseAnimation.characterKeys.length > 0) {
      setCharacterPoseFromMap(poseAnimation.characterTarget);
    }

    if (elapsed >= 320) {
      poseAnimation.stage = "from";
      poseAnimation.stageStartTime = time;
    }
    return;
  }

  if (poseAnimation.stage === "from") {
    const duration = 1200;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutSine(t);
    if (poseAnimation.mouseKeys.length > 0) {
      setMousePoseFromMap(blendPoseValues(poseAnimation.mouseTarget, poseAnimation.mouseEnd, eased));
    }
    if (poseAnimation.characterKeys.length > 0) {
      setCharacterPoseFromMap(blendPoseValues(poseAnimation.characterTarget, poseAnimation.characterEnd, eased));
    }

    if (t >= 1) {
      const onComplete = poseAnimation.onComplete;
      if (poseAnimation.mouseKeys.length > 0) {
        setMousePoseFromMap(poseAnimation.mouseEnd);
      }
      if (poseAnimation.characterKeys.length > 0) {
        setCharacterPoseFromMap(poseAnimation.characterEnd);
      }
      poseAnimation = null;
      if (onComplete) {
        onComplete();
      }
    }
  }
}

function beginCharacterGreeting() {
  if (characterAnimation) {
    return;
  }

  poseAnimation = null;
  idleEnabled = false;
  updateActionButtons();
  waveButton.disabled = true;

  const startPose = {
    torsoYaw: characterState.torsoYaw,
    headYaw: characterState.headYaw,
    leftShoulderZ: characterState.leftShoulderZ,
    leftElbowX: characterState.leftElbowX
  };

  const phaseOneTarget = {
    torsoYaw: -60,
    headYaw: -65,
    leftShoulderZ: 149,
    leftElbowX: 1.5
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
    const duration = 1200;
    const t = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(t);
    setCharacterPoseFromMap({
      torsoYaw: lerp(characterAnimation.startPose.torsoYaw, characterAnimation.phaseOneTarget.torsoYaw, eased),
      headYaw: lerp(characterAnimation.startPose.headYaw, characterAnimation.phaseOneTarget.headYaw, eased),
      leftShoulderZ: lerp(characterAnimation.startPose.leftShoulderZ, characterAnimation.phaseOneTarget.leftShoulderZ, eased),
      leftElbowX: lerp(characterAnimation.startPose.leftElbowX, characterAnimation.phaseOneTarget.leftElbowX, eased)
    });

    if (t >= 1) {
      characterAnimation.stage = "wave";
      characterAnimation.startTime = time;
      characterAnimation.waveIndex = 0;
      characterAnimation.waveStartValue = 1.5;
    }
    return;
  }

  if (characterAnimation.stage === "wave") {
    const duration = 240;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutSine(t);
    const target = characterAnimation.waveValues[characterAnimation.waveIndex];
    setCharacterPoseFromMap({
      torsoYaw: characterAnimation.phaseOneTarget.torsoYaw,
      headYaw: characterAnimation.phaseOneTarget.headYaw,
      leftShoulderZ: characterAnimation.phaseOneTarget.leftShoulderZ,
      leftElbowX: lerp(characterAnimation.waveStartValue, target, eased)
    });

    if (t >= 1) {
      characterAnimation.waveStartValue = target;
      characterAnimation.waveIndex += 1;
      characterAnimation.startTime = time;

      if (characterAnimation.waveIndex >= characterAnimation.waveValues.length) {
        characterAnimation.stage = "return";
        characterAnimation.startTime = time;
      }
    }
    return;
  }

  if (characterAnimation.stage === "return") {
    const duration = 900;
    const t = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(t);
    setCharacterPoseFromMap({
      torsoYaw: lerp(characterAnimation.phaseOneTarget.torsoYaw, characterDefaultPose.torsoYaw, eased),
      headYaw: lerp(characterAnimation.phaseOneTarget.headYaw, characterDefaultPose.headYaw, eased),
      leftShoulderZ: lerp(characterAnimation.phaseOneTarget.leftShoulderZ, characterDefaultPose.leftShoulderZ, eased),
      leftElbowX: lerp(characterAnimation.waveStartValue, characterDefaultPose.leftElbowX, eased)
    });

    if (t >= 1) {
      setCharacterPoseFromMap({
        torsoYaw: characterDefaultPose.torsoYaw,
        headYaw: characterDefaultPose.headYaw,
        leftShoulderZ: characterDefaultPose.leftShoulderZ,
        leftElbowX: characterDefaultPose.leftElbowX
      });
      characterAnimation = null;
      waveButton.disabled = false;
      if (idleEnabled) {
        queueNextIdleMovement();
      }
    }
  }
}

function toggleIdleLoop() {
  if (idleEnabled) {
    stopAllAnimations();
    return;
  }

  characterAnimation = null;
  poseAnimation = null;
  idleEnabled = true;
  setMousePoseFromMap(idleMouseBaseState);
  setCharacterPoseFromMap(idleCharacterBaseState);
  updateActionButtons();
  queueNextIdleMovement();
}

waveButton.addEventListener("click", beginCharacterGreeting);
mouseOneButton.addEventListener("click", () => {
  idleEnabled = false;
  updateActionButtons();
  playMouseMovement(mouseMovementOne);
});
mouseTwoButton.addEventListener("click", () => {
  idleEnabled = false;
  updateActionButtons();
  playMouseMovement(mouseMovementTwo);
});
idleToggleButton.addEventListener("click", toggleIdleLoop);
stopButton.addEventListener("click", stopAllAnimations);
updateActionButtons();

function animate(time) {
  updatePoseAnimation(time);
  if (idleEnabled && !characterAnimation && !poseAnimation) {
    queueNextIdleMovement();
  }
  updateCharacterAnimation(time);
  cameraRig.controls.update();
  renderer.render(scene, cameraRig.camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  cameraRig.resize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});
