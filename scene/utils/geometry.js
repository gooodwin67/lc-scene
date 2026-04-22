import * as THREE from "three";

export const FRAME_INSET = 0.32;

export function radians(value) {
  return THREE.MathUtils.degToRad(value);
}

export function roundedRectShape(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

export function makeFrameGeometry(frameInset = FRAME_INSET) {
  const outer = roundedRectShape(6.6, 4.25, 0.42);
  const innerWidth = 6.6 - frameInset * 2;
  const innerHeight = 4.25 - frameInset * 2;
  const innerRadius = Math.max(0.18, 0.42 - frameInset * 0.38);
  const inner = roundedRectShape(innerWidth, innerHeight, innerRadius);
  outer.holes.push(inner);

  const geometry = new THREE.ExtrudeGeometry(outer, {
    depth: 0.18,
    bevelEnabled: false,
    curveSegments: 28
  });
  geometry.center();
  return geometry;
}

export function makeCorkGeometry(frameInset = FRAME_INSET) {
  const corkInset = Math.max(0.01, frameInset - 0.01);
  const corkWidth = 6.6 - corkInset * 2;
  const corkHeight = 4.25 - corkInset * 2;
  const corkRadius = Math.max(0.18, 0.42 - corkInset * 0.38);

  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(corkWidth, corkHeight, corkRadius), {
    depth: 0.08,
    bevelEnabled: false,
    curveSegments: 28
  });
  geometry.center();
  return geometry;
}

export function makeShelfGeometry(width, height, depth, radius) {
  const shape = roundedRectShape(width, height, radius);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments: 24
  });
  geometry.center();
  return geometry;
}

export function makePictureFrameGeometry(width, height, depth, inset) {
  const outer = roundedRectShape(width, height, 0.22);
  const inner = roundedRectShape(width - inset * 2, height - inset * 2, 0.16);
  outer.holes.push(inner);
  const geometry = new THREE.ExtrudeGeometry(outer, { depth, bevelEnabled: false, curveSegments: 24 });
  geometry.center();
  return geometry;
}

export function makePictureInnerGeometry(width, height, depth, inset) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width - inset * 2.1, height - inset * 2.1, 0.14), {
    depth,
    bevelEnabled: false,
    curveSegments: 24
  });
  geometry.center();
  return geometry;
}

export function makeTrianglePlateGeometry(width, height, depth) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, -height / 2);
  shape.lineTo(0, height / 2);
  shape.lineTo(width / 2, -height / 2);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments: 8
  });
  geometry.center();
  return geometry;
}

export function makeDeskTopGeometry(mainWidth, mainDepth, returnWidth, returnDepth, innerCut, thickness, radius) {
  const shape = new THREE.Shape();
  const left = -mainWidth / 2;
  const right = mainWidth / 2;
  const back = -mainDepth / 2;
  const mainFront = mainDepth / 2;
  const returnRight = left + returnWidth;
  const returnFront = returnDepth / 2;
  const safeRadius = Math.max(0.02, Math.min(radius, mainWidth * 0.18, returnDepth * 0.18, returnWidth * 0.18, mainDepth * 0.18));
  const innerRadius = Math.max(0.04, Math.min(safeRadius * 0.8, innerCut * 0.35));
  const cutRight = Math.min(right - safeRadius - 0.05, Math.max(returnRight + innerRadius, right - innerCut));

  shape.moveTo(left + safeRadius, back);
  shape.lineTo(right - safeRadius, back);
  shape.quadraticCurveTo(right, back, right, back + safeRadius);
  shape.lineTo(right, mainFront - safeRadius);
  shape.quadraticCurveTo(right, mainFront, right - safeRadius, mainFront);
  shape.lineTo(cutRight + innerRadius, mainFront);
  shape.quadraticCurveTo(cutRight, mainFront, cutRight, mainFront + innerRadius);
  shape.lineTo(cutRight, returnFront - safeRadius);
  shape.quadraticCurveTo(cutRight, returnFront, cutRight - safeRadius, returnFront);
  shape.lineTo(left + safeRadius, returnFront);
  shape.quadraticCurveTo(left, returnFront, left, returnFront - safeRadius);
  shape.lineTo(left, back + safeRadius);
  shape.quadraticCurveTo(left, back, left + safeRadius, back);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: thickness,
    bevelEnabled: false,
    curveSegments: 16
  });
  geometry.center();
  return geometry;
}

export function makePotGeometry(radius, height, neck, bulge) {
  const points = [
    new THREE.Vector2(0.01, 0),
    new THREE.Vector2(radius * 0.72, 0.02 * height),
    new THREE.Vector2(radius * bulge, 0.28 * height),
    new THREE.Vector2(radius * 1.04, 0.55 * height),
    new THREE.Vector2(radius * 0.92, 0.82 * height),
    new THREE.Vector2(neck, 0.94 * height),
    new THREE.Vector2(neck * 1.03, height)
  ];
  const geometry = new THREE.LatheGeometry(points, 48);
  geometry.center();
  return geometry;
}
