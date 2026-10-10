// Brands for the 兴奋 · Excited mood. Each brand has an intensity from 0 to 1:
// low values suit the lower end of this mood's meter range, high values the
// upper end. Items are grouped by category for building a daily outfit.

MOOD_BRANDS.excited = [
  {
    brand: "Raf Simons",
    designer: { zh: "Raf Simons", en: "Raf Simons" },
    intensity: 0.3,
    palette: ["#0f0f0f", "#e2e2e2", "#c8102e"],
    photo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Raf_Simons_Spiderweb_sweater%2C_AW_1998-99.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
      page: "https://commons.wikimedia.org/wiki/File:Raf_Simons_Spiderweb_sweater,_AW_1998-99.jpg",
      kind: "museum",
      caption: {
        zh: "Raf Simons“蜘蛛网”毛衣，1998–99 秋冬，罗德岛设计学院博物馆藏",
        en: "Raf Simons Spiderweb sweater, Fall/Winter 1998–99 · RISD Museum",
      },
      author: "Staff photographer, Rhode Island School of Design Museum of Art",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    story: {
      zh: "Raf Simons 学的是工业设计，不是科班服装出身。他的作品长期围绕青年文化、地下音乐和反叛，2001 年秋冬的 “Riot Riot Riot” 系列至今被收藏家追捧。同名品牌已于 2022 年关闭，单品多在二手市场流通。",
      en: "Raf Simons trained in industrial design, not fashion. His work has long revolved around youth culture, underground music, and rebellion; his Fall/Winter 2001 “Riot Riot Riot” collection is still chased by collectors. His namesake label closed in 2022, so most pieces now circulate secondhand.",
    },
    moodLink: {
      zh: "年轻、躁动、往前冲。他的衣服和你此刻的能量是同一个频率。",
      en: "Young, restless, charging ahead. His clothes are on the same frequency as your energy right now.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "Oversize 印花夹克", en: "Oversized printed jacket" },
        colors: ["#0f0f0f", "#c8102e"],
        why: {
          zh: "年轻、躁动、往前冲。",
          en: "Young, restless, charging ahead.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "Oversize 印花卫衣", en: "Oversized graphic sweatshirt" },
        colors: ["#0f0f0f", "#e2e2e2"],
        why: {
          zh: "有故事的单品。",
          en: "A piece with a story.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "窄脚长裤", en: "Slim trousers" },
        colors: ["#1a1a1a", "#4a4a4a"],
        why: {
          zh: "利落的线条。",
          en: "Sharp lines.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "adidas Ozweego", en: "adidas Ozweego" },
        colors: ["#e2e2e2", "#c8102e"],
        why: {
          zh: "他和 adidas 合作带红的厚底跑鞋。",
          en: "The chunky runner he made famous with adidas.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "印花托特包", en: "Printed tote" },
        colors: ["#e2e2e2", "#0f0f0f"],
        why: {
          zh: "带着地下音乐的味道。",
          en: "With a hint of the underground.",
        },
      },
    ],
  },
  {
    brand: "Maison Margiela",
    designer: { zh: "Martin Margiela", en: "Martin Margiela" },
    intensity: 0.5,
    palette: ["#111111", "#f2efe8", "#8c1d2e"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Maison_Margiela_logo.svg/500px-Maison_Margiela_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Maison_Margiela_logo.svg",
      license: "Public domain",
    },
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/1997_Maison_Martin_Margiela_white_dress_and_red_coat%2C_Winter_1997-98_collection_1.jpg/960px-1997_Maison_Martin_Margiela_white_dress_and_red_coat%2C_Winter_1997-98_collection_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:1997_Maison_Martin_Margiela_white_dress_and_red_coat,_Winter_1997-98_collection_1.jpg",
      kind: "museum",
      caption: {
        zh: "Maison Martin Margiela 1997–98 秋冬红色大衣与白色连衣裙，展览现场",
        en: "Maison Martin Margiela red coat and white dress, Fall/Winter 1997–98 · exhibition",
      },
      author: "we-make-money-not-art",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    story: {
      zh: "分趾的 Tabi 靴灵感来自日本传统分趾袜，在马丁·马吉拉的首场秀上亮相，至今仍是品牌最有辨识度的单品。",
      en: "The split-toe Tabi boot, inspired by traditional Japanese tabi socks, appeared in Martin Margiela's first show and is still the house's most recognizable piece.",
    },
    moodLink: {
      zh: "大胆、反常规，不在乎别人第一眼的不理解。",
      en: "Bold and unconventional, unbothered by anyone's confusion at first glance.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "解构长大衣", en: "Deconstructed coat" },
        colors: ["#f2efe8", "#8c1d2e"],
        why: {
          zh: "大胆、反常规。",
          en: "Bold and unconventional.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "肘部补丁针织衫", en: "Elbow-patch sweater" },
        colors: ["#e8e4da", "#8c1d2e"],
        why: {
          zh: "四针白线标签的低调。",
          en: "Low-key, with the four white stitches.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "解构长裤", en: "Deconstructed trousers" },
        colors: ["#111111", "#4a4a4a"],
        why: {
          zh: "不在乎别人的不理解。",
          en: "Unbothered by confusion.",
        },
      },
      {
        category: "shoes",
        shape: "tabi",
        name: { zh: "Tabi 分趾靴", en: "Tabi split-toe boots" },
        colors: ["#111111", "#f2efe8"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Tabi_shoes_modern_%28margiela%29.png/500px-Tabi_shoes_modern_%28margiela%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Tabi_shoes_modern_(margiela).png",
          author: "Hajinishere",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        why: {
          zh: "会被人追问的鞋。",
          en: "The shoes everyone asks about.",
        },
      },
      {
        category: "accessory",
        shape: "minibag",
        name: { zh: "5AC 手袋", en: "5AC bag" },
        colors: ["#8c1d2e", "#111111"],
        why: {
          zh: "利落的造型。",
          en: "A crisp shape.",
        },
      },
    ],
  },
  {
    brand: "Martine Rose",
    designer: { zh: "Martine Rose", en: "Martine Rose" },
    intensity: 0.7,
    palette: ["#2a4b8d", "#f2f0ea", "#d1a23a"],
    story: {
      zh: "伦敦设计师 Martine Rose 的作品深受俱乐部文化、锐舞和街头的影响，常把普通衣物的比例放大、扭曲。",
      en: "London designer Martine Rose draws heavily on club culture, rave, and the street, often enlarging and twisting the proportions of ordinary clothes.",
    },
    moodLink: {
      zh: "它有派对散场前最后一首歌的能量，正好接住你现在的兴奋。",
      en: "It has the energy of the last song before the party ends, a perfect match for your excitement.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "夸张肩线夹克", en: "Big-shoulder jacket" },
        colors: ["#2a4b8d", "#d1a23a"],
        why: {
          zh: "派对散场前最后一首歌。",
          en: "The last song before the party ends.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "夸张廓形衬衫", en: "Exaggerated-silhouette shirt" },
        colors: ["#2a4b8d", "#f2f0ea"],
        why: {
          zh: "一眼记住。",
          en: "Unforgettable at first sight.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "宽松运动裤", en: "Relaxed track pants" },
        colors: ["#f2f0ea", "#2a4b8d"],
        why: {
          zh: "俱乐部的能量。",
          en: "Club energy.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "与 Nike 合作的球鞋", en: "Nike collaboration sneakers" },
        colors: ["#d1a23a", "#2a4b8d"],
        why: {
          zh: "跳一整晚。",
          en: "Dance all night.",
        },
      },
      {
        category: "accessory",
        shape: "sunglasses",
        name: { zh: "夸张墨镜", en: "Statement sunglasses" },
        colors: ["#1a1a1a", "#d1a23a"],
        why: {
          zh: "锐舞派对的态度。",
          en: "Rave attitude.",
        },
      },
    ],
  },
  {
    brand: "A BATHING APE",
    designer: { zh: "NIGO", en: "NIGO" },
    intensity: 0.8,
    palette: ["#4a6b3a", "#1e1e1e", "#e9e2d0"],
    story: {
      zh: "NIGO 1993 年在东京里原宿创立 BAPE，迷彩印花和拉链拉到头就变成鲨鱼脸的连帽卫衣都是它的标志。",
      en: "NIGO founded BAPE in Tokyo's Ura-Harajuku in 1993. Its camo prints and the hoodie that zips up into a shark face are its signatures.",
    },
    moodLink: {
      zh: "大胆、好玩、有点张扬，完全是兴奋时的样子。",
      en: "Bold, playful, a little loud: exactly what excitement looks like.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "迷彩夹克", en: "Camo jacket" },
        colors: ["#4a6b3a", "#1e1e1e"],
        why: {
          zh: "BAPE 迷彩，一眼认出。",
          en: "BAPE camo, recognized instantly.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "鲨鱼连帽卫衣", en: "Shark full-zip hoodie" },
        colors: ["#4a6b3a", "#e9e2d0"],
        why: {
          zh: "拉链一拉到底，整个人都燃起来。",
          en: "Zip it all the way up and go.",
        },
      },
      {
        category: "bottom",
        shape: "cargo",
        name: { zh: "迷彩工装裤", en: "Camo cargo pants" },
        colors: ["#4a6b3a", "#2e3a28"],
        why: {
          zh: "张扬又好玩。",
          en: "Loud and fun.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "BAPE STA 球鞋", en: "BAPE STA sneakers" },
        colors: ["#f2f0e8", "#2a6bd1"],
        why: {
          zh: "鞋侧有流星标志的经典款。",
          en: "The classic with the shooting-star logo.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "猿人头棒球帽", en: "Ape-head cap" },
        colors: ["#1e1e1e", "#4a6b3a"],
        why: {
          zh: "里原宿的符号。",
          en: "An Ura-Harajuku icon.",
        },
      },
    ],
  },
  {
    brand: "Walter Van Beirendonck",
    designer: { zh: "Walter Van Beirendonck", en: "Walter Van Beirendonck" },
    intensity: 0.9,
    palette: ["#ff4f9a", "#2e5bff", "#ffd23f"],
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/2011_Walter_van_Beirendonck_look_from_%27Hand_on_Heart%27_collection.jpg/960px-2011_Walter_van_Beirendonck_look_from_%27Hand_on_Heart%27_collection.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:2011_Walter_van_Beirendonck_look_from_%27Hand_on_Heart%27_collection.jpg",
      kind: "museum",
      caption: {
        zh: "Walter Van Beirendonck “Hand on Heart” 系列，2011–12 秋冬，展览现场",
        en: "Walter Van Beirendonck “Hand on Heart” collection, Fall/Winter 2011–12 · exhibition",
      },
      author: "Rosa Menkman",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    story: {
      zh: "比利时设计师 Walter Van Beirendonck 是“安特卫普六君子”之一，作品以鲜艳的颜色、卡通般的图案和大胆的社会议题著称。",
      en: "Belgian designer Walter Van Beirendonck is one of the “Antwerp Six,” known for vivid color, cartoon-like graphics, and bold social themes.",
    },
    moodLink: {
      zh: "他的作品永远在放烟花，和你此刻的能量一样停不下来。",
      en: "His work is always setting off fireworks, as unstoppable as your energy now.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "流苏针织大外套", en: "Fringed knit coat" },
        colors: ["#ffd23f", "#2e5bff"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/2011_Walter_van_Beirendonck_look_from_%27Hand_on_Heart%27_collection.jpg/960px-2011_Walter_van_Beirendonck_look_from_%27Hand_on_Heart%27_collection.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:2011_Walter_van_Beirendonck_look_from_%27Hand_on_Heart%27_collection.jpg",
          author: "Rosa Menkman",
          license: "CC BY 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        },
        why: {
          zh: "他的作品永远在放烟花。",
          en: "His work is always setting off fireworks.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "撞色图案针织衫", en: "Bold graphic knit" },
        colors: ["#ff4f9a", "#ffd23f"],
        why: {
          zh: "越鲜艳越好。",
          en: "The brighter, the better.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "印花长裤", en: "Printed trousers" },
        colors: ["#2e5bff", "#ff4f9a"],
        why: {
          zh: "停不下来的能量。",
          en: "Unstoppable energy.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "撞色运动鞋", en: "Color-clash trainers" },
        colors: ["#ff4f9a", "#2e5bff"],
        why: {
          zh: "每一步都很吵。",
          en: "Every step is loud.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "卡通图案帽", en: "Cartoon graphic cap" },
        colors: ["#ffd23f", "#ff4f9a"],
        why: {
          zh: "今天不需要低调。",
          en: "Today is not for subtle.",
        },
      },
    ],
  },
  {
    brand: "Salomon",
    designer: { zh: "Salomon", en: "Salomon" },
    intensity: 0.2,
    palette: ["#1a1a1a", "#c8d82a", "#8a8f99"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Salomon_logo_2022.svg/500px-Salomon_logo_2022.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Salomon_logo_2022.svg",
      license: "Public domain",
    },
    story: {
      zh: "1947 年创立于法国阿讷西的户外运动品牌，原本做滑雪装备，XT-6 等越野跑鞋后来成了时装圈的宠儿。",
      en: "Founded in Annecy, France, in 1947 as a ski equipment maker, Salomon's trail shoes like the XT-6 became fashion favorites.",
    },
    moodLink: {
      zh: "一双随时可以出发的鞋。",
      en: "A shoe ready to go anywhere.",
    },
    items: [
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "XT-6 越野跑鞋", en: "XT-6 trail shoes" },
        colors: ["#1a1a1a", "#c8d82a"],
        why: {
          zh: "抓地力十足，往前冲。",
          en: "Full grip, charge ahead.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "Speedcross 越野鞋", en: "Speedcross trail shoes" },
        colors: ["#2a2a2a", "#e84a2a"],
        why: {
          zh: "鞋底的大齿纹，像能量一样。",
          en: "Big lugs, like pure energy.",
        },
      },
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "防风外壳夹克", en: "Wind shell jacket" },
        colors: ["#8a8f99", "#1a1a1a"],
        why: {
          zh: "说走就走。",
          en: "Ready to leave right now.",
        },
      },
    ],
  },
  {
    brand: "Kiko Kostadinov",
    designer: { zh: "Kiko Kostadinov", en: "Kiko Kostadinov" },
    intensity: 0.4,
    palette: ["#5a6a3a", "#c84a8a", "#e8e4d8"],
    story: {
      zh: "保加利亚裔设计师 Kiko Kostadinov 在伦敦成立同名品牌，擅长把工装和运动服重新组合，和 ASICS 的合作跑鞋很受欢迎。",
      en: "Bulgarian-born designer Kiko Kostadinov runs his label in London, remixing workwear and sportswear; his ASICS running shoes are hugely popular.",
    },
    moodLink: {
      zh: "意想不到的配色，像突然加速的心跳。",
      en: "Unexpected colors, like a sudden jump in your pulse.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "拼接工装夹克", en: "Paneled work jacket" },
        colors: ["#5a6a3a", "#c84a8a"],
        why: {
          zh: "工装的新玩法。",
          en: "Workwear, remixed.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "撞色针织衫", en: "Contrast knit" },
        colors: ["#c84a8a", "#5a6a3a"],
        why: {
          zh: "颜色一碰就有火花。",
          en: "Colors that spark.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "工装长裤", en: "Work trousers" },
        colors: ["#3a4a2a", "#e8e4d8"],
        why: {
          zh: "利落有型。",
          en: "Sharp and shaped.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "与 ASICS 合作的跑鞋", en: "ASICS collaboration runners" },
        colors: ["#e8e4d8", "#c84a8a"],
        why: {
          zh: "跑起来就停不下。",
          en: "Once you start, you won't stop.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "尼龙斜挎包", en: "Nylon crossbody bag" },
        colors: ["#1a1a1a", "#c84a8a"],
        why: {
          zh: "轻便出发。",
          en: "Travel light.",
        },
      },
    ],
  },
  {
    brand: "PALACE",
    designer: { zh: "Lev Tanju（创始人）", en: "Lev Tanju (founder)" },
    intensity: 0.6,
    palette: ["#1a1a1a", "#ffffff", "#2a6bd1"],
    story: {
      zh: "Lev Tanju 2009 年在伦敦创立滑板品牌 PALACE，三角形的 Tri-Ferg 标志和幽默感让它迅速走红。",
      en: "Lev Tanju founded the London skate brand PALACE in 2009; its triangular Tri-Ferg logo and sense of humor made it a hit.",
    },
    moodLink: {
      zh: "滑板的快乐和冲劲。",
      en: "The rush and fun of skating.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "运动外套", en: "Track jacket" },
        colors: ["#2a6bd1", "#ffffff"],
        why: {
          zh: "复古运动感。",
          en: "Retro sport.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "Tri-Ferg Logo T 恤", en: "Tri-Ferg logo T-shirt" },
        colors: ["#ffffff", "#1a1a1a"],
        why: {
          zh: "那个三角形标志。",
          en: "That triangle logo.",
        },
      },
      {
        category: "bottom",
        shape: "shorts",
        name: { zh: "宽松短裤", en: "Relaxed shorts" },
        colors: ["#1a1a1a", "#2a6bd1"],
        why: {
          zh: "上板就走。",
          en: "Board and go.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "滑板鞋", en: "Skate shoes" },
        colors: ["#1a1a1a", "#ffffff"],
        why: {
          zh: "耐磨好踩。",
          en: "Tough and grippy.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "Logo 棒球帽", en: "Logo cap" },
        colors: ["#2a6bd1", "#ffffff"],
        why: {
          zh: "反着戴。",
          en: "Wear it backward.",
        },
      },
    ],
  },
];
