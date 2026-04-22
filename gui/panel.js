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

  const labelEl = document.createElement("label");
  labelEl.textContent = label;

  const input = document.createElement("input");
  input.type = "range";
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);

  const output = document.createElement("output");
  output.value = Number(value).toFixed(2);
  output.textContent = output.value;

  input.addEventListener("input", () => {
    const next = Number(input.value);
    output.value = next.toFixed(2);
    output.textContent = output.value;
    onChange(next);
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
}
