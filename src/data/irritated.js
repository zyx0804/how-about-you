// Brands for the 烦躁 · Irritated mood. Each brand has an intensity from 0 to 1:
// low values suit the lower end of this mood's meter range, high values the
// upper end. Items are grouped by category for building a daily outfit.

MOOD_BRANDS.irritated = [
  {
    brand: "UNDERCOVER",
    designer: { zh: "高桥盾 Jun Takahashi", en: "Jun Takahashi" },
    intensity: 0.6,
    palette: ["#151515", "#c23b22", "#e9e4da"],
    logo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Undercover-logo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
      page: "https://commons.wikimedia.org/wiki/File:Undercover-logo.jpg",
      license: "Public domain",
    },
    story: {
      zh: "高桥盾成长于东京里原宿的街头和朋克文化，品牌口号是 “We make noise, not clothes”。",
      en: "Jun Takahashi came up through the street and punk culture of Tokyo's Ura-Harajuku. The label's motto is “We make noise, not clothes.”",
    },
    moodLink: {
      zh: "他把噪音变成作品。烦躁不是坏事，它只是需要一个出口。",
      en: "He turns noise into work. Irritation isn't bad; it just needs a way out.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "朋克印花夹克", en: "Punk graphic jacket" },
        colors: ["#151515", "#c23b22"],
        why: {
          zh: "把火气交给一件有态度的衣服。",
          en: "Hand your temper to a piece with attitude.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "噪音印花 T 恤", en: "Noise graphic T-shirt" },
        colors: ["#e9e4da", "#151515"],
        why: {
          zh: "We make noise, not clothes。",
          en: "We make noise, not clothes.",
        },
      },
      {
        category: "bottom",
        shape: "cargo",
        name: { zh: "拼接工装裤", en: "Paneled cargo pants" },
        colors: ["#2a2a2a", "#5a5a5a"],
        why: {
          zh: "有棱有角。",
          en: "All edges.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "蓝色 GYAKUSOU 跑鞋", en: "Blue GYAKUSOU running shoes" },
        colors: ["#5fa8e8", "#e9e4da"],
        why: {
          zh: "一抹冷静的蓝，跑掉火气。",
          en: "A cool blue to run the anger off.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "印字棒球帽", en: "Slogan cap" },
        colors: ["#151515", "#e9e4da"],
        why: {
          zh: "压低帽子，谁也别惹我。",
          en: "Cap down: leave me alone.",
        },
      },
    ],
  },
  {
    brand: "Enfants Riches Déprimés",
    designer: { zh: "Henri Alexander Levy", en: "Henri Alexander Levy" },
    intensity: 0.3,
    palette: ["#262626", "#8a1f1f", "#d9d2c3"],
    story: {
      zh: "ERD 带着朋克的反叛和不妥协，很多单品是手工做旧的，磨损和破洞都被当成作品的一部分。",
      en: "ERD carries punk's rebellion and refusal to compromise. Many pieces are distressed by hand, with wear and holes treated as part of the work.",
    },
    moodLink: {
      zh: "它承认愤怒和混乱，不把它们修饰掉。",
      en: "It admits anger and chaos instead of polishing them away.",
    },
    items: [
      {
        category: "outerwear",
        shape: "biker",
        name: { zh: "破洞皮夹克", en: "Ripped leather jacket" },
        colors: ["#262626", "#8a1f1f"],
        why: {
          zh: "承认愤怒和混乱。",
          en: "Owning the anger and the mess.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "破洞做旧卫衣", en: "Ripped distressed hoodie" },
        colors: ["#262626", "#d9d2c3"],
        why: {
          zh: "不想当一个好脾气的人。",
          en: "No need to be easygoing today.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "手工做旧牛仔裤", en: "Hand-distressed jeans" },
        colors: ["#2b2f38", "#8a1f1f"],
        why: {
          zh: "磨损就是作品的一部分。",
          en: "The wear is part of the work.",
        },
      },
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "黑白拼色皮鞋", en: "Black-and-white leather shoes" },
        colors: ["#1a1a1a", "#f2efe8"],
        why: {
          zh: "黑白对撞，就像今天心里两种情绪在打架。",
          en: "Black against white, like two feelings fighting today.",
        },
      },
      {
        category: "accessory",
        shape: "ring",
        name: { zh: "银色朋克戒指", en: "Silver punk ring" },
        colors: ["#c9c9c9", "#262626"],
        why: {
          zh: "一点锋利的银色。",
          en: "A sharp bit of silver.",
        },
      },
    ],
  },
  {
    brand: "VETEMENTS",
    designer: { zh: "Demna & Guram Gvasalia（创立者）", en: "Demna & Guram Gvasalia (founders)" },
    intensity: 0.5,
    palette: ["#1b1b1b", "#d9d9d9", "#b51f1f"],
    story: {
      zh: "2014 年在巴黎创立，用夸张的大廓形和带讽刺意味的设计，挑战时装圈的规则和“高级”的定义。",
      en: "Founded in Paris in 2014, it uses exaggerated oversized shapes and ironic designs to challenge fashion's rules and its idea of “luxury.”",
    },
    moodLink: {
      zh: "它本身就是一种不服气，把对规则的不满变成了风格。",
      en: "It is defiance itself, turning frustration with the rules into style.",
    },
    items: [
      {
        category: "outerwear",
        shape: "puffer",
        name: { zh: "超大廓形羽绒服", en: "Oversized puffer" },
        colors: ["#1b1b1b", "#d9d9d9"],
        why: {
          zh: "够大，把空间留给自己。",
          en: "Big enough to give yourself room.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "超大廓形连帽卫衣", en: "Oversized hoodie" },
        colors: ["#1b1b1b", "#b51f1f"],
        why: {
          zh: "不服气的态度。",
          en: "Pure defiance.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "重组牛仔裤", en: "Reworked jeans" },
        colors: ["#3a4a62", "#1b1b1b"],
        why: {
          zh: "把规则拆了重组。",
          en: "Take the rules apart and remake them.",
        },
      },
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "西部风拼色尖头靴", en: "Western two-tone pointed boots" },
        colors: ["#151515", "#c46a2a"],
        why: {
          zh: "尖头、斜跟、拼色，够冲也够不服气。",
          en: "Pointed toe, slanted heel, two tones: loud and defiant.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "大 Logo 棒球帽", en: "Big-logo cap" },
        colors: ["#1b1b1b", "#b51f1f"],
        why: {
          zh: "带点讽刺的大字。",
          en: "Big letters with a wink.",
        },
      },
    ],
  },
  {
    brand: "Vivienne Westwood",
    designer: { zh: "Vivienne Westwood", en: "Vivienne Westwood" },
    intensity: 0.8,
    palette: ["#8b1e2b", "#1c1c1c", "#d9b44a"],
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Westwood_and_McLaren_Top_on_Display_at_the_Design_Museum%2C_London.jpg/960px-Westwood_and_McLaren_Top_on_Display_at_the_Design_Museum%2C_London.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Westwood_and_McLaren_Top_on_Display_at_the_Design_Museum,_London.jpg",
      kind: "museum",
      caption: {
        zh: "Vivienne Westwood 与 Malcolm McLaren 朋克时期的上衣，伦敦设计博物馆展出",
        en: "Vivienne Westwood and Malcolm McLaren punk-era top · Design Museum, London",
      },
      author: "Doyle of London",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    story: {
      zh: "70 年代，Vivienne Westwood 和 Malcolm McLaren 在伦敦国王路 430 号开店，用安全别针、束带和格纹定义了朋克的样子。",
      en: "In the 1970s, Vivienne Westwood and Malcolm McLaren ran a shop at 430 King's Road in London, defining the look of punk with safety pins, straps, and tartan.",
    },
    moodLink: {
      zh: "朋克本身就是愤怒的出口，她把不满变成了一种穿在身上的宣言。",
      en: "Punk itself is an outlet for anger; she turned frustration into a manifesto you can wear.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "格纹朋克夹克", en: "Tartan punk jacket" },
        colors: ["#8b1e2b", "#1c1c1c"],
        why: {
          zh: "安全别针和格纹，朋克的样子。",
          en: "Safety pins and tartan: the look of punk.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "海盗衬衫", en: "Pirate shirt" },
        colors: ["#f2ede2", "#8b1e2b"],
        why: {
          zh: "1981 年“海盗”系列的经典款式。",
          en: "A classic from the 1981 “Pirates” collection.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "格纹朋克束带裤", en: "Tartan punk bondage trousers" },
        colors: ["#8b1e2b", "#1c1c1c"],
        why: {
          zh: "今天的火气，交给最朋克的裤子。",
          en: "Give today's temper to the most punk trousers.",
        },
      },
      {
        category: "shoes",
        shape: "boots",
        name: { zh: "木质厚底摇摇马靴", en: "Wooden-platform Rocking Horse boots" },
        colors: ["#1c1c1c", "#c8925a"],
        why: {
          zh: "厚厚的木底是 1985 年摇摇马鞋的标志，走路都带着朋克的节奏。",
          en: "The thick wooden sole of the 1985 Rocking Horse: every step has a punk beat.",
        },
      },
      {
        category: "accessory",
        shape: "necklace",
        name: { zh: "Orb 珍珠颈链", en: "Orb pearl choker" },
        colors: ["#f2ede2", "#d9b44a"],
        why: {
          zh: "品牌最有名的土星标志珍珠链。",
          en: "The famous pearl choker with the orb logo.",
        },
      },
    ],
  },
  {
    brand: "HYSTERIC GLAMOUR",
    designer: { zh: "北村信彦 Nobuhiko Kitamura", en: "Nobuhiko Kitamura" },
    intensity: 0.7,
    palette: ["#1a1a1a", "#d6262f", "#f2e7d0"],
    story: {
      zh: "北村信彦 1984 年在东京创立，灵感来自摇滚、朋克和美国地下文化，印花大胆、带点挑衅。",
      en: "Nobuhiko Kitamura founded the label in Tokyo in 1984, inspired by rock, punk, and American underground culture, with bold, slightly provocative graphics.",
    },
    moodLink: {
      zh: "它吵、它野，正好接住你说不出口的烦。",
      en: "It is loud and wild, ready to catch the irritation you can't put into words.",
    },
    items: [
      {
        category: "outerwear",
        shape: "biker",
        name: { zh: "摇滚皮夹克", en: "Rock leather jacket" },
        colors: ["#1a1a1a", "#d6262f"],
        why: {
          zh: "吵、野、有态度。",
          en: "Loud, wild, with attitude.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "摇滚印花 T 恤", en: "Rock graphic T-shirt" },
        colors: ["#1a1a1a", "#d6262f"],
        why: {
          zh: "让衣服替你喊出来。",
          en: "Let the shirt shout for you.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "做旧喇叭牛仔裤", en: "Washed flared jeans" },
        colors: ["#4a5a78", "#1a1a1a"],
        why: {
          zh: "70 年代摇滚的味道。",
          en: "A taste of 1970s rock.",
        },
      },
      {
        category: "shoes",
        shape: "boots",
        name: { zh: "做旧牛仔靴", en: "Worn cowboy boots" },
        colors: ["#6a4a32", "#2a1f18"],
        why: {
          zh: "磨旧的皮面和摇滚气质，踩着节拍走。",
          en: "Worn leather with a rock-and-roll swagger; walk to the beat.",
        },
      },
      {
        category: "accessory",
        shape: "sunglasses",
        name: { zh: "摇滚墨镜", en: "Rock sunglasses" },
        colors: ["#1a1a1a", "#d6262f"],
        why: {
          zh: "戴上墨镜，不想说话。",
          en: "Shades on, mouth shut.",
        },
      },
    ],
  },
  {
    brand: "Chrome Hearts",
    designer: { zh: "Richard Stark（创始人）", en: "Richard Stark (founder)" },
    intensity: 0.4,
    palette: ["#141414", "#c9c9c9", "#7a1c1c"],
    story: {
      zh: "Richard Stark 1988 年在洛杉矶创立 Chrome Hearts，从摩托车皮衣起步，以手工银饰、十字架和哥特风格的图案闻名。",
      en: "Richard Stark founded Chrome Hearts in Los Angeles in 1988, starting with motorcycle leathers. It is known for handmade silver, crosses, and gothic motifs.",
    },
    moodLink: {
      zh: "银和皮革的硬朗，正好镇住心里的躁。",
      en: "The hardness of silver and leather keeps the restlessness in check.",
    },
    items: [
      {
        category: "outerwear",
        shape: "biker",
        name: { zh: "十字架皮夹克", en: "Cross-detail leather jacket" },
        colors: ["#141414", "#c9c9c9"],
        why: {
          zh: "从摩托车皮衣起步的品牌。",
          en: "A brand that began with biker leathers.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "马蹄铁 Logo 连帽卫衣", en: "Horseshoe-logo hoodie" },
        colors: ["#141414", "#e9e4da"],
        why: {
          zh: "哥特字体，一眼认出。",
          en: "Gothic lettering, recognized instantly.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "十字补丁皮裤", en: "Cross-patch leather pants" },
        colors: ["#141414", "#c9c9c9"],
        why: {
          zh: "硬朗到底。",
          en: "Tough all the way.",
        },
      },
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "银扣工程靴", en: "Silver-buckle engineer boots" },
        colors: ["#141414", "#c9c9c9"],
        why: {
          zh: "银扣和厚皮，每一步都带着金属声。",
          en: "Silver buckles and thick leather: every step rings.",
        },
      },
      {
        category: "accessory",
        shape: "necklace",
        name: { zh: "十字架银项链", en: "Silver cross necklace" },
        colors: ["#d0d0d0", "#141414"],
        why: {
          zh: "品牌最标志性的银饰。",
          en: "The brand's signature silver.",
        },
      },
      {
        category: "accessory",
        shape: "ring",
        name: { zh: "十字架银戒指", en: "Cross silver rings" },
        colors: ["#c9c9c9", "#141414"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Chrome_Hearts_Rings.jpg/500px-Chrome_Hearts_Rings.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Chrome_Hearts_Rings.jpg",
          author: "[puamelia]",
          license: "CC BY-SA 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        },
        why: {
          zh: "刻着十字架的银戒，戴上就有底气。",
          en: "Silver rings carved with crosses: instant backbone.",
        },
      },
      {
        category: "accessory",
        shape: "ring",
        name: { zh: "十字花银手链", en: "Cross-link silver bracelet" },
        colors: ["#9a9a9a", "#141414"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Chrome_Hearts_bracelet.jpg/500px-Chrome_Hearts_bracelet.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Chrome_Hearts_bracelet.jpg",
          author: "Wikimedia Commons",
          license: "Public domain",
          licenseUrl: "",
        },
        why: {
          zh: "粗重的银链，握紧拳头的感觉。",
          en: "A heavy silver chain, like clenching a fist.",
        },
      },
    ],
  },
  {
    brand: "Dr. Martens",
    designer: { zh: "Dr. Martens", en: "Dr. Martens" },
    intensity: 0.2,
    palette: ["#4a1c1c", "#1a1a1a", "#e8d84a"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Dr._Martens_Logo.svg/500px-Dr._Martens_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Dr._Martens_Logo.svg",
      license: "Public domain",
    },
    story: {
      zh: "1960 年 4 月 1 日，第一双 1460 八孔靴在英国诞生。黄色缝线的 Dr. Martens 后来成为朋克、光头党和各种反叛青年的鞋。",
      en: "The first 1460 eight-eye boot was made in England on April 1, 1960. With its yellow stitching, Dr. Martens became the boot of punks and rebellious youth.",
    },
    moodLink: {
      zh: "踩着它，愤怒也有了节奏。",
      en: "In these, even anger finds a rhythm.",
    },
    items: [
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "1460 八孔靴", en: "1460 eight-eye boots" },
        colors: ["#4a1c1c", "#e8d84a"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Dr._Martens_1460_01.jpg/500px-Dr._Martens_1460_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Dr._Martens_1460_01.jpg",
          author: "Pannet",
          license: "CC BY 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        },
        why: {
          zh: "黄色缝线，60 多年的经典。",
          en: "Yellow stitching, a classic for over sixty years.",
        },
      },
      {
        category: "shoes",
        shape: "boots",
        name: { zh: "Jadon 厚底靴", en: "Jadon platform boots" },
        colors: ["#1a1a1a", "#e8d84a"],
        why: {
          zh: "更高、更硬。",
          en: "Taller and tougher.",
        },
      },
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "灰色麂皮 2976 切尔西靴", en: "Gray suede 2976 Chelsea boots" },
        colors: ["#7d7a72", "#1a1a1a"],
        why: {
          zh: "一脚蹬，说走就走，灰色比黑色多一点温和。",
          en: "Pull on and go; gray is a little gentler than black.",
        },
      },
    ],
  },
  {
    brand: "Supreme",
    designer: { zh: "James Jebbia（创始人）", en: "James Jebbia (founder)" },
    intensity: 0.9,
    palette: ["#d4202a", "#ffffff", "#1a1a1a"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Supreme_Logo.svg/500px-Supreme_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Supreme_Logo.svg",
      license: "Public domain",
    },
    story: {
      zh: "James Jebbia 1994 年在纽约开了第一家 Supreme 店，服务滑板少年，红底白字的 Box Logo 后来成了街头文化的符号。",
      en: "James Jebbia opened the first Supreme shop in New York in 1994 for skaters. Its red Box Logo became a symbol of street culture.",
    },
    moodLink: {
      zh: "滑板少年的叛逆，正好接住你的不耐烦。",
      en: "Skater rebellion, ready for your impatience.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "工装夹克", en: "Work jacket" },
        colors: ["#1a1a1a", "#d4202a"],
        why: {
          zh: "耐磨、耐摔。",
          en: "Built to take a fall.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "Box Logo 连帽卫衣", en: "Box Logo hoodie" },
        colors: ["#1a1a1a", "#d4202a"],
        why: {
          zh: "红色方框，街头的符号。",
          en: "The red box, a street icon.",
        },
      },
      {
        category: "bottom",
        shape: "cargo",
        name: { zh: "工装裤", en: "Cargo pants" },
        colors: ["#3a3a32", "#1a1a1a"],
        why: {
          zh: "放得下滑板工具。",
          en: "Room for skate tools.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "Nike SB 联名 Dunk", en: "Nike SB collaboration Dunk" },
        colors: ["#d4202a", "#ffffff"],
        why: {
          zh: "滑板鞋里的经典联名。",
          en: "A classic skate collaboration.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "五片帽", en: "Five-panel cap" },
        colors: ["#d4202a", "#ffffff"],
        why: {
          zh: "滑板少年的标配。",
          en: "Every skater's cap.",
        },
      },
    ],
  },
];
