// Picks today's recommendation: up to five pictured items from different
// brands and categories of the current mood. Brands whose intensity is close to where the
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
// (The styling rules themselves are in styling.js.)

// How many candidate combinations to draw before keeping the best one.
const CANDIDATES = 40;

// Draws many candidates with the same random stream and keeps the first
// one with the most pieces, then the best harmony score, so results stay
// fixed for a given seed. (Taking a brand's shoes can leave no top from
// anyone else, so some draws come out shorter than others.)
function bestOf(draw, itemsOf, random) {
  let best = null;
  let bestScore = -Infinity;
  for (let attempt = 0; attempt < CANDIDATES; attempt++) {
    const candidate = draw(random);
    const items = itemsOf(candidate);
    const score = 100 * items.length + harmonyScore(items);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }
  return best;
}

// One draw of up to five picks, each from a different brand and a different
// category, so a shelf of mostly shoes gives one pair, not four (Yuxuan,
// 11/10). The categories are filled in a random order, each from a brand not
// used yet, with brands near the score likelier.
function drawOutfit(brands, positionInRange, random) {
  const categories = [...OUTFIT_CATEGORIES];
  for (let i = categories.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [categories[i], categories[j]] = [categories[j], categories[i]];
  }
  const usedBrands = new Set();
  const picks = [];
  for (const category of categories) {
    const candidates = [];
    for (const brand of brands) {
      const items = brand.items.filter((item) => item.category === category);
      if (!usedBrands.has(brand.brand) && items.length > 0) {
        candidates.push({ brand, items, weight: intensityWeight(brand, positionInRange) });
      }
    }
    if (candidates.length === 0) {
      continue;
    }
    const chosen = pickWeighted(candidates, random);
    usedBrands.add(chosen.brand.brand);
    picks.push({ brand: chosen.brand, item: chosen.items[Math.floor(random() * chosen.items.length)] });
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
// Picks three suggested questions for the AI stylist: one about the piece's
// category, one about the mood, and one general, in a shuffled order. Each is
// returned as { group, index } (plus mood) so it can be shown in either
// language, and questions in avoid (the ones on screen now) are skipped when
// the group has others.
function askQuestionList(questions, ref) {
  return ref.group === "mood" ? questions.moods[ref.mood] : questions[ref.group];
}

function pickAskQuestions(questions, category, mood, avoid, random) {
  const avoided = new Set(avoid.map((ref) => `${ref.group}|${ref.index}`));
  const fromGroup = (ref) => {
    const all = askQuestionList(questions, ref).map((_, index) => index);
    const fresh = all.filter((index) => !avoided.has(`${ref.group}|${index}`));
    const choices = fresh.length > 0 ? fresh : all;
    const pick = { ...ref, index: choices[Math.floor(random() * choices.length)] };
    avoided.add(`${pick.group}|${pick.index}`);
    return pick;
  };
  const picks = [fromGroup({ group: category }), fromGroup({ group: "general" })];
  // Before a mood is chosen there are no mood questions: use another general one.
  picks.push(questions.moods[mood] ? fromGroup({ group: "mood", mood }) : fromGroup({ group: "general" }));
  for (let i = picks.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [picks[i], picks[j]] = [picks[j], picks[i]];
  }
  return picks;
}

if (typeof module !== "undefined") {
  module.exports = {
    OUTFIT_CATEGORIES,
    askQuestionList,
    pickAskQuestions,
    seededRandom,
    hashText,
    todayKey,
    hasPicture,
    onShelf,
    pickOutfit,
    pickBrandSet,
  };
}
