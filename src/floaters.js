// Floaters carry today's recommended pieces across the stage. Each mood has
// its own kind: fluffy dandelion seeds (happy), colliding bubbles (excited),
// brand names tossed by the wind (calm), brand names streaking past with a
// sudden flash (tired), misty clouds (low), and fire clouds (irritated). Except for the bubbles, every
// floater keeps to its own lane so paths never cross, and drifts off one
// edge to reappear at the other.

const floaterStage = document.getElementById("floater-stage");
const floaterMotionOff = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Size is relative to a base unit; lanes say how the stage is shared.
// Speeds are in pixels per step, with 60 steps per second.
const FLOATER_KINDS = {
  bubble: { width: 1, height: 1, lanes: "physics", speed: [0.25, 0.4] },
  seed: { width: 1.05, height: 1.55, lanes: "columns", speed: [0.1, 0.18] },
  drift: { width: 1.8, height: 0.6, lanes: "rows", speed: [0.1, 0.16] },
  streak: { width: 1.6, height: 0.55, lanes: "diagonal", speed: [0.9, 1.3] },
  mist: { width: 1.6, height: 0.9, lanes: "rows", speed: [0.04, 0.08] },
  fire: { width: 1.6, height: 0.9, lanes: "rows", speed: [0.04, 0.08] },
};

// Streaking names fall 15 degrees below horizontal, moving right to left.
const STREAK_SLOPE = Math.tan((15 * Math.PI) / 180);

// Movement runs in fixed 60-per-second steps, so floaters move at the same
// speed on a 60 Hz screen and on a 240 Hz one.
const FLOATER_STEP_MS = 1000 / 60;

let floaters = [];
let floaterAnimationStarted = false;
let lastFloaterTime = null;
let pendingFloaterTime = 0;

function random(min, max) {
  return min + Math.random() * (max - min);
}

// Copies a base cloud filter from index.html with a different noise seed,
// so every cloud gets its own shape.
function cloudFilter(layer, index) {
  const id = `cloud-${layer}-${index}`;
  if (!document.getElementById(id)) {
    const copy = document.getElementById(`cloud-${layer}`).cloneNode(true);
    copy.id = id;
    const noise = copy.querySelector("feTurbulence");
    noise.setAttribute("seed", String(Number(noise.getAttribute("seed")) + (index + 1) * 17));
    document.getElementById("cloud-filters").append(copy);
  }
  return id;
}

// The shapes behind the text for each kind of floater.
function addDecoration(floater, index) {
  const { element, kind } = floater;
  if (kind === "mist" || kind === "fire") {
    for (const layer of ["shadow", "body", "light"]) {
      const puff = document.createElement("span");
      puff.className = `cloud-layer cloud-${layer}`;
      // The extra blur makes these clouds look thin and far away.
      puff.style.filter = `url(#${cloudFilter(layer, index)}) blur(2px)`;
      element.append(puff);
    }
  } else if (kind === "seed") {
    floater.seed = createSeed(element);
  }
}

function laneLayout(floater, index, count, stageWidth, stageHeight) {
  const settings = FLOATER_KINDS[floater.kind];
  floater.speed = random(...settings.speed);
  if (settings.lanes === "physics") {
    // Bubbles start spread out and move in any direction.
    const slot = stageWidth / count;
    floater.x = index * slot + random(0, Math.max(0, slot - floater.width));
    floater.y = random(0, Math.max(0, stageHeight - floater.height));
    const angle = random(0, Math.PI * 2);
    floater.vx = Math.cos(angle) * floater.speed;
    floater.vy = Math.sin(angle) * floater.speed;
  } else if (settings.lanes === "columns") {
    // Rises through its own column, swaying gently inside it.
    const laneWidth = stageWidth / count;
    floater.laneCenter = index * laneWidth + (laneWidth - floater.width) / 2;
    floater.sway = Math.max(0, (laneWidth - floater.width) / 2) * 0.8;
    floater.y = random(0, stageHeight);
  } else if (settings.lanes === "rows") {
    // Drifts sideways along its own row.
    const laneHeight = stageHeight / count;
    floater.y = Math.max(0, index * laneHeight + (laneHeight - floater.height) / 2);
    floater.x = random(-floater.width, stageWidth);
    floater.direction = floater.kind === "drift" || Math.random() < 0.5 ? 1 : -1;
  } else {
    // Each streaking name has its own parallel track and its own speed,
    // and starts somewhere off the right edge so they arrive at different times.
    const laneHeight = stageHeight / count;
    floater.startY = index * laneHeight - laneHeight * 0.5;
    floater.x = stageWidth + random(0, stageWidth);
    floater.flashX = pickFlashPoint(stageWidth);
  }
  positionOnTrack(floater, stageWidth);
}

