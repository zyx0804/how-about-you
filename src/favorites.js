// Saved pieces ("我的收藏"): a visitor taps ♡ on a piece to keep it. Only the
// pieces' keys ("Brand|English name") are stored, in this browser only, newest
// first; nothing is sent anywhere.

const FAVORITES_KEY = "howAboutYou.favorites";

// More than anyone would save by hand; keeps a damaged entry from growing.
const FAVORITES_LIMIT = 200;

function pieceKey(brand, item) {
  return `${brand.brand}|${item.name.en}`;
}

// Reads what was saved, keeping only well-formed keys. Anything else (no
// storage, a damaged entry) counts as nothing saved.
function readFavoriteKeys(saved) {
  try {
    const keys = JSON.parse(saved);
    if (!Array.isArray(keys)) {
      return [];
    }
    const valid = keys.filter((key) => typeof key === "string" && key.includes("|"));
    return [...new Set(valid)].slice(0, FAVORITES_LIMIT);
  } catch {
    return [];
  }
}

function loadFavoriteKeys() {
  try {
    return readFavoriteKeys(localStorage.getItem(FAVORITES_KEY));
  } catch {
    return [];
  }
}

// Returns false when the browser won't store it (private mode, storage off).
function saveFavoriteKeys(keys) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(keys));
    return true;
  } catch {
    return false;
  }
}

// Saves the key at the front, or removes it if it was saved.
function toggleFavorite(keys, key) {
  return keys.includes(key) ? keys.filter((saved) => saved !== key) : [key, ...keys].slice(0, FAVORITES_LIMIT);
}

// The saved pieces still on the shelf, newest first. A piece that lost its
// picture or was renamed is skipped rather than shown broken.
function favoritePieces(keys, pieces) {
  const byKey = new Map(pieces.map((piece) => [pieceKey(piece.brand, piece.item), piece]));
  return keys.filter((key) => byKey.has(key)).map((key) => byKey.get(key));
}

// Today's outfit from saved pieces: one per category, chosen by the same
// styling rules as the daily picks (recommend.js), changing day by day. Two
// saved pieces from one brand may both be worn, so each piece stands alone.
// Pieces that don't suit today's weather ("cold", "mild", or "hot"; see
// styling.js) are left out, unless that would leave too little to dress in.
// Returns nothing until the pieces cover at least two categories.
function outfitFromSaved(savedPieces, seedText, weather = "mild") {
  const coversTwo = (list) => new Set(list.map(({ item }) => item.category)).size >= 2;
  const suited = savedPieces.filter(({ item }) => suitsWeather(item, weather));
  const pieces = coversTwo(suited) ? suited : savedPieces;
  if (!coversTwo(pieces)) {
    return [];
  }
  const shelf = pieces.map((piece, index) => ({ brand: String(index), intensity: 0.5, items: [piece.item] }));
  return pickOutfit(shelf, 0.5, seedText).map(({ brand }) => pieces[Number(brand.brand)]);
}

// Lets tests load this file in Node; browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = { pieceKey, readFavoriteKeys, toggleFavorite, favoritePieces, outfitFromSaved };
}
