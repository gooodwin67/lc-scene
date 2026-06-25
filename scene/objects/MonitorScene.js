import * as THREE from "three";
import { roundedRectShape, radians } from "../utils/geometry.js";

function makeRoundedPlate(width, height, depth, radius) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: false,
    curveSegments: 20
  });
  geometry.center();
  return geometry;
}

function makeScreenGeometry(width, height, depth, inset, radius) {
  const geometry = new THREE.ExtrudeGeometry(
    roundedRectShape(width - inset * 2, height - inset * 2, Math.max(0.08, radius - inset * 0.5)),
    {
      depth,
      bevelEnabled: false,
      curveSegments: 20
    }
  );
  geometry.center();
  return geometry;
}

function createCodeLine(width, color) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(width, 0.045, 0.01),
    new THREE.MeshStandardMaterial({ color, roughness: 0.92 })
  );
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}

function clearChildren(group) {
  while (group.children.length > 0) {
    const child = group.children.pop();
    group.remove(child);
    if (child.geometry) {
      child.geometry.dispose();
    }
    if (Array.isArray(child.material)) {
      child.material.forEach((material) => material.dispose());
    } else if (child.material) {
      child.material.dispose();
    }
  }
}

export class MonitorScene {
  constructor(scene, config) {
    this.config = config;
    this.group = new THREE.Group();

    this.frameMaterial = new THREE.MeshStandardMaterial({ color: 0x6c677f, roughness: 0.88 });
    this.screenMaterial = new THREE.MeshStandardMaterial({ color: 0x353a41, roughness: 0.95 });
    this.standMaterial = new THREE.MeshStandardMaterial({ color: 0x534d63, roughness: 0.9 });

    this.frame = new THREE.Mesh(
      makeRoundedPlate(config.width, config.height, config.depth, config.radius),
      this.frameMaterial
    );
    this.frame.name = "monitor-frame";
    this.frame.castShadow = true;
    this.frame.receiveShadow = true;
    this.group.add(this.frame);

    this.screen = new THREE.Mesh(
      makeScreenGeometry(config.width, config.height, config.screenDepth, config.screenInset, config.radius),
      this.screenMaterial
    );
    this.screen.name = "monitor-screen";
    this.screen.receiveShadow = true;
    this.group.add(this.screen);
    this.content = new THREE.Group();
    this.content.name = "monitor-content";
    this.screen.add(this.content);

    this.stem = new THREE.Mesh(
      new THREE.BoxGeometry(config.standWidth, config.standHeight, config.standDepth),
      this.standMaterial
    );
    this.stem.name = "monitor-stem";
    this.stem.castShadow = true;
    this.stem.receiveShadow = true;
    this.group.add(this.stem);

    this.base = new THREE.Mesh(
      new THREE.BoxGeometry(config.baseWidth, config.baseHeight, config.baseDepth),
      this.standMaterial
    );
    this.base.name = "monitor-base";
    this.base.castShadow = true;
    this.base.receiveShadow = true;
    this.group.add(this.base);

    scene.add(this.group);
    this.apply();
  }

