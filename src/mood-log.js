// The mood record ("我的心情记录"): the last mood chosen each day, kept in
// this browser only, so a visitor can look back over their week. Nothing is
// sent anywhere.

const MOOD_LOG_KEY = "howAboutYou.moodLog";

// A year of days is plenty to look back on.
const MOOD_LOG_LIMIT = 366;

// How many days the record shows.
const MOOD_LOG_DAYS = 14;

// Reads a saved record, keeping only well-formed days: { date: "YYYY-MM-DD",
// mood, score 0 to 100 }, one per date, oldest first. Anything else counts
// as nothing recorded.
function readMoodLog(saved, moodOrder) {
  try {
    const entries = JSON.parse(saved);
    if (!Array.isArray(entries)) {
      return [];
    }
    const byDate = new Map();
    for (const entry of entries) {
      const valid =
        entry !== null &&
        typeof entry === "object" &&
        /^\d{4}-\d{2}-\d{2}$/.test(entry.date) &&
        moodOrder.includes(entry.mood) &&
        Number.isInteger(entry.score) &&
        entry.score >= 0 &&
        entry.score <= 100;
      if (valid) {
        byDate.set(entry.date, { date: entry.date, mood: entry.mood, score: entry.score });
      }
    }
    return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date)).slice(-MOOD_LOG_LIMIT);
  } catch {
    return [];
  }
}

function loadMoodLog(moodOrder) {
  try {
    return readMoodLog(localStorage.getItem(MOOD_LOG_KEY), moodOrder);
  } catch {
    return [];
  }
}

// Returns false when the browser won't store it (private mode, storage off).
function saveMoodLog(log) {
  try {
    localStorage.setItem(MOOD_LOG_KEY, JSON.stringify(log));
    return true;
  } catch {
    return false;
  }
}

function clearMoodLog() {
  try {
    localStorage.removeItem(MOOD_LOG_KEY);
  } catch {
    // Nothing was stored, so there is nothing to clear.
  }
}

// The record with today's mood set; a later choice the same day replaces
// the earlier one, since the last mood picked is where the day ended up.
function recordMood(log, date, mood, score) {
  const others = log.filter((entry) => entry.date !== date);
  return [...others, { date, mood, score }].sort((a, b) => a.date.localeCompare(b.date)).slice(-MOOD_LOG_LIMIT);
}

// The date `days` before the YYYY-MM-DD date, as YYYY-MM-DD (local dates,
// so a change to or from daylight saving time doesn't skip a day).
function daysBefore(date, days) {
  const [year, month, day] = date.split("-").map(Number);
  const earlier = new Date(year, month - 1, day - days);
  const pad = (number) => String(number).padStart(2, "0");
  return `${earlier.getFullYear()}-${pad(earlier.getMonth() + 1)}-${pad(earlier.getDate())}`;
}

// The last `count` days up to today, oldest first, each with its entry or
// null for a day with no mood chosen.
function recentDays(log, today, count = MOOD_LOG_DAYS) {
  const byDate = new Map(log.map((entry) => [entry.date, entry]));
  const days = [];
  for (let back = count - 1; back >= 0; back--) {
    const date = daysBefore(today, back);
    days.push({ date, entry: byDate.get(date) || null });
  }
  return days;
}

// The mood chosen on the most of the last seven days, and on how many; ties
// go to the more recent mood. Null when none of the seven days has a mood.
function weekSummary(log, today) {
  const counts = new Map();
  for (const { entry } of recentDays(log, today, 7)) {
    if (entry) {
      // Deleting and re-adding moves a mood to the end, so later wins ties.
      const count = (counts.get(entry.mood) || 0) + 1;
      counts.delete(entry.mood);
      counts.set(entry.mood, count);
    }
  }
  let top = null;
  for (const [mood, days] of counts) {
    if (top === null || days >= top.days) {
      top = { mood, days };
    }
  }
  return top;
}

// Lets tests load this file in Node; browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = { readMoodLog, recordMood, daysBefore, recentDays, weekSummary };
}
