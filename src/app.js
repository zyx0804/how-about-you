// Connects the page to the mood data: reads how the user feels, switches the
// page into that mood's scene, sends today's outfit floating past, and opens
// a brand page when a floater is tapped.

const feelingInput = document.getElementById("feeling-input");
const feelingForm = document.getElementById("feeling-form");
const message = document.getElementById("message");
const todaySection = document.getElementById("today");
const moodTitle = document.getElementById("mood-title");
const hint = document.getElementById("hint");
const result = document.getElementById("result");
const brandLogo = document.getElementById("brand-logo");
const logoCredit = document.getElementById("logo-credit");
const designerName = document.getElementById("designer-name");
const storyText = document.getElementById("story");
const moodLinkText = document.getElementById("mood-link");
const itemGrid = document.getElementById("item-grid");
const languageButton = document.getElementById("language-button");
const moodMeter = document.getElementById("mood-meter");
const meterValue = document.getElementById("mood-meter-value");
const meterLabels = document.getElementById("meter-labels");
const calcQuestions = document.getElementById("calc-questions");
const calcScore = document.getElementById("calc-score");
const calcApply = document.getElementById("calc-apply");
const photoFigure = document.getElementById("photo");
const photoImage = document.getElementById("photo-image");
const photoKind = document.getElementById("photo-kind");
const photoCaption = document.getElementById("photo-caption");
const photoAuthor = document.getElementById("photo-author");
const photoLicense = document.getElementById("photo-license");

let language = loadLanguage();
let currentMoodId = null;
// Today's outfit for the current mood and score: [{ brand, item }].
let currentPicks = [];
let openPick = null;
// The score the current picks were made for, to re-pick when it changes.
let pickedScore = null;
// Remembers which message is showing so it can be re-translated.
let currentMessageKey = null;

const skyLayers = [document.getElementById("sky-a"), document.getElementById("sky-b")];
let shownSky = 0;

// Fades the new background in over the old one.
function crossfadeBackground(background) {
  const next = skyLayers[1 - shownSky];
  next.style.background = background;
  next.classList.add("shown");
  skyLayers[shownSky].classList.remove("shown");
  shownSky = 1 - shownSky;
}

function applyTheme(theme) {
  crossfadeBackground(theme.background);
  const root = document.documentElement.style;
  root.setProperty("--background", theme.background);
  root.setProperty("--card", theme.card);
  root.setProperty("--accent", theme.accent);
  root.setProperty("--text", theme.text);
}

function showMessage(messageKey) {
  currentMessageKey = messageKey;
  message.textContent = messageKey === null ? "" : UI_TEXT[language][messageKey];
  message.hidden = messageKey === null;
}

// Fills a credit line: "Photo: author · license", both linked.
function fillCredit(authorLink, licenseLink, photo) {
  authorLink.textContent = UI_TEXT[language].photoBy(photo.author);
  authorLink.href = photo.page;
  licenseLink.textContent = photo.license;
  licenseLink.href = photo.licenseUrl;
}

// Shows the brand's licensed photo with its credit, or hides the block.
function renderBrandPhoto(brand) {
  const photo = brand.photo;
  photoFigure.hidden = !photo;
  if (!photo) {
    photoImage.removeAttribute("src");
    return;
  }
  if (photoImage.getAttribute("src") !== photo.src) {
    photoImage.src = photo.src;
  }
  photoImage.alt = photo.caption[language];
  photoKind.textContent = UI_TEXT[language].photoKind[photo.kind];
  photoCaption.textContent = photo.caption[language];
  fillCredit(photoAuthor, photoLicense, photo);
}

function wordmark(brand) {
  const heading = document.createElement("h2");
  heading.className = "brand";
  heading.textContent = brand.brand;
  applyBrandFont(heading, brand.brand);
  return heading;
}

// The brand's logo when a public-domain one exists, otherwise its name set
// as a wordmark in the mood's brand typeface.
function renderLogo(brand) {
  brandLogo.innerHTML = "";
  logoCredit.hidden = !brand.logo;
  if (!brand.logo) {
    brandLogo.append(wordmark(brand));
    return;
  }
  const image = document.createElement("img");
  image.src = brand.logo.src;
  image.alt = brand.brand;
  image.addEventListener("error", () => {
    brandLogo.innerHTML = "";
    brandLogo.append(wordmark(brand));
    logoCredit.hidden = true;
  });
  brandLogo.append(image);
  logoCredit.textContent = UI_TEXT[language].logoBy(brand.logo.license);
}

function newTabLink(className, href, text) {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = text;
  return link;
}

