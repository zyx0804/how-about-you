// Picks today's outfit: one outerwear, top, bottom, pair of shoes, and
// accessory from the brands of the current mood. Brands whose intensity is
// close to where the score sits inside the mood's range are more likely, and
// the choice is seeded by the date and score, so the same day and score give
// the same outfit while a new day brings a different one.

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

// How many times to redraw when the brands left can't fill every category.
const OUTFIT_ATTEMPTS = 30;

// One draw: each category from a brand not used yet, or null if some
// category has no unused brand left.
function drawOutfit(brands, positionInRange, random, allowRepeats) {
  const usedBrands = new Set();
  const picks = [];
  for (const category of OUTFIT_CATEGORIES) {
    const candidates = [];
    for (const brand of brands) {
      const items = brand.items.filter((item) => item.category === category);
      if (items.length === 0 || (!allowRepeats && usedBrands.has(brand.brand))) {
        continue;
      }
      const distance = brand.intensity - positionInRange;
      const weight = Math.exp(-(distance * distance) / (2 * INTENSITY_SPREAD * INTENSITY_SPREAD));
      candidates.push({ brand, items, weight });
    }
    if (candidates.length === 0) {
      return null;
    }
    const chosen = pickWeighted(candidates, random);
    const item = chosen.items[Math.floor(random() * chosen.items.length)];
    usedBrands.add(chosen.brand.brand);
    picks.push({ brand: chosen.brand, item });
  }
  return picks;
}

// Returns five picks, { brand, item }, one per outfit category, each from a
// different brand. If a draw gets stuck (say only shoe brands are left for
// the accessory), it draws again; only if that keeps failing may a brand
// repeat, so an outfit always comes back.
function pickOutfit(brands, positionInRange, seedText) {
  const random = seededRandom(hashText(seedText));
  for (let attempt = 0; attempt < OUTFIT_ATTEMPTS; attempt++) {
    const picks = drawOutfit(brands, positionInRange, random, false);
    if (picks) {
      return picks;
    }
  }
  return drawOutfit(brands, positionInRange, random, true) || [];
}

// Lets tests load this file in Node; browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = { OUTFIT_CATEGORIES, seededRandom, hashText, todayKey, pickOutfit };
}
