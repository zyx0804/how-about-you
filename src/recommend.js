// Picks today's recommendation: up to five pictured items from different
// brands of the current mood. Brands whose intensity is close to where the
// score sits inside the mood's range are more likely, and the choice is
// seeded by the date and score, so the same day and score give the same
// picks while a new day brings different ones.

const OUTFIT_CATEGORIES = ["outerwear", "top", "bottom", "shoes", "accessory"];

// How far from the score a brand can sit and still be likely (0 to 1 scale).
const INTENSITY_SPREAD = 0.3;

// A small deterministic random number generator (mulberry32), so a seed
// always produces the same sequence.
function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

// Turns any text into a 32-bit number to seed the generator.
function hashText(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

// The local date as YYYY-MM-DD, so the outfit changes at the user's midnight.
function todayKey(date = new Date()) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function pickWeighted(entries, random) {
  const total = entries.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = random() * total;
  for (const entry of entries) {
    roll -= entry.weight;
    if (roll <= 0) {
      return entry;
    }
  }
  return entries[entries.length - 1];
}

// How many items today's recommendation holds at most.
const OUTFIT_SIZE = 5;

// Only items with a picture (a licensed photo or a reference image) are on
// the shelf; the rest stay in the data and return once they get a picture.
function hasPicture(brand, item) {
  const images = typeof AI_IMAGES === "undefined" ? {} : AI_IMAGES;
  return Boolean(item.photo || images[`${brand.brand}|${item.name.en}`]);
}

// The brands of a mood with only their pictured items; brands left with
// nothing are dropped.
function onShelf(brands) {
  return brands
    .map((brand) => ({ ...brand, items: brand.items.filter((item) => hasPicture(brand, item)) }))
    .filter((brand) => brand.items.length > 0);
}

function intensityWeight(brand, positionInRange) {
  const distance = brand.intensity - positionInRange;
  return Math.exp(-(distance * distance) / (2 * INTENSITY_SPREAD * INTENSITY_SPREAD));
}

// ---- Coordination: which combinations look good together ----

// How many candidate combinations to draw before keeping the best one.
const CANDIDATES = 40;
// Shapes worn in cold weather and in hot weather; a set shouldn't mix them.
const WINTER_SHAPES = ["coat", "puffer", "beanie"];
const SUMMER_SHAPES = ["sandals", "shorts"];

// Saturation and lightness (0 to 1) of a #rrggbb color.
function colorTone(hex) {
  const value = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(value >> 16) & 255, (value >> 8) & 255, value & 255].map((channel) => channel / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  const saturation = max === min ? 0 : (max - min) / (1 - Math.abs(2 * lightness - 1));
  return { saturation, lightness };
}

// A bright, saturated main color (red, pink, green, royal blue...), as
// opposed to black, white, gray, beige, navy, brown, or olive.
function isLoud(item) {
  const { saturation, lightness } = colorTone(item.colors[0]);
  return saturation > 0.45 && lightness > 0.22 && lightness < 0.8;
}

// Higher is better. One bright piece with neutrals reads as styled; two or
// more bright pieces clash. Winter and summer pieces together look odd, and
// a set of all mid-tones with nothing dark or light looks flat.
function harmonyScore(items) {
  let score = 0;
  const loud = items.filter(isLoud).length;
  if (loud > 1) {
    score -= 10 * (loud - 1);
  }
  const hasWinter = items.some((item) => WINTER_SHAPES.includes(item.shape));
  const hasSummer = items.some((item) => SUMMER_SHAPES.includes(item.shape));
  if (hasWinter && hasSummer) {
    score -= 8;
  }
  const lightness = items.map((item) => colorTone(item.colors[0]).lightness);
  const spread = Math.max(...lightness) - Math.min(...lightness);
  const anchored = lightness.some((value) => value < 0.2 || value > 0.85);
  if (items.length >= 3 && spread < 0.12 && !anchored) {
    score -= 2;
  }
  return score;
}

// Draws many candidates with the same random stream and keeps the first
// one with the best harmony score, so results stay fixed for a given seed.
function bestOf(draw, itemsOf, random) {
  let best = null;
  let bestScore = -Infinity;
  for (let attempt = 0; attempt < CANDIDATES; attempt++) {
    const candidate = draw(random);
    const score = harmonyScore(itemsOf(candidate));
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }
  return best;
}

// One draw of up to five picks, each from a different brand. Brands near
// the score are likelier, and categories not used yet are preferred, so the
// picks mix clothes and shoes when the shelf allows.
function drawOutfit(brands, positionInRange, random) {
  const usedBrands = new Set();
  const usedCategories = new Set();
  const picks = [];
  while (picks.length < OUTFIT_SIZE) {
    const candidates = [];
    for (const brand of brands) {
      if (usedBrands.has(brand.brand)) {
        continue;
      }
      const fresh = brand.items.filter((item) => !usedCategories.has(item.category));
      const weight = intensityWeight(brand, positionInRange) * (fresh.length > 0 ? 1 : 0.3);
      candidates.push({ brand, items: fresh.length > 0 ? fresh : brand.items, weight });
    }
    if (candidates.length === 0) {
      break;
    }
    const chosen = pickWeighted(candidates, random);
    const item = chosen.items[Math.floor(random() * chosen.items.length)];
    usedBrands.add(chosen.brand.brand);
    usedCategories.add(item.category);
    picks.push({ brand: chosen.brand, item });
  }
  return picks;
}

// Today's picks: the best-coordinated of many draws, shown in the usual
// order (outerwear, top, bottoms, shoes, accessory).
function pickOutfit(brands, positionInRange, seedText) {
  const random = seededRandom(hashText(seedText));
  const picks = bestOf(
    (stream) => drawOutfit(brands, positionInRange, stream),
    (candidate) => candidate.map(({ item }) => item),
    random,
  );
  return picks.sort((a, b) => OUTFIT_CATEGORIES.indexOf(a.item.category) - OUTFIT_CATEGORIES.indexOf(b.item.category));
}

// The set a brand page shows: one item per category, with today's pick in
// its category and the best-coordinated choice for the others, drawn by the
// seed so the set changes daily.
function pickBrandSet(brand, pickedItem, seedText) {
  const random = seededRandom(hashText(seedText));
  const drawSet = (stream) => {
    const set = [];
    for (const category of OUTFIT_CATEGORIES) {
      const items = brand.items.filter((item) => item.category === category);
      if (items.length > 0) {
        set.push(pickedItem.category === category ? pickedItem : items[Math.floor(stream() * items.length)]);
      }
    }
    return set;
  };
  return bestOf(drawSet, (set) => set, random);
}

// Lets tests load this file in Node; browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = {
    OUTFIT_CATEGORIES,
    seededRandom,
    hashText,
    todayKey,
    hasPicture,
    onShelf,
    isLoud,
    harmonyScore,
    pickOutfit,
    pickBrandSet,
  };
}
