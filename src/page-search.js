// The page's interest search ("不看心情，按兴趣找单品") and the small piece
// cards it shares with the saved list. The rules are in search.js.

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchExamples = document.getElementById("search-examples");
const searchStatus = document.getElementById("search-status");
const searchResults = document.getElementById("search-results");

// Built once: every pictured piece of every mood (see search.js).
const searchable = searchablePieces(MOOD_BRANDS, MOOD_ORDER, MOODS);
let searchedQuery = null;

// A small card for a found or saved piece; tapping it opens the brand page
// with the piece labeled by badgeKey.
function pieceCard(piece, badgeKey) {
  const { brand, item, moodId } = piece;
  const card = document.createElement("button");
  card.type = "button";
  card.className = "search-result";
  const brandName = document.createElement("span");
  brandName.className = "search-result-brand";
  brandName.textContent = brand.brand;
  const name = document.createElement("strong");
  name.textContent = item.name[language];
  const mood = document.createElement("span");
  mood.className = "search-result-mood";
  mood.textContent = `${MOODS[moodId].emoji} ${MOODS[moodId].label[language]}`;
  // In search results, a saved piece says so (the saved list doesn't need to).
  if (badgeKey !== "savedPick" && favoriteKeys.includes(pieceKey(brand, item))) {
    mood.textContent += ` · ${UI_TEXT[language].saved}`;
  }
  // The name is written on the card, so the picture adds nothing to read aloud.
  const { picture } = itemPicture(brand, item);
  picture.querySelector("img")?.setAttribute("alt", "");
  card.append(picture, brandName, name, mood);
  card.addEventListener("click", () => openPiece({ brand, item, moodId, badgeKey }));
  return card;
}

// Shows the pieces matching the search box, or says why there are none.
// Typing searches as you go; pressing Find with nothing typed asks for a word.
function runSearch(fromButton = false) {
  const text = UI_TEXT[language];
  const query = searchInput.value.trim();
  searchResults.innerHTML = "";
  searchedQuery = query;
  const found = searchPieces(searchable, query);
  if (found.empty) {
    searchStatus.textContent = fromButton ? text.searchEmpty : "";
    return;
  }
  if (found.total === 0) {
    searchStatus.textContent = text.searchNone(query);
    return;
  }
  searchStatus.textContent = text.searchFound(found.pieces.length, found.total);
  for (const piece of found.pieces) {
    searchResults.append(pieceCard(piece, "searchedPick"));
  }
}

function renderSearchExamples() {
  searchExamples.innerHTML = "";
  for (const example of UI_TEXT[language].searchExamples) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "ask-chip";
    chip.textContent = example;
    chip.addEventListener("click", () => {
      searchInput.value = example;
      runSearch(true);
    });
    searchExamples.append(chip);
  }
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(true);
});
searchInput.addEventListener("input", () => runSearch());
