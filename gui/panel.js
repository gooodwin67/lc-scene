export function createControlPanel(title) {
  const panel = document.createElement("aside");
  panel.className = "control-panel";
  panel.innerHTML = `<h2>${title}</h2>`;
  return panel;
}

export function createToggleRow(panel, label, value, onChange) {
  const row = document.createElement("div");
  row.className = "control-row";

  const labelEl = document.createElement("label");
  labelEl.textContent = label;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = value;
  input.style.justifySelf = "start";

  const spacer = document.createElement("output");
  spacer.textContent = value ? "on" : "off";

  input.addEventListener("change", () => {
    spacer.textContent = input.checked ? "on" : "off";
    onChange(input.checked);
  });

  row.append(labelEl, input, spacer);
  panel.appendChild(row);
  return row;
}

function createSliderRow(label, min, max, step, value, onChange) {
  const row = document.createElement("div");
  row.className = "control-row";
  const decimals = String(step).includes(".")
    ? String(step).split(".")[1].replace(/0+$/, "").length
    : 0;
  const formatValue = (next) => Number(next).toFixed(Math.max(0, decimals));

  const labelEl = document.createElement("label");
  labelEl.textContent = label;

  const input = document.createElement("input");
  input.type = "range";
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);

  const output = document.createElement("output");
  output.value = formatValue(value);
  output.textContent = output.value;

  input.addEventListener("input", () => {
    const next = Number(input.value);
    output.value = formatValue(next);
    output.textContent = output.value;
    onChange(next);
  });

  row.append(labelEl, input, output);
  return row;
}

function createColorRow(label, value, onChange) {
  const row = document.createElement("div");
  row.className = "control-row";

  const labelEl = document.createElement("label");
  labelEl.textContent = label;

  const input = document.createElement("input");
  input.type = "color";
  input.value = value;

  const output = document.createElement("output");
  output.value = value;
  output.textContent = value;

  input.addEventListener("input", () => {
    output.value = input.value;
    output.textContent = input.value;
    onChange(input.value);
  });

  row.append(labelEl, input, output);
  return row;
}

function createGroup(panel, title, collapsed = true) {
  const section = document.createElement("section");
  section.className = "control-group";

  const details = document.createElement("details");
  details.open = !collapsed;

  const summary = document.createElement("summary");
  const heading = document.createElement("h3");
  heading.textContent = title;
  summary.appendChild(heading);

  const body = document.createElement("div");
  body.className = "control-body";

  details.append(summary, body);
  section.appendChild(details);
  panel.appendChild(section);
  return body;
}

export function createFolder(panel, title, collapsed = true) {
  return createGroup(panel, title, collapsed);
}

export function createPaperControls(panel, title, mesh, config, applyPaperTransform, collapsed = true) {
  const body = createGroup(panel, title, collapsed);
  const fields = [
    ["x", -3, 3, 0.01],
    ["y", -2, 2, 0.01],
    ["z", -0.3, 0.5, 0.01],
    ["rotX", -35, 5, 0.5],
    ["rotZ", -40, 40, 0.5]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyPaperTransform(mesh, config);
      })
    );
  });
}

export function createPapersControls(panel, sections, collapsed = true) {
  const body = createGroup(panel, "Papers", collapsed);

  sections.forEach(({ title, mesh, config, applyPaperTransform }) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "4px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    const fields = [
      ["x", -3, 3, 0.01],
      ["y", -2, 2, 0.01],
      ["z", -0.3, 0.5, 0.01],
      ["rotX", -35, 5, 0.5],
      ["rotZ", -40, 40, 0.5]
    ];

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyPaperTransform(mesh, config);
        })
      );
    });
  });
}

export function createPinsControls(panel, sections, collapsed = true) {
  const body = createGroup(panel, "Pins", collapsed);

  sections.forEach(({ title, config, applyPinTransform }) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "4px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    const fields = [
      ["x", -3, 3, 0.01],
      ["y", -2, 2, 0.01],
      ["z", -2, 2, 0.01],
      ["topRadius", 0.08, 0.4, 0.01],
      ["topHeight", 0.03, 0.2, 0.01],
      ["stemRadius", 0.04, 0.2, 0.01],
      ["stemHeight", 0.08, 0.5, 0.01],
      ["baseRadius", 0.08, 0.4, 0.01],
      ["baseHeight", 0.03, 0.2, 0.01],
      ["pinRadius", 0.005, 0.05, 0.005],
      ["pinHeight", 0.08, 0.5, 0.01],
      ["pinInset", 0, 0.3, 0.01]
    ];

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyPinTransform();
        })
      );
    });
  });
}

export function createPinControls(panel, title, config, applyPinTransform, collapsed = false) {
  const body = createGroup(panel, title, collapsed);
  const fields = [
    ["x", -3, 3, 0.01],
    ["y", -2, 2, 0.01],
    ["z", -2, 2, 0.01],
    ["topRadius", 0.08, 0.4, 0.01],
    ["topHeight", 0.03, 0.2, 0.01],
    ["stemRadius", 0.04, 0.2, 0.01],
    ["stemHeight", 0.08, 0.5, 0.01],
    ["baseRadius", 0.08, 0.4, 0.01],
    ["baseHeight", 0.03, 0.2, 0.01],
    ["pinRadius", 0.005, 0.05, 0.005],
    ["pinHeight", 0.08, 0.5, 0.01],
    ["pinInset", 0, 0.3, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyPinTransform();
      })
    );
  });
}

