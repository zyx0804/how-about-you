// The page's saved pieces: the "♡ 收藏" button under each piece, the
// "我的收藏" list, and the outfit made from it. The rules are in favorites.js.

const savedTitle = document.getElementById("saved-title");
const savedStatus = document.getElementById("saved-status");
const savedList = document.getElementById("saved-list");
const savedOutfit = document.getElementById("saved-outfit");
const savedOutfitList = document.getElementById("saved-outfit-list");

let favoriteKeys = loadFavoriteKeys();
let savingBlocked = false;

function renderSaveButton(button, key, itemName) {
  const text = UI_TEXT[language];
  const isSaved = favoriteKeys.includes(key);
  // The piece's name is read aloud after the visible text but not shown.
  const hiddenName = document.createElement("span");
  hiddenName.className = "visually-hidden";
  hiddenName.textContent = ` ${itemName}`;
  button.replaceChildren(isSaved ? text.saved : text.save, hiddenName);
  button.setAttribute("aria-pressed", String(isSaved));
}

// "♡ Save" under a piece; tapping again removes it.
function saveButton(brand, item) {
  const key = pieceKey(brand, item);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "save-button";
  renderSaveButton(button, key, item.name[language]);
  button.addEventListener("click", () => {
    favoriteKeys = toggleFavorite(favoriteKeys, key);
    savingBlocked = !saveFavoriteKeys(favoriteKeys);
    renderSaveButton(button, key, item.name[language]);
    renderSaved();
    if (searchedQuery !== null) {
      runSearch();
    }
  });
  return button;
}

// The saved list, newest first, with its count in the title.
function renderSaved() {
  const text = UI_TEXT[language];
  const pieces = favoritePieces(favoriteKeys, searchable);
  savedTitle.textContent = text.savedTitle(pieces.length);
  savedList.innerHTML = "";
  if (savingBlocked) {
    savedStatus.textContent = text.savedBlocked;
  } else {
    savedStatus.textContent = pieces.length === 0 ? text.savedEmpty : text.savedHint;
  }
  for (const piece of pieces) {
    savedList.append(pieceCard(piece, "savedPick"));
  }
  const outfit = outfitFromSaved(pieces, `${todayKey()}|saved`, todaysWeather.kind);
  savedOutfit.hidden = outfit.length === 0;
  savedOutfitList.innerHTML = "";
  for (const piece of outfit) {
    savedOutfitList.append(pieceCard(piece, "savedPick"));
  }
}
