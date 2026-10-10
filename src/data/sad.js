// Brands for the 低落 · Low mood. Each brand has an intensity from 0 to 1:
// low values suit the lower end of this mood's meter range, high values the
// upper end. Items are grouped by category for building a daily outfit.

MOOD_BRANDS.sad = [
  {
    brand: "Rick Owens DRKSHDW",
    designer: { zh: "Rick Owens", en: "Rick Owens" },
    intensity: 0.5,
    palette: ["#151515", "#3a3835", "#b3a99a"],
    photo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/68/2015_Rick_Owens_man%27s_jumpsuit%2C_Sphinx_collection%2C_cashmere_knit_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
      page: "https://commons.wikimedia.org/wiki/File:2015_Rick_Owens_man%27s_jumpsuit,_Sphinx_collection,_cashmere_knit_01.jpg",
      kind: "museum",
      caption: {
        zh: "Rick Owens 2015 年“Sphinx”系列羊绒针织连体衣，罗德岛设计学院博物馆藏",
        en: "Rick Owens cashmere knit jumpsuit, “Sphinx” collection, 2015 · RISD Museum",
      },
      author: "Staff photographer for Rhode Island School of Design Museum of Art",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    story: {
      zh: "Rick Owens 从洛杉矶起步，后来在巴黎做出一种被称作 “glunge”（glamour + grunge）的风格：大面积的黑色和灰尘色，垂坠、被拉长的廓形。DRKSHDW 是他更日常的副线。",
      en: "Rick Owens started out in Los Angeles and later, in Paris, shaped a style often called “glunge” (glamour + grunge): wide fields of black and dust tones, draped and elongated silhouettes. DRKSHDW is his more everyday line.",
    },
    moodLink: {
      zh: "他的衣服从不急着讨好谁。沉、安静，却始终带着一种体面。低落的时候，你也不需要假装明亮。",
      en: "His clothes never rush to please anyone. Heavy and quiet, yet always dignified. When you feel low, you don't have to pretend to be bright.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "垂坠长款风衣", en: "Draped long coat" },
        colors: ["#1a1a1a", "#3a3835"],
        why: {
          zh: "长到小腿的垂坠线条，把人安静地包起来。",
          en: "A drape down to the calf that quietly wraps you up.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "长款连帽卫衣", en: "Long hooded sweatshirt" },
        colors: ["#151515", "#b3a99a"],
        why: {
          zh: "又长又宽，黑色让你今天什么都不用解释。",
          en: "Long and loose; black means no explanations today.",
        },
      },
      {
        category: "bottom",
        shape: "cargo",
        name: { zh: "低裆工装裤", en: "Drop-crotch cargo pants" },
        colors: ["#2a2826", "#5a5650"],
        why: {
          zh: "低裆宽松，走路都带着一种慢下来的重量。",
          en: "A low, loose crotch that gives every step a slower weight.",
        },
      },
      {
        category: "shoes",
        shape: "hightop",
        name: { zh: "Ramones 高帮帆布鞋", en: "Ramones high-top sneakers" },
        colors: ["#121212", "#e9e4da"],
        why: {
          zh: "DRKSHDW 最经典的鞋，夸张的鞋舌和厚底。",
          en: "DRKSHDW's classic: an oversized tongue on a thick sole.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "黑色大托特包", en: "Oversized black tote" },
        colors: ["#141414", "#3a3835"],
        why: {
          zh: "能装下所有东西，也包括今天的心事。",
          en: "Big enough for everything, today's worries included.",
        },
      },
    ],
  },
  {
    brand: "Enfants Riches Déprimés",
    designer: { zh: "Henri Alexander Levy", en: "Henri Alexander Levy" },
    intensity: 0.8,
    palette: ["#1e1e1e", "#e8e2d6", "#7a1c1c"],
    story: {
      zh: "品牌名的意思是“抑郁的富家子弟”。Henri Alexander Levy 在 2012 年创立它，带着朋克和虚无主义的气质，常见手工做旧、磨损的痕迹和带挑衅意味的文字。",
      en: "The name means “depressed rich kids.” Henri Alexander Levy founded it in 2012 with a punk, nihilist spirit: hand distressing, worn edges, and provocative text.",
    },
    moodLink: {
      zh: "它不掩饰颓丧，而是把颓丧当成一种态度穿出来。",
      en: "It doesn't hide the gloom; it wears the gloom as an attitude.",
    },
    items: [
      {
        category: "outerwear",
        shape: "biker",
        name: { zh: "做旧皮夹克", en: "Distressed leather jacket" },
        colors: ["#1c1c1c", "#7a1c1c"],
        why: {
          zh: "磨损的皮革，像一张写满故事的旧唱片。",
          en: "Worn leather like an old record full of stories.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "做旧印字 T 恤", en: "Distressed slogan T-shirt" },
        colors: ["#1e1e1e", "#e8e2d6"],
        why: {
          zh: "把颓丧直接印在身上，不用假装振作。",
          en: "Wear the gloom in print; no need to cheer up.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "破洞直筒牛仔裤", en: "Ripped straight jeans" },
        colors: ["#2b2f38", "#8a8f99"],
        why: {
          zh: "手工磨破的痕迹，像故意留下的伤口。",
          en: "Hand-worn rips, like scars left on purpose.",
        },
      },
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "做旧灰色厚底德比鞋", en: "Worn gray platform derby shoes" },
        colors: ["#8f8a84", "#2a2826"],
        why: {
          zh: "灰扑扑的做旧皮面，像下过雨的阴天。",
          en: "Worn gray leather, like an overcast day after rain.",
        },
      },
      {
        category: "accessory",
        shape: "beanie",
        name: { zh: "黑色毛线帽", en: "Black knit beanie" },
        colors: ["#151515", "#3a3a3a"],
        why: {
          zh: "压低帽檐，给自己一点躲藏的空间。",
          en: "Pull it low and give yourself somewhere to hide.",
        },
      },
    ],
  },
  {
    brand: "Ann Demeulemeester",
    designer: { zh: "Ann Demeulemeester", en: "Ann Demeulemeester" },
    intensity: 0.2,
    palette: ["#0e0e0e", "#f1ede6", "#4a4a4a"],
    story: {
      zh: "比利时设计师 Ann Demeulemeester 是“安特卫普六君子”之一，作品以黑白、诗意和浪漫的忧郁著称，常被形容带着摇滚诗人的气质。",
      en: "Belgian designer Ann Demeulemeester is one of the “Antwerp Six.” Her work is known for black and white, poetry, and a romantic melancholy, often described as having a rock-poet spirit.",
    },
    moodLink: {
      zh: "她的忧郁是温柔的，像一首慢歌，不是要把你拉出低谷，而是陪你待一会儿。",
      en: "Her melancholy is gentle, like a slow song. It doesn't pull you out of the low; it stays with you for a while.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "黑色修身长大衣", en: "Slim black long coat" },
        colors: ["#0e0e0e", "#4a4a4a"],
        why: {
          zh: "像一首慢歌的前奏，安静又有力量。",
          en: "Like the intro to a slow song: quiet but strong.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "白色系带衬衫", en: "White tie-neck shirt" },
        colors: ["#f1ede6", "#c9c3b8"],
        why: {
          zh: "黑白之间的诗意，最适合低落的心情。",
          en: "Poetry between black and white, made for a low mood.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "黑色窄脚长裤", en: "Black narrow trousers" },
        colors: ["#141414", "#3c3c3c"],
        why: {
          zh: "线条干净，把情绪收得很好。",
          en: "Clean lines that hold the feeling in.",
        },
      },
      {
        category: "shoes",
        shape: "boots",
        name: { zh: "黑色多搭扣长靴", en: "Black multi-buckle tall boots" },
        colors: ["#0e0e0e", "#b8b8b8"],
        why: {
          zh: "一排银扣从脚踝扣到膝下，像一首慢歌里的重音。",
          en: "A row of silver buckles from ankle to knee, like the accents in a slow song.",
        },
      },
      {
        category: "accessory",
        shape: "necklace",
        name: { zh: "羽毛吊坠项链", en: "Feather pendant necklace" },
        colors: ["#cfcac0", "#2a2a2a"],
        why: {
          zh: "一点柔软的细节，陪你待一会儿。",
          en: "A soft little detail to keep you company.",
        },
      },
    ],
  },
  {
    brand: "Helmut Lang",
    designer: { zh: "Helmut Lang", en: "Helmut Lang" },
    intensity: 0.4,
    palette: ["#121212", "#5a5a5a", "#dcdcdc"],
    story: {
      zh: "奥地利设计师 Helmut Lang 是 90 年代极简主义的代表，用干净的线条、黑白灰和工业感面料改变了那个年代的时装。他在 2005 年离开品牌，后来转向艺术创作。",
      en: "Austrian designer Helmut Lang defined 1990s minimalism with clean lines, black, white and gray, and industrial fabrics. He left the label in 2005 and turned to making art.",
    },
    moodLink: {
      zh: "极简不是空，而是把多余的情绪都安静地收起来。",
      en: "Minimalism isn't emptiness; it is every extra feeling quietly put away.",
    },
    items: [
      {
        category: "outerwear",
        shape: "coat",
        name: { zh: "黑色极简长大衣", en: "Minimal black long coat" },
        colors: ["#121212", "#5a5a5a"],
        why: {
          zh: "干净的线条让你看起来依然清醒、体面。",
          en: "Clean lines keep you looking clear-headed.",
        },
      },
      {
        category: "top",
        shape: "tee",
        name: { zh: "灰色基础 T 恤", en: "Gray basic T-shirt" },
        colors: ["#8d8d8d", "#5a5a5a"],
        why: {
          zh: "什么都不多，正好。",
          en: "Nothing extra, and that's just right.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "原色直筒牛仔裤", en: "Raw straight jeans" },
        colors: ["#1f2a3a", "#3c4a5e"],
        why: {
          zh: "90 年代极简牛仔，安静的蓝。",
          en: "1990s minimal denim in a quiet blue.",
        },
      },
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "金属包头黑色德比鞋", en: "Metal-toe black derby shoes" },
        colors: ["#141414", "#c9c9c9"],
        why: {
          zh: "鞋头一点冷冷的金属，极简里带着锋利。",
          en: "A cold metal toe cap: minimal, with an edge.",
        },
      },
      {
        category: "accessory",
        shape: "belt",
        name: { zh: "金属扣皮带", en: "Metal-buckle leather belt" },
        colors: ["#1a1a1a", "#b8b8b8"],
        why: {
          zh: "一点工业感，把散掉的情绪系紧。",
          en: "A little industrial edge to pull things together.",
        },
      },
    ],
  },
  {
    brand: "Number (N)ine",
    designer: { zh: "宫下贵裕 Takahiro Miyashita", en: "Takahiro Miyashita" },
    intensity: 0.7,
    palette: ["#3b2a2a", "#7d3b34", "#c9b79c"],
    story: {
      zh: "宫下贵裕 1996 年在东京创立 Number (N)ine，作品深受摇滚乐影响，尤其是 Kurt Cobain 和垃圾摇滚（grunge）的颓废气质。",
      en: "Takahiro Miyashita founded Number (N)ine in Tokyo in 1996. His work drew deeply on rock music, especially Kurt Cobain and the worn-out mood of grunge.",
    },
    moodLink: {
      zh: "它像一首失真吉他弹出来的慢歌，把失落唱得很真实。",
      en: "It is like a slow song through a distorted guitar, singing the low feeling honestly.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "做旧牛仔外套", en: "Washed denim jacket" },
        colors: ["#4a5a72", "#2c3646"],
        why: {
          zh: "像一张褪色的摇滚唱片封面。",
          en: "Like a faded rock album cover.",
        },
      },
      {
        category: "top",
        shape: "shirt",
        name: { zh: "做旧格纹法兰绒衬衫", en: "Worn plaid flannel shirt" },
        colors: ["#7d3b34", "#3b2a2a"],
        why: {
          zh: "陪你度过一个不想说话的下午。",
          en: "Company for an afternoon of not talking.",
        },
      },
      {
        category: "bottom",
        shape: "jeans",
        name: { zh: "破洞修身牛仔裤", en: "Ripped skinny jeans" },
        colors: ["#2f3540", "#6a7280"],
        why: {
          zh: "垃圾摇滚的颓废，刚刚好。",
          en: "Just the right amount of grunge.",
        },
      },
      {
        category: "shoes",
        shape: "hightop",
        name: { zh: "磨旧高帮帆布鞋", en: "Worn canvas high-tops" },
        colors: ["#2b2b2b", "#d8d2c4"],
        why: {
          zh: "旧鞋最懂你今天的步子。",
          en: "Old shoes know today's pace best.",
        },
      },
      {
        category: "accessory",
        shape: "scarf",
        name: { zh: "长款针织围巾", en: "Long knit scarf" },
        colors: ["#3b3b3b", "#7d3b34"],
        why: {
          zh: "绕两圈，把自己藏起来一点。",
          en: "Wrap it twice and hide a little.",
        },
      },
    ],
  },
  {
    brand: "Carol Christian Poell",
    designer: { zh: "Carol Christian Poell", en: "Carol Christian Poell" },
    intensity: 0.3,
    palette: ["#1a1816", "#4a433c", "#8a7f72"],
    story: {
      zh: "奥地利设计师 Carol Christian Poell 在米兰工作，几乎不接受采访，作品以实验性的皮革工艺、整件浸染和做旧处理著称，是暗黑前卫圈子里的传奇。",
      en: "Austrian designer Carol Christian Poell works in Milan and almost never gives interviews. His experimental leatherwork, whole-garment dyeing, and aging treatments make him a legend of dark avant-garde fashion.",
    },
    moodLink: {
      zh: "他的衣服像被时间泡过，沉默、厚重，却很真实。",
      en: "His clothes feel steeped in time: silent, heavy, and honest.",
    },
    items: [
      {
        category: "outerwear",
        shape: "biker",
        name: { zh: "整件浸染皮夹克", en: "Object-dyed leather jacket" },
        colors: ["#2a2522", "#4a433c"],
        why: {
          zh: "每一件颜色都不一样，像情绪留下的痕迹。",
          en: "No two dye the same, like marks left by a feeling.",
        },
      },
      {
        category: "top",
        shape: "knit",
        name: { zh: "粗针做旧毛衣", en: "Worn chunky knit" },
        colors: ["#3a3530", "#8a7f72"],
        why: {
          zh: "厚重的针织，给你一点重量感。",
          en: "A heavy knit that grounds you.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "扭转剪裁长裤", en: "Twisted-seam trousers" },
        colors: ["#1a1816", "#4a433c"],
        why: {
          zh: "线条随身体扭转。",
          en: "Seams that twist with the body.",
        },
      },
      {
        category: "shoes",
        shape: "boots",
        name: { zh: "做旧银灰手工皮靴", en: "Aged silver-gray handmade boots" },
        colors: ["#a8a196", "#5a4f45"],
        why: {
          zh: "皱褶和磨损都是时间留下的，穿得越久越像你。",
          en: "Every crease and scuff is time's mark; the longer you wear them, the more they're yours.",
        },
      },
      {
        category: "accessory",
        shape: "ring",
        name: { zh: "做旧银戒", en: "Aged silver ring" },
        colors: ["#9a948a", "#3a3530"],
        why: {
          zh: "一点冷冷的光。",
          en: "A cold little gleam.",
        },
      },
    ],
  },
  {
    brand: "GUIDI",
    designer: { zh: "Guidi 家族皮革厂", en: "The Guidi tannery family" },
    intensity: 0.1,
    palette: ["#2a2420", "#6a5a4a", "#a8957e"],
    story: {
      zh: "Guidi 是意大利托斯卡纳一家始于 1896 年的皮革厂，用植物鞣制的马皮和小牛皮做鞋和皮具，后拉链皮靴是它最出名的款式。",
      en: "Guidi is a Tuscan tannery dating back to 1896. It makes shoes and leather goods from vegetable-tanned horse and calf leather; its back-zip boots are its best known.",
    },
    moodLink: {
      zh: "皮革会随着穿着慢慢塌陷、起皱，像心事一样慢慢成形。",
      en: "The leather slowly creases and settles as you wear it, the way a feeling takes shape.",
    },
    items: [
      {
        category: "shoes",
        shape: "boots",
        name: { zh: "黑色麂皮后拉链靴", en: "Black suede back-zip boots" },
        colors: ["#141414", "#3a3a3a"],
        why: {
          zh: "后拉链的经典款，麂皮会随着穿着慢慢塌出你的形状。",
          en: "The back-zip classic; the suede slowly settles into your shape.",
        },
      },
      {
        category: "shoes",
        shape: "combat",
        name: { zh: "马皮德比短靴", en: "Horse-leather derby boots" },
        colors: ["#3a2f27", "#6a5a4a"],
        why: {
          zh: "沉稳、安静。",
          en: "Steady and quiet.",
        },
      },
      {
        category: "accessory",
        shape: "tote",
        name: { zh: "植鞣皮托特包", en: "Vegetable-tanned leather tote" },
        colors: ["#6a5a4a", "#2a2420"],
        why: {
          zh: "会慢慢变色的皮。",
          en: "Leather that slowly changes color.",
        },
      },
    ],
  },
  {
    brand: "Boris Bidjan Saberi",
    designer: { zh: "Boris Bidjan Saberi", en: "Boris Bidjan Saberi" },
    intensity: 0.6,
    palette: ["#232120", "#5a5652", "#9a948c"],
    story: {
      zh: "这位在巴塞罗那工作的设计师以手工染色、厚重面料和功能性剪裁闻名，还和 Salomon 合作过越野跑鞋。",
      en: "This Barcelona-based designer is known for hand dyeing, heavy fabrics, and functional cuts, and has made trail shoes with Salomon.",
    },
    moodLink: {
      zh: "暗、沉，却有一种往前走的力量。",
      en: "Dark and heavy, yet with a pull to keep moving.",
    },
    items: [
      {
        category: "outerwear",
        shape: "jacket",
        name: { zh: "手工染色夹克", en: "Hand-dyed jacket" },
        colors: ["#3a3633", "#5a5652"],
        why: {
          zh: "颜色深浅不一，像阴天的云。",
          en: "Uneven color like an overcast sky.",
        },
      },
      {
        category: "top",
        shape: "hoodie",
        name: { zh: "立体剪裁连帽衫", en: "3D-cut hoodie" },
        colors: ["#232120", "#5a5652"],
        why: {
          zh: "把自己藏进帽子里。",
          en: "Hide inside the hood.",
        },
      },
      {
        category: "bottom",
        shape: "trousers",
        name: { zh: "立体剪裁长裤", en: "3D-cut trousers" },
        colors: ["#2b2927", "#5a5652"],
        why: {
          zh: "功能感的线条。",
          en: "Functional lines.",
        },
      },
      {
        category: "shoes",
        shape: "runner",
        name: { zh: "深紫色越野跑鞋", en: "Dark purple trail runners" },
        colors: ["#3a2a4a", "#c8b49a"],
        why: {
          zh: "低落也要继续走，深紫色陪你走慢一点。",
          en: "Keep walking even when low; dark purple keeps you company at a slower pace.",
        },
      },
      {
        category: "accessory",
        shape: "beanie",
        name: { zh: "做旧毛线帽", en: "Worn knit beanie" },
        colors: ["#3a3633", "#232120"],
        why: {
          zh: "压低一点。",
          en: "Pull it a little lower.",
        },
      },
    ],
  },
];