export function createLightingControls(panel, config, applyLighting, collapsed = false) {
  const body = createGroup(panel, "Lighting", collapsed);
  const fields = [
    ["ambient", 0, 4, 0.05],
    ["key", 0, 2, 0.05],
    ["fill", 0, 3, 0.05],
    ["front", 0, 2, 0.05],
    ["shadowRadius", 0, 30, 1],
    ["blurSamples", 0, 32, 1],
    ["bias", -0.002, 0.002, 0.00005],
    ["normalBias", 0, 0.05, 0.001]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyLighting();
      })
    );
  });
}

export function createCameraControls(panel, config, applyCamera, collapsed = true) {
  const body = createGroup(panel, "Camera", collapsed);
  const fields = [
    ["x", -30, 30, 0.01],
    ["y", -30, 30, 0.01],
    ["z", -30, 30, 0.01],
    ["targetX", -20, 20, 0.01],
    ["targetY", -20, 20, 0.01],
    ["targetZ", -20, 20, 0.01],
    ["fov", 10, 90, 1]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyCamera();
      })
    );
  });
}

export function createFloorControls(panel, config, applyFloorTransform, collapsed = true) {
  const body = createGroup(panel, "Floor", collapsed);
  const fields = [
    ["x", -20, 20, 0.01],
    ["y", -20, 20, 0.01],
    ["z", -20, 20, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 1, 40, 0.01],
    ["height", 1, 40, 0.01],
    ["tone", 0.4, 1.8, 0.01],
    ["roughness", 0, 1, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyFloorTransform();
      })
    );
  });
}

export function createRugControls(panel, config, applyRugTransform, collapsed = true) {
  const body = createGroup(panel, "Rug", collapsed);
  const fields = [
    ["x", -20, 20, 0.01],
    ["y", -20, 20, 0.0001],
    ["z", -20, 20, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 1, 30, 0.01],
    ["height", 1, 30, 0.01],
    ["depth", 0.01, 0.2, 0.001],
    ["radius", 0.05, 2, 0.01],
    ["inset1", 0.05, 5, 0.01],
    ["inset2", 0.05, 8, 0.01],
    ["inset3", 0.05, 12, 0.01],
    ["radiusFalloff", 0, 0.5, 0.005],
    ["layerLift", 0, 0.02, 0.001]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyRugTransform();
      })
    );
  });
}

export function createBoardTransformControls(panel, config, applyBoardTransform, collapsed = false) {
  const body = createGroup(panel, "Board", collapsed);
  const fields = [
    ["x", -5, 5, 0.01],
    ["y", -5, 5, 0.01],
    ["z", -5, 5, 0.01],
    ["rotX", -45, 45, 0.5],
    ["rotY", -45, 45, 0.5],
    ["rotZ", -45, 45, 0.5]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyBoardTransform();
      })
    );
  });
}

export function createShelfControls(panel, config, applyShelfTransform, collapsed = true) {
  const body = createGroup(panel, "Shelf", collapsed);
  const fields = [
    ["x", -8, 8, 0.01],
    ["y", -5, 5, 0.01],
    ["z", -5, 5, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.4, 4, 0.01],
    ["height", 0.1, 1.5, 0.01],
    ["depth", 0.05, 0.8, 0.01],
    ["radius", 0.01, 0.4, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyShelfTransform();
      })
    );
  });
}

export function createPotControls(panel, config, applyPotTransform, collapsed = true) {
  const body = createGroup(panel, "Pot", collapsed);
  const fields = [
    ["x", -3, 3, 0.01],
    ["y", -3, 3, 0.01],
    ["z", -1, 1, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["radius", 0.08, 0.8, 0.01],
    ["height", 0.1, 1.2, 0.01],
    ["neck", 0.02, 0.5, 0.01],
    ["bulge", 0.5, 1.8, 0.01],
    ["soilRadius", 0.02, 0.6, 0.01],
    ["soilHeight", 0.01, 0.6, 0.01],
    ["soilOffsetY", -0.2, 0.2, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyPotTransform();
      })
    );
  });
}

export function createCactusControls(panel, config, applyCactusTransform, collapsed = true) {
  const body = createGroup(panel, "Cactus", collapsed);
  const fields = [
    ["x", -2, 2, 0.01],
    ["y", -2, 2, 0.01],
    ["z", -1, 1, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["mainRadius", 0.02, 0.5, 0.01],
    ["mainHeight", 0.1, 1.5, 0.01],
    ["mainLean", -0.5, 0.5, 0.01],
    ["armRadius", 0.02, 0.4, 0.01],
    ["armHeight", 0.05, 1.0, 0.01],
    ["armOffsetX", -1, 1, 0.01],
    ["armOffsetY", -1, 1, 0.01],
    ["armLean", -1, 1, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyCactusTransform();
      })
    );
  });
}

export function createBooksControls(panel, sections, collapsed = true) {
  const body = createGroup(panel, "Books", collapsed);
  const fields = [
    ["x", -3, 3, 0.01],
    ["y", -3, 3, 0.01],
    ["z", -1, 1, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.05, 1.0, 0.01],
    ["height", 0.1, 2.0, 0.01],
    ["depth", 0.05, 1.0, 0.01],
    ["pagesX", -1, 1, 0.01],
    ["pagesY", -1, 1, 0.01],
    ["pagesZ", -1, 1, 0.01],
    ["pagesWidth", 0.01, 1, 0.01],
    ["pagesHeight", 0.01, 2, 0.01],
    ["pagesDepth", 0.01, 1, 0.01],
    ["spineX", -1, 1, 0.01],
    ["spineY", -1, 1, 0.01],
    ["spineZ", -1, 1, 0.01],
    ["spineWidth", 0.01, 1, 0.01],
    ["spineHeight", 0.01, 2, 0.01],
    ["spineDepth", 0.01, 1, 0.01],
    ["spineRotY", -180, 180, 0.5]
  ];

  sections.forEach(({ title, config, applyBookTransform }) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "4px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyBookTransform();
        })
      );
    });
  });
}

