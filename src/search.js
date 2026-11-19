// Interest search: find pictured pieces from every mood by what you're into,
// such as "黑色靴子", "Raf 卫衣", or "streetwear hoodie" (an idea from the
// start of the project). A query is split into words; every word has to
// match a piece for it to be found.

// Words people search by, each with the ways it is written in Chinese and
// English. A piece has a word if its name contains one of the spellings, or
// (for some) if its shape or category is one of those listed. zhInNames:
// false keeps a Chinese spelling for queries only, when it is also part of
// other words in names (包 in 包头, "toe cap").
const SEARCH_WORDS = [
  // Colors
  { zh: ["黑"], en: ["black"] },
  { zh: ["白"], en: ["white", "ivory"] },
  { zh: ["灰"], en: ["gray", "grey", "charcoal"] },
  { zh: ["蓝", "藏青", "海军"], en: ["blue", "navy", "indigo"] },
  { zh: ["红", "酒红"], en: ["red", "burgundy"] },
  { zh: ["绿", "橄榄"], en: ["green", "olive"] },
  { zh: ["棕", "咖啡", "驼色", "巧克力"], en: ["brown", "camel", "tan", "chocolate"] },
  { zh: ["米色", "米白", "奶油", "燕麦", "卡其"], en: ["beige", "cream", "ecru", "oat", "khaki"] },
  { zh: ["粉"], en: ["pink"] },
  { zh: ["紫"], en: ["purple", "lilac"] },
  { zh: ["黄"], en: ["yellow"] },
  { zh: ["橙", "橘"], en: ["orange"] },
  { zh: ["银"], en: ["silver"] },
  { zh: ["金色", "黄金", "镀金"], en: ["gold"] },
  // Categories
  { zh: ["外套"], en: ["outerwear"], categories: ["outerwear"] },
  { zh: ["上衣"], en: ["top"], categories: ["top"] },
  { zh: ["下装"], en: ["bottoms"], categories: ["bottom"] },
  { zh: ["鞋"], en: ["shoe", "footwear"], categories: ["shoes"] },
  { zh: ["配饰", "饰品"], en: ["accessory", "accessories"], categories: ["accessory"] },
  // Kinds of piece
  { zh: ["大衣", "风衣"], en: ["coat", "trench"], shapes: ["coat"] },
  { zh: ["夹克", "机车"], en: ["jacket", "biker"], shapes: ["jacket", "biker"] },
  { zh: ["皮衣", "皮夹克"], en: ["leather jacket"], shapes: ["biker"] },
  { zh: ["马甲", "背心"], en: ["vest", "gilet"], shapes: ["vest"] },
  { zh: ["羽绒", "棉服"], en: ["puffer", "down"], shapes: ["puffer"] },
  { zh: ["衬衫", "衬衣"], en: ["shirt"], shapes: ["shirt"] },
  { zh: ["短袖"], en: ["tee"], shapes: ["tee"] },
  { zh: ["卫衣", "帽衫", "连帽"], en: ["hoodie", "sweatshirt"], shapes: ["hoodie"] },
  { zh: ["毛衣", "针织"], en: ["knit", "sweater", "jumper"], shapes: ["knit", "cardigan"] },
  { zh: ["开衫"], en: ["cardigan"], shapes: ["cardigan"] },
  { zh: ["裤"], en: ["trousers", "pants", "jeans", "shorts"], categories: ["bottom"] },
  { zh: ["西裤"], en: ["tailored trousers", "pleated trousers"] },
  { zh: ["阔腿", "宽腿"], en: ["wide"], shapes: ["wide"] },
  { zh: ["牛仔"], en: ["jeans", "denim"], shapes: ["jeans"] },
  { zh: ["工装"], en: ["cargo", "work pants", "work trousers"], shapes: ["cargo"] },
  { zh: ["短裤"], en: ["shorts"], shapes: ["shorts"] },
  { zh: ["裙"], en: ["skirt"], shapes: ["skirt"] },
  { zh: ["靴"], en: ["boot"], shapes: ["boots"] },
  {
    zh: ["球鞋", "运动鞋", "跑鞋", "板鞋", "帆布鞋"],
    en: ["sneaker", "trainer", "runner", "running shoe"],
    shapes: ["sneakers", "runner", "hightop"],
  },
  { zh: ["高帮"], en: ["high-top", "hi-top"], shapes: ["hightop"] },
  { zh: ["老爹鞋"], en: ["dad shoe"], shapes: ["runner"] },
  { zh: ["乐福", "便鞋"], en: ["loafer"], shapes: ["loafers"] },
  { zh: ["凉鞋", "拖鞋"], en: ["sandal", "slide", "slipper"], shapes: ["sandals"] },
  { zh: ["包", "托特"], en: ["bag", "tote"], shapes: ["tote", "minibag"], zhInNames: false },
  {
    zh: ["帽子", "棒球帽", "针织帽", "鸭舌帽", "渔夫帽", "毛线帽", "冷帽"],
    en: ["cap", "hat", "beanie"],
    shapes: ["cap", "beanie"],
  },
  { zh: ["首饰", "珠宝", "银饰"], en: ["jewelry", "jewellery"], shapes: ["necklace", "ring"] },
  { zh: ["项链", "吊坠"], en: ["necklace", "pendant"], shapes: ["necklace"] },
  { zh: ["戒指"], en: ["ring"], shapes: ["ring"] },
  { zh: ["围巾"], en: ["scarf"], shapes: ["scarf"] },
  { zh: ["腰带", "皮带"], en: ["belt"], shapes: ["belt"] },
  { zh: ["墨镜", "眼镜"], en: ["sunglasses", "glasses"], shapes: ["sunglasses"] },
  // Materials
  { zh: ["皮"], en: ["leather"] },
  { zh: ["麂皮"], en: ["suede"] },
  { zh: ["羊毛", "毛呢"], en: ["wool"] },
  { zh: ["丝绒"], en: ["velvet"] },
  { zh: ["亚麻"], en: ["linen"] },
  { zh: ["羊绒"], en: ["cashmere"] },
  // Seasons (the shapes weather.js and styling.js treat as cold or hot)
  {
    zh: ["冬", "秋冬", "保暖"],
    en: ["winter", "warm"],
    shapes: ["coat", "puffer", "beanie", "knit", "cardigan", "scarf"],
  },
  { zh: ["夏", "清凉"], en: ["summer"], shapes: ["sandals", "shorts", "tee"] },
  // Styles (see styleOf in styling.js)
  { zh: ["街头", "潮牌"], en: ["street", "streetwear"], styles: ["street"] },
  { zh: ["正装", "通勤", "西装", "西服", "剪裁"], en: ["tailored", "smart", "formal"], styles: ["tailored"] },
  // Scenes Yuxuan asked for (11/19, "都加入"). Who counts is Claude's first
  // guess, for Yuxuan to correct: avant-garde and Japanese go by brand,
  // techwear and outdoor by what the piece is.
  {
    zh: ["先锋", "暗黑", "解构"],
    en: ["avant-garde", "avant garde", "avantgarde"],
    brands: [
      "Rick Owens DRKSHDW",
      "Ann Demeulemeester",
      "Carol Christian Poell",
      "Boris Bidjan Saberi",
      "GUIDI",
      "Yohji Yamamoto",
      "Maison Margiela",
      "Raf Simons",
      "Helmut Lang",
      "Walter Van Beirendonck",
      "Kiko Kostadinov",
    ],
  },
  {
    zh: ["日系", "日本"],
    en: ["japanese"],
    brands: [
      "Yohji Yamamoto",
      "Homme Plissé Issey Miyake",
      "UNDERCOVER",
      "Number (N)ine",
      "HYSTERIC GLAMOUR",
      "AURALEE",
      "COMOLI",
      "visvim",
      "A BATHING APE",
      "Comme des Garçons PLAY",
      "KAPITAL",
    ],
  },
  {
    zh: ["机能", "功能"],
    en: ["techwear", "technical", "functional"],
    nameWords: ["trail", "nylon", "parka", "cargo", "gyakusou", "backpack", "gore-tex", "utility"],
    shapes: ["puffer"],
    brands: ["Salomon"],
  },
  {
    zh: ["户外", "登山", "徒步", "露营"],
    en: ["outdoor", "outdoors", "hiking", "gorpcore"],
    nameWords: ["trail", "hiking", "parka", "fleece", "mountain"],
    shapes: ["puffer"],
    brands: ["Salomon"],
  },
];

