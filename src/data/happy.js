// Brands for the 开心 · Happy mood. Each brand has an intensity from 0 to 1:
// low values suit the lower end of this mood's meter range, high values the
// upper end. Items are grouped by category for building a daily outfit.

MOOD_BRANDS.happy = [
  {
    brand: "Comme des Garçons PLAY",
    designer: { zh: "川久保玲 Rei Kawakubo", en: "Rei Kawakubo" },
    intensity: 0.6,
    palette: ["#ffffff", "#d42027", "#111111"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Comme_des_Garcons_logo.svg/500px-Comme_des_Garcons_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Comme_des_Garcons_logo.svg",
      license: "Public domain",
    },
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Rei_Kawakubo_for_CDG_-_FW_2017_-_Look_5.jpg/960px-Rei_Kawakubo_for_CDG_-_FW_2017_-_Look_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Rei_Kawakubo_for_CDG_-_FW_2017_-_Look_5.jpg",
      kind: "museum",
      caption: {
        zh: "Comme des Garçons 主线 2017 秋冬 Look 5（川久保玲设计），博物馆展出",
        en: "Comme des Garçons Fall/Winter 2017, look 5 (Rei Kawakubo) · museum display",
      },
      author: "Premeditated Chaos",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    story: {
      zh: "川久保玲的 Comme des Garçons 以前卫、甚至“阴暗”的作品闻名。PLAY 是其中最轻松的一条线，红色带眼睛的心形 Logo 出自波兰艺术家 Filip Pagowski 之手。",
      en: "Rei Kawakubo's Comme des Garçons is famous for avant-garde, even “dark” work. PLAY is its most lighthearted line; the red heart with eyes was drawn by Polish artist Filip Pagowski.",
    },
    moodLink: {
      zh: "在一个以实验和颠覆著称的品牌里，PLAY 是那份直接、不加修饰的开心。",
      en: "Inside a brand known for experiment and subversion, PLAY is plain, unfiltered joy.",
    },
    items: [
      {
        category: "outerwear",
        shape: "cardigan",
        name: { zh: "心形 Logo 开衫", en: "Heart-logo cardigan" },
        colors: ["#1a1a1a", "#d42027"],
        why: {
          zh: "小小的心形，满满的开心。",
          en: "A small heart, a lot of joy.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "心形眼睛 Logo T 恤", en: "Heart-with-eyes logo T-shirt" },
        colors: ["#ffffff", "#d42027"],
        why: {
          zh: "简单直接的快乐。",
          en: "Simple, direct happiness.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "浅色直筒牛仔裤", en: "Light straight jeans" },
        colors: ["#8fb0d4", "#5a7aa0"],
        why: {
          zh: "配什么都好看。",
          en: "Goes with everything.",
        },
      },
      {
        category: "shoes",
        shape: "hightop",
        name: { zh: "PLAY × Converse Chuck 70", en: "PLAY × Converse Chuck 70" },
        colors: ["#f5f2ea", "#d42027"],
        why: {
          zh: "鞋侧有那颗心形眼睛。",
          en: "With the heart-and-eyes on the side.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "心形 Logo 棒球帽", en: "Heart-logo cap" },
        colors: ["#1a1a1a", "#d42027"],
        why: {
          zh: "戴上就是好心情。",
          en: "Instant good mood.",
        },
      },
    ],
  },
  {
    brand: "KAPITAL",
    designer: { zh: "平田俊清 & 平田和宏", en: "Toshikiyo Hirata & Kazuhiro Hirata" },
    intensity: 0.4,
    palette: ["#203a63", "#d7c7a4", "#f2c230"],
    story: {
      zh: "KAPITAL 来自日本冈山县的牛仔布之乡儿岛，以靛蓝染色、boro 拼布和手工感闻名，作品里常藏着笑脸图案。",
      en: "KAPITAL comes from Kojima in Okayama, Japan's denim town. It is known for indigo dyeing, boro patchwork, and a handmade feel, with smiley faces hidden throughout its work.",
    },
    moodLink: {
      zh: "它把玩心和手作的温度缝在了一起，就像你今天的心情。",
      en: "It stitches playfulness and handmade warmth together, like your mood today.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "靛蓝拼布夹克", en: "Indigo patchwork jacket" },
        colors: ["#203a63", "#d7c7a4"],
        why: {
          zh: "每看一眼都会笑。",
          en: "Makes you smile every time.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "笑脸印花 T 恤", en: "Smiley print T-shirt" },
        colors: ["#f2ead6", "#f2c230"],
        why: {
          zh: "KAPITAL 的笑脸藏在各处。",
          en: "KAPITAL hides smileys everywhere.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "boro 补丁牛仔裤", en: "Boro patched jeans" },
        colors: ["#2a4470", "#d7c7a4"],
        why: {
          zh: "日本传统补丁工艺。",
          en: "Traditional Japanese boro patching.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "靛蓝帆布鞋", en: "Indigo canvas sneakers" },
        colors: ["#203a63", "#efe6d2"],
        why: {
          zh: "手作感的鞋。",
          en: "Shoes with a handmade feel.",
        },
      },
      {
        category: "accessory",
        shape: "scarf",
        name: { zh: "印花方巾", en: "Printed bandana" },
        colors: ["#b8352c", "#f2ead6"],
        why: {
          zh: "绑在哪里都可爱。",
          en: "Cute wherever you tie it.",
        },
      },
    ],
  },
  {
    brand: "MARNI",
    designer: { zh: "Consuelo Castiglioni（创始人）", en: "Consuelo Castiglioni (founder)" },
    intensity: 0.8,
    palette: ["#f0b429", "#2f7d6d", "#e5562f"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Marni_logo.svg/500px-Marni_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Marni_logo.svg",
      license: "Public domain",
    },
    story: {
      zh: "1994 年在意大利创立的 Marni，以大胆的撞色、印花和带点孩子气的趣味闻名。",
      en: "Founded in Italy in 1994, Marni is known for bold color blocking, prints, and a slightly childlike sense of fun.",
    },
    moodLink: {
      zh: "它的颜色从不收着，就像你今天藏不住的好心情。",
      en: "Its colors never hold back, just like the good mood you can't hide today.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "撞色大衣", en: "Color-block coat" },
        colors: ["#2f7d6d", "#f0b429"],
        why: {
          zh: "颜色从不收着。",
          en: "Colors that never hold back.",
        },
      },
      {
        category: "top",
        shape: "cardigan",
        name: { zh: "撞色针织开衫", en: "Color-block knit cardigan" },
        colors: ["#f0b429", "#e5562f"],
        why: {
          zh: "让颜色替你说话。",
          en: "Let the colors talk.",
        },
      },
      {
        category: "bottom",
        shape: "wide",
        name: { zh: "印花阔腿裤", en: "Printed wide trousers" },
        colors: ["#e5562f", "#2f7d6d"],
        why: {
          zh: "带点孩子气的趣味。",
          en: "A little childlike fun.",
        },
      },
      {
        category: "shoes",
        shape: "sandals",
        name: { zh: "毛毡厚底穆勒鞋", en: "Felt platform mules" },
        colors: ["#e5562f", "#2f7d6d"],
        why: {
          zh: "厚厚软软，走路都开心。",
          en: "Thick and soft; walking feels happy.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "彩色条纹托特包", en: "Striped color tote" },
        colors: ["#f0b429", "#2f7d6d"],
        why: {
          zh: "装满好心情。",
          en: "Full of good mood.",
        },
      },
    ],
  },
  {
    brand: "JW ANDERSON",
    designer: { zh: "Jonathan Anderson", en: "Jonathan Anderson" },
    intensity: 0.5,
    palette: ["#f3c742", "#3c7d4a", "#f4efe4"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/JW_Anderson_logo.svg/500px-JW_Anderson_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:JW_Anderson_logo.svg",
      license: "Public domain",
    },
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Harry_Styles_Cardigan_at_The_Victoria_and_Albert_Museum.jpg/960px-Harry_Styles_Cardigan_at_The_Victoria_and_Albert_Museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Harry_Styles_Cardigan_at_The_Victoria_and_Albert_Museum.jpg",
      kind: "museum",
      caption: {
        zh: "JW Anderson 拼色针织开衫（因 Harry Styles 走红），V&A 博物馆展出",
        en: "JW Anderson patchwork cardigan made famous by Harry Styles · V&A Museum",
      },
      author: "Bloopyfloop",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    story: {
      zh: "北爱尔兰设计师 Jonathan Anderson 2008 年在伦敦创立 JW Anderson，作品常带着幽默感和意想不到的趣味细节。",
      en: "Northern Irish designer Jonathan Anderson founded JW Anderson in London in 2008. His work often carries humor and unexpected, playful details.",
    },
    moodLink: {
      zh: "它让人一看就想笑，正好配上你今天的好心情。",
      en: "It makes you smile at first sight, a perfect match for your good mood.",
    },
    items: [
      {
        category: "outerwear",
        shape: "cardigan",
        name: { zh: "拼色针织开衫", en: "Patchwork knit cardigan" },
        colors: ["#e4342c", "#2f8a4a"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Harry_Styles_Cardigan_at_The_Victoria_and_Albert_Museum.jpg/960px-Harry_Styles_Cardigan_at_The_Victoria_and_Albert_Museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Harry_Styles_Cardigan_at_The_Victoria_and_Albert_Museum.jpg",
          author: "Bloopyfloop",
          license: "CC BY 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        },
        why: {
          zh: "因 Harry Styles 走红的那件开衫。",
          en: "The cardigan Harry Styles made famous.",
        },
      },
      {
        category: "top",
        shape: "vest",
        name: { zh: "趣味图案针织背心", en: "Playful knit vest" },
        colors: ["#f3c742", "#3c7d4a"],
        why: {
          zh: "一看就想笑。",
          en: "Makes you smile at first sight.",
        },
      },
      {
        category: "bottom",
        shape: "shorts",
        name: { zh: "宽松短裤", en: "Relaxed shorts" },
        colors: ["#f4efe4", "#3c7d4a"],
        why: {
          zh: "轻松自在的晴天。",
          en: "Easy, like a sunny day.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "链条乐福鞋", en: "Chain loafers" },
        colors: ["#1c1c1c", "#c9a24a"],
        why: {
          zh: "鞋面上一条粗链条，调皮又精致。",
          en: "A chunky chain on top: playful and polished.",
        },
      },
      {
        category: "accessory",
        shape: "minibag",
        name: { zh: "趣味造型小包", en: "Playful novelty bag" },
        colors: ["#f3c742", "#1c1c1c"],
        why: {
          zh: "有点调皮的小东西。",
          en: "A mischievous little thing.",
        },
      },
    ],
  },
  {
    brand: "JACQUEMUS",
    designer: { zh: "Simon Porte Jacquemus", en: "Simon Porte Jacquemus" },
    intensity: 0.9,
    palette: ["#f2d06b", "#e9e2d2", "#5b8fc9"],
    story: {
      zh: "Simon Porte Jacquemus 2009 年创立品牌，灵感常来自法国南部的阳光、海边和童年回忆，迷你得夸张的 Le Chiquito 手袋是它的代表作。",
      en: "Simon Porte Jacquemus founded his label in 2009, often inspired by the sun, sea, and childhood memories of the south of France. The tiny Le Chiquito bag is its signature.",
    },
    moodLink: {
      zh: "它像一个晴天，明亮、轻松，带着阳光的味道。",
      en: "It is like a sunny day: bright, easy, and warm with sunlight.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "亚麻短外套", en: "Linen cropped jacket" },
        colors: ["#e9e2d2", "#c9a86a"],
        why: {
          zh: "法国南部的阳光感。",
          en: "Sunshine from the south of France.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "宽松亚麻衬衫", en: "Relaxed linen shirt" },
        colors: ["#f2d06b", "#e9e2d2"],
        why: {
          zh: "像一个晴天。",
          en: "Like a sunny day.",
        },
      },
      {
        category: "bottom",
        shape: "skirt",
        name: { zh: "不对称半身裙", en: "Asymmetric skirt" },
        colors: ["#5b8fc9", "#e9e2d2"],
        why: {
          zh: "海边的轻盈。",
          en: "Seaside lightness.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "与 Nike 合作的跑鞋", en: "Nike collaboration sneakers" },
        colors: ["#efe8d8", "#5b8fc9"],
        why: {
          zh: "轻快的步子。",
          en: "A lighter step.",
        },
      },
      {
        category: "accessory",
        shape: "minibag",
        name: { zh: "Le Chiquito 迷你手袋", en: "Le Chiquito mini bag" },
        colors: ["#f2d06b", "#c9a86a"],
        why: {
          zh: "小得可爱的包，出门晒太阳。",
          en: "A tiny, delightful bag for the sun.",
        },
      },
    ],
  },
  {
    brand: "Stüssy",
    designer: { zh: "Shawn Stussy（创始人）", en: "Shawn Stussy (founder)" },
    intensity: 0.3,
    palette: ["#f2ead6", "#1a1a1a", "#e8722a"],
    story: {
      zh: "Shawn Stussy 80 年代初在加州拉古纳海滩做冲浪板，把手写签名印在 T 恤上，就这样开创了一个街头品牌。",
      en: "In the early 1980s Shawn Stussy was making surfboards in Laguna Beach, California; printing his handwritten signature on T-shirts started a street brand.",
    },
    moodLink: {
      zh: "加州的阳光和海浪，开心就是这么简单。",
      en: "California sun and surf: happiness can be that simple.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "教练夹克", en: "Coach jacket" },
        colors: ["#1a1a1a", "#f2ead6"],
        why: {
          zh: "随便一披就有型。",
          en: "Throw it on and look good.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "签名 Logo T 恤", en: "Signature logo T-shirt" },
        colors: ["#f2ead6", "#1a1a1a"],
        why: {
          zh: "那个手写签名。",
          en: "That handwritten signature.",
        },
      },
      {
        category: "bottom",
        shape: "shorts",
        name: { zh: "沙滩短裤", en: "Beach shorts" },
        colors: ["#e8722a", "#f2ead6"],
        why: {
          zh: "去海边。",
          en: "Off to the beach.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "帆布鞋", en: "Canvas sneakers" },
        colors: ["#f2ead6", "#1a1a1a"],
        why: {
          zh: "轻松好走。",
          en: "Easy to walk in.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "渔夫帽", en: "Bucket hat" },
        colors: ["#e8722a", "#1a1a1a"],
        why: {
          zh: "挡太阳也好看。",
          en: "Sun shade that looks good.",
        },
      },
    ],
  },
  {
    brand: "Converse",
    designer: { zh: "Converse", en: "Converse" },
    intensity: 0.2,
    palette: ["#f5f2ea", "#1a1a1a", "#d42027"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/500px-Converse_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Converse_logo.svg",
      license: "Public domain",
    },
    story: {
      zh: "Converse 的 Chuck Taylor All Star 帆布鞋诞生于 20 世纪初的篮球场，后来成了每个人鞋柜里的经典。",
      en: "Converse's Chuck Taylor All Star started on early 20th-century basketball courts and became a classic in everyone's closet.",
    },
    moodLink: {
      zh: "简单、轻快，穿上就想出门。",
      en: "Simple and light; put them on and you want to go out.",
    },
    items: [
      {
        category: "shoes",
        shape: "hightop",
        name: { zh: "Chuck 70 高帮帆布鞋", en: "Chuck 70 high-tops" },
        colors: ["#f5f2ea", "#1a1a1a"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Converse_shoes_in_red%2C_blue_and_green_cotton.jpg/500px-Converse_shoes_in_red%2C_blue_and_green_cotton.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Converse_shoes_in_red,_blue_and_green_cotton.jpg",
          author: "Menswear Market",
          license: "CC BY 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        },
        why: {
          zh: "最经典的帆布鞋。",
          en: "The classic canvas sneaker.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "Chuck 70 低帮帆布鞋", en: "Chuck 70 low-tops" },
        colors: ["#d42027", "#f5f2ea"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Converse_shoes.jpg/500px-Converse_shoes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Converse_shoes.jpg",
          author: "Lydia  Patton",
          license: "CC BY 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        },
        why: {
          zh: "一抹红，好心情。",
          en: "A splash of red, a good mood.",
        },
      },
    ],
  },
  {
    brand: "CASABLANCA",
    designer: { zh: "Charaf Tajer", en: "Charaf Tajer" },
    intensity: 0.7,
    palette: ["#f2e6c8", "#2a7a5a", "#e8a84a"],
    story: {
      zh: "Charaf Tajer 2018 年在巴黎创立 Casablanca，灵感来自网球俱乐部、度假和北非的阳光，印花丝绸衬衫最有代表性。",
      en: "Charaf Tajer founded Casablanca in Paris in 2018, inspired by tennis clubs, holidays, and North African sun; its printed silk shirts are its signature.",
    },
    moodLink: {
      zh: "像一场度假，明亮又轻松。",
      en: "Like a holiday: bright and easy.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "网球俱乐部夹克", en: "Tennis-club jacket" },
        colors: ["#2a7a5a", "#f2e6c8"],
        why: {
          zh: "复古又阳光。",
          en: "Retro and sunny.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "印花丝绸衬衫", en: "Printed silk shirt" },
        colors: ["#e8a84a", "#2a7a5a"],
        why: {
          zh: "品牌最有名的单品。",
          en: "The brand's signature piece.",
        },
      },
      {
        category: "bottom",
        shape: "shorts",
        name: { zh: "丝绸短裤", en: "Silk shorts" },
        colors: ["#f2e6c8", "#e8a84a"],
        why: {
          zh: "度假模式。",
          en: "Holiday mode.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "网球鞋", en: "Tennis sneakers" },
        colors: ["#f5f0e4", "#2a7a5a"],
        why: {
          zh: "白色网球鞋，干净明亮。",
          en: "Clean, bright tennis whites.",
        },
      },
      {
        category: "accessory",
        shape: "cap",
        name: { zh: "网球帽", en: "Tennis cap" },
        colors: ["#f2e6c8", "#2a7a5a"],
        why: {
          zh: "晒太阳去。",
          en: "Go get some sun.",
        },
      },
    ],
  },
];