export function createBookControls(panel, config, applyBookTransform, collapsed = true) {
  const body = createGroup(panel, "Book", collapsed);
  const fields = [
    ["x", -3, 3, 0.01],
    ["y", -3, 3, 0.01],
    ["z", -1, 1, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.05, 1.0, 0.01],
    ["height", 0.1, 2.0, 0.01],
    ["depth", 0.05, 1.0, 0.01],
    ["pagesX", -1, 1, 0.01],
    ["pagesY", -1, 1, 0.01],
    ["pagesZ", -1, 1, 0.01],
    ["pagesWidth", 0.01, 1, 0.01],
    ["pagesHeight", 0.01, 2, 0.01],
    ["pagesDepth", 0.01, 1, 0.01],
    ["spineX", -1, 1, 0.01],
    ["spineY", -1, 1, 0.01],
    ["spineZ", -1, 1, 0.01],
    ["spineWidth", 0.01, 1, 0.01],
    ["spineHeight", 0.01, 2, 0.01],
    ["spineDepth", 0.01, 1, 0.01],
    ["spineRotY", -180, 180, 0.5]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyBookTransform();
      })
    );
  });
}

export function createPictureControls(panel, config, applyPictureTransform, collapsed = true) {
  const body = createGroup(panel, "Picture", collapsed);
  const fields = [
    ["x", -10, 10, 0.01],
    ["y", -5, 5, 0.01],
    ["z", -5, 5, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.5, 4, 0.01],
    ["height", 0.3, 3, 0.01],
    ["depth", 0.02, 0.5, 0.01],
    ["innerInset", 0.02, 0.4, 0.01],
    ["sunX", -1, 1, 0.01],
    ["sunY", -1, 1, 0.01],
    ["sunRadius", 0.02, 0.6, 0.01],
    ["mountainAX", -1.5, 1.5, 0.01],
    ["mountainAY", -1.5, 1.5, 0.01],
    ["mountainAScaleX", 0.1, 3, 0.01],
    ["mountainAScaleY", 0.1, 3, 0.01],
    ["mountainAScaleZ", 0.1, 3, 0.01],
    ["mountainAWidth", 0.05, 2, 0.01],
    ["mountainAHeight", 0.05, 2, 0.01],
    ["mountainARotZ", -180, 180, 0.5],
    ["mountainBX", -1.5, 1.5, 0.01],
    ["mountainBY", -1.5, 1.5, 0.01],
    ["mountainBScaleX", 0.1, 3, 0.01],
    ["mountainBScaleY", 0.1, 3, 0.01],
    ["mountainBScaleZ", 0.1, 3, 0.01],
    ["mountainBWidth", 0.05, 2, 0.01],
    ["mountainBHeight", 0.05, 2, 0.01],
    ["mountainBRotZ", -180, 180, 0.5]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyPictureTransform();
      })
    );
  });
}

export function createDeskControls(panel, config, applyDeskTransform, collapsed = true) {
  const body = createGroup(panel, "Desk", collapsed);
  const fields = [
    ["x", -10, 10, 0.01],
    ["y", -5, 5, 0.01],
    ["z", -10, 10, 0.01],
    ["topX", -3, 3, 0.01],
    ["topY", -3, 3, 0.01],
    ["topZ", -3, 3, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["mainWidth", 1, 10, 0.01],
    ["mainDepth", 0.5, 5, 0.01],
    ["returnWidth", 0.5, 5, 0.01],
    ["returnDepth", 0.5, 8, 0.01],
    ["innerCut", 0.1, 6, 0.01],
    ["thickness", 0.02, 0.5, 0.01],
    ["radius", 0.02, 0.8, 0.01],
    ["legHeight", 0.2, 3, 0.01],
    ["legRadius", 0.02, 0.3, 0.01],
    ["legInset", 0.05, 1, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyDeskTransform();
      })
    );
  });
}

export function createMonitorControls(panel, title, config, applyMonitorTransform, collapsed = true) {
  const body = createGroup(panel, title, collapsed);
  const fields = [
    ["x", -10, 10, 0.001],
    ["y", -2, 2, 0.0001],
    ["z", -10, 10, 0.001],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.5, 8, 0.01],
    ["height", 0.5, 6, 0.01],
    ["depth", 0.02, 1, 0.01],
    ["radius", 0.02, 1, 0.01],
    ["screenInset", 0.02, 1, 0.01],
    ["screenDepth", 0.01, 0.3, 0.01],
    ["standWidth", 0.05, 1.5, 0.01],
    ["standHeight", 0.05, 2.5, 0.01],
    ["standDepth", 0.05, 2, 0.01],
    ["standOffsetZ", -2, 2, 0.01],
    ["standRotX", -180, 180, 0.5],
    ["standRotZ", -180, 180, 0.5],
    ["baseWidth", 0.1, 3, 0.01],
    ["baseHeight", 0.02, 0.5, 0.01],
    ["baseDepth", 0.1, 3, 0.01],
    ["baseOffsetY", -2, 2, 0.01],
    ["baseOffsetZ", -2, 2, 0.01],
    ["baseRotX", -180, 180, 0.5],
    ["baseRotZ", -180, 180, 0.5],
    ["lineGap", 0.05, 0.4, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyMonitorTransform();
      })
    );
  });

  const contentFields = config.screenMode === "ui"
    ? [
      ["uiSidebarWidth", 0.01, 0.5, 0.001],
      ["uiSidebarX", -2, 2, 0.001],
      ["uiPanelWidth", 0.01, 0.5, 0.001],
      ["uiPanelX", -2, 2, 0.001],
      ["uiTopIconWidth", 0.05, 1, 0.001],
      ["uiTopIconX", -2, 2, 0.001],
      ["uiTopIconY", -2, 2, 0.001],
      ["uiIconWidth", 0.05, 1, 0.001],
      ["uiIconX", -2, 2, 0.001],
      ["uiIconStartY", -2, 2, 0.001],
      ["uiIconGap", 0.01, 1, 0.001],
      ["uiDotX", -2, 2, 0.001],
      ["uiDotY", -2, 2, 0.001],
      ["uiLinesWidthScale", 0.1, 3, 0.001],
      ["uiLinesX", -2, 2, 0.001],
      ["uiLinesY", -2, 2, 0.001],
      ["uiLineGap", 0.01, 1, 0.001]
    ]
    : [
      ["codeX", -2, 2, 0.001],
      ["codeY", -2, 2, 0.001]
    ];

  contentFields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyMonitorTransform();
      })
    );
  });
}

