// Fluffy 3D dandelions drawn with SVG. Each hair is a direction in 3D that
// slowly turns around the vertical axis and is projected onto the screen;
// hairs at the back are dimmer and thinner than hairs at the front, and
// every tip has a soft glowing tuft, so the puff reads as round and furry.

const SVG_NS = "http://www.w3.org/2000/svg";
// Looking at the puff slightly from above.
const VIEW_TILT = 0.35;

// Directions spread evenly over a sphere (a Fibonacci spiral).
function sphereDirections(count) {
  const directions = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (2 * (i + 0.5)) / count;
    const ring = Math.sqrt(1 - y * y);
    directions.push({ x: Math.cos(goldenAngle * i) * ring, y, z: Math.sin(goldenAngle * i) * ring });
  }
  return directions;
}

// Directions for a seed's parachute: a ring of hairs opening like an umbrella.
function parachuteDirections(count) {
  const directions = [];
  for (let i = 0; i < count; i++) {
    const around = (i / count) * Math.PI * 2;
    const lift = (58 + (i % 4) * 7) * (Math.PI / 180);
    directions.push({ x: Math.sin(lift) * Math.cos(around), y: -Math.cos(lift), z: Math.sin(lift) * Math.sin(around) });
  }
  return directions;
}

// Builds the SVG elements for a set of hairs, to be moved by turnHairs.
function createHairs(group, directions) {
  return directions.map((direction) => {
    const hair = document.createElementNS(SVG_NS, "line");
    hair.setAttribute("class", "fluff-hair");
    const tuft = document.createElementNS(SVG_NS, "circle");
    tuft.setAttribute("class", "fluff-tuft");
    group.append(hair, tuft);
    return { direction, hair, tuft };
  });
}

// Turns every hair by the given angle and redraws it from the center.
function turnHairs(hairs, centerX, centerY, length, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  for (const { direction, hair, tuft } of hairs) {
    const x = direction.x * cos - direction.z * sin;
    const z = direction.x * sin + direction.z * cos;
    const tipX = centerX + x * length;
    const tipY = centerY + (direction.y + z * VIEW_TILT) * length * 0.95;
    // z runs from -1 (back) to 1 (front).
    const nearness = (z + 1) / 2;
    hair.setAttribute("x1", centerX);
    hair.setAttribute("y1", centerY);
    hair.setAttribute("x2", tipX.toFixed(2));
    hair.setAttribute("y2", tipY.toFixed(2));
    hair.style.opacity = (0.25 + nearness * 0.75).toFixed(2);
    hair.style.strokeWidth = (0.25 + nearness * 0.35).toFixed(2);
    tuft.setAttribute("cx", tipX.toFixed(2));
    tuft.setAttribute("cy", tipY.toFixed(2));
    tuft.setAttribute("r", (0.9 + nearness * 1.1).toFixed(2));
    tuft.style.opacity = (0.3 + nearness * 0.7).toFixed(2);
  }
}

// A seed: an umbrella of hairs on a fine stalk above a small brown seed.
function createSeed(container) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "seed-shape");
  svg.setAttribute("viewBox", "0 0 40 50");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = `<line class="seed-stalk" x1="20" y1="16" x2="20" y2="37" />
    <ellipse class="seed-body" cx="20" cy="41" rx="1.6" ry="4.2" />`;
  const fluff = document.createElementNS(SVG_NS, "g");
  fluff.setAttribute("filter", "url(#fluff-glow)");
  svg.append(fluff);
  container.append(svg);
  const hairs = createHairs(fluff, parachuteDirections(36));
  const seed = { hairs, angle: Math.random() * Math.PI * 2 };
  turnSeed(seed, 0);
  return seed;
}

function turnSeed(seed, step) {
  seed.angle += step;
  turnHairs(seed.hairs, 20, 16, 17, seed.angle);
}

// The dandelion in the bottom-left corner on happy days. A few hairs are
// missing: those are the seeds that flew away.
const cornerDandelion = document.getElementById("dandelion-head");
const cornerHairs = cornerDandelion
  ? createHairs(cornerDandelion, sphereDirections(110).filter((_, index) => index % 9 !== 4))
  : [];
let cornerAngle = 0;
let lastCornerTime = null;
// The puff turns slowly, so 30 redraws a second look smooth and save work.
const CORNER_FRAME_MS = 1000 / 30;

// Turns by time rather than by frame, so it spins at the same speed on any screen.
function animateCornerDandelion(now) {
  if (lastCornerTime === null) {
    lastCornerTime = now;
  }
  const elapsed = Math.min(now - lastCornerTime, 100);
  if (elapsed >= CORNER_FRAME_MS) {
    lastCornerTime = now;
    if (document.body.dataset.mood === "happy") {
      cornerAngle += elapsed * 0.00018;
      turnHairs(cornerHairs, 45, 38, 21, cornerAngle);
    }
  }
  requestAnimationFrame(animateCornerDandelion);
}

turnHairs(cornerHairs, 45, 38, 21, 0);
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  requestAnimationFrame(animateCornerDandelion);
}
