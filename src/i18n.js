// Interface text in Chinese and English. Elements with a data-i18n attribute
// get their text from here; data-i18n-placeholder sets an input placeholder.

const UI_TEXT = {
  zh: {
    pageTitle: "How about you",
    title: "How about you",
    subtitle: "说说你现在的感受，我从真实的设计师作品里，为你挑出和此刻情绪相通的今日单品。",
    feelingLabel: "你现在感觉怎么样？",
    feelingPlaceholder: "比如：今天好累，不想动",
    submit: "为我推荐",
    meterLabel: "或者拖动心情指数（0 最低落，100 最开心）：",
    meterValue: (score, label) => `${score} · ${label}`,
    meterUnset: "拖动试试",
    aiNote: "你写的话会发给 AI 来理解心情，不会被保存。",
    aiReading: "AI 正在读你的心情……",
    askTitle: "问问 AI 造型师",
    askPlaceholder: "比如：这件怎么搭？",
    askSend: "问",
    askThinking: "AI 造型师正在想……",
    askError: "AI 暂时没有回应，过一会儿再试试；今天的免费次数也可能用完了。",
    askSuggestions: ["这件怎么搭？", "适合什么场合穿？", "怎么保养？"],
    calcTitle: "🌤️ 今天过得如何？给 5 个问题选个表情，算出你的心情指数",
    calcQuestions: {
      energy: ["今天的精力", "没电了", "满格"],
      stress: ["心里的压力或烦躁", "很轻松", "快爆了"],
      sleep: ["昨晚睡得怎么样", "很差", "很好"],
      social: ["想出门、想见人吗", "只想一个人", "很想"],
      busy: ["今天的事情多吗？", "一件都没有", "忙不过来"],
    },
    calcScore: (total, score, label) => `总分 ${total}/25 → 心情指数 ${score} · ${label}`,
    calcApply: "用这个指数",
    emptyInput: "先写一句你现在的感受吧，或者拖动下面的心情指数。",
    unknownMood: "我没太读懂这句话的心情，换个说法，或者拖动下面的心情指数试试。",
    moodTitle: (emoji, label) => `${emoji} 此刻的你：${label}`,
    hint: (kind) =>
      ({
        seed: "今日穿搭藏在这些蒲公英种子里，点一个看看。",
        bubble: "今日穿搭藏在这些泡泡里，点一个看看。",
        drift: "今日穿搭正被风吹着飘过，点一个看看。",
        streak: "今日穿搭正从夜空中划过，点一个看看。",
        mist: "今日穿搭藏在这些云朵里，点一个看看。",
        fire: "今日穿搭藏在这些火烧云里，点一个看看。",
      })[kind],
    openPiece: (brand, item) => `${brand} ${item}，点开查看`,
    designer: (name) => `设计师 / ${name}`,
    story: "品牌故事",
    moodLink: "和你此刻的情绪",
    seeReal: "查看实物 ↗",
    brandItems: "这个品牌的今日一套",
    todayPick: "今日推荐",
    referenceImage: "参考图",
    categories: { outerwear: "外套", top: "上衣", bottom: "下装", shoes: "鞋子", accessory: "配饰" },
    logoBy: (license) => `标志来自 Wikimedia Commons · ${license}`,
    photoKind: { runway: "秀场", museum: "展出实物" },
    photoBy: (author) => `摄影：${author}`,
    note: "标着“参考图”的来自豆包 AI 生成或买手店实拍；标注了摄影师的是开放授权的真实照片；其余是原创平面款式图。具体款式以品牌官方为准，点“查看实物”看真实图片。",
    switchTo: "EN",
    switchLabel: "Switch to English",
  },
  en: {
    pageTitle: "How about you",
    title: "How about you",
    subtitle: "Tell me how you feel, and I'll pick today's pieces from real designers' work that share your mood.",
    feelingLabel: "How are you feeling right now?",
    feelingPlaceholder: "e.g. So tired today, don't want to move",
    submit: "Recommend",
    meterLabel: "Or drag the mood meter (0 is lowest, 100 is happiest):",
    meterValue: (score, label) => `${score} · ${label}`,
    meterUnset: "Give it a drag",
    aiNote: "What you write is sent to an AI to read your mood; it isn't saved.",
    aiReading: "The AI is reading your mood...",
    askTitle: "Ask the AI stylist",
    askPlaceholder: "e.g. How should I style this?",
    askSend: "Ask",
    askThinking: "The AI stylist is thinking...",
    askError: "The AI didn't answer. Try again in a moment; today's free quota may be used up.",
    askSuggestions: ["How should I style this?", "What occasions suit it?", "How do I care for it?"],
    calcTitle: "🌤️ How was your day? Pick a face for 5 questions to get your mood score",
    calcQuestions: {
      energy: ["Your energy today", "Drained", "Full"],
      stress: ["Stress or irritation", "Relaxed", "About to burst"],
      sleep: ["How you slept", "Badly", "Great"],
      social: ["Want to go out and see people?", "Alone, please", "Very much"],
      busy: ["How busy was today?", "Nothing to do", "Swamped"],
    },
    calcScore: (total, score, label) => `Total ${total}/25 → mood score ${score} · ${label}`,
    calcApply: "Use this score",
    emptyInput: "Write a line about how you feel first, or drag the mood meter below.",
    unknownMood: "I couldn't quite read the mood in that. Try saying it another way, or drag the mood meter.",
    moodTitle: (emoji, label) => `${emoji} You right now: ${label}`,
    hint: (kind) =>
      ({
        seed: "Today's outfit rides on these dandelion seeds. Tap one.",
        bubble: "Today's outfit rides in these bubbles. Tap one.",
        drift: "Today's outfit is blowing past in the wind. Tap one.",
        streak: "Today's outfit is streaking across the night. Tap one.",
        mist: "Today's outfit rides on these clouds. Tap one.",
        fire: "Today's outfit rides on these fire clouds. Tap one.",
      })[kind],
    openPiece: (brand, item) => `${brand} ${item}, tap to open`,
    designer: (name) => `Designer / ${name}`,
    story: "The brand story",
    moodLink: "How it meets your mood",
    seeReal: "See it for real ↗",
    brandItems: "Today's set from this brand",
    todayPick: "Today's pick",
    referenceImage: "Reference",
    categories: { outerwear: "Outerwear", top: "Top", bottom: "Bottoms", shoes: "Shoes", accessory: "Accessory" },
    logoBy: (license) => `Logo from Wikimedia Commons · ${license}`,
    photoKind: { runway: "Runway", museum: "On display" },
    photoBy: (author) => `Photo: ${author}`,
    note: "Pictures marked “Reference” are Doubao AI images or photos from a buyer shop; credited ones are openly licensed real photos; the rest are original flat sketches. Check the brand for exact designs, or tap “See it for real.”",
    switchTo: "中文",
    switchLabel: "切换到中文",
  },
};

const LANGUAGE_KEY = "how-about-you-language";

// Remembers the chosen language in this browser. Storage can be blocked
// (private windows, strict settings), so failures fall back to Chinese.
function loadLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return saved === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // Not remembering the language is fine; the page still works.
  }
}

function applyStaticText(language) {
  const text = UI_TEXT[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = text.pageTitle;
  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = text[element.dataset.i18n];
  }
  for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
    element.placeholder = text[element.dataset.i18nPlaceholder];
  }
}