export function createFloorPotControls(panel, config, applyFloorPotTransform, collapsed = true) {
  const body = createGroup(panel, "Floor Pot", collapsed);
  const fields = [
    ["x", -10, 10, 0.01],
    ["y", -10, 10, 0.01],
    ["z", -10, 10, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["radius", 0.1, 2, 0.01],
    ["height", 0.1, 3, 0.01],
    ["neck", 0.05, 1, 0.01],
    ["bulge", 0.4, 2, 0.01],
    ["bandRadiusTop", 0.1, 2, 0.01],
    ["bandRadiusBottom", 0.1, 2, 0.01],
    ["bandHeight", 0.02, 1, 0.01],
    ["bandY", -2, 2, 0.01],
    ["bottomBandRadiusTop", 0.1, 2, 0.01],
    ["bottomBandRadiusBottom", 0.1, 2, 0.01],
    ["bottomBandHeight", 0.02, 1, 0.01],
    ["bottomBandY", -2, 2, 0.01],
    ["soilRadius", 0.05, 2, 0.01],
    ["soilHeight", 0.01, 1, 0.01],
    ["soilY", -2, 2, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyFloorPotTransform();
      })
    );
  });
}

export function createFloorPlantControls(panel, config, applyFloorPlantTransform, collapsed = true) {
  const body = createGroup(panel, "Floor Plant", collapsed);
  const fields = [
    ["x", -2, 2, 0.01],
    ["y", -2, 2, 0.01],
    ["z", -2, 2, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["depth", 0.01, 0.3, 0.01],
    ["bevelSize", 0.001, 0.2, 0.001],
    ["bevelThickness", 0.01, 1, 0.01],
    ["bodyBulge", 0, 1, 0.01],
    ["ridgeBulge", 0, 1, 0.01],
    ["ridgeWidth", 0.05, 1, 0.01],
    ["centerWidth", 0.1, 2, 0.01],
    ["centerHeight", 0.1, 4, 0.01],
    ["centerX", -2, 2, 0.01],
    ["centerY", -2, 2, 0.01],
    ["centerZ", -2, 2, 0.01],
    ["centerRotX", -180, 180, 0.5],
    ["centerRotY", -180, 180, 0.5],
    ["centerRotZ", -180, 180, 0.5],
    ["leftWidth", 0.1, 2, 0.01],
    ["leftHeight", 0.1, 4, 0.01],
    ["leftX", -2, 2, 0.01],
    ["leftY", -2, 2, 0.01],
    ["leftZ", -2, 2, 0.01],
    ["leftRotX", -180, 180, 0.5],
    ["leftRotY", -180, 180, 0.5],
    ["leftRotZ", -180, 180, 0.5],
    ["rightWidth", 0.1, 2, 0.01],
    ["rightHeight", 0.1, 4, 0.01],
    ["rightX", -2, 2, 0.01],
    ["rightY", -2, 2, 0.01],
    ["rightZ", -2, 2, 0.01],
    ["rightRotX", -180, 180, 0.5],
    ["rightRotY", -180, 180, 0.5],
    ["rightRotZ", -180, 180, 0.5]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyFloorPlantTransform();
      })
    );
  });
}

export function createKeyboardControls(panel, config, applyKeyboardTransform, collapsed = true) {
  const body = createGroup(panel, "Keyboard", collapsed);
  const fields = [
    ["x", -10, 10, 0.01],
    ["y", -5, 0, 0.001],
    ["z", -10, 10, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.2, 3, 0.01],
    ["height", 0.1, 1, 0.01],
    ["depth", 0.01, 0.3, 0.01],
    ["radius", 0.01, 0.3, 0.01],
    ["keyDepth", 0.001, 0.05, 0.001],
    ["keyWidthScale", 0.1, 1.2, 0.01],
    ["keyHeightScale", 0.1, 1.2, 0.01],
    ["keyCols", 1, 20, 1],
    ["keyRows", 1, 10, 1]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyKeyboardTransform();
      })
    );
  });
}

export function createMouseControls(panel, config, applyMouseTransform, collapsed = true) {
  const body = createGroup(panel, "Mouse", collapsed);
  const fields = [
    ["x", -10, 10, 0.01],
    ["y", -5, 0, 0.001],
    ["z", -10, 10, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.05, 1, 0.01],
    ["height", 0.05, 1, 0.01],
    ["depth", 0.01, 0.3, 0.01],
    ["radius", 0.01, 0.3, 0.01],
    ["splitHeight", 0.1, 2, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyMouseTransform();
      })
    );
  });
}

