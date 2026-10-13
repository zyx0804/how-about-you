// Each brand's look: an open-licensed Google Font close in spirit to its
// logo lettering (never the brand's own typeface), and a background pattern
// built from motifs the brand is known for, drawn in its palette. Logos are
// not copied; the patterns are simple original drawings.

const BRAND_LOOKS = {
  "Rick Owens DRKSHDW": { font: "Cormorant SC", pattern: "drape" },
  "Enfants Riches Déprimés": {
    font: "Noto Serif Display",
    query: "Noto Serif Display:wdth,wght@62.5..100,700",
    weight: 700,
    stretch: "62.5%",
    pattern: "distressed",
  },
  "Ann Demeulemeester": { font: "Josefin Sans", pattern: "drape" },
  "Helmut Lang": { font: "Archivo", pattern: "grid" },
  "Number (N)ine": { font: "Special Elite", pattern: "tartan" },
  "Carol Christian Poell": { font: "Space Mono", pattern: "distressed" },
  GUIDI: { font: "Cormorant Garamond", pattern: "stitches" },
  "Boris Bidjan Saberi": { font: "Major Mono Display", pattern: "distressed" },
  UNDERCOVER: { font: "Archivo Black", pattern: "scribble" },
  VETEMENTS: { font: "Anton", pattern: "stripes" },
  "Vivienne Westwood": { font: "Playfair Display SC", pattern: "tartan" },
  "HYSTERIC GLAMOUR": { font: "Abril Fatface", pattern: "stars" },
  "Chrome Hearts": { font: "UnifrakturMaguntia", pattern: "crosses" },
  "Dr. Martens": { font: "Lobster Two", pattern: "stitches" },
  Supreme: { font: "Jost", query: "Jost:ital,wght@1,800", style: "italic", weight: 800, pattern: "stripes" },
  "Homme Plissé Issey Miyake": { font: "Montserrat", pattern: "pleats" },
  AURALEE: { font: "Lato", pattern: "grid" },
  "OUR LEGACY": { font: "IBM Plex Mono", pattern: "grid" },
  "Fear of God ESSENTIALS": { font: "Cinzel", pattern: "drape" },
  COMOLI: { font: "EB Garamond", pattern: "grid" },
  BIRKENSTOCK: { font: "Oswald", pattern: "cork" },
  "New Balance": {
    font: "Barlow Condensed",
    query: "Barlow Condensed:ital,wght@1,800",
    style: "italic",
    weight: 800,
    pattern: "stripes",
  },
  visvim: { font: "Quicksand", pattern: "patchwork" },
  "Yohji Yamamoto": { font: "Mrs Saint Delafield", pattern: "drape" },
  LEMAIRE: { font: "Libre Caslon Text", pattern: "waves" },
  BODE: { font: "Libre Baskerville", pattern: "patchwork" },
  "JIL SANDER": { font: "Questrial", pattern: "grid" },
  "THE ROW": { font: "Cormorant", pattern: "grid" },
  "MARGARET HOWELL": { font: "Lora", pattern: "grid" },
  "STUDIO NICHOLSON": { font: "Karla", pattern: "pleats" },
  HERMÈS: { font: "Zilla Slab", pattern: "lines" },
  "Raf Simons": { font: "Archivo Narrow", pattern: "scribble" },
  "Maison Margiela": { font: "Cutive Mono", pattern: "stitches" },
  "Martine Rose": { font: "Bebas Neue", pattern: "stripes" },
  "A BATHING APE": { font: "Graduate", pattern: "camo" },
  "Walter Van Beirendonck": { font: "Bungee", pattern: "dots" },
  Salomon: { font: "Exo 2", query: "Exo 2:ital,wght@1,700", style: "italic", weight: 700, pattern: "topo" },
  "Kiko Kostadinov": { font: "Space Grotesk", pattern: "topo" },
  PALACE: { font: "Teko", pattern: "triangles" },
  "Comme des Garçons PLAY": { font: "Courier Prime", pattern: "hearts" },
  KAPITAL: { font: "Rye", pattern: "smileys" },
  MARNI: { font: "Baloo 2", pattern: "dots" },
  "JW ANDERSON": { font: "DM Serif Display", pattern: "patchwork" },
  JACQUEMUS: { font: "Gilda Display", pattern: "waves" },
  Stüssy: { font: "Permanent Marker", pattern: "scribble" },
  Converse: { font: "Alfa Slab One", pattern: "stars" },
  CASABLANCA: { font: "Cinzel Decorative", pattern: "waves" },
};

