// Animated mood scenes drawn on a full-screen canvas behind the page:
// rain, stars, wind-blown willow leaves, a sunny sky, a throbbing red glow
// with rising ash, and flashes of lightning.

const sceneCanvas = document.getElementById("scene");
const sceneContext = sceneCanvas.getContext("2d");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Particles move in fixed 60-per-second steps, so scenes run at the same
// speed on any screen refresh rate.
const SCENE_STEP_MS = 1000 / 60;

let sceneType = null;
let particles = [];
let lastSceneTime = null;
let pendingSceneTime = 0;

function random(min, max) {
  return min + Math.random() * (max - min);
}

function resizeScene() {
  sceneCanvas.width = window.innerWidth;
  sceneCanvas.height = window.innerHeight;
}

// A soft blob made of overlapping white circles, used for sky clouds.
function drawSoftCloud(ctx, x, y, scale, alpha) {
  const puffs = [
    [0, 0, 1],
    [-0.9, 0.2, 0.75],
    [0.9, 0.25, 0.7],
    [-0.4, -0.35, 0.7],
    [0.45, -0.3, 0.65],
  ];
  for (const [dx, dy, radius] of puffs) {
    const px = x + dx * 40 * scale;
    const py = y + dy * 40 * scale;
    const r = radius * 46 * scale;
    const puff = ctx.createRadialGradient(px, py, 0, px, py, r);
    puff.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    puff.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = puff;
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

// A zigzag line heading roughly downward from (x, y).
function boltPoints(x, y, length) {
  const points = [{ x, y }];
  const steps = 9;
  for (let i = 1; i <= steps; i++) {
    points.push({ x: x + random(-16, 16), y: y + (length * i) / steps });
  }
  return points;
}

// Each scene describes how to create, move, and draw one particle. An
// optional backdrop is drawn first, every frame.
const SCENES = {
  rain: {
    count: 160,
    create: (w, h) => ({ x: random(0, w), y: random(-h, h), length: random(12, 26), speed: random(9, 15) }),
    update: (p, w, h) => {
      p.y += p.speed;
      p.x -= p.speed * 0.15;
      if (p.y > h) {
        p.y = random(-60, -10);
        p.x = random(0, w + 100);
      }
    },
    draw: (ctx, p) => {
      ctx.strokeStyle = "rgba(170, 190, 230, 0.35)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.length * 0.15, p.y + p.length);
      ctx.stroke();
    },
  },
  stars: {
    count: 110,
    create: (w, h) => ({ x: random(0, w), y: random(0, h), radius: random(0.5, 1.8), phase: random(0, Math.PI * 2) }),
    update: (p) => {
      p.phase += 0.02;
    },
    draw: (ctx, p) => {
      ctx.fillStyle = `rgba(230, 225, 255, ${0.25 + 0.5 * Math.abs(Math.sin(p.phase))})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    },
  },
  // Long, narrow willow leaves carried sideways by gusts, turning as they go.
  leaves: {
    count: 30,
    create: (w, h) => ({
      x: random(-w, w),
      y: random(0, h),
      length: random(14, 24),
      spin: random(0, Math.PI * 2),
      speed: random(0.5, 1.1),
      wave: random(0, Math.PI * 2),
      shade: random(0, 1),
    }),
    update: (p, w, h) => {
      const gust = 1 + 0.6 * Math.sin(performance.now() * 0.0005 + p.wave);
      p.x += p.speed * gust;
      p.wave += 0.01;
      p.y += Math.sin(p.wave) * 0.4;
      p.spin += 0.02 * gust;
      if (p.x > w + 30) {
        p.x = -30;
        p.y = random(0, h);
      }
    },
    draw: (ctx, p) => {
      const half = p.length / 2;
      const width = p.length * 0.11 * (Math.abs(Math.cos(p.spin * 0.8)) * 0.7 + 0.3);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.spin);
      ctx.fillStyle = `rgba(${Math.round(110 + p.shade * 40)}, ${Math.round(150 + p.shade * 30)}, 80, 0.6)`;
      ctx.beginPath();
      ctx.moveTo(-half, 0);
      ctx.quadraticCurveTo(0, -width * 2, half, 0);
      ctx.quadraticCurveTo(0, width * 2, -half, 0);
      ctx.fill();
      ctx.restore();
    },
  },
  // A clear blue sky: a bright sun and soft clouds drifting slowly.
  sky: {
    count: 5,
    create: (w, h) => ({
      x: random(-200, w),
      y: random(h * 0.05, h * 0.75),
      scale: random(0.7, 1.4),
      speed: random(0.05, 0.12),
      alpha: random(0.55, 0.85),
    }),
    backdrop: (ctx, w, h) => {
      const sunX = w * 0.84;
      const sunY = h * 0.1;
      const glow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, Math.max(w, h) * 0.45);
      glow.addColorStop(0, "rgba(255, 255, 240, 1)");
      glow.addColorStop(0.06, "rgba(255, 250, 220, 0.9)");
      glow.addColorStop(0.2, "rgba(255, 245, 210, 0.3)");
      glow.addColorStop(1, "rgba(255, 245, 210, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
    },
    update: (p, w, h) => {
      p.x += p.speed;
      if (p.x > w + 150 * p.scale) {
        p.x = -150 * p.scale;
        p.y = random(h * 0.05, h * 0.75);
      }
    },
    draw: (ctx, p) => drawSoftCloud(ctx, p.x, p.y, p.scale, p.alpha),
  },
  // Irritation: a red glow from below that throbs like an angry heartbeat,
  // with ash swirling up through it.
  smolder: {
    count: 45,
    create: (w, h) => ({ x: random(0, w), y: random(0, h), size: random(0.8, 2.2), speed: random(0.3, 0.8), sway: random(0, 6) }),
    backdrop: (ctx, w, h, time) => {
      // Two quick beats, then a pause.
      const beat = (offset) => Math.pow(Math.max(0, Math.sin(time * 0.0035 - offset)), 12);
      const pulse = beat(0) + 0.7 * beat(0.5);
      const heat = ctx.createRadialGradient(w / 2, h * 1.15, 0, w / 2, h * 1.15, h * (0.9 + pulse * 0.15));
      heat.addColorStop(0, `rgba(255, 90, 30, ${0.55 + pulse * 0.3})`);
      heat.addColorStop(0.45, `rgba(170, 30, 20, ${0.35 + pulse * 0.25})`);
      heat.addColorStop(1, "rgba(60, 0, 0, 0)");
      ctx.fillStyle = heat;
      ctx.fillRect(0, 0, w, h);
      const edge = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.75);
      edge.addColorStop(0, "rgba(120, 0, 0, 0)");
      edge.addColorStop(1, `rgba(120, 0, 10, ${0.35 + pulse * 0.35})`);
      ctx.fillStyle = edge;
      ctx.fillRect(0, 0, w, h);
    },
    update: (p, w, h) => {
      p.sway += 0.02;
      p.y -= p.speed;
      p.x += Math.sin(p.sway * 1.7) * 0.8;
      if (p.y < -10) {
        p.y = h + 10;
        p.x = random(0, w);
      }
    },
    draw: (ctx, p) => {
      ctx.fillStyle = "rgba(190, 170, 160, 0.45)";
      ctx.fillRect(p.x, p.y, p.size, p.size);
    },
  },
  // Short, thick bolts of pink and white lightning that flash and fade at random spots.
  lightning: {
    count: 7,
    create: () => ({ wait: random(10, 90), life: 0, points: [], branch: [], pink: true }),
    update: (p, w, h) => {
      if (p.wait > 0) {
        p.wait -= 1;
        if (p.wait <= 0) {
          p.points = boltPoints(random(0, w), random(0, h * 0.75), random(90, 180));
          const fork = p.points[Math.floor(p.points.length / 2)];
          p.branch = boltPoints(fork.x, fork.y, random(30, 70));
          p.life = 1;
          p.pink = Math.random() < 0.5;
        }
        return;
      }
      p.life -= 0.08;
      if (p.life <= 0) {
        p.wait = random(20, 110);
      }
    },
    draw: (ctx, p) => {
      if (p.life <= 0) {
        return;
      }
      // A quick flicker while the bolt fades.
      const alpha = p.life * (0.6 + 0.4 * Math.random());
      const color = p.pink ? "255, 120, 200" : "255, 255, 255";
      ctx.save();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.shadowColor = "rgba(255, 110, 200, 0.95)";
      ctx.shadowBlur = 18;
      for (const [line, width] of [[p.points, 4], [p.branch, 2.4]]) {
        // A wide colored stroke with a thin bright core inside it.
        for (const [strokeColor, strokeWidth] of [[`rgba(${color}, ${alpha})`, width], [`rgba(255, 245, 252, ${alpha})`, width * 0.35]]) {
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = strokeWidth;
          ctx.beginPath();
          line.forEach((point, index) => (index === 0 ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y)));
          ctx.stroke();
        }
      }
      ctx.restore();
    },
  },
};

// How long the old scene takes to fade out when the mood changes.
const SCENE_FADE_MS = 900;

// The scene being replaced keeps moving while it fades out.
let fadingScene = null;

function setScene(type) {
  if (type === sceneType) {
    return;
  }
  if (sceneType !== null) {
    fadingScene = { type: sceneType, particles, alpha: 1 };
  }
  sceneType = type;
  const scene = SCENES[type];
  particles = Array.from({ length: scene.count }, () => scene.create(sceneCanvas.width, sceneCanvas.height));
  if (reducedMotion) {
    fadingScene = null;
    drawFrame();
  }
}

function drawLayer(type, layerParticles, alpha, now) {
  const scene = SCENES[type];
  const { width, height } = sceneCanvas;
  sceneContext.globalAlpha = alpha;
  if (scene.backdrop) {
    scene.backdrop(sceneContext, width, height, now);
  }
  for (const particle of layerParticles) {
    scene.draw(sceneContext, particle);
  }
  sceneContext.globalAlpha = 1;
}

function drawFrame() {
  const now = performance.now();
  sceneContext.clearRect(0, 0, sceneCanvas.width, sceneCanvas.height);
  if (sceneType === null) {
    return;
  }
  // The new scene fades in as the old one fades out.
  const fadeIn = fadingScene ? 1 - fadingScene.alpha : 1;
  if (fadingScene) {
    drawLayer(fadingScene.type, fadingScene.particles, fadingScene.alpha, now);
  }
  drawLayer(sceneType, particles, fadeIn, now);
}

function stepScene() {
  const { width, height } = sceneCanvas;
  for (const layer of [fadingScene, { type: sceneType, particles }]) {
    if (layer && layer.type !== null) {
      const scene = SCENES[layer.type];
      for (const particle of layer.particles) {
        scene.update(particle, width, height);
      }
    }
  }
  if (fadingScene) {
    fadingScene.alpha -= SCENE_STEP_MS / SCENE_FADE_MS;
    if (fadingScene.alpha <= 0) {
      fadingScene = null;
    }
  }
}

function animate(now) {
  // Long gaps (a hidden tab) are capped so particles don't jump far ahead.
  pendingSceneTime += lastSceneTime === null ? 0 : Math.min(now - lastSceneTime, 100);
  lastSceneTime = now;
  let stepped = false;
  while (pendingSceneTime >= SCENE_STEP_MS) {
    stepScene();
    pendingSceneTime -= SCENE_STEP_MS;
    stepped = true;
  }
  // Drawing only after a step keeps fast screens (120-240 Hz) from redrawing
  // identical frames, which saves a lot of work.
  if (stepped) {
    drawFrame();
  }
  requestAnimationFrame(animate);
}

resizeScene();
window.addEventListener("resize", resizeScene);
// People who ask their system for less motion get a still scene instead.
if (!reducedMotion) {
  requestAnimationFrame(animate);
}