export function createSpeakerControls(panel, config, applySpeakerTransform, collapsed = true) {
  const body = createGroup(panel, "Speaker", collapsed);
  const fields = [
    ["x", -10, 10, 0.01],
    ["y", -5, 0, 0.001],
    ["z", -10, 10, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["width", 0.1, 2, 0.01],
    ["height", 0.1, 2, 0.01],
    ["depth", 0.05, 1, 0.01],
    ["radius", 0.01, 0.3, 0.01],
    ["panelWidth", 0.05, 1.5, 0.01],
    ["panelHeight", 0.05, 1.5, 0.01],
    ["panelDepth", 0.01, 0.2, 0.01],
    ["panelRadius", 0.01, 0.2, 0.01],
    ["panelX", -1, 1, 0.01],
    ["panelY", -1, 1, 0.01],
    ["panelZ", -1, 1, 0.01],
    ["coneRadius", 0.05, 0.8, 0.01],
    ["coneDepth", 0.01, 0.2, 0.01],
    ["coneX", -1, 1, 0.01],
    ["coneY", -1, 1, 0.01],
    ["coneZ", -1, 1, 0.01],
    ["smallConeRadius", 0.01, 0.4, 0.01],
    ["smallConeDepth", 0.005, 0.1, 0.005],
    ["smallConeX", -1, 1, 0.01],
    ["smallConeY", -1, 1, 0.01],
    ["smallConeZ", -1, 1, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applySpeakerTransform();
      })
    );
  });
}

export function createChairControls(panel, config, applyChairTransform, collapsed = true) {
  const body = createGroup(panel, "Chair", collapsed);
  const commonFields = [
    ["x", -10, 10, 0.01],
    ["y", -10, 10, 0.01],
    ["z", -10, 10, 0.01],
    ["rotX", -180, 180, 0.5],
    ["rotY", -180, 180, 0.5],
    ["rotZ", -180, 180, 0.5],
    ["shellX", -2, 2, 0.01],
    ["shellY", -3, 3, 0.01],
    ["shellZ", -3, 3, 0.01],
    ["shellRotX", -180, 180, 0.5],
    ["shellRotY", -180, 180, 0.5],
    ["shellRotZ", -180, 180, 0.5],
    ["frameWidth", 0.2, 4, 0.01],
    ["frameDepth", 0.2, 4, 0.01],
    ["frameLift", 0, 3, 0.01],
    ["backLegSpread", 0.1, 3, 0.01],
    ["backLegOffset", -1, 2, 0.01],
    ["backLegHeight", 0.1, 3, 0.01],
    ["tubeRadius", 0.01, 0.3, 0.01],
    ["frameX", -2, 2, 0.01],
    ["frameY", -2, 2, 0.01],
    ["frameZ", -2, 2, 0.01],
    ["frameRotX", -180, 180, 0.5],
    ["frameRotY", -180, 180, 0.5],
    ["frameRotZ", -180, 180, 0.5]
  ];

  commonFields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyChairTransform();
      })
    );
  });

  const sections = [
    {
      title: "Shell Back",
      fields: [
        ["shellBackWidth", 0.2, 4, 0.01],
        ["shellBackHeight", 0.2, 4, 0.01],
        ["shellBackDepth", 0.02, 0.5, 0.01],
        ["shellBackRadius", 0.01, 0.4, 0.01],
        ["shellBackX", -2, 2, 0.01],
        ["shellBackY", -2, 3, 0.01],
        ["shellBackZ", -2, 2, 0.01],
        ["shellBackRotX", -180, 180, 0.5],
        ["shellBackRotY", -180, 180, 0.5],
        ["shellBackRotZ", -180, 180, 0.5]
      ]
    },
    {
      title: "Shell Seat",
      fields: [
        ["shellSeatWidth", 0.2, 4, 0.01],
        ["shellSeatHeight", 0.2, 4, 0.01],
        ["shellSeatDepth", 0.02, 0.5, 0.01],
        ["shellSeatRadius", 0.01, 0.4, 0.01],
        ["shellSeatX", -2, 2, 0.01],
        ["shellSeatY", -2, 3, 0.01],
        ["shellSeatZ", -2, 3, 0.01],
        ["shellSeatRotX", -180, 180, 0.5],
        ["shellSeatRotY", -180, 180, 0.5],
        ["shellSeatRotZ", -180, 180, 0.5]
      ]
    },
    {
      title: "Shell Bend",
      fields: [
        ["shellBendWidth", 0.2, 4, 0.01],
        ["shellBendInnerRadius", 0.05, 1.5, 0.01],
        ["shellBendThickness", 0.02, 0.5, 0.01],
        ["shellBendX", -2, 2, 0.01],
        ["shellBendY", -2, 3, 0.01],
        ["shellBendZ", -2, 3, 0.01],
        ["shellBendRotX", -180, 180, 0.5],
        ["shellBendRotY", -180, 180, 0.5],
        ["shellBendRotZ", -180, 180, 0.5]
      ]
    }
  ];

  sections.forEach(({ title, fields }) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "10px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyChairTransform();
        })
      );
    });
  });
}

