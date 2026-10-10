// Fashion "flat sketches": clean technical drawings of garments, the kind
// brands use in line sheets. Each shape is drawn in a 120 x 120 box, filled
// with the item's main color (lighter at the top, darker at the bottom for
// a sense of form), with seams in a thin dark line and trims in the accent
// color. These are original drawings, so every item can have a picture.

let flatCount = 0;

// Mixes a hex color toward white (amount > 0) or black (amount < 0).
function shadeColor(hex, amount) {
  const value = parseInt(hex.slice(1), 16);
  const target = amount > 0 ? 255 : 0;
  const mix = (channel) => Math.round(channel + (target - channel) * Math.abs(amount));
  const r = mix((value >> 16) & 255);
  const g = mix((value >> 8) & 255);
  const b = mix(value & 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Each shape returns SVG markup. "F" is the body fill, "A" the accent color.
const FLAT_SHAPES = {
  // ---- tops and outerwear ----
  tee: (F, A) => `
    <path class="body" fill="${F}" d="M40,24 L52,19 Q60,26 68,19 L80,24 L100,40 L91,52 L81,45 L81,98 L39,98 L39,45 L29,52 L20,40 Z"/>
    <path class="seam" d="M52,19 Q60,30 68,19"/>
    <path class="trim" stroke="${A}" d="M40,92 L80,92"/>`,
  shirt: (F, A) => `
    <path class="body" fill="${F}" d="M38,22 L52,17 L60,25 L68,17 L82,22 L96,40 L101,100 L91,100 L84,52 L84,100 L36,100 L36,52 L29,100 L19,100 L24,40 Z"/>
    <path class="body" fill="${A}" d="M52,17 L60,25 L54,32 L47,21 Z M68,17 L60,25 L66,32 L73,21 Z"/>
    <path class="seam" d="M60,25 L60,100 M36,52 L84,52"/>
    <g fill="${A}"><circle cx="63" cy="38" r="1.3"/><circle cx="63" cy="54" r="1.3"/><circle cx="63" cy="70" r="1.3"/><circle cx="63" cy="86" r="1.3"/></g>`,
  hoodie: (F, A) => `
    <path class="body" fill="${F}" d="M44,26 Q60,2 76,26 Z"/>
    <path class="body" fill="${F}" d="M36,24 L50,20 Q60,30 70,20 L84,24 L99,44 L103,100 L91,100 L85,54 L85,100 L35,100 L35,54 L29,100 L17,100 L21,44 Z"/>
    <path class="seam" d="M50,20 Q60,32 70,20 M56,30 L55,48 M64,30 L65,48"/>
    <path class="seam" d="M44,72 L76,72 L80,90 L40,90 Z"/>
    <path class="body" fill="${A}" d="M35,94 L85,94 L85,100 L35,100 Z M17,94 L29,94 L29,100 L17,100 Z M91,94 L103,94 L103,100 L91,100 Z"/>`,
  knit: (F, A) => `
    <path class="body" fill="${F}" d="M38,22 L50,18 Q60,26 70,18 L82,22 L98,42 L102,100 L90,100 L84,54 L84,100 L36,100 L36,54 L30,100 L18,100 L22,42 Z"/>
    <path class="body" fill="${A}" d="M50,18 Q60,28 70,18 L72,21 Q60,33 48,21 Z M36,92 L84,92 L84,100 L36,100 Z M18,93 L30,93 L30,100 L18,100 Z M90,93 L102,93 L102,100 L90,100 Z"/>
    <path class="seam" d="M46,40 L46,88 M54,40 L54,88 M62,40 L62,88 M70,40 L70,88"/>`,
  cardigan: (F, A) => `
    <path class="body" fill="${F}" d="M38,22 L50,18 L60,46 L70,18 L82,22 L98,42 L102,100 L90,100 L84,54 L84,100 L36,100 L36,54 L30,100 L18,100 L22,42 Z"/>
    <path class="trim" stroke="${A}" stroke-width="3" d="M50,18 L60,46 L70,18 M60,46 L60,100"/>
    <g fill="${A}"><circle cx="64" cy="56" r="1.6"/><circle cx="64" cy="70" r="1.6"/><circle cx="64" cy="84" r="1.6"/></g>
    <path class="body" fill="${A}" d="M36,94 L84,94 L84,100 L36,100 Z"/>`,
  vest: (F, A) => `
    <path class="body" fill="${F}" d="M42,20 L50,18 L60,46 L70,18 L78,20 L80,38 Q88,44 86,54 L86,98 L34,98 L34,54 Q32,44 40,38 Z"/>
    <path class="trim" stroke="${A}" stroke-width="3" d="M50,18 L60,46 L70,18 M40,38 Q32,44 34,54 M80,38 Q88,44 86,54"/>
    <path class="body" fill="${A}" d="M34,92 L86,92 L86,98 L34,98 Z"/>
    <path class="seam" d="M46,60 L74,60 M46,72 L74,72 M46,84 L74,84"/>`,
  jacket: (F, A) => `
    <path class="body" fill="${F}" d="M38,22 L52,16 L60,30 L68,16 L82,22 L98,42 L102,94 L90,94 L84,52 L84,90 L36,90 L36,52 L30,94 L18,94 L22,42 Z"/>
    <path class="body" fill="${A}" d="M52,16 L60,30 L50,36 L44,20 Z M68,16 L60,30 L70,36 L76,20 Z"/>
    <path class="seam" d="M60,30 L60,90 M42,62 L54,62 M66,62 L78,62"/>
    <path class="body" fill="${A}" d="M36,84 L84,84 L84,90 L36,90 Z"/>`,
  biker: (F, A) => `
    <path class="body" fill="${F}" d="M38,22 L52,16 L60,26 L68,16 L82,22 L98,42 L102,92 L90,92 L84,52 L84,88 L36,88 L36,52 L30,92 L18,92 L22,42 Z"/>
    <path class="body" fill="#000000" fill-opacity="0.18" d="M52,16 L44,34 L56,44 L60,26 Z M68,16 L74,30 L66,38 Z"/>
    <path class="trim" stroke="${A}" stroke-width="1.6" d="M66,26 L50,88 M40,58 L52,56 M70,60 L80,58"/>
    <path class="body" fill="${A}" d="M36,82 L84,82 L84,88 L36,88 Z"/>
    <rect class="body" fill="${F}" x="40" y="81" width="8" height="8"/>`,
  coat: (F, A) => `
    <path class="body" fill="${F}" d="M40,14 L52,10 L60,26 L68,10 L80,14 L96,34 L100,98 L90,98 L84,48 L88,114 L32,114 L36,48 L30,98 L20,98 L24,34 Z"/>
    <path class="body" fill="#000000" fill-opacity="0.16" d="M52,10 L60,26 L48,40 L44,16 Z M68,10 L60,26 L72,40 L76,16 Z"/>
    <path class="seam" d="M60,26 L60,114 M40,74 L52,74 M68,74 L80,74"/>
    <g fill="${A}"><circle cx="56" cy="50" r="1.8"/><circle cx="56" cy="64" r="1.8"/><circle cx="56" cy="78" r="1.8"/></g>`,
  puffer: (F, A) => `
    <path class="body" fill="${F}" d="M36,22 Q48,12 60,20 Q72,12 84,22 L100,44 L104,96 L90,98 L86,56 L88,96 Q60,104 32,96 L34,56 L30,98 L16,96 L20,44 Z"/>
    <path class="seam" d="M34,40 Q60,46 86,40 M33,56 Q60,62 87,56 M33,72 Q60,78 87,72 M33,86 Q60,92 87,86 M60,20 L60,100"/>
    <path class="body" fill="${A}" d="M48,15 Q60,24 72,15 L72,21 Q60,30 48,21 Z"/>`,
  // ---- bottoms ----
  trousers: (F, A) => `
    <path class="body" fill="${F}" d="M40,16 L80,16 L84,112 L64,112 L60,44 L56,112 L36,112 Z"/>
    <path class="body" fill="${A}" d="M40,16 L80,16 L80,22 L40,22 Z"/>
    <path class="seam" d="M60,22 L60,44 M48,24 L46,110 M72,24 L74,110"/>`,
  wide: (F, A) => `
    <path class="body" fill="${F}" d="M38,16 L82,16 L96,112 L63,112 L60,46 L57,112 L24,112 Z"/>
    <path class="body" fill="${A}" d="M38,16 L82,16 L82,22 L38,22 Z"/>
    <path class="seam" d="M60,22 L60,46 M46,24 L40,110 M74,24 L80,110"/>`,
  cargo: (F, A) => `
    <path class="body" fill="${F}" d="M38,16 L82,16 L88,112 L64,112 L60,44 L56,112 L32,112 Z"/>
    <path class="body" fill="${A}" d="M38,16 L82,16 L82,22 L38,22 Z"/>
    <path class="seam" d="M60,22 L60,44"/>
    <path class="body" fill="${F}" d="M30,56 L46,56 L46,76 L31,76 Z M74,56 L90,56 L89,76 L74,76 Z"/>
    <path class="seam" d="M30,61 L46,61 M74,61 L90,61"/>`,
  jeans: (F, A) => `
    <path class="body" fill="${F}" d="M40,16 L80,16 L84,112 L64,112 L60,44 L56,112 L36,112 Z"/>
    <path class="trim" stroke="${A}" stroke-width="1.2" stroke-dasharray="2 2" d="M40,22 L80,22 M44,24 Q48,36 58,34 M76,24 Q72,36 62,34 M60,22 L60,44 M38,104 L56,104 M64,104 L82,104"/>
    <circle fill="${A}" cx="60" cy="19" r="1.6"/>`,
  shorts: (F, A) => `
    <path class="body" fill="${F}" d="M36,28 L84,28 L90,82 L63,82 L60,54 L57,82 L30,82 Z"/>
    <path class="body" fill="${A}" d="M36,28 L84,28 L84,34 L36,34 Z"/>
    <path class="seam" d="M60,34 L60,54 M44,36 L40,80 M76,36 L80,80"/>`,
  skirt: (F, A) => `
    <path class="body" fill="${F}" d="M42,24 L78,24 L96,92 Q60,104 24,86 Z"/>
    <path class="body" fill="${A}" d="M42,24 L78,24 L78,30 L42,30 Z"/>
    <path class="seam" d="M52,30 L42,96 M60,30 L60,98 M68,30 L78,96"/>`,
  // ---- shoes (side view, toe to the left) ----
  sneakers: (F, A) => `
    <path class="body" fill="${F}" d="M14,82 Q14,64 32,62 L56,58 Q66,46 82,44 L100,46 Q106,60 106,82 Z"/>
    <path class="body" fill="${A}" d="M12,82 L108,82 L108,90 Q108,94 104,94 L16,94 Q12,94 12,90 Z"/>
    <path class="seam" d="M52,60 L60,72 M58,56 L66,68 M64,52 L72,64 M82,44 L84,82 M24,74 L60,76"/>
    <path class="trim" stroke="${A}" stroke-width="3" d="M40,78 Q66,60 92,62"/>`,
  hightop: (F, A) => `
    <path class="body" fill="${F}" d="M14,84 Q14,66 32,64 L54,60 L62,22 L98,20 Q104,50 106,84 Z"/>
    <path class="body" fill="${A}" d="M12,84 L108,84 L108,92 Q108,96 104,96 L16,96 Q12,96 12,92 Z"/>
    <path class="seam" d="M58,40 L68,40 M57,50 L68,50 M55,60 L68,60 M62,22 L68,84"/>
    <circle class="body" fill="${A}" cx="84" cy="60" r="6"/>`,
  runner: (F, A) => `
    <path class="body" fill="${F}" d="M14,78 Q16,60 34,58 L56,52 Q68,40 84,40 L102,44 Q108,58 106,78 Z"/>
    <path class="body" fill="${A}" d="M10,78 Q30,74 50,78 Q70,82 108,76 L108,90 Q100,98 80,96 L22,96 Q10,96 10,88 Z"/>
    <path class="seam" d="M14,88 Q60,84 108,86 M54,56 L62,66 M60,50 L68,62 M30,66 Q60,70 90,56"/>`,
  boots: (F, A) => `
    <path class="body" fill="${F}" d="M60,8 L94,8 L96,82 L106,84 L106,94 L14,94 L14,86 Q16,72 34,70 L60,64 Z"/>
    <path class="body" fill="${A}" d="M12,94 L108,94 L108,100 L12,100 Z M88,84 L100,84 L100,94 L88,94 Z"/>
    <path class="seam" d="M60,64 L64,10 M66,14 L66,62 M62,20 L70,20 M62,30 L70,30 M62,40 L70,40 M62,50 L70,50"/>`,
  combat: (F, A) => `
    <path class="body" fill="${F}" d="M56,32 L94,30 L98,80 L106,82 L106,92 L14,92 L14,84 Q16,70 34,68 L56,62 Z"/>
    <path class="body" fill="#000000" fill-opacity="0.85" d="M12,92 L108,92 L108,100 L12,100 Z"/>
    <path class="trim" stroke="${A}" stroke-width="1.4" d="M14,90 L106,90"/>
    <path class="seam" d="M58,38 L66,40 M58,46 L66,48 M58,54 L66,56 M56,62 L66,64 M66,34 L68,84"/>`,
  loafers: (F, A) => `
    <path class="body" fill="${F}" d="M14,84 Q14,70 34,66 L74,62 Q96,60 104,70 L106,84 Z"/>
    <path class="body" fill="#000000" fill-opacity="0.75" d="M12,84 L108,84 L108,90 L12,90 Z"/>
    <path class="trim" stroke="${A}" stroke-width="3" d="M40,68 Q56,62 72,66"/>
    <path class="seam" d="M30,70 Q42,60 58,60"/>`,
  sandals: (F, A) => `
    <path class="body" fill="${A}" d="M10,86 Q10,78 22,78 L100,76 Q110,78 110,86 Q110,92 100,92 L20,92 Q10,92 10,86 Z"/>
    <path class="body" fill="${F}" d="M26,78 Q34,56 50,58 L52,78 Z M62,78 Q70,54 88,56 L88,77 Z"/>
    <g fill="#ffffff" fill-opacity="0.85"><rect x="44" y="64" width="5" height="5"/><rect x="82" y="62" width="5" height="5"/></g>`,
  tabi: (F, A) => `
    <path class="body" fill="${F}" d="M58,20 L94,18 L96,80 L106,82 L106,92 L28,92 L26,80 L22,92 L14,92 L14,82 Q16,70 34,68 L58,62 Z"/>
    <path class="body" fill="${A}" d="M12,92 L108,92 L108,98 L12,98 Z"/>
    <path class="body" fill="${A}" d="M86,82 L98,82 L98,92 L86,92 Z"/>
    <path class="seam" d="M26,80 L30,70 M60,22 L62,62"/>`,
  // ---- accessories ----
  tote: (F, A) => `
    <path class="trim" stroke="${A}" stroke-width="3.5" d="M44,40 Q44,14 60,14 Q76,14 76,40"/>
    <path class="body" fill="${F}" d="M26,40 L94,40 L100,106 L20,106 Z"/>
    <path class="seam" d="M26,48 L94,48"/>`,
  minibag: (F, A) => `
    <path class="trim" stroke="${A}" stroke-width="3" d="M46,52 Q46,30 60,30 Q74,30 74,52"/>
    <rect class="body" fill="${F}" x="34" y="52" width="52" height="40" rx="8"/>
    <path class="body" fill="#000000" fill-opacity="0.12" d="M34,60 L86,60 L86,70 Q60,78 34,70 Z"/>
    <rect class="body" fill="${A}" x="55" y="66" width="10" height="6" rx="1.5"/>`,
  ring: (F, A) => `
    <ellipse class="body" fill="none" stroke="${F}" stroke-width="9" cx="60" cy="72" rx="28" ry="24"/>
    <ellipse class="seam" cx="60" cy="72" rx="32.5" ry="28.5"/>
    <path class="body" fill="${F}" d="M50,30 L70,30 L70,52 L50,52 Z"/>
    <path class="trim" stroke="${A}" stroke-width="3" d="M60,33 L60,49 M53,39 L67,39"/>`,
  necklace: (F, A) => `
    <path class="trim" stroke="${F}" stroke-width="2.5" stroke-dasharray="3 2" d="M24,14 Q30,70 60,74 Q90,70 96,14"/>
    <path class="body" fill="${A}" d="M56,74 L64,74 L64,84 L72,84 L72,92 L64,92 L64,110 L56,110 L56,92 L48,92 L48,84 L56,84 Z"/>`,
  cap: (F, A) => `
    <path class="body" fill="${F}" d="M24,76 Q24,34 62,32 Q96,34 98,76 Z"/>
    <path class="body" fill="${A}" d="M18,76 L98,76 Q108,80 104,86 L30,86 Q14,84 18,76 Z"/>
    <path class="seam" d="M62,32 L62,76 M44,38 Q38,56 40,76 M80,38 Q86,56 84,76"/>
    <circle fill="${A}" cx="62" cy="33" r="3"/>`,
  beanie: (F, A) => `
    <path class="body" fill="${F}" d="M28,78 Q26,26 60,24 Q94,26 92,78 Z"/>
    <path class="body" fill="${A}" d="M24,74 L96,74 L96,96 L24,96 Z"/>
    <path class="seam" d="M34,78 L34,94 M44,78 L44,94 M54,78 L54,94 M64,78 L64,94 M74,78 L74,94 M84,78 L84,94"/>`,
  scarf: (F, A) => `
    <path class="body" fill="${F}" d="M30,14 L54,14 L58,96 L36,96 Z M62,24 Q80,20 90,34 L78,104 L58,104 Z"/>
    <path class="trim" stroke="${A}" stroke-width="2" d="M38,98 L38,108 M43,98 L43,108 M48,98 L48,108 M53,98 L53,108 M62,106 L62,114 M68,106 L68,114 M74,106 L74,114"/>
    <path class="trim" stroke="${A}" stroke-width="3" d="M32,30 L54,30 M66,40 L86,44"/>`,
  belt: (F, A) => `
    <path class="body" fill="${F}" d="M10,52 L94,52 L94,68 L10,68 Z"/>
    <rect class="body" fill="none" stroke="${A}" stroke-width="5" x="92" y="46" width="18" height="28" rx="2"/>
    <g fill="${A}"><circle cx="30" cy="60" r="2"/><circle cx="44" cy="60" r="2"/><circle cx="58" cy="60" r="2"/></g>`,
  sunglasses: (F, A) => `
    <path class="body" fill="${F}" d="M14,48 L54,48 Q56,76 36,78 Q14,78 14,48 Z M66,48 L106,48 Q106,78 84,78 Q64,76 66,48 Z"/>
    <path class="trim" stroke="${A}" stroke-width="3" d="M54,52 Q60,46 66,52 M14,48 L6,44 M106,48 L114,44"/>
    <path class="body" fill="#ffffff" fill-opacity="0.25" d="M20,54 L32,54 L24,66 Z M72,54 L84,54 L76,66 Z"/>`,
};

// Returns an SVG flat sketch for an item, or null for an unknown shape.
function drawFlat(shape, colors) {
  const draw = FLAT_SHAPES[shape];
  if (!draw) {
    return null;
  }
  flatCount += 1;
  const id = `flat-${flatCount}`;
  const main = colors[0];
  const accent = colors[1] || colors[0];
  return `<svg class="flat" viewBox="0 0 120 120" role="img" aria-hidden="true">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="0.35" y2="1">
        <stop offset="0" stop-color="${shadeColor(main, 0.22)}"/>
        <stop offset="1" stop-color="${shadeColor(main, -0.18)}"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="114" rx="40" ry="4" fill="rgba(0, 0, 0, 0.12)"/>
    ${draw(`url(#${id})`, accent)}
  </svg>`;
}
