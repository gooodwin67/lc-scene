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

const controlPanel = createControlPanel("Board Controls");
document.body.appendChild(controlPanel);

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

function animate() {
  cameraRig.controls.update();
  renderer.render(scene, cameraRig.camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  cameraRig.resize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});