export function createCharacterRotationControls(panel, config, applyCharacterTransform, collapsed = true) {
  const body = createGroup(panel, "Rotations", collapsed);

  const sections = [
    {
      title: "Root",
      fields: [
        ["rotX", -180, 180, 0.5],
        ["rotY", -180, 180, 0.5],
        ["rotZ", -180, 180, 0.5],
      ]
    },
    {
      title: "Torso Head",
      fields: [
        ["torsoPitch", -60, 60, 0.5],
        ["torsoYaw", -90, 90, 0.5],
        ["torsoRoll", -45, 45, 0.5],
        ["headPitch", -60, 60, 0.5],
        ["headYaw", -120, 120, 0.5],
        ["headRoll", -45, 45, 0.5],
        ["eyeYaw", -1, 1, 0.01],
        ["eyePitch", -1, 1, 0.01],
        ["browTilt", -30, 30, 0.5]
      ]
    },
      {
        title: "Left Arm",
        fields: [
          ["leftShoulderX", -180, 180, 0.5],
          ["leftShoulderY", -360, 360, 0.5],
          ["leftShoulderZ", -180, 180, 0.5],
          ["leftElbowX", -10, 160, 0.5],
          ["leftElbowY", -180, 180, 0.5],
          ["leftElbowZ", -180, 180, 0.5],
          ["leftWristX", -180, 180, 0.5],
          ["leftWristY", -180, 180, 0.5],
          ["leftWristZ", -180, 180, 0.5]
        ]
      },
      {
        title: "Right Arm",
        fields: [
          ["rightShoulderX", -180, 180, 0.5],
          ["rightShoulderY", -360, 360, 0.5],
          ["rightShoulderZ", -180, 180, 0.5],
          ["rightElbowX", -10, 160, 0.5],
          ["rightElbowY", -180, 180, 0.5],
          ["rightElbowZ", -180, 180, 0.5],
          ["rightWristX", -180, 180, 0.5],
          ["rightWristY", -180, 180, 0.5],
          ["rightWristZ", -180, 180, 0.5]
        ]
      },
    {
      title: "Left Leg",
      fields: [
        ["leftHipX", -180, 180, 0.5],
        ["leftHipY", -180, 180, 0.5],
        ["leftHipZ", -180, 180, 0.5],
        ["leftKneeX", -10, 160, 0.5],
        ["leftAnkleX", -60, 60, 0.5]
      ]
    },
    {
      title: "Right Leg",
      fields: [
        ["rightHipX", -180, 180, 0.5],
        ["rightHipY", -180, 180, 0.5],
        ["rightHipZ", -180, 180, 0.5],
        ["rightKneeX", -10, 160, 0.5],
        ["rightAnkleX", -60, 60, 0.5]
      ]
    }
  ];

  sections.forEach(({ title, fields }) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "10px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyCharacterTransform();
        })
      );
    });
  });
}

export function createCharacterOffsetControls(panel, config, applyCharacterTransform, collapsed = true) {
  const body = createGroup(panel, "Offsets", collapsed);

  const rootHeading = document.createElement("h3");
  rootHeading.textContent = "Root";
  rootHeading.style.margin = "10px 0 8px";
  rootHeading.style.fontSize = "13px";
  body.appendChild(rootHeading);

  [
    ["x", -10, 10, 0.01],
    ["y", -10, 10, 0.01],
    ["z", -10, 10, 0.01],
    ["sitAmount", 0, 1, 0.01],
    ["sitOffsetX", -2, 2, 0.01],
    ["sitOffsetY", -2, 2, 0.01],
    ["sitOffsetZ", -2, 2, 0.01]
  ].forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyCharacterTransform();
      })
    );
  });

  const sections = [
    ["Torso", ["torsoOffsetX", "torsoOffsetY", "torsoOffsetZ"]],
    ["Pelvis", ["pelvisOffsetX", "pelvisOffsetY", "pelvisOffsetZ"]],
    ["Head", ["headOffsetX", "headOffsetY", "headOffsetZ"]],
    ["Left Ear", ["leftEarOffsetX", "leftEarOffsetY", "leftEarOffsetZ"]],
    ["Right Ear", ["rightEarOffsetX", "rightEarOffsetY", "rightEarOffsetZ"]],
    ["Left Eye", ["leftEyeOffsetX", "leftEyeOffsetY", "leftEyeOffsetZ"]],
    ["Right Eye", ["rightEyeOffsetX", "rightEyeOffsetY", "rightEyeOffsetZ"]],
    ["Left Brow", ["leftBrowOffsetX", "leftBrowOffsetY", "leftBrowOffsetZ"]],
    ["Right Brow", ["rightBrowOffsetX", "rightBrowOffsetY", "rightBrowOffsetZ"]],
    ["Left Shoulder", ["leftShoulderOffsetX", "leftShoulderOffsetY", "leftShoulderOffsetZ"]],
    ["Right Shoulder", ["rightShoulderOffsetX", "rightShoulderOffsetY", "rightShoulderOffsetZ"]],
    ["Left Elbow", ["leftElbowOffsetX", "leftElbowOffsetY", "leftElbowOffsetZ"]],
    ["Right Elbow", ["rightElbowOffsetX", "rightElbowOffsetY", "rightElbowOffsetZ"]],
    ["Left Hip", ["leftHipOffsetX", "leftHipOffsetY", "leftHipOffsetZ"]],
    ["Right Hip", ["rightHipOffsetX", "rightHipOffsetY", "rightHipOffsetZ"]],
    ["Left Knee", ["leftKneeOffsetX", "leftKneeOffsetY", "leftKneeOffsetZ"]],
    ["Right Knee", ["rightKneeOffsetX", "rightKneeOffsetY", "rightKneeOffsetZ"]],
    ["Socks", ["sockOffsetX", "sockOffsetY", "sockOffsetZ"]],
    ["Left Ankle", ["leftAnkleOffsetX", "leftAnkleOffsetY", "leftAnkleOffsetZ"]],
    ["Right Ankle", ["rightAnkleOffsetX", "rightAnkleOffsetY", "rightAnkleOffsetZ"]]
  ];

  sections.forEach(([title, keys]) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "10px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    keys.forEach((key) => {
      body.appendChild(
        createSliderRow(key, -2, 2, 0.01, config[key], (next) => {
          config[key] = next;
          applyCharacterTransform();
        })
      );
    });
  });
}