// Columns and tracks fix one coordinate from the other.
function positionOnTrack(floater, stageWidth) {
  const lanes = FLOATER_KINDS[floater.kind].lanes;
  if (lanes === "columns") {
    floater.x = floater.laneCenter + Math.sin(floater.phase) * floater.sway;
  } else if (lanes === "diagonal") {
    floater.y = floater.startY + (stageWidth - floater.x) * STREAK_SLOPE;
  }
}

// How long the previous outfit takes to fade away.
const FLOATER_FADE_MS = 600;

function showFloaters(pieces, kind, onSelect) {
  // The previous floaters fade out where they are instead of vanishing.
  for (const old of floaterStage.querySelectorAll(".floater:not(.leaving)")) {
    old.classList.add("leaving");
    old.disabled = true;
    setTimeout(() => old.remove(), FLOATER_FADE_MS);
  }
  const settings = FLOATER_KINDS[kind];
  const base = Math.min(76, Math.max(56, floaterStage.clientWidth / 9));
  const width = base * settings.width;
  const height = base * settings.height;
  floaters = pieces.map((piece, index) => {
    const element = document.createElement("button");
    element.type = "button";
    element.className = `floater ${kind}`;
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.setProperty("--tint", piece.palette[piece.palette.length - 1]);
    const floater = { element, kind, width, height, phase: random(0, Math.PI * 2), hovered: false };
    addDecoration(floater, index);
    const label = document.createElement("span");
    label.className = "floater-text";
    const brand = document.createElement("span");
    brand.className = "floater-brand";
    brand.textContent = piece.brand;
    applyBrandFont(brand, piece.brand);
    const item = document.createElement("span");
    item.className = "floater-item";
    label.append(brand, item);
    element.append(label);
    element.addEventListener("click", () => {
      for (const other of floaters) {
        other.element.classList.toggle("active", other.element === element);
      }
      onSelect(index);
    });
    floaterStage.append(element);
    laneLayout(floater, index, pieces.length, floaterStage.clientWidth, floaterStage.clientHeight);
    element.addEventListener("pointerenter", () => (floater.hovered = true));
    element.addEventListener("pointerleave", () => (floater.hovered = false));
    placeFloater(floater);
    return floater;
  });
  if (!floaterAnimationStarted && !floaterMotionOff) {
    floaterAnimationStarted = true;
    requestAnimationFrame(moveFloaters);
  }
}

// Updates the item names and labels, for example after switching language,
// without moving the floaters.
function relabelFloaters(labels) {
  floaters.forEach((floater, index) => {
    floater.element.querySelector(".floater-item").textContent = labels[index].item;
    floater.element.setAttribute("aria-label", labels[index].ariaLabel);
  });
}

function placeFloater(floater) {
  const depth = Math.sin(floater.phase);
  let bob = 0;
  let scale = floater.hovered ? 1.1 : 1;
  let turn = "";
  if (floater.kind === "bubble") {
    // Bubbles grow and shrink slightly to suggest depth.
    scale = floater.hovered ? 1.12 : 1 + depth * 0.06;
  } else if (floater.kind === "seed") {
    // Seeds tilt back and forth as they ride the air.
    turn = `rotate(${Math.sin(floater.phase * 1.3) * 10}deg)`;
  } else if (floater.kind === "drift") {
    // Names curl in the wind: tilting and turning in 3D as they drift.
    bob = Math.sin(floater.phase * 2.1) * 10;
    turn = `perspective(300px) rotateY(${Math.sin(floater.phase * 1.7) * 40}deg) rotate(${Math.sin(floater.phase * 2.3) * 8}deg)`;
  } else if (floater.kind !== "streak") {
    bob = depth * 4;
  }
  floater.element.style.transform = `translate(${floater.x}px, ${floater.y + bob}px) ${turn} scale(${scale})`;
}

// About half the crossings get a flash, somewhere in the middle of the
// stage; the rest return null and pass without one, so flashes stay rare.
function pickFlashPoint(stageWidth) {
  return Math.random() < 0.5 ? random(stageWidth * 0.15, stageWidth * 0.75) : null;
}

// Restarts the flash animation on a streaking name.
function flash(element) {
  element.classList.remove("flash");
  void element.offsetWidth;
  element.classList.add("flash");
}

