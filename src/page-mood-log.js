// The page's mood record ("我的心情记录") and the reminder on a return
// visit. The rules are in mood-log.js.

const logSummary = document.getElementById("log-summary");
const logDays = document.getElementById("log-days");
const logClear = document.getElementById("log-clear");
const logReminder = document.getElementById("log-reminder");
const logReminderText = document.getElementById("log-reminder-text");
const logResume = document.getElementById("log-resume");

let moodLog = loadMoodLog(MOOD_ORDER);
let moodLogBlocked = false;

// Notes today's mood; a later pick today replaces it.
function rememberMood(score) {
  moodLog = recordMood(moodLog, todayKey(), currentMoodId, score);
  moodLogBlocked = !saveMoodLog(moodLog);
  renderMoodLog();
}

function renderMoodLog() {
  const text = UI_TEXT[language];
  const today = todayKey();
  const top = weekSummary(moodLog, today);
  if (moodLogBlocked) {
    logSummary.textContent = text.logBlocked;
  } else if (top) {
    logSummary.textContent = text.logWeek(`${MOODS[top.mood].emoji} ${MOODS[top.mood].label[language]}`, top.days);
  } else {
    logSummary.textContent = text.logEmpty;
  }
  logDays.innerHTML = "";
  for (const { date, entry } of recentDays(moodLog, today)) {
    const [, month, day] = date.split("-").map(Number);
    const cell = document.createElement("li");
    cell.className = entry ? `log-day log-${entry.mood}` : "log-day log-empty";
    if (date === today) {
      cell.classList.add("log-today");
    }
    const label = entry ? MOODS[entry.mood].label[language] : null;
    cell.setAttribute("aria-label", text.logDayLabel(month, day, label, entry?.score));
    const dateText = document.createElement("span");
    dateText.className = "log-date";
    dateText.textContent = text.logDay(month, day);
    const moodText = document.createElement("span");
    moodText.className = "log-mood";
    moodText.textContent = entry ? MOODS[entry.mood].emoji : "·";
    const scoreText = document.createElement("span");
    scoreText.className = "log-score";
    scoreText.textContent = entry ? String(entry.score) : "";
    // The label above says it all; the parts would be read out one by one.
    for (const part of [dateText, moodText, scoreText]) {
      part.setAttribute("aria-hidden", "true");
    }
    cell.append(dateText, moodText, scoreText);
    logDays.append(cell);
  }
  logClear.hidden = moodLog.length === 0;
  renderMoodReminder();
}

// Shown until a mood is picked on this visit.
function renderMoodReminder() {
  const reminder = currentMoodId === null ? moodReminder(moodLog, todayKey()) : null;
  logReminder.hidden = reminder === null;
  if (reminder === null) {
    return;
  }
  const text = UI_TEXT[language];
  const { entry } = reminder;
  const label = `${MOODS[entry.mood].emoji} ${MOODS[entry.mood].label[language]}`;
  const [, month, day] = entry.date.split("-").map(Number);
  logReminderText.textContent = reminder.today ? text.logToday(label, entry.score) : text.logLast(month, day, label);
  logResume.hidden = !reminder.today;
}

// Picks today's mood again at the same score, as if the meter were dragged there.
logResume.addEventListener("click", () => {
  const reminder = moodReminder(moodLog, todayKey());
  if (reminder?.today) {
    moodMeter.value = reminder.entry.score;
    selectMood(moodForScore(reminder.entry.score), true);
    todaySection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

logClear.addEventListener("click", () => {
  if (window.confirm(UI_TEXT[language].logClearConfirm)) {
    clearMoodLog();
    moodLog = [];
    renderMoodLog();
  }
});
