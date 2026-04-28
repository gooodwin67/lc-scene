import "./style.css";
import * as THREE from "three";
import {
  createControlPanel,
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
  createChairControls
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

const controlPanel = createControlPanel("Board Controls");
document.body.appendChild(controlPanel);

createToggleRow(controlPanel, "Fog", atmosphereState.fogEnabled, (next) => {
  atmosphereState.fogEnabled = next;
  scene.fog = next ? new THREE.Fog(0xfbf4e8, 14, 28) : null;
});

createBoardTransformControls(controlPanel, boardState, () => board.apply(), true);
createCameraControls(controlPanel, cameraState, () => cameraRig.apply(), true);
createFloorControls(controlPanel, roomState.floor, () => room.applyFloor(), true);
createRugControls(controlPanel, rugState, () => rug.apply(), true);
createLightingControls(controlPanel, lightingState, () => lightingRig.apply(), true);
createDeskControls(controlPanel, deskState, () => desk.apply(), true);
createMonitorControls(controlPanel, "Monitor 1", monitorOneState, () => monitorOne.apply(), true);
createMonitorControls(controlPanel, "Monitor 2", monitorTwoState, () => monitorTwo.apply(), true);
createFloorPotControls(controlPanel, floorPotState, () => floorPlant.applyPot(), true);
createFloorPlantControls(controlPanel, floorPlantState, () => floorPlant.applyPlant(), true);
createKeyboardControls(controlPanel, keyboardState, () => inputDevices.applyKeyboard(), true);
createMouseControls(controlPanel, mouseState, () => inputDevices.applyMouse(), true);
createSpeakerControls(controlPanel, speakerState, () => speaker.apply(), true);
createChairControls(controlPanel, chairState, () => chair.apply(), true);
createShelfControls(controlPanel, shelfState, () => shelf.applyShelfTransform(), true);
createPictureControls(controlPanel, pictureState, () => picture.apply(), true);
createPotControls(controlPanel, potState, () => shelf.applyPotTransform(), true);
createCactusControls(controlPanel, cactusState, () => shelf.applyCactusTransform(), true);
createBooksControls(controlPanel, shelf.getBookSections(), true);
createPapersControls(controlPanel, board.getPaperSections(), true);
createPinsControls(controlPanel, board.getPinSections(), true);

function animate() {
  cameraRig.controls.update();
  renderer.render(scene, cameraRig.camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  cameraRig.resize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});