// One item: its licensed photo or a flat sketch, category, name, why it
// was picked, and a link to real photos.
function itemCard(brand, item, isPick) {
  const text = UI_TEXT[language];
  const card = document.createElement("div");
  card.className = isPick ? "item-card picked" : "item-card";
  const picture = document.createElement("div");
  picture.className = "item-picture";
  // A licensed photo first, then an AI illustration, then a flat sketch.
  const aiImage = item.photo ? null : AI_IMAGES[`${brand.brand}|${item.name.en}`];
  const aiLabel = document.createElement("span");
  aiLabel.className = "item-ai";
  aiLabel.textContent = text.aiImage;
  if (item.photo || aiImage) {
    const image = document.createElement("img");
    image.src = item.photo ? item.photo.src : aiImage;
    image.alt = item.name[language];
    image.loading = "lazy";
    // A missing image falls back to the sketch, without the AI label.
    image.addEventListener("error", () => {
      picture.innerHTML = drawFlat(item.shape, item.colors) || "";
      aiLabel.remove();
    });
    picture.append(image);
  } else {
    picture.innerHTML = drawFlat(item.shape, item.colors) || "";
  }
  card.append(picture);
  if (aiImage) {
    card.append(aiLabel);
  }
  if (isPick) {
    const badge = document.createElement("span");
    badge.className = "item-badge";
    badge.textContent = text.todayPick;
    card.append(badge);
  }
  const category = document.createElement("span");
  category.className = "item-category";
  category.textContent = text.categories[item.category];
  const name = document.createElement("strong");
  name.className = "item-name";
  name.textContent = item.name[language];
  const why = document.createElement("p");
  why.className = "item-why";
  why.textContent = item.why[language];
  card.append(category, name, why);
  if (item.photo) {
    const credit = document.createElement("p");
    credit.className = "item-credit";
    const author = newTabLink("", "", "");
    const license = newTabLink("", "", "");
    fillCredit(author, license, item.photo);
    credit.append(author, " · ", license);
    card.append(credit);
  }
  card.append(newTabLink("item-link", imageSearchUrl(brand, item), text.seeReal));
  return card;
}

// The brand page: logo, designer, photo, story, and all of the brand's
// items with today's pick first.
function renderBrandPage() {
  const { brand, item: pickedItem } = openPick;
  result.style.setProperty("--brand-pattern", brandPatternImage(brand.brand, brand.palette));
  renderLogo(brand);
  designerName.textContent = UI_TEXT[language].designer(brand.designer[language]);
  renderBrandPhoto(brand);
  storyText.textContent = brand.story[language];
  moodLinkText.textContent = brand.moodLink[language];
  itemGrid.innerHTML = "";
  const items = [pickedItem, ...brand.items.filter((item) => item !== pickedItem)];
  for (const item of items) {
    itemGrid.append(itemCard(brand, item, item === pickedItem));
  }
}