  buildCodeContent() {
    const baseColors = [
      0xd89c38, 0xb7d74f, 0xaf71e6, 0x8b9098,
      0xe58f98, 0xd89c38, 0xb7d74f, 0xaf71e6,
      0x8b9098, 0xd89c38, 0xb7d74f, 0xe58f98,
      0xaf71e6, 0xb7d74f
    ];
    const baseWidths = [0.92, 1.18, 0.74, 0.52, 0.66, 1.08, 0.82, 1.26, 0.64, 1.02, 0.78, 0.56, 0.88, 0.68];
    const indents = [0, 0.14, 0.28, 0.28, 0.14, 0, 0.16, 0.30, 0.30, 0.16, 0, 0.14, 0.28, 0];
    const variant = Math.floor(this.config.codeVariant ?? 0);
    const widthScale = this.config.codeWidthScale ?? 1;
    const lineScroll = Math.floor(this.config.codeScroll ?? 0);
    const activeLine = Math.floor(this.config.codeActiveLine ?? baseWidths.length - 1) % baseWidths.length;
    const typingProgress = this.config.codeTypingProgress ?? 1;
    const colors = baseColors.map((_, index) => baseColors[(index + variant) % baseColors.length]);
    const widths = baseWidths.map((_, index) => baseWidths[(index + variant * 3) % baseWidths.length] * widthScale);
    const startX = -this.config.width * 0.34 + (this.config.codeX ?? 0);
    const startY = this.config.height * 0.26 + (this.config.codeY ?? 0);
    let cursorX = startX;
    let cursorY = startY;

    colors.forEach((color, index) => {
      const sourceIndex = (index + lineScroll) % colors.length;
      const wrappedOffset = index;
      const isActiveLine = index === activeLine;
      const width = widths[sourceIndex] * (isActiveLine ? Math.max(0.16, typingProgress) : 1);
      const indent = indents[(sourceIndex + variant) % indents.length];
      const line = createCodeLine(width, colors[sourceIndex]);
      const lineX = startX + indent;
      const lineY = startY - wrappedOffset * this.config.lineGap;
      line.name = `monitor-line-${index + 1}`;
      line.position.set(
        lineX + width / 2,
        lineY,
        this.config.screenDepth * 0.7
      );
      this.content.add(line);

      if (isActiveLine) {
        cursorX = lineX + width + 0.04;
        cursorY = lineY;
      }
    });

    if (this.config.codeCursorVisible) {
      const cursor = new THREE.Mesh(
        new THREE.BoxGeometry(0.025, 0.065, 0.01),
        new THREE.MeshStandardMaterial({ color: 0xf4f0dc, roughness: 0.92 })
      );
      cursor.position.set(cursorX, cursorY, this.config.screenDepth * 0.72);
      this.content.add(cursor);
    }
  }