export function createCharacterSizeControls(panel, config, applyCharacterTransform, collapsed = true) {
  const body = createGroup(panel, "Sizes", collapsed);

  const sections = [
    ["Torso", [["torsoScaleX", 0.2, 3, 0.01], ["torsoScaleY", 0.2, 3, 0.01], ["torsoScaleZ", 0.2, 3, 0.01]]],
    ["Pelvis", [["pelvisScaleX", 0.2, 3, 0.01], ["pelvisScaleY", 0.2, 3, 0.01], ["pelvisScaleZ", 0.2, 3, 0.01]]],
    ["Head", [["headScaleX", 0.2, 3, 0.01], ["headScaleY", 0.2, 3, 0.01], ["headScaleZ", 0.2, 3, 0.01]]],
    ["Ears", [["earScaleX", 0.2, 3, 0.01], ["earScaleY", 0.2, 3, 0.01], ["earScaleZ", 0.2, 3, 0.01]]],
    ["Eyes", [["eyeScaleX", 0.2, 3, 0.01], ["eyeScaleY", 0.2, 3, 0.01], ["eyeScaleZ", 0.2, 3, 0.01], ["pupilScale", 0.2, 3, 0.01]]],
    ["Brows", [["browScaleX", 0.2, 3, 0.01], ["browScaleY", 0.2, 3, 0.01], ["browScaleZ", 0.2, 3, 0.01]]],
    ["Upper Arms", [["upperArmScaleX", 0.2, 3, 0.01], ["upperArmScaleY", 0.2, 3, 0.01], ["upperArmScaleZ", 0.2, 3, 0.01]]],
    ["Lower Arms", [["lowerArmScaleX", 0.2, 3, 0.01], ["lowerArmScaleY", 0.2, 3, 0.01], ["lowerArmScaleZ", 0.2, 3, 0.01]]],
    ["Hands", [["handScaleX", 0.2, 3, 0.01], ["handScaleY", 0.2, 3, 0.01], ["handScaleZ", 0.2, 3, 0.01]]],
    ["Upper Legs", [["upperLegScaleX", 0.2, 3, 0.01], ["upperLegScaleY", 0.2, 3, 0.01], ["upperLegScaleZ", 0.2, 3, 0.01]]],
    ["Lower Legs", [["lowerLegScaleX", 0.2, 3, 0.01], ["lowerLegScaleY", 0.2, 3, 0.01], ["lowerLegScaleZ", 0.2, 3, 0.01]]],
    ["Socks", [["sockScaleX", 0.2, 3, 0.01], ["sockScaleY", 0.2, 3, 0.01], ["sockScaleZ", 0.2, 3, 0.01]]],
    ["Shoes", [["shoeScaleX", 0.2, 3, 0.01], ["shoeScaleY", 0.2, 3, 0.01], ["shoeScaleZ", 0.2, 3, 0.01]]],
    ["Toes", [["toeScaleX", 0.2, 3, 0.01], ["toeScaleY", 0.2, 3, 0.01], ["toeScaleZ", 0.2, 3, 0.01]]]
  ];

  sections.forEach(([title, fields]) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "10px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyCharacterTransform();
        })
      );
    });
  });
}

export function createCharacterHairControls(panel, config, applyCharacterTransform, collapsed = false) {
  const body = createGroup(panel, "Hair", collapsed);
  const sections = [
    {
      title: "Cap Base",
      fields: [
        ["hairCapOffsetX", -2, 2, 0.01],
        ["hairCapOffsetY", -2, 2, 0.01],
        ["hairCapOffsetZ", -2, 2, 0.01],
        ["hairCapRotX", -180, 180, 0.5],
        ["hairCapRotY", -180, 180, 0.5],
        ["hairCapRotZ", -180, 180, 0.5],
        ["hairCapScaleX", 0.2, 3, 0.01],
        ["hairCapScaleY", 0.2, 3, 0.01],
        ["hairCapScaleZ", 0.2, 3, 0.01]
      ],
      colors: ["hairColor"]
    },
    {
      title: "Cap Particles",
      fields: [
        ["hairOffsetX", -2, 2, 0.01],
        ["hairOffsetY", -2, 2, 0.01],
        ["hairOffsetZ", -2, 2, 0.01],
        ["hairRotX", -180, 180, 0.5],
        ["hairRotY", -180, 180, 0.5],
        ["hairRotZ", -180, 180, 0.5],
        ["hairScaleX", 0.2, 3, 0.01],
        ["hairScaleY", 0.2, 3, 0.01],
        ["hairScaleZ", 0.2, 3, 0.01],
        ["hairCount", 0, 45000, 1],
        ["hairParticleSize", 0.04, 0.6, 0.002],
        ["hairParticleOpacity", 0, 1, 0.01],
        ["hairScatter", 0, 0.2, 0.001]
      ]
    },
    {
      title: "Fringe Particles",
      fields: [
        ["fringeOffsetX", -2, 2, 0.01],
        ["fringeOffsetY", -2, 2, 0.01],
        ["fringeOffsetZ", -2, 2, 0.01],
        ["fringeRotX", -180, 180, 0.5],
        ["fringeRotY", -180, 180, 0.5],
        ["fringeRotZ", -180, 180, 0.5],
        ["fringeScaleX", 0.2, 3, 0.01],
        ["fringeScaleY", 0.2, 3, 0.01],
        ["fringeScaleZ", 0.2, 3, 0.01],
        ["fringeCount", 0, 360, 1],
        ["fringeParticleSize", 0.2, 3, 0.01],
        ["fringeParticleOpacity", 0, 1, 0.01]
      ]
    }
  ];

  sections.forEach(({ title, fields, colors }) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "10px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyCharacterTransform();
        })
      );
    });

    (colors ?? []).forEach((key) => {
      body.appendChild(
        createColorRow(key, config[key], (next) => {
          config[key] = next;
          applyCharacterTransform();
        })
      );
    });
  });
}

