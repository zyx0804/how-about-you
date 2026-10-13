// Mood definitions: keywords for detection (Chinese and English), the page
// theme, the animated scene, and the kind of floater that carries the
// pieces. The brands for each mood live in src/data/<mood>.js. Loaded as a
// classic script so the app works by opening index.html directly.

// Filled by the files in src/data/, one array of brands per mood.
const MOOD_BRANDS = {};

const MOODS = {
  sad: {
    label: { zh: "低落", en: "Low" },
    emoji: "🌧️",
    keywords: [
      "难过", "伤心", "低落", "失落", "想哭", "郁闷", "沮丧", "不开心", "emo", "孤独", "委屈", "失望", "丧",
      "sad", "down", "upset", "lonely", "depressed", "heartbroken", "crying", "unhappy", "blue", "miserable",
    ],
    theme: { background: "#1c2029", card: "rgba(36, 41, 54, 0.82)", accent: "#8e9bc4", text: "#dfe3ee" },
    scene: "rain",
    floater: "mist",
  },
  tired: {
    label: { zh: "疲惫", en: "Tired" },
    emoji: "🌙",
    keywords: [
      "累", "疲惫", "困", "没劲", "不想动", "熬夜", "乏", "没精神", "躺平", "睡",
      "tired", "exhausted", "sleepy", "drained", "worn out", "burned out", "burnt out", "no energy", "fatigued",
    ],
    theme: { background: "#14131f", card: "rgba(32, 30, 48, 0.82)", accent: "#a99ad6", text: "#e4e0f2" },
    scene: "stars",
    floater: "streak",
  },
  calm: {
    label: { zh: "平静", en: "Calm" },
    emoji: "🍃",
    keywords: [
      "平静", "放松", "安静", "还好", "一般", "平常", "淡定", "舒服", "惬意", "悠闲",
      "calm", "relaxed", "peaceful", "chill", "okay", "fine", "content", "quiet", "mellow",
    ],
    theme: {
      background: "linear-gradient(160deg, #d3e6e2 0%, #c3dad6 45%, #dfeadf 100%)",
      card: "rgba(244, 250, 248, 0.78)",
      accent: "#4f7d74",
      text: "#1f3a35",
    },
    scene: "leaves",
    floater: "drift",
  },
  happy: {
    label: { zh: "开心", en: "Happy" },
    emoji: "☀️",
    keywords: [
      "开心", "高兴", "快乐", "愉快", "幸福", "不错", "棒", "爽", "哈哈", "开森", "美好", "满足",
      "happy", "glad", "joyful", "great", "awesome", "good mood", "cheerful", "delighted", "lol", "haha",
    ],
    theme: {
      background: "linear-gradient(180deg, #4fa8ec 0%, #84c6f5 45%, #d2edfd 100%)",
      card: "rgba(255, 255, 255, 0.8)",
      accent: "#2f7fc0",
      text: "#12304a",
    },
    scene: "sky",
    floater: "seed",
  },
  irritated: {
    label: { zh: "烦躁", en: "Irritated" },
    emoji: "🌋",
    keywords: [
      "烦", "烦躁", "生气", "愤怒", "气死", "火大", "讨厌", "焦虑", "崩溃", "无语", "暴躁", "压力",
      "angry", "annoyed", "irritated", "frustrated", "stressed", "anxious", "furious", "pissed", "hate",
    ],
    theme: {
      background: "linear-gradient(180deg, #170c10 0%, #26100f 60%, #3a1810 100%)",
      card: "rgba(48, 26, 22, 0.82)",
      accent: "#e0623c",
      text: "#f4e2da",
    },
    scene: "smolder",
    floater: "fire",
  },
  excited: {
    label: { zh: "兴奋", en: "Excited" },
    emoji: "⚡",
    keywords: [
      "兴奋", "激动", "期待", "冲", "燃", "嗨", "好耶", "迫不及待", "超级", "刺激",
      "excited", "hyped", "pumped", "thrilled", "can't wait", "cant wait", "lets go", "let's go", "stoked",
    ],
    theme: { background: "#120f1c", card: "rgba(34, 26, 52, 0.82)", accent: "#ff4fa0", text: "#f6eaff" },
    scene: "lightning",
    floater: "bubble",
  },
};

// Chip order, from the lowest mood to the happiest.
const MOOD_ORDER = ["sad", "irritated", "tired", "calm", "excited", "happy"];

// The mood meter runs from 0 (lowest) to 100 (happiest), split evenly into
// one range per mood in MOOD_ORDER.
const MOOD_RANGE = 100 / MOOD_ORDER.length;

