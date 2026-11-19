// The page's mood sound button. The sounds are made in sound.js.

const soundButton = document.getElementById("sound-button");
const soundProblem = document.getElementById("sound-problem");

let soundOn = false;

function renderSoundButton() {
  const text = UI_TEXT[language];
  soundButton.textContent = soundOn ? text.soundOn : text.soundOff;
  soundButton.setAttribute("aria-pressed", String(soundOn));
}

soundButton.addEventListener("click", () => {
  const wanted = !soundOn;
  if (setSoundOn(wanted, currentMoodId)) {
    soundOn = wanted;
    soundProblem.textContent = "";
  } else {
    soundProblem.textContent = UI_TEXT[language].soundMissing;
  }
  renderSoundButton();
});