// Bubbles bounce off each other like real bubbles of equal size: their
// speeds along the line between their centers are swapped.
function collideBubbles() {
  for (let i = 0; i < floaters.length; i++) {
    for (let j = i + 1; j < floaters.length; j++) {
      const a = floaters[i];
      const b = floaters[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.hypot(dx, dy);
      const minimum = (a.width + b.width) / 2;
      if (distance === 0 || distance >= minimum) {
        continue;
      }
      const nx = dx / distance;
      const ny = dy / distance;
      const closing = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
      if (closing > 0) {
        a.vx -= closing * nx;
        a.vy -= closing * ny;
        b.vx += closing * nx;
        b.vy += closing * ny;
      }
      // Push them apart so they never stick together.
      const overlap = (minimum - distance) / 2;
      a.x -= nx * overlap;
      a.y -= ny * overlap;
      b.x += nx * overlap;
      b.y += ny * overlap;
    }
  }
}

function moveFloater(floater, stageWidth, stageHeight) {
  const lanes = FLOATER_KINDS[floater.kind].lanes;
  floater.phase += 0.005;
  if (lanes === "physics") {
    floater.x += floater.vx;
    floater.y += floater.vy;
    // Bubbles bounce softly off the walls of the stage.
    if (floater.x < 0 || floater.x > stageWidth - floater.width) {
      floater.vx = Math.abs(floater.vx) * (floater.x < 0 ? 1 : -1);
      floater.x = Math.min(Math.max(floater.x, 0), stageWidth - floater.width);
    }
    if (floater.y < 0 || floater.y > stageHeight - floater.height) {
      floater.vy = Math.abs(floater.vy) * (floater.y < 0 ? 1 : -1);
      floater.y = Math.min(Math.max(floater.y, 0), stageHeight - floater.height);
    }
  } else if (lanes === "columns") {
    floater.y -= floater.speed;
    if (floater.y < -floater.height) {
      floater.y = stageHeight + random(0, 40);
    }
  } else if (lanes === "rows") {
    // Names in the wind get pushed back and forth by gusts as they drift.
    const gust = floater.kind === "drift" ? Math.sin(floater.phase * 1.4) * 0.35 : 0;
    floater.x += floater.direction * floater.speed + gust;
    if (floater.direction > 0 && floater.x > stageWidth) {
      floater.x = -floater.width - random(0, 60);
    } else if (floater.direction < 0 && floater.x < -floater.width) {
      floater.x = stageWidth + random(0, 60);
    }
  } else {
    const before = floater.x;
    floater.x -= floater.speed;
    // Flashes at most once per crossing, at a random point along the way.
    if (floater.flashX !== null && before > floater.flashX && floater.x <= floater.flashX) {
      flash(floater.element);
    }
    const y = floater.startY + (stageWidth - floater.x) * STREAK_SLOPE;
    if (floater.x < -floater.width || y > stageHeight) {
      // Waits off the right edge for a few seconds, then crosses again on
      // the same track, flashing somewhere new.
      floater.x = stageWidth + floater.speed * 60 * random(3, 12);
      floater.flashX = pickFlashPoint(stageWidth);
    }
  }
  positionOnTrack(floater, stageWidth);
  // Seeds turn slowly, so redrawing their hairs every other step is enough.
  if (floater.seed) {
    floater.seedTick = !floater.seedTick;
    if (floater.seedTick) {
      turnSeed(floater.seed, 0.024);
    }
  }
}

function stepFloaters(stageWidth, stageHeight) {
  for (const floater of floaters) {
    // A hovered floater holds still so it is easy to click.
    if (!floater.hovered) {
      moveFloater(floater, stageWidth, stageHeight);
    }
  }
  if (floaters.length > 0 && floaters[0].kind === "bubble") {
    collideBubbles();
  }
}

function moveFloaters(now) {
  const stageWidth = floaterStage.clientWidth;
  const stageHeight = floaterStage.clientHeight;
  // Long gaps (a hidden tab) are capped so floaters don't jump far ahead.
  pendingFloaterTime += lastFloaterTime === null ? 0 : Math.min(now - lastFloaterTime, 100);
  lastFloaterTime = now;
  let stepped = false;
  while (pendingFloaterTime >= FLOATER_STEP_MS) {
    stepFloaters(stageWidth, stageHeight);
    pendingFloaterTime -= FLOATER_STEP_MS;
    stepped = true;
  }
  // Only move elements after a step, so fast screens don't restyle them for nothing.
  if (stepped) {
    for (const floater of floaters) {
      placeFloater(floater);
    }
  }
  requestAnimationFrame(moveFloaters);
}
