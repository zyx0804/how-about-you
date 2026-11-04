// Interface text in Chinese and English. Elements with a data-i18n attribute
// get their text from here; data-i18n-placeholder sets an input placeholder.

const UI_TEXT = {
  zh: {
    pageTitle: "How about you",
    subtitle: "说说你现在的感受，我从真实的设计师作品里，为你挑出和此刻情绪相通的今日单品。",
    step1: "第 1 步 · 说说你的心情",
    step1Hint: "写一句话、拖动心情指数，或者回答五个小问题，三种方式选一种就行。",
    step2: "第 2 步 · 点一个飘过来的单品",
    step3: "第 3 步 · 品牌故事与今日一套",
    step3Hint: "看看这个品牌为什么和你此刻的心情相通；最下面还可以问 AI 造型师。",
    meterHelp: "心情决定页面的场景和推荐的品牌；同一种心情里，指数越高，推荐越张扬。",
    feelingLabel: "你现在感觉怎么样？",
    feelingQuestions: {
      sad: "心里在下雨吗？说给我听听",
      irritated: "什么事让你冒火了？",
      tired: "累坏了吧？今天怎么样",
      calm: "此刻心里安静吗？",
      excited: "什么事让你这么兴奋？",
      happy: "今天有什么好事？",
    },
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
    askMore: "换一批",
    feedbackTitle: "喜欢这次推荐吗？",
    feedbackPlaceholder: "想说点什么吗？（可以不写）",
    feedbackSend: "❤ 喜欢",
    feedbackSending: "发送中……",
    feedbackThanks: "谢谢你的好评！",
    feedbackError: "暂时没发送成功，过一会儿再试试。",
    // Suggested questions for the AI stylist: general ones, ones for the
    // piece's category, and ones for the current mood. The English lists
    // below line up with these one for one.
    askQuestions: {
      general: [
        "这件怎么搭？",
        "适合什么场合穿？",
        "怎么保养？",
        "这件的设计灵感是什么？",
        "什么身材穿最好看？",
        "配什么颜色最出彩？",
        "这件值得入手吗？",
      ],
      outerwear: ["里面穿什么最好看？", "怎么叠穿不显臃肿？", "多冷的天适合穿？", "敞开穿还是扣上穿？"],
      top: ["配什么下装？", "塞进去还是放出来？", "外面套什么外套？", "怎么穿出层次感？"],
      bottom: ["配什么鞋子？", "裤脚怎么处理？", "上衣选什么版型？", "怎么穿显腿长？"],
      shoes: ["尺码偏大还是偏小？", "配什么裤子好看？", "新鞋怎么穿不磨脚？", "穿什么袜子？"],
      accessory: ["怎么戴不显得刻意？", "和什么首饰叠戴？", "适合什么脸型或发型？", "日常戴会不会太夸张？"],
      moods: {
        sad: ["穿什么能让心情好一点？", "怎么穿得舒服又不邋遢？", "这件怎么穿出安全感？"],
        irritated: ["怎么穿能帮我冷静下来？", "怎么穿得有气场一点？", "什么颜色能压住烦躁？"],
        tired: ["累的时候怎么穿最省事？", "怎么穿得舒服又有精神？", "怎么搭能掩饰没睡好？"],
        calm: ["怎么穿出松弛感？", "周末慢慢逛街怎么搭？", "怎么穿得低调又有质感？"],
        excited: ["今晚出去玩怎么搭？", "怎么穿得更抢眼？", "拍照怎么穿最出片？"],
        happy: ["约会怎么搭？", "怎么穿出好心情？", "和朋友出去怎么穿？"],
      },
    },
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
    backToTop: "↑ 返回顶部",
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
    subtitle: "Tell me how you feel, and I'll pick today's pieces from real designers' work that share your mood.",
    step1: "Step 1 · Tell me your mood",
    step1Hint: "Write a line, drag the mood meter, or answer five quick questions. Any one of the three works.",
    step2: "Step 2 · Tap a piece floating by",
    step3: "Step 3 · The brand and today's set",
    step3Hint: "See why this brand matches how you feel; at the bottom you can ask the AI stylist.",
    meterHelp: "Your mood sets the scene and the brands; within a mood, a higher score picks bolder pieces.",
    feelingLabel: "How are you feeling right now?",
    feelingQuestions: {
      sad: "Raining inside? Tell me about it.",
      irritated: "What's got you fired up?",
      tired: "Worn out? How was today?",
      calm: "Feeling settled right now?",
      excited: "What's got you so hyped?",
      happy: "What's making you smile today?",
    },
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
    askMore: "More questions",
    feedbackTitle: "Like this pick?",
    feedbackPlaceholder: "Anything to add? (optional)",
    feedbackSend: "❤ Like",
    feedbackSending: "Sending...",
    feedbackThanks: "Thanks for the love!",
    feedbackError: "Couldn't send it just now. Try again in a moment.",
    askQuestions: {
      general: [
        "How should I style this?",
        "What occasions suit it?",
        "How do I care for it?",
        "What inspired this design?",
        "What body type does it suit best?",
        "What colors make it stand out?",
        "Is it worth buying?",
      ],
      outerwear: [
        "What looks best underneath?",
        "How do I layer it without bulk?",
        "How cold should it be to wear this?",
        "Open or buttoned up?",
      ],
      top: ["What bottoms go with it?", "Tucked in or left out?", "What jacket goes over it?", "How do I add layers?"],
      bottom: ["What shoes go with these?", "How should I handle the hem?", "What top fit works?", "How do I make my legs look longer?"],
      shoes: ["Do they run big or small?", "What trousers go with them?", "How do I break them in?", "What socks should I wear?"],
      accessory: [
        "How do I wear it without trying too hard?",
        "What jewelry can I stack with it?",
        "What face shape or hairstyle suits it?",
        "Is it too much for every day?",
      ],
      moods: {
        sad: ["What can I wear to feel a bit better?", "How do I stay comfy but not sloppy?", "How do I wear this to feel safe?"],
        irritated: ["What helps me cool down?", "How do I look more commanding?", "What colors calm the irritation?"],
        tired: ["What's the easiest outfit when I'm tired?", "How do I look awake but stay comfy?", "How do I hide a bad night's sleep?"],
        calm: ["How do I get a relaxed look?", "What to wear for a slow weekend stroll?", "How do I look quiet but refined?"],
        excited: ["What should I wear out tonight?", "How do I stand out more?", "What looks best in photos?"],
        happy: ["What should I wear on a date?", "How do I dress for a good mood?", "What to wear out with friends?"],
      },
    },
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
    backToTop: "↑ Back to top",
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

// Remembers the chosen language in this browser. English is the default;
// storage can be blocked (private windows, strict settings), so failures
// fall back to English too.
function loadLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return saved === "zh" ? "zh" : "en";
  } catch {
    return "en";
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