const loadedBrandFonts = new Set();

// Adds the brand's Google Font to the page the first time it is needed.
function loadBrandFont(brandName) {
  const look = BRAND_LOOKS[brandName];
  if (!look || loadedBrandFonts.has(look.font)) {
    return;
  }
  loadedBrandFonts.add(look.font);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${(look.query || look.font).replace(/ /g, "+")}&display=swap`;
  document.head.append(link);
}

// Styles an element with the brand's font, falling back to the mood's.
function applyBrandFont(element, brandName) {
  const look = BRAND_LOOKS[brandName];
  if (!look) {
    return;
  }
  loadBrandFont(brandName);
  element.style.fontFamily = `"${look.font}", var(--font-brand)`;
  element.style.fontStyle = look.style || "";
  element.style.fontWeight = look.weight ? String(look.weight) : "";
  element.style.fontStretch = look.stretch || "";
}

// Each pattern is a small SVG tile, given the brand's colors a, b, c.
const PATTERN_TILES = {
  crosses: (a, b) => [60, `<path d="M26,10h8v12h12v8h-12v20h-8v-20h-12v-8h12z" fill="${b}"/><circle cx="30" cy="26" r="2" fill="${a}"/>`],
  camo: (a, b, c) => [120, `<path d="M0,20 Q30,0 50,25 T110,20 L120,45 Q80,60 50,45 T0,55Z" fill="${a}"/><path d="M10,80 Q40,60 70,85 T120,80 L120,110 Q70,125 40,105 T0,115Z" fill="${b}"/><path d="M60,50 Q80,40 95,55 Q85,75 65,70Z" fill="${c}"/>`],
  tartan: (a, b, c) => [80, `<rect width="80" height="80" fill="${a}" opacity="0.4"/><rect x="0" y="30" width="80" height="20" fill="${b}" opacity="0.6"/><rect x="30" y="0" width="20" height="80" fill="${b}" opacity="0.6"/><rect x="0" y="38" width="80" height="3" fill="${c}"/><rect x="38" y="0" width="3" height="80" fill="${c}"/>`],
  stars: (a, b) => [70, `<path d="M35,8 L41,27 L61,27 L45,39 L51,58 L35,46 L19,58 L25,39 L9,27 L29,27Z" fill="${b}"/>`],
  hearts: (a, b) => [70, `<path d="M35,58 C10,40 12,18 26,18 C32,18 35,24 35,26 C35,24 38,18 44,18 C58,18 60,40 35,58Z" fill="${b}"/><circle cx="29" cy="32" r="3" fill="${a}"/><circle cx="41" cy="32" r="3" fill="${a}"/>`],
  pleats: (a, b) => [24, `<rect width="12" height="24" fill="${a}"/><rect x="12" width="12" height="24" fill="${b}"/>`],
  stitches: (a, b) => [60, `<path d="M0,30 H60" stroke="${b}" stroke-width="3" stroke-dasharray="6 6"/><path d="M14,6 v8 M22,6 v8 M30,6 v8 M38,6 v8" stroke="${a}" stroke-width="2"/>`],
  patchwork: (a, b, c) => [90, `<rect width="45" height="45" fill="${a}"/><rect x="45" width="45" height="45" fill="${b}"/><rect y="45" width="45" height="45" fill="${c}"/><rect x="45" y="45" width="45" height="45" fill="${a}" opacity="0.5"/><path d="M0,45 H90 M45,0 V90" stroke="#ffffff" stroke-width="2" stroke-dasharray="4 4"/>`],
  topo: (a, b) => [120, `<g fill="none" stroke="${b}" stroke-width="2"><path d="M-10,30 Q30,0 60,30 T130,30"/><path d="M-10,60 Q30,30 60,60 T130,60"/><path d="M-10,90 Q30,60 60,90 T130,90"/><ellipse cx="60" cy="60" rx="14" ry="8"/></g>`],
  triangles: (a, b) => [80, `<path d="M40,10 L70,64 L10,64Z" fill="none" stroke="${b}" stroke-width="5"/>`],
  stripes: (a, b) => [40, `<path d="M-10,50 L50,-10" stroke="${b}" stroke-width="10"/><path d="M-10,10 L10,-10 M30,50 L50,30" stroke="${b}" stroke-width="10"/>`],
  smileys: (a, b) => [80, `<circle cx="40" cy="40" r="22" fill="none" stroke="${b}" stroke-width="3"/><circle cx="32" cy="34" r="3" fill="${b}"/><circle cx="48" cy="34" r="3" fill="${b}"/><path d="M28,46 Q40,58 52,46" fill="none" stroke="${b}" stroke-width="3"/>`],
  drape: (a, b) => [160, `<path d="M0,0 Q20,80 0,160 H40 Q60,80 40,0Z" fill="${b}" opacity="0.5"/><path d="M80,0 Q100,80 80,160 H120 Q140,80 120,0Z" fill="${b}" opacity="0.35"/>`],
  grid: (a, b) => [40, `<path d="M0,0 H40 M0,0 V40" stroke="${b}" stroke-width="1"/>`],
  dots: (a, b, c) => [60, `<circle cx="15" cy="15" r="8" fill="${a}"/><circle cx="45" cy="45" r="8" fill="${b}"/><circle cx="45" cy="15" r="4" fill="${c}"/>`],
  waves: (a, b) => [120, `<path d="M0,60 Q30,40 60,60 T120,60" fill="none" stroke="${b}" stroke-width="3"/><circle cx="96" cy="24" r="12" fill="${a}" opacity="0.6"/>`],
  scribble: (a, b) => [100, `<path d="M10,30 C30,10 40,50 60,25 S90,40 85,15 M15,75 C35,60 50,95 70,70" fill="none" stroke="${b}" stroke-width="3" stroke-linecap="round"/>`],
  distressed: (a, b) => [90, `<g stroke="${b}" stroke-width="1.5" stroke-linecap="round"><path d="M10,12 l18,6 M50,30 l-12,10 M70,60 l14,-4 M20,70 l10,12 M60,84 l-8,-6"/></g><g fill="${b}"><circle cx="35" cy="55" r="1.6"/><circle cx="80" cy="20" r="1.2"/><circle cx="15" cy="40" r="1"/></g>`],
  cork: (a, b) => [30, `<circle cx="6" cy="8" r="2" fill="${b}"/><circle cx="20" cy="4" r="1.4" fill="${b}"/><circle cx="14" cy="18" r="2.4" fill="${b}"/><circle cx="26" cy="24" r="1.6" fill="${b}"/><circle cx="4" cy="26" r="1.2" fill="${b}"/>`],
  lines: (a, b) => [80, `<rect x="6" y="6" width="68" height="68" fill="none" stroke="${b}" stroke-width="2"/><rect x="12" y="12" width="56" height="56" fill="none" stroke="${b}" stroke-width="1"/>`],
};

// A CSS background-image for the brand's pattern, or "none".
function brandPatternImage(brandName, palette) {
  const look = BRAND_LOOKS[brandName];
  const tile = look && PATTERN_TILES[look.pattern];
  if (!tile) {
    return "none";
  }
  const [a, b, c] = [palette[0], palette[1] || palette[0], palette[2] || palette[1] || palette[0]];
  const [size, shapes] = tile(a, b, c);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${shapes}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