// What people call some brands, so "克罗心" or "马吉拉" finds them too.
const BRAND_NICKNAMES = {
  "Chrome Hearts": "克罗心",
  "Dr. Martens": "马丁 doc martens",
  "Maison Margiela": "马吉拉 margiela",
  "Rick Owens DRKSHDW": "瑞克",
  "Raf Simons": "拉夫",
  "Vivienne Westwood": "西太后 薇薇安",
  "New Balance": "新百伦 nb",
  Converse: "匡威",
  HERMÈS: "爱马仕",
  BIRKENSTOCK: "勃肯",
  "Yohji Yamamoto": "山本 y-3",
  "Homme Plissé Issey Miyake": "三宅 褶皱",
  "JIL SANDER": "吉尔桑达",
  VETEMENTS: "唯特萌",
};

// Characters that carry no meaning in a search ("黑色的靴子" is "黑 靴").
const SEARCH_FILLER = /[的色子款件双条个只和与配一些想要找]/g;

// Up to this many pieces are shown; a longer list asks for a narrower word.
const SEARCH_LIMIT = 24;

// Lowercase without accents, so "hermes" finds HERMÈS.
const lower = (text) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// An English spelling matches as a whole word, plural or not, so "red" does
// not match "tailored" and "ring" does not match "earring".
function hasEnglishWord(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z])${escaped}(e?s)?([^a-z]|$)`).test(text);
}

function pieceHasWord(entry, word) {
  const { item } = entry;
  return (
    (word.zhInNames !== false && word.zh.some((spelling) => item.name.zh.includes(spelling))) ||
    word.en.some((spelling) => hasEnglishWord(lower(item.name.en), spelling)) ||
    (word.shapes || []).includes(item.shape) ||
    (word.categories || []).includes(item.category) ||
    (word.styles || []).includes(entry.style) ||
    (word.brands || []).includes(entry.brand.brand) ||
    (word.nameWords || []).some((nameWord) => hasEnglishWord(lower(item.name.en), nameWord))
  );
}

// Every pictured piece of every mood, with the text it can be found by.
// Pieces in two moods' shelves (ERD) appear once.
function searchablePieces(moodBrands, moodOrder, moods) {
  const pieces = [];
  const seen = new Set();
  for (const moodId of moodOrder) {
    for (const brand of onShelf(moodBrands[moodId])) {
      for (const item of brand.items) {
        const key = `${brand.brand}|${item.name.en}`;
        if (seen.has(key)) {
          continue;
        }
        seen.add(key);
        const text = [
          brand.brand,
          brand.designer.zh,
          brand.designer.en,
          item.name.zh,
          item.name.en,
          BRAND_NICKNAMES[brand.brand] || "",
          moods[moodId].label.zh,
          moods[moodId].label.en,
        ].join(" ");
        pieces.push({ moodId, brand, item, text: lower(text), style: styleOf(item) });
      }
    }
  }
  return pieces;
}

// Splits a query into what each piece must match: search words (SEARCH_WORDS)
// and plain text such as a brand name. Chinese runs are scanned for search
// words, longest spelling first; what is left (other than filler) must
// appear in the piece's text. Latin runs are whole words.
function parseQuery(query) {
  const needs = [];
  // "T恤", "白T", and "t-shirt" all mean a tee.
  const spelledOut = lower(query).replace(/t恤|t-?shirts?|(?<![a-z])t(?![a-z])/g, " tee ");
  const runs = spelledOut.match(/[a-z0-9][a-z0-9'&.-]*|[一-鿿]+/g) || [];
  const zhSpellings = SEARCH_WORDS.flatMap((word) => word.zh.map((spelling) => ({ spelling, word }))).sort(
    (a, b) => b.spelling.length - a.spelling.length,
  );
  for (const run of runs) {
    if (/^[a-z0-9]/.test(run)) {
      // The last match is the most specific ("jeans" is denim, not just bottoms).
      const word = SEARCH_WORDS.findLast((entry) => entry.en.some((spelling) => hasEnglishWord(run, spelling)));
      needs.push(word ? { word } : { text: run });
      continue;
    }
    let rest = run;
    for (const { spelling, word } of zhSpellings) {
      if (rest.includes(spelling)) {
        if (!needs.some((need) => need.word === word)) {
          needs.push({ word });
        }
        rest = rest.split(spelling).join(" ");
      }
    }
    for (const left of rest.replace(SEARCH_FILLER, " ").split(" ")) {
      if (left !== "") {
        needs.push({ text: left, loose: true });
      }
    }
  }
  return needs;
}

function pieceMeets(entry, need) {
  return need.word ? pieceHasWord(entry, need.word) : entry.text.includes(need.text);
}

// Takes one piece from each brand in turn, so the first results aren't all
// from the brand with the most pictures.
function alternateBrands(pieces) {
  const byBrand = new Map();
  for (const piece of pieces) {
    if (!byBrand.has(piece.brand.brand)) {
      byBrand.set(piece.brand.brand, []);
    }
    byBrand.get(piece.brand.brand).push(piece);
  }
  const queues = [...byBrand.values()];
  const mixed = [];
  while (mixed.length < pieces.length) {
    for (const queue of queues) {
      if (queue.length > 0) {
        mixed.push(queue.shift());
      }
    }
  }
  return mixed;
}

// The pieces matching every word of the query, at most SEARCH_LIMIT, and how
// many matched in all. If leftover Chinese text (like the "长" in "长大衣")
// leaves nothing, it is dropped; a brand name typed in Latin letters stays.
function searchPieces(pieces, query) {
  const needs = parseQuery(query);
  if (needs.length === 0) {
    return { pieces: [], total: 0, empty: true };
  }
  let found = pieces.filter((piece) => needs.every((need) => pieceMeets(piece, need)));
  const firmNeeds = needs.filter((need) => !need.loose);
  if (found.length === 0 && firmNeeds.some((need) => need.word) && firmNeeds.length < needs.length) {
    found = pieces.filter((piece) => firmNeeds.every((need) => pieceMeets(piece, need)));
  }
  return { pieces: alternateBrands(found).slice(0, SEARCH_LIMIT), total: found.length, empty: false };
}

// Lets tests load this file in Node; browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = { SEARCH_WORDS, SEARCH_LIMIT, parseQuery, searchablePieces, searchPieces };
}