function showPick(pickIndex) {
  openPick = currentPicks[pickIndex];
  renderBrandPage();
  result.hidden = false;
  // Restart the fade-in so switching brands is visible.
  result.classList.remove("appear");
  void result.offsetWidth;
  result.classList.add("appear");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderMeterValue() {
  const text = UI_TEXT[language];
  if (currentMoodId === null) {
    meterValue.textContent = text.meterUnset;
    return;
  }
  const mood = MOODS[currentMoodId];
  meterValue.textContent = text.meterValue(moodMeter.value, `${mood.emoji} ${mood.label[language]}`);
}

// Mood calculator answers, 0 to 10, starting in the middle.
const calculatorAnswers = Object.fromEntries(CALCULATOR_QUESTIONS.map((id) => [id, 5]));

function renderCalculatorScore() {
  const score = scoreFromAnswers(calculatorAnswers);
  const mood = MOODS[moodForScore(score)];
  calcScore.textContent = UI_TEXT[language].calcScore(score, `${mood.emoji} ${mood.label[language]}`);
}

// Builds one slider per question; its labels come from renderCalculatorText.
function buildCalculator() {
  for (const id of CALCULATOR_QUESTIONS) {
    const row = document.createElement("label");
    row.className = "calc-row";
    row.dataset.question = id;
    const title = document.createElement("span");
    title.className = "calc-question";
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "10";
    slider.value = String(calculatorAnswers[id]);
    slider.addEventListener("input", () => {
      calculatorAnswers[id] = Number(slider.value);
      renderCalculatorScore();
    });
    const ends = document.createElement("span");
    ends.className = "calc-ends";
    ends.append(document.createElement("span"), document.createElement("span"));
    row.append(title, slider, ends);
    calcQuestions.append(row);
  }
}

function renderCalculatorText() {
  const questions = UI_TEXT[language].calcQuestions;
  for (const row of calcQuestions.children) {
    const [title, low, high] = questions[row.dataset.question];
    row.querySelector(".calc-question").textContent = title;
    const [lowLabel, highLabel] = row.querySelector(".calc-ends").children;
    lowLabel.textContent = low;
    highLabel.textContent = high;
  }
  renderCalculatorScore();
}

// Labels that depend on the mood and language: meter, title, hint, floaters.
function renderMoodText() {
  const text = UI_TEXT[language];
  renderCalculatorText();
  MOOD_ORDER.forEach((moodId, index) => {
    meterLabels.children[index].textContent = MOODS[moodId].label[language];
  });
  renderMeterValue();
  if (currentMoodId === null) {
    return;
  }
  const mood = MOODS[currentMoodId];
  moodTitle.textContent = text.moodTitle(mood.emoji, mood.label[language]);
  hint.textContent = text.hint(mood.floater);
  relabelFloaters(
    currentPicks.map(({ brand, item }) => ({
      item: item.name[language],
      ariaLabel: text.openPiece(brand.brand, item.name[language]),
    })),
  );
}

// Picks today's outfit for the current mood at the meter's score and sends
// it floating across the stage.
function pickAndShowOutfit() {
  const score = Number(moodMeter.value);
  const rangeStart = MOOD_ORDER.indexOf(currentMoodId) * MOOD_RANGE;
  const position = Math.min(1, Math.max(0, (score - rangeStart) / MOOD_RANGE));
  currentPicks = pickOutfit(MOOD_BRANDS[currentMoodId], position, `${todayKey()}|${currentMoodId}|${score}`);
  pickedScore = score;
  result.hidden = true;
  showFloaters(
    currentPicks.map(({ brand, item }) => ({ brand: brand.brand, palette: item.colors })),
    MOODS[currentMoodId].floater,
    showPick,
  );
  renderMoodText();
}

// Picks a mood from the text box or the meter. A pick from the text box
// moves the meter to the middle of that mood's range.
function selectMood(moodId, fromMeter = false) {
  currentMoodId = moodId;
  if (!fromMeter) {
    moodMeter.value = scoreForMood(moodId);
  }
  const mood = MOODS[moodId];
  showMessage(null);
  applyTheme(mood.theme);
  setScene(mood.scene);
  document.body.dataset.mood = moodId;
  todaySection.hidden = false;
  pickAndShowOutfit();
}

function setLanguage(newLanguage) {
  language = newLanguage;
  saveLanguage(language);
  applyStaticText(language);
  languageButton.textContent = UI_TEXT[language].switchTo;
  languageButton.setAttribute("aria-label", UI_TEXT[language].switchLabel);
  renderMoodText();
  if (openPick !== null && !result.hidden) {
    renderBrandPage();
  }
  if (currentMessageKey !== null) {
    showMessage(currentMessageKey);
  }
}

feelingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = feelingInput.value;
  if (text.trim() === "") {
    showMessage("emptyInput");
    return;
  }
  const moodId = detectMood(text);
  if (moodId === null) {
    showMessage("unknownMood");
    return;
  }
  selectMood(moodId);
});

languageButton.addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));

for (let index = 0; index < MOOD_ORDER.length; index++) {
  meterLabels.append(document.createElement("span"));
}

// While dragging, crossing into another mood's range switches the scene;
// within a range only the number changes.
moodMeter.addEventListener("input", () => {
  const moodId = moodForScore(Number(moodMeter.value));
  if (moodId !== currentMoodId) {
    selectMood(moodId, true);
  } else {
    renderMeterValue();
  }
});

// Letting go at a new score inside the same mood picks a new outfit, since
// each score has its own picks.
moodMeter.addEventListener("change", () => {
  if (currentMoodId !== null && Number(moodMeter.value) !== pickedScore) {
    pickAndShowOutfit();
  }
});

buildCalculator();

// Applying the calculator's score works like dragging the meter there.
calcApply.addEventListener("click", () => {
  moodMeter.value = scoreFromAnswers(calculatorAnswers);
  selectMood(moodForScore(Number(moodMeter.value)), true);
  todaySection.scrollIntoView({ behavior: "smooth", block: "start" });
});

// If a photo fails to load (offline, or removed from Commons), hide it
// rather than showing a broken image.
photoImage.addEventListener("error", () => {
  photoFigure.hidden = true;
});

setLanguage(language);