function moodForScore(score) {
  const index = Math.min(MOOD_ORDER.length - 1, Math.floor(score / MOOD_RANGE));
  return MOOD_ORDER[Math.max(0, index)];
}

// The score in the middle of a mood's range, where the meter jumps to when
// the mood is picked some other way.
function scoreForMood(moodId) {
  return Math.round((MOOD_ORDER.indexOf(moodId) + 0.5) * MOOD_RANGE);
}

// The mood calculator: five answers from 0 to 10 become a meter score.
// "Feeling" mixes a light day, low stress, and sleep; "energy" mixes energy
// and wanting to see people. Together they choose a mood, and where the
// answers sit decides the score inside that mood's range.
const CALCULATOR_QUESTIONS = ["energy", "stress", "sleep", "social", "busy"];

// Each question is answered with one of five faces, from the low end of the
// question (left) to the high end (right). For stress and busy, right is worse.
const CALCULATOR_FACES = {
  energy: ["😫", "😕", "😐", "🙂", "🤩"],
  stress: ["😌", "🙂", "😐", "😣", "🤯"],
  sleep: ["😫", "😪", "😐", "🙂", "😊"],
  social: ["🙈", "😶", "😐", "🙂", "🥳"],
  busy: ["😊", "🙂", "😐", "😣", "😭"],
};

// Turns a face choice (1 to 5) into an answer on the 0 to 10 scale.
function answerFromLevel(level) {
  return (level - 1) * 2.5;
}

// Questions where a higher answer means a harder day.
const REVERSED_QUESTIONS = ["stress", "busy"];

// Points out of 25 for showing the user: higher is a better day, so the
// stress and busy questions count backward.
function totalPoints(levels) {
  return CALCULATOR_QUESTIONS.reduce(
    (sum, id) => sum + (REVERSED_QUESTIONS.includes(id) ? 6 - levels[id] : levels[id]),
    0,
  );
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function scoreFromAnswers(answers) {
  const feeling = ((10 - answers.busy) + (10 - answers.stress) + answers.sleep) / 30;
  const energy = (answers.energy + answers.social) / 20;
  let moodId;
  if (feeling < 0.4) {
    moodId = answers.stress >= 6 ? "irritated" : "sad";
  } else if (energy < 0.4) {
    moodId = feeling < 0.7 ? "tired" : "calm";
  } else if (energy < 0.7) {
    moodId = feeling < 0.75 ? "calm" : "happy";
  } else {
    moodId = feeling < 0.8 ? "excited" : "happy";
  }
  const position = clamp01((feeling + energy) / 2);
  const rangeStart = MOOD_ORDER.indexOf(moodId) * MOOD_RANGE;
  // Stay just inside the range so the score always maps back to this mood.
  return Math.round(rangeStart + 1 + position * (MOOD_RANGE - 2));
}

// English keywords match whole words only, so "down" does not match "download".
function keywordPattern(word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return /^[a-z' ]+$/.test(word) ? new RegExp(`\\b${escaped}\\b`, "g") : new RegExp(escaped, "g");
}

// Returns the mood id whose keywords appear most often in the text,
// or null when nothing matches. Longer keywords are matched first and
// removed, so "不开心" counts as sad instead of also matching "开心".
function detectMood(text) {
  let remaining = text.trim().toLowerCase();
  const keywordMoods = Object.entries(MOODS)
    .flatMap(([moodId, mood]) => mood.keywords.map((word) => [word, moodId]))
    .sort(([a], [b]) => b.length - a.length);
  const scores = {};
  for (const [word, moodId] of keywordMoods) {
    const pattern = keywordPattern(word);
    if (pattern.test(remaining)) {
      scores[moodId] = (scores[moodId] || 0) + 1;
      remaining = remaining.replace(pattern, " ");
    }
  }
  let bestMood = null;
  let bestScore = 0;
  for (const [moodId, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestMood = moodId;
      bestScore = score;
    }
  }
  return bestMood;
}

// Builds a search link so the user sees real photos of an item without
// the app copying brand images. English item names give better results.
function imageSearchUrl(brand, item) {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${brand.brand} ${item.name.en}`)}`;
}

// Lets tests load this file in Node; browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = {
    MOODS,
    MOOD_BRANDS,
    MOOD_ORDER,
    detectMood,
    moodForScore,
    scoreForMood,
    scoreFromAnswers,
    answerFromLevel,
    totalPoints,
    imageSearchUrl,
  };
}
