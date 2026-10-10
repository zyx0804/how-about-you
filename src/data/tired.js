// Brands for the 疲惫 · Tired mood. Each brand has an intensity from 0 to 1:
// low values suit the lower end of this mood's meter range, high values the
// upper end. Items are grouped by category for building a daily outfit.

MOOD_BRANDS.tired = [
  {
    brand: "Homme Plissé Issey Miyake",
    designer: { zh: "三宅一生 Issey Miyake", en: "Issey Miyake" },
    intensity: 0.3,
    palette: ["#2b2b30", "#6f7380", "#c9c4b8"],
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Issey_miyake%2C_pleats_please%2C_series_n.1%2C_a-i_1996-97_%28hasselt%2C_modemuseum%29.jpg/960px-Issey_miyake%2C_pleats_please%2C_series_n.1%2C_a-i_1996-97_%28hasselt%2C_modemuseum%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Issey_miyake,_pleats_please,_series_n.1,_a-i_1996-97_(hasselt,_modemuseum).jpg",
      kind: "museum",
      caption: {
        zh: "Issey Miyake Pleats Please 第 1 系列，1996–97 秋冬，比利时哈瑟尔特时尚博物馆展出",
        en: "Issey Miyake Pleats Please, series no. 1, Fall/Winter 1996–97 · Modemuseum Hasselt",
      },
      author: "Francesco Bini",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    story: {
      zh: "三宅一生的褶皱工艺是先把衣服按大尺寸缝好，再整件压出褶皱。这样做出来的衣服轻、不怕皱，卷起来就能带走。",
      en: "Issey Miyake's pleating method sews the garment oversized first, then presses the pleats into the whole piece. The result is light, wrinkle-proof, and can be rolled up and carried anywhere.",
    },
    moodLink: {
      zh: "这套设计的出发点，就是让身体不被衣服束缚，把穿衣的负担降到最低。",
      en: "The whole idea is to free the body from its clothes and make getting dressed as light a task as possible.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "褶皱轻薄外套", en: "Pleated light jacket" },
        colors: ["#2b2b30", "#6f7380"],
        why: {
          zh: "轻得像没穿，还不会皱。",
          en: "So light it's barely there, and it won't wrinkle.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "褶皱长袖上衣", en: "Pleated long-sleeve top" },
        colors: ["#6f7380", "#c9c4b8"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Issey_miyake%2C_pleats_please%2C_series_n.1%2C_a-i_1996-97_%28hasselt%2C_modemuseum%29.jpg/960px-Issey_miyake%2C_pleats_please%2C_series_n.1%2C_a-i_1996-97_%28hasselt%2C_modemuseum%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Issey_miyake,_pleats_please,_series_n.1,_a-i_1996-97_(hasselt,_modemuseum).jpg",
          author: "Francesco Bini",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        why: {
          zh: "拿起来就能穿，不需要熨。",
          en: "Grab it and go; no ironing.",
        },
      },
      {
        category: "bottom",
        shape: "wide",
        name: { zh: "褶皱阔腿长裤", en: "Pleated wide-leg trousers" },
        colors: ["#2b2b30", "#6f7380"],
        why: {
          zh: "累的时候也依然好看。",
          en: "Still looks good when you're worn out.",
        },
      },
      {
        category: "shoes",
        shape: "sandals",
        name: { zh: "软底凉鞋", en: "Soft-sole sandals" },
        colors: ["#3a3a40", "#c9c4b8"],
        why: {
          zh: "脚也需要休息。",
          en: "Your feet need a rest too.",
        },
      },
      {
        category: "accessory",
        shape: "minibag",
        name: { zh: "Bao Bao 几何包", en: "Bao Bao geometric bag" },
        colors: ["#9aa0aa", "#2b2b30"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/HK_TST_%E5%B0%96%E6%B2%99%E5%92%80_Tsim_Sha_Tsui_%E6%B5%B7%E6%B4%8B%E4%B8%AD%E5%BF%83_Ocean_Centre_mall_shop_Bao_Bao_bag_April_2024_R12S_01.jpg/500px-HK_TST_%E5%B0%96%E6%B2%99%E5%92%80_Tsim_Sha_Tsui_%E6%B5%B7%E6%B4%8B%E4%B8%AD%E5%BF%83_Ocean_Centre_mall_shop_Bao_Bao_bag_April_2024_R12S_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:HK_TST_%E5%B0%96%E6%B2%99%E5%92%80_Tsim_Sha_Tsui_%E6%B5%B7%E6%B4%8B%E4%B8%AD%E5%BF%83_Ocean_Centre_mall_shop_Bao_Bao_bag_April_2024_R12S_01.jpg",
          author: "HOA16 HONON",
          license: "CC0",
          licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        },
        why: {
          zh: "三宅一生的几何包，轻、好装、会变形。",
          en: "Issey Miyake's light, shape-shifting geometric bag.",
        },
      },
    ],
  },
  {
    brand: "AURALEE",
    designer: { zh: "岩井良太 Ryota Iwai", en: "Ryota Iwai" },
    intensity: 0.5,
    palette: ["#d8cdb9", "#9a8f7d", "#4d4a44"],
    story: {
      zh: "东京品牌 AURALEE 以自己开发面料著称，颜色低饱和，重点在于手感和质地，而不是醒目的图案。",
      en: "Tokyo label AURALEE is known for developing its own fabrics. Its colors are muted, and the focus is on touch and texture rather than loud graphics.",
    },
    moodLink: {
      zh: "它安静、不张扬，把注意力全放在“摸起来舒不舒服”上。",
      en: "It is quiet and modest, putting all its attention on how it feels against you.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "羊毛软呢大衣", en: "Soft wool coat" },
        colors: ["#9a8f7d", "#4d4a44"],
        why: {
          zh: "面料软得像毯子。",
          en: "Fabric as soft as a blanket.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "柔软羊毛针织衫", en: "Soft wool knit sweater" },
        colors: ["#d8cdb9", "#9a8f7d"],
        why: {
          zh: "疲惫的时候，皮肤比眼睛更需要照顾。",
          en: "When tired, your skin needs care more than your eyes.",
        },
      },
      {
        category: "bottom",
        shape: "wide",
        name: { zh: "宽松羊毛长裤", en: "Relaxed wool trousers" },
        colors: ["#8f8676", "#4d4a44"],
        why: {
          zh: "宽松好动，安静的颜色。",
          en: "Easy to move in, in a quiet color.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "麂皮乐福鞋", en: "Suede loafers" },
        colors: ["#7a6a55", "#4d4a44"],
        why: {
          zh: "一脚蹬，不用系鞋带。",
          en: "Slip on; no laces.",
        },
      },
      {
        category: "accessory",
        shape: "scarf",
        name: { zh: "羊毛围巾", en: "Wool scarf" },
        colors: ["#cfc4ae", "#9a8f7d"],
        why: {
          zh: "围上就暖和了。",
          en: "Wrap up and warm up.",
        },
      },
    ],
  },
  {
    brand: "OUR LEGACY",
    designer: { zh: "Jockum Hallin, Cristopher Nying & Richardos Klarén", en: "Jockum Hallin, Cristopher Nying & Richardos Klarén" },
    intensity: 0.7,
    palette: ["#e4ddd0", "#8b8578", "#3d3a35"],
    story: {
      zh: "这个斯德哥尔摩品牌从一批基础款 T 恤起步，擅长挑选面料、做低调但有细节的日常衣物。",
      en: "This Stockholm label began with a run of basic T-shirts and is known for choosing fabrics well and making understated everyday clothes with quiet details.",
    },
    moodLink: {
      zh: "它不需要你花心思去配，本身就很好看，让你省下一点力气。",
      en: "It doesn't need styling to look good, so it saves you a little energy.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "宽松工装夹克", en: "Relaxed work jacket" },
        colors: ["#6d6a5c", "#3d3a35"],
        why: {
          zh: "不出错，又有一点细节。",
          en: "Hard to get wrong, with a quiet detail.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "宽松棉质衬衫", en: "Relaxed cotton shirt" },
        colors: ["#e4ddd0", "#8b8578"],
        why: {
          zh: "一件不出错的衬衫就是最好的照顾。",
          en: "A shirt that can't go wrong is the best care.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "宽松直筒裤", en: "Relaxed straight trousers" },
        colors: ["#8b8578", "#3d3a35"],
        why: {
          zh: "随便搭都好看。",
          en: "Goes with anything.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "皮质穆勒鞋", en: "Leather mules" },
        colors: ["#3d3a35", "#8b8578"],
        why: {
          zh: "后跟一踩就走。",
          en: "Step on the heel and go.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "帆布托特包", en: "Canvas tote" },
        colors: ["#d8d0bf", "#6d6a5c"],
        why: {
          zh: "什么都能塞进去。",
          en: "Throw everything in.",
        },
      },
    ],
  },
  {
    brand: "Fear of God ESSENTIALS",
    designer: { zh: "Jerry Lorenzo", en: "Jerry Lorenzo" },
    intensity: 0.2,
    palette: ["#cfc6b8", "#8e877b", "#3f3c37"],
    story: {
      zh: "Jerry Lorenzo 2013 年在洛杉矶创立 Fear of God，以宽松的廓形和低饱和的大地色闻名。ESSENTIALS 是它更日常、更好入手的副线。",
      en: "Jerry Lorenzo founded Fear of God in Los Angeles in 2013, known for relaxed silhouettes and muted earth tones. ESSENTIALS is its more everyday, more affordable line.",
    },
    moodLink: {
      zh: "它把“舒服”做成了一种好看的样子，不用用力也有型。",
      en: "It turns comfort into a look, stylish without any effort.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "宽松尼龙夹克", en: "Relaxed nylon jacket" },
        colors: ["#8e877b", "#3f3c37"],
        why: {
          zh: "轻松的廓形，不用用力也有型。",
          en: "An easy shape that looks good without effort.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "宽松连帽卫衣", en: "Relaxed hoodie" },
        colors: ["#cfc6b8", "#8e877b"],
        why: {
          zh: "累了就穿一整套。",
          en: "Tired? Wear the set.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "宽松运动长裤", en: "Relaxed sweatpants" },
        colors: ["#cfc6b8", "#8e877b"],
        why: {
          zh: "上下同色，连搭配都替你想好了。",
          en: "Matching colors; the outfit decides itself.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "低饱和跑鞋", en: "Muted running sneakers" },
        colors: ["#d8d0c2", "#8e877b"],
        why: {
          zh: "舒服、好走，颜色好配。",
          en: "Comfortable, easy, and easy to match.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "大地色棒球帽", en: "Earth-tone cap" },
        colors: ["#8e877b", "#3f3c37"],
        why: {
          zh: "没力气打理头发的时候就戴上。",
          en: "For days you can't be bothered with your hair.",
        },
      },
    ],
  },
  {
    brand: "COMOLI",
    designer: { zh: "小森启二郎 Keijiro Komori", en: "Keijiro Komori" },
    intensity: 0.6,
    palette: ["#6b6a5c", "#b9b09a", "#2e2d29"],
    story: {
      zh: "小森启二郎 2011 年创立的东京品牌，讲究天然面料和宽松、耐穿的版型，衣服越穿越有自己的样子。",
      en: "Keijiro Komori founded this Tokyo label in 2011. It favors natural fabrics and loose, durable cuts that grow more your own the more you wear them.",
    },
    moodLink: {
      zh: "它的衣服不催你，安静又松弛，适合慢下来。",
      en: "Its clothes never rush you. Quiet and easy, made for slowing down.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "羊毛短夹克", en: "Short wool jacket" },
        colors: ["#4f4e45", "#2e2d29"],
        why: {
          zh: "越穿越有自己的样子。",
          en: "Becomes more yours the more you wear it.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "宽松羊毛衬衫", en: "Relaxed wool shirt" },
        colors: ["#6b6a5c", "#b9b09a"],
        why: {
          zh: "旧了也好看。",
          en: "Looks better with age.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "宽松棉质长裤", en: "Relaxed cotton trousers" },
        colors: ["#b9b09a", "#6b6a5c"],
        why: {
          zh: "松弛的版型，适合慢下来。",
          en: "A loose cut made for slowing down.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "皮质德比鞋", en: "Leather derby shoes" },
        colors: ["#3a332b", "#6b5a48"],
        why: {
          zh: "安静又耐穿。",
          en: "Quiet and durable.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "皮革托特包", en: "Leather tote" },
        colors: ["#6b5a48", "#3a332b"],
        why: {
          zh: "简单好用，不用多想。",
          en: "Simple and useful; no thinking needed.",
        },
      },
    ],
  },
  {
    brand: "BIRKENSTOCK",
    designer: { zh: "Birkenstock 家族", en: "The Birkenstock family" },
    intensity: 0.1,
    palette: ["#7a5a3a", "#c8a87a", "#3a2a1a"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Birkenstock_logo.svg/500px-Birkenstock_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Birkenstock_logo.svg",
      license: "Public domain",
    },
    story: {
      zh: "这个德国品牌的历史可以追溯到 18 世纪，以贴合脚型的软木鞋床闻名，Arizona 双带凉鞋和 Boston 包头鞋是最经典的两款。",
      en: "This German brand traces its roots to the 1700s and is known for its contoured cork footbed; the two-strap Arizona and the closed-toe Boston clog are its classics.",
    },
    moodLink: {
      zh: "它的出发点就是让脚舒服，正是累了的你需要的。",
      en: "It exists to make feet comfortable, exactly what a tired you needs.",
    },
    items: [
      {
        category: "shoes",
        shape: "sandals",
        name: { zh: "Arizona 双带凉鞋", en: "Arizona two-strap sandals" },
        colors: ["#7a5a3a", "#c8a87a"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Birkenstock_Arizona.jpg/500px-Birkenstock_Arizona.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Birkenstock_Arizona.jpg",
          author: "Elmschrat",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        why: {
          zh: "软木鞋床贴着脚，像回到家。",
          en: "The cork footbed hugs your feet like home.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "Boston 麂皮包头鞋", en: "Boston suede clogs" },
        colors: ["#8a7a62", "#c8a87a"],
        why: {
          zh: "冬天也能穿的舒服。",
          en: "Comfort you can wear in winter too.",
        },
      },
    ],
  },
  {
    brand: "New Balance",
    designer: { zh: "New Balance", en: "New Balance" },
    intensity: 0.8,
    palette: ["#9aa0a6", "#1f3a6a", "#e8e4dc"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/500px-New_Balance_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:New_Balance_logo.svg",
      license: "Public domain",
    },
    story: {
      zh: "1906 年从波士顿的足弓支撑起家，灰色的 990 系列被称为“老爹鞋”，舒适又耐看。",
      en: "Founded in Boston in 1906 making arch supports, New Balance is known for the gray 990 series, the original comfortable “dad shoe.”",
    },
    moodLink: {
      zh: "不炫目，但每一步都很稳。",
      en: "Nothing flashy, just steady with every step.",
    },
    items: [
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "990 灰色跑鞋", en: "Gray 990 sneakers" },
        colors: ["#9aa0a6", "#e8e4dc"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/New_Balance_Women%27s_990_Running_Shoes.jpg/500px-New_Balance_Women%27s_990_Running_Shoes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:New_Balance_Women%27s_990_Running_Shoes.jpg",
          author: "slgckgc",
          license: "CC BY 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        },
        why: {
          zh: "最舒服的老爹鞋。",
          en: "The comfiest dad shoe.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "2002R 复古跑鞋", en: "2002R retro runners" },
        colors: ["#b8b4aa", "#1f3a6a"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/New_Balance_2002R.jpg/500px-New_Balance_2002R.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:New_Balance_2002R.jpg",
          author: "LeDroider",
          license: "CC0",
          licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        },
        why: {
          zh: "软软的鞋底。",
          en: "A soft, cushioned sole.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "灰色连帽卫衣", en: "Gray hoodie" },
        colors: ["#9aa0a6", "#1f3a6a"],
        why: {
          zh: "配跑鞋刚好。",
          en: "Just right with the sneakers.",
        },
      },
    ],
  },
  {
    brand: "visvim",
    designer: { zh: "中村弘峰 Hiroki Nakamura", en: "Hiroki Nakamura" },
    intensity: 0.4,
    palette: ["#5a4a3a", "#a8957a", "#2a3a4a"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Visvim_logo.svg/500px-Visvim_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Visvim_logo.svg",
      license: "Public domain",
    },
    story: {
      zh: "中村弘峰 2000 年在东京创立 visvim，喜欢研究传统手工艺和天然染色，FBT 莫卡辛鞋是品牌最早也最有名的鞋。",
      en: "Hiroki Nakamura founded visvim in Tokyo in 2000. He studies traditional craft and natural dyeing; the FBT moccasin was the brand's first and best-known shoe.",
    },
    moodLink: {
      zh: "慢工细活，适合慢下来的一天。",
      en: "Slow craft for a slowed-down day.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "天然染色工作外套", en: "Naturally dyed work jacket" },
        colors: ["#2a3a4a", "#5a4a3a"],
        why: {
          zh: "颜色温和，越穿越软。",
          en: "Gentle color that softens with wear.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "手工染色衬衫", en: "Hand-dyed shirt" },
        colors: ["#a8957a", "#5a4a3a"],
        why: {
          zh: "手工的温度。",
          en: "The warmth of handwork.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "做旧牛仔裤", en: "Washed jeans" },
        colors: ["#3a4a62", "#a8957a"],
        why: {
          zh: "松弛好穿。",
          en: "Relaxed and easy.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "FBT 莫卡辛鞋", en: "FBT moccasins" },
        colors: ["#a8957a", "#5a4a3a"],
        why: {
          zh: "像拖鞋一样舒服的鞋。",
          en: "As comfortable as slippers.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "帆布皮革包", en: "Canvas and leather bag" },
        colors: ["#c8b89a", "#5a4a3a"],
        why: {
          zh: "随手一背。",
          en: "Grab and go.",
        },
      },
    ],
  },
];