  buildUiContent() {
    const sidebarMaterial = new THREE.MeshStandardMaterial({ color: 0x2b2f35, roughness: 0.95 });
    const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x353a41, roughness: 0.95 });
    const itemMaterial = new THREE.MeshStandardMaterial({ color: 0x3a3f45, roughness: 0.95 });
    const blueMaterial = new THREE.MeshStandardMaterial({ color: 0x6f9ad8, roughness: 0.92 });
    const redMaterial = new THREE.MeshStandardMaterial({ color: 0xd35c63, roughness: 0.92 });
    const activeIconIndex = this.config.uiActiveIconIndex ?? 0;
    const dotIconIndex = this.config.uiDotIconIndex ?? activeIconIndex;
    const iconPositions = [];

    const sidebar = new THREE.Mesh(
      new THREE.BoxGeometry(this.config.width * (this.config.uiSidebarWidth ?? 0.06), this.config.height * 0.82, 0.01),
      sidebarMaterial
    );
    sidebar.position.set(this.config.uiSidebarX ?? -this.config.width * 0.35, 0, this.config.screenDepth * 0.7);
    this.content.add(sidebar);

    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(this.config.width * (this.config.uiPanelWidth ?? 0.13), this.config.height * 0.82, 0.01),
      panelMaterial
    );
    panel.position.set(this.config.uiPanelX ?? -this.config.width * 0.20, 0, this.config.screenDepth * 0.68);
    this.content.add(panel);

    const topIconSize = this.config.uiTopIconWidth ?? 0.22;
    const topIcon = new THREE.Mesh(
      new THREE.BoxGeometry(topIconSize, topIconSize, 0.01),
      activeIconIndex === 0 ? blueMaterial : itemMaterial
    );
    topIcon.position.set(this.config.uiTopIconX ?? -this.config.width * 0.43, this.config.uiTopIconY ?? this.config.height * 0.28, this.config.screenDepth * 0.75);
    this.content.add(topIcon);
    iconPositions.push({ x: topIcon.position.x, y: topIcon.position.y });

    for (let index = 0; index < 3; index += 1) {
      const iconSize = this.config.uiIconWidth ?? 0.18;
      const icon = new THREE.Mesh(
        new THREE.BoxGeometry(iconSize, iconSize, 0.01),
        activeIconIndex === index + 1 ? blueMaterial : itemMaterial
      );
      icon.position.set(
        this.config.uiIconX ?? -this.config.width * 0.43,
        (this.config.uiIconStartY ?? this.config.height * 0.02) - index * (this.config.uiIconGap ?? 0.30),
        this.config.screenDepth * 0.74
      );
      this.content.add(icon);
      iconPositions.push({ x: icon.position.x, y: icon.position.y });
    }

    if (this.config.uiDotVisible ?? true) {
      const dotTarget = iconPositions[THREE.MathUtils.clamp(Math.floor(dotIconIndex), 0, iconPositions.length - 1)];
      const dot = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.01, 18), redMaterial);
      dot.rotation.x = Math.PI / 2;
      dot.position.set(
        dotTarget.x + (this.config.uiDotX ?? 0),
        dotTarget.y + (this.config.uiDotY ?? 0),
        this.config.screenDepth * 0.76
      );
      this.content.add(dot);
    }

    const widthScale = this.config.uiLinesWidthScale ?? 1;
    const lineWidths = [0.52, 0.42, 0.48, 0.34, 0.44, 0.28, 0.38].map((value) => value * widthScale);
    const lineScroll = this.config.uiLinesScroll ?? 0;
    lineWidths.forEach((width, index) => {
      const line = createCodeLine(width, 0xc0c4ca);
      const wrappedOffset = (index + lineScroll) % lineWidths.length;
      line.position.set(
        (this.config.uiLinesX ?? -this.config.width * 0.07) + width * 0.5,
        (this.config.uiLinesY ?? this.config.height * 0.31) - wrappedOffset * (this.config.uiLineGap ?? 0.12),
        this.config.screenDepth * 0.76
      );
      this.content.add(line);
    });
  }

  buildContent() {
    clearChildren(this.content);

    if (this.config.screenMode === "ui") {
      this.buildUiContent();
      return;
    }

    this.buildCodeContent();
  }

  apply() {
    this.frame.geometry.dispose();
    this.frame.geometry = makeRoundedPlate(this.config.width, this.config.height, this.config.depth, this.config.radius);

    this.screen.geometry.dispose();
    this.screen.geometry = makeScreenGeometry(
      this.config.width,
      this.config.height,
      this.config.screenDepth,
      this.config.screenInset,
      this.config.radius
    );
    this.screen.position.z = this.config.depth * 0.12;

    this.stem.geometry.dispose();
    this.stem.geometry = new THREE.BoxGeometry(this.config.standWidth, this.config.standHeight, this.config.standDepth);
    this.stem.position.set(0, -this.config.height * 0.52, -this.config.standOffsetZ);
    this.stem.rotation.x = radians(this.config.standRotX);
    this.stem.rotation.z = radians(this.config.standRotZ);

    this.base.geometry.dispose();
    this.base.geometry = new THREE.BoxGeometry(this.config.baseWidth, this.config.baseHeight, this.config.baseDepth);
    this.base.position.set(0, -this.config.height * 0.82 + this.config.baseOffsetY, this.config.baseOffsetZ);
    this.base.rotation.x = radians(this.config.baseRotX);
    this.base.rotation.z = radians(this.config.baseRotZ);

    this.buildContent();

    this.group.position.set(this.config.x, this.config.y, this.config.z);
    this.group.rotation.x = radians(this.config.rotX);
    this.group.rotation.y = radians(this.config.rotY);
    this.group.rotation.z = radians(this.config.rotZ);
  }

}
