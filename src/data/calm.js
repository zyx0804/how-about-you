// Brands for the 平静 · Calm mood. Each brand has an intensity from 0 to 1:
// low values suit the lower end of this mood's meter range, high values the
// upper end. Items are grouped by category for building a daily outfit.

MOOD_BRANDS.calm = [
  {
    brand: "Yohji Yamamoto",
    designer: { zh: "山本耀司 Yohji Yamamoto", en: "Yohji Yamamoto" },
    intensity: 0.2,
    palette: ["#111111", "#2f2f2f", "#e6e1d6"],
    logo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Yohji_Yamamoto_corporate_logos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
      page: "https://commons.wikimedia.org/wiki/File:Yohji_Yamamoto_corporate_logos.jpg",
      license: "Public domain",
    },
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Yohji_Yamamoto_wool_suit_c_1990.jpg/960px-Yohji_Yamamoto_wool_suit_c_1990.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Yohji_Yamamoto_wool_suit_c_1990.jpg",
      kind: "museum",
      caption: {
        zh: "Yohji Yamamoto 细条纹羊毛套装，约 1990 年，博物馆展出",
        en: "Yohji Yamamoto pinstripe wool suit, c. 1990 · museum display",
      },
      author: "ellenm1",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    story: {
      zh: "山本耀司 1981 年到巴黎发布作品，用大量黑色、不对称和宽松的剪裁，挑战了当时西方时装对“合身”和“装饰”的定义。",
      en: "Yohji Yamamoto first showed in Paris in 1981. His black, asymmetric, loose cuts challenged Western fashion's ideas of “fit” and “decoration” at the time.",
    },
    moodLink: {
      zh: "他的衣服有一种留白感，不靠装饰取胜，和你现在不紧不慢的节奏很像。",
      en: "His clothes leave space and win without decoration, much like your unhurried pace right now.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "黑色宽松长大衣", en: "Black oversized long coat" },
        colors: ["#111111", "#2f2f2f"],
        why: {
          zh: "不需要解释、穿上就自在。",
          en: "Needs no explanation; simply at ease.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "不对称白衬衫", en: "Asymmetric white shirt" },
        colors: ["#ecebe6", "#9a9890"],
        why: {
          zh: "留白的美感。",
          en: "The beauty of empty space.",
        },
      },
      {
        category: "bottom",
        shape: "wide",
        name: { zh: "黑色宽腿裤", en: "Black wide trousers" },
        colors: ["#141414", "#3a3a3a"],
        why: {
          zh: "宽松的剪裁，让身体自在。",
          en: "A loose cut that lets you breathe.",
        },
      },
      {
        category: "shoes",
        shape: "sneakers",
        name: { zh: "Y-3 黑色球鞋", en: "Black Y-3 sneakers" },
        colors: ["#151515", "#e9e6df"],
        why: {
          zh: "山本耀司与 adidas 合作的 Y-3 线。",
          en: "Y-3, Yohji Yamamoto's line with adidas.",
        },
      },
      {
        category: "accessory",
        shape: "scarf",
        name: { zh: "黑色长围巾", en: "Long black scarf" },
        colors: ["#161616", "#3a3a3a"],
        why: {
          zh: "随意一搭就很好看。",
          en: "Effortlessly good, however you wrap it.",
        },
      },
    ],
  },
  {
    brand: "LEMAIRE",
    designer: { zh: "Christophe Lemaire & Sarah-Linh Tran", en: "Christophe Lemaire & Sarah-Linh Tran" },
    intensity: 0.5,
    palette: ["#cdbf9f", "#7d7a62", "#f1ece2"],
    story: {
      zh: "这个巴黎品牌专注于日常衣物：克制的颜色、柔软的面料、看起来不费力的剪裁。",
      en: "This Paris label focuses on everyday clothing: restrained colors, soft fabrics, and cuts that look effortless.",
    },
    moodLink: {
      zh: "它关心的不是被注意，而是穿的人自己舒不舒服，就像此刻的你。",
      en: "It cares less about being noticed than about how the wearer feels, just like you right now.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "柔软风衣", en: "Soft trench coat" },
        colors: ["#b9a983", "#7d7a62"],
        why: {
          zh: "适合慢慢走、慢慢看的日子。",
          en: "For a day of slow walks.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "柔软廓形衬衫", en: "Soft relaxed shirt" },
        colors: ["#cdbf9f", "#7d7a62"],
        why: {
          zh: "不费力的剪裁。",
          en: "An effortless cut.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "高腰打褶长裤", en: "High-waist pleated trousers" },
        colors: ["#7d7a62", "#3d3b30"],
        why: {
          zh: "安静的颜色，舒服的版型。",
          en: "Quiet color, comfortable shape.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "柔软皮质乐福鞋", en: "Soft leather loafers" },
        colors: ["#4a3b2c", "#7d6a52"],
        why: {
          zh: "像穿着拖鞋出门。",
          en: "Like going out in slippers.",
        },
      },
      {
        category: "accessory",
        shape: "minibag",
        name: { zh: "Croissant 牛角包", en: "Croissant bag" },
        colors: ["#8a6a48", "#4a3b2c"],
        why: {
          zh: "LEMAIRE 标志性的牛角形斜挎包。",
          en: "LEMAIRE's signature croissant-shaped bag.",
        },
      },
    ],
  },
  {
    brand: "BODE",
    designer: { zh: "Emily Adams Bode Aujla", en: "Emily Adams Bode Aujla" },
    intensity: 0.8,
    palette: ["#e9dfc8", "#a3573f", "#5d6b8a"],
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Bode_outfit_at_In_America_an_Anthology_of_Fashion_at_the_MET.jpg/960px-Bode_outfit_at_In_America_an_Anthology_of_Fashion_at_the_MET.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Bode_outfit_at_In_America_an_Anthology_of_Fashion_at_the_MET.jpg",
      kind: "museum",
      caption: {
        zh: "BODE 拼布套装，大都会艺术博物馆“In America”展",
        en: "BODE patchwork outfit · “In America” exhibition, The Met",
      },
      author: "Computer-ergonomics",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    story: {
      zh: "Emily Bode 在纽约创立的品牌，常用古董和旧布料手工制作，每件衣服都带着一段旧时光，很多单品因为面料有限而几乎独一无二。",
      en: "Emily Bode's New York label is often handmade from antique and vintage textiles. Each piece carries a bit of the past, and many are nearly one of a kind because the fabric is limited.",
    },
    moodLink: {
      zh: "它慢、耐心、有手工的温度，和你此刻安稳的心情很合拍。",
      en: "It is slow, patient, and warm with handwork, in tune with your steady mood.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "古董被面拼布夹克", en: "Antique quilt jacket" },
        colors: ["#e9dfc8", "#a3573f"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Bode_outfit_at_In_America_an_Anthology_of_Fashion_at_the_MET.jpg/960px-Bode_outfit_at_In_America_an_Anthology_of_Fashion_at_the_MET.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:Bode_outfit_at_In_America_an_Anthology_of_Fashion_at_the_MET.jpg",
          author: "Computer-ergonomics",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        why: {
          zh: "每块布都带着一段旧时光。",
          en: "Every patch carries a bit of the past.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "古董面料拼布衬衫", en: "Antique-textile patchwork shirt" },
        colors: ["#e9dfc8", "#5d6b8a"],
        why: {
          zh: "一件可以慢慢看的衣服。",
          en: "A piece to take your time with.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "手工刺绣长裤", en: "Hand-embroidered trousers" },
        colors: ["#d9cbb0", "#a3573f"],
        why: {
          zh: "手工的温度。",
          en: "The warmth of handwork.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "复古皮鞋", en: "Vintage-style leather shoes" },
        colors: ["#5a3d2b", "#a3573f"],
        why: {
          zh: "旧旧的皮鞋，安稳的心情。",
          en: "Old-style leather for a steady mood.",
        },
      },
      {
        category: "accessory",
        shape: "necklace",
        name: { zh: "手工串珠项链", en: "Hand-beaded necklace" },
        colors: ["#e9dfc8", "#5d6b8a"],
        why: {
          zh: "一颗一颗串起来的耐心。",
          en: "Patience, one bead at a time.",
        },
      },
    ],
  },
  {
    brand: "JIL SANDER",
    designer: { zh: "Jil Sander（创始人）", en: "Jil Sander (founder)" },
    intensity: 0.4,
    palette: ["#e8e2d6", "#b7ab97", "#3a3833"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Jil_Sander_logo.svg/500px-Jil_Sander_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Jil_Sander_logo.svg",
      license: "Public domain",
    },
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Jil_Sander_Fall_2011.jpg/960px-Jil_Sander_Fall_2011.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:Jil_Sander_Fall_2011.jpg",
      kind: "runway",
      caption: {
        zh: "JIL SANDER 2011 秋冬秀场（当时由 Raf Simons 设计）",
        en: "JIL SANDER Fall 2011 runway (designed by Raf Simons)",
      },
      author: "Sara Cimino",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    story: {
      zh: "Jil Sander 1968 年在德国汉堡创立品牌，被称为“极简女王”，作品以纯净的剪裁、高级面料和克制的颜色著称。",
      en: "Jil Sander founded her label in Hamburg, Germany, in 1968. Called the “queen of less,” she is known for pure cuts, fine fabrics, and restrained color.",
    },
    moodLink: {
      zh: "少即是多。它的安静和你此刻的平稳是一样的。",
      en: "Less is more. Its quiet matches your steadiness right now.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "羊毛长大衣", en: "Long wool coat" },
        colors: ["#3a3833", "#b7ab97"],
        why: {
          zh: "极简的剪裁，从容的气质。",
          en: "Minimal tailoring, calm presence.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "羊绒圆领针织衫", en: "Cashmere crewneck sweater" },
        colors: ["#e8e2d6", "#b7ab97"],
        why: {
          zh: "平静日子里最舒服的底色。",
          en: "The softest base for a calm day.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "直筒西裤", en: "Straight tailored trousers" },
        colors: ["#3a3833", "#6b665c"],
        why: {
          zh: "干净利落。",
          en: "Clean and sharp.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "皮质乐福鞋", en: "Leather loafers" },
        colors: ["#1f1d1a", "#5a5650"],
        why: {
          zh: "安静的经典。",
          en: "A quiet classic.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "极简皮革包", en: "Minimal leather bag" },
        colors: ["#b7ab97", "#3a3833"],
        why: {
          zh: "少即是多。",
          en: "Less is more.",
        },
      },
    ],
  },
  {
    brand: "THE ROW",
    designer: { zh: "Mary-Kate & Ashley Olsen", en: "Mary-Kate & Ashley Olsen" },
    intensity: 0.3,
    palette: ["#2f2c28", "#8a8172", "#e6e0d4"],
    logo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/The_Row_logo.svg/500px-The_Row_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:The_Row_logo.svg",
      license: "Public domain",
    },
    photo: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/The_Row_sweater_and_scarf_at_the_Met_%2852716%29.jpg/960px-The_Row_sweater_and_scarf_at_the_Met_%2852716%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      page: "https://commons.wikimedia.org/wiki/File:The_Row_sweater_and_scarf_at_the_Met_(52716).jpg",
      kind: "museum",
      caption: {
        zh: "THE ROW 粗针毛衣与围巾，大都会艺术博物馆展出",
        en: "THE ROW chunky sweater and scarf · The Met",
      },
      author: "Rhododendrites",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    story: {
      zh: "Olsen 姐妹 2006 年创立 The Row，用极好的面料和精准的剪裁做安静、不张扬的衣服，常被视为“静奢”风格的代表。",
      en: "The Olsen twins founded The Row in 2006, making quiet, understated clothes with exceptional fabrics and precise tailoring. It is often seen as the face of “quiet luxury.”",
    },
    moodLink: {
      zh: "它从不大声说话，却让人一眼看出质感，像此刻从容的你。",
      en: "It never speaks loudly, yet its quality shows at a glance, like your composure right now.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "羊毛长大衣", en: "Long wool coat" },
        colors: ["#2f2c28", "#8a8172"],
        why: {
          zh: "经得起慢慢看。",
          en: "Rewards a long, slow look.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "粗针羊绒毛衣", en: "Chunky cashmere sweater" },
        colors: ["#e6e0d4", "#cfc6b4"],
        photo: {
          src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/The_Row_sweater_and_scarf_at_the_Met_%2852716%29.jpg/960px-The_Row_sweater_and_scarf_at_the_Met_%2852716%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          page: "https://commons.wikimedia.org/wiki/File:The_Row_sweater_and_scarf_at_the_Met_(52716).jpg",
          author: "Rhododendrites",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        },
        why: {
          zh: "柔软又从容。",
          en: "Soft and composed.",
        },
      },
      {
        category: "bottom",
        shape: "wide",
        name: { zh: "宽腿羊毛长裤", en: "Wide wool trousers" },
        colors: ["#8a8172", "#2f2c28"],
        why: {
          zh: "静奢的线条。",
          en: "Quiet-luxury lines.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "柔软乐福鞋", en: "Soft loafers" },
        colors: ["#2f2c28", "#5a5348"],
        why: {
          zh: "不张扬的舒适。",
          en: "Comfort without show.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "Margaux 手袋", en: "Margaux bag" },
        colors: ["#5a4634", "#2f2c28"],
        why: {
          zh: "THE ROW 最有名的手袋之一。",
          en: "One of THE ROW's best-known bags.",
        },
      },
    ],
  },
  {
    brand: "MARGARET HOWELL",
    designer: { zh: "Margaret Howell", en: "Margaret Howell" },
    intensity: 0.6,
    palette: ["#e8e2d4", "#6a7a8a", "#3a3a36"],
    story: {
      zh: "英国设计师 Margaret Howell 从 1970 年代做男士衬衫起步，作品朴素、耐穿，充满英式的日常质感。",
      en: "British designer Margaret Howell began with men's shirts in the 1970s. Her clothes are plain, durable, and full of everyday British texture.",
    },
    moodLink: {
      zh: "朴素得刚刚好，像一个平静的周末早晨。",
      en: "Just plain enough, like a calm weekend morning.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "棉质风衣", en: "Cotton trench coat" },
        colors: ["#c8b896", "#6a7a8a"],
        why: {
          zh: "英式的从容。",
          en: "British composure.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "白色棉衬衫", en: "White cotton shirt" },
        colors: ["#f2efe8", "#c8c2b4"],
        why: {
          zh: "她从衬衫起家。",
          en: "Where she began.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "羊毛直筒裤", en: "Wool straight trousers" },
        colors: ["#6a6a62", "#3a3a36"],
        why: {
          zh: "耐穿的经典。",
          en: "A durable classic.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "皮质德比鞋", en: "Leather derby shoes" },
        colors: ["#4a3a2a", "#8a7a62"],
        why: {
          zh: "安静地走。",
          en: "Walk quietly.",
        },
      },
      {
        category: "accessory",
        shape: "scarf",
        name: { zh: "细格纹围巾", en: "Fine-check scarf" },
        colors: ["#6a7a8a", "#e8e2d4"],
        why: {
          zh: "一点点英式格纹。",
          en: "A touch of British check.",
        },
      },
    ],
  },
  {
    brand: "STUDIO NICHOLSON",
    designer: { zh: "Nick Wakeman", en: "Nick Wakeman" },
    intensity: 0.7,
    palette: ["#d8d2c4", "#4a5a52", "#2a2a28"],
    story: {
      zh: "Nick Wakeman 2010 年在伦敦创立 Studio Nicholson，以宽腿裤和讲究的面料闻名，风格克制又有比例感。",
      en: "Nick Wakeman founded Studio Nicholson in London in 2010. It is known for wide trousers and careful fabrics, restrained with a strong sense of proportion.",
    },
    moodLink: {
      zh: "宽松而有分寸，和你此刻的平稳很像。",
      en: "Loose but measured, like your steadiness now.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "宽松短夹克", en: "Relaxed short jacket" },
        colors: ["#4a5a52", "#2a2a28"],
        why: {
          zh: "利落的比例。",
          en: "Crisp proportions.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "棉质针织衫", en: "Cotton knit" },
        colors: ["#d8d2c4", "#a8a294"],
        why: {
          zh: "柔软好穿。",
          en: "Soft and easy.",
        },
      },
      {
        category: "bottom",
        shape: "wide",
        name: { zh: "超宽腿长裤", en: "Extra-wide trousers" },
        colors: ["#2a2a28", "#4a5a52"],
        why: {
          zh: "品牌最有名的宽腿裤。",
          en: "The brand's famous wide trousers.",
        },
      },
      {
        category: "shoes",
        shape: "loafers",
        name: { zh: "简约皮鞋", en: "Simple leather shoes" },
        colors: ["#2a2a28", "#5a5a52"],
        why: {
          zh: "不抢戏。",
          en: "Doesn't steal the show.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "帆布托特包", en: "Canvas tote" },
        colors: ["#d8d2c4", "#4a5a52"],
        why: {
          zh: "安静好用。",
          en: "Quiet and useful.",
        },
      },
    ],
  },
  {
    brand: "HERMÈS",
    designer: { zh: "Hermès 家族", en: "The Hermès family" },
    intensity: 0.9,
    palette: ["#e8722a", "#4a3a2a", "#f2ead8"],
    story: {
      zh: "Hermès 1837 年在巴黎从马具工坊起家，丝巾、Kelly 包和 Oran 凉鞋都是它的经典，工艺细致、从不张扬。",
      en: "Hermès began as a Paris harness workshop in 1837. Its silk scarves, the Kelly bag, and the Oran sandal are classics: meticulous craft without show.",
    },
    moodLink: {
      zh: "真正的从容，是不用证明什么。",
      en: "True calm is having nothing to prove.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "双面羊绒大衣", en: "Double-face cashmere coat" },
        colors: ["#4a3a2a", "#c8a87a"],
        why: {
          zh: "看不见的细节。",
          en: "Details you can't see.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "羊绒针织衫", en: "Cashmere sweater" },
        colors: ["#f2ead8", "#c8a87a"],
        why: {
          zh: "柔软到心里。",
          en: "Soft all the way in.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "直筒长裤", en: "Straight trousers" },
        colors: ["#4a3a2a", "#8a7a62"],
        why: {
          zh: "安静的好。",
          en: "Quietly good.",
        },
      },
      {
        category: "shoes",
        shape: "sandals",
        name: { zh: "Oran 凉鞋", en: "Oran sandals" },
        colors: ["#e8722a", "#f2ead8"],
        why: {
          zh: "H 形鞋面，最经典的夏天。",
          en: "The H-shaped strap: a summer classic.",
        },
      },
      {
        category: "accessory",
        shape: "scarf",
        name: { zh: "丝巾", en: "Silk carré scarf" },
        colors: ["#e8722a", "#2a5a8a"],
        why: {
          zh: "Hermès 从 1937 年开始做丝巾。",
          en: "Hermès has made silk scarves since 1937.",
        },
      },
    ],
  },
];