export function createCharacterSleeveControls(panel, config, applyCharacterTransform, collapsed = false) {
  const body = createGroup(panel, "Sleeves", collapsed);
  const fields = [
    ["sleeveLength", 0.4, 1.6, 0.01],
    ["sleeveVolume", 0.6, 1.8, 0.01]
  ];

  fields.forEach(([key, min, max, step]) => {
    body.appendChild(
      createSliderRow(key, min, max, step, config[key], (next) => {
        config[key] = next;
        applyCharacterTransform();
      })
    );
  });

  body.appendChild(
    createColorRow("sleeveColor", config.sleeveColor, (next) => {
      config.sleeveColor = next;
      applyCharacterTransform();
    })
  );
}

export function createCharacterColorControls(panel, config, applyCharacterTransform, collapsed = false) {
  const body = createGroup(panel, "Character Colors", collapsed);
  const fields = ["shirtColor", "pelvisColor", "pantsColor"];

  fields.forEach((key) => {
    body.appendChild(
      createColorRow(key, config[key], (next) => {
        config[key] = next;
        applyCharacterTransform();
      })
    );
  });
}

export function createCharacterFootControls(panel, config, applyCharacterTransform, collapsed = false) {
  const body = createGroup(panel, "Feet", collapsed);
  const sections = [
    {
      title: "Ankles",
      fields: [
        ["leftAnkleOffsetX", -2, 2, 0.01],
        ["leftAnkleOffsetY", -2, 2, 0.01],
        ["leftAnkleOffsetZ", -2, 2, 0.01],
        ["leftAnkleX", -180, 180, 0.5],
        ["leftAnkleY", -180, 180, 0.5],
        ["leftAnkleZ", -180, 180, 0.5],
        ["rightAnkleOffsetX", -2, 2, 0.01],
        ["rightAnkleOffsetY", -2, 2, 0.01],
        ["rightAnkleOffsetZ", -2, 2, 0.01],
        ["rightAnkleX", -180, 180, 0.5],
        ["rightAnkleY", -180, 180, 0.5],
        ["rightAnkleZ", -180, 180, 0.5]
      ]
    },
    {
      title: "Socks",
      fields: [
        ["sockOffsetX", -2, 2, 0.01],
        ["sockOffsetY", -2, 2, 0.01],
        ["sockOffsetZ", -2, 2, 0.01],
        ["sockRotX", -180, 180, 0.5],
        ["sockRotY", -180, 180, 0.5],
        ["sockRotZ", -180, 180, 0.5],
        ["sockScaleX", 0.2, 3, 0.01],
        ["sockScaleY", 0.2, 3, 0.01],
        ["sockScaleZ", 0.2, 3, 0.01]
      ],
      colors: ["sockColor"]
    },
    {
      title: "Shoe Group",
      fields: [
        ["shoeOffsetX", -2, 2, 0.01],
        ["shoeOffsetY", -2, 2, 0.01],
        ["shoeOffsetZ", -2, 2, 0.01],
        ["shoeRotX", -180, 180, 0.5],
        ["shoeRotY", -180, 180, 0.5],
        ["shoeRotZ", -180, 180, 0.5],
        ["shoeScaleX", 0.2, 3, 0.01],
        ["shoeScaleY", 0.2, 3, 0.01],
        ["shoeScaleZ", 0.2, 3, 0.01]
      ],
      colors: ["shoeColor"]
    },
    {
      title: "Sole",
      fields: [
        ["soleOffsetX", -2, 2, 0.01],
        ["soleOffsetY", -2, 2, 0.01],
        ["soleOffsetZ", -2, 2, 0.01],
        ["soleRotX", -180, 180, 0.5],
        ["soleRotY", -180, 180, 0.5],
        ["soleRotZ", -180, 180, 0.5],
        ["soleScaleX", 0.2, 3, 0.01],
        ["soleScaleY", 0.2, 3, 0.01],
        ["soleScaleZ", 0.2, 3, 0.01]
      ]
    },
    {
      title: "Upper Shoe",
      fields: [
        ["upperShoeOffsetX", -2, 2, 0.01],
        ["upperShoeOffsetY", -2, 2, 0.01],
        ["upperShoeOffsetZ", -2, 2, 0.01],
        ["upperShoeRotX", -180, 180, 0.5],
        ["upperShoeRotY", -180, 180, 0.5],
        ["upperShoeRotZ", -180, 180, 0.5],
        ["upperShoeScaleX", 0.2, 3, 0.01],
        ["upperShoeScaleY", 0.2, 3, 0.01],
        ["upperShoeScaleZ", 0.2, 3, 0.01]
      ]
    },
    {
      title: "Toe",
      fields: [
        ["toeOffsetX", -2, 2, 0.01],
        ["toeOffsetY", -2, 2, 0.01],
        ["toeOffsetZ", -2, 2, 0.01],
        ["toeRotX", -180, 180, 0.5],
        ["toeRotY", -180, 180, 0.5],
        ["toeRotZ", -180, 180, 0.5],
        ["toeScaleX", 0.2, 3, 0.01],
        ["toeScaleY", 0.2, 3, 0.01],
        ["toeScaleZ", 0.2, 3, 0.01]
      ],
      colors: ["shoeToeColor"]
    }
  ];

  sections.forEach(({ title, fields, colors }) => {
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.margin = "10px 0 8px";
    heading.style.fontSize = "13px";
    body.appendChild(heading);

    fields.forEach(([key, min, max, step]) => {
      body.appendChild(
        createSliderRow(key, min, max, step, config[key], (next) => {
          config[key] = next;
          applyCharacterTransform();
        })
      );
    });

    (colors ?? []).forEach((key) => {
      body.appendChild(
        createColorRow(key, config[key], (next) => {
          config[key] = next;
          applyCharacterTransform();
        })
      );
    });
  });
}
