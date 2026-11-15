// The styling rules: how good a set of pieces looks together, on its own,
// apart from which mood or brand the pieces come from. recommend.js draws
// candidate sets and keeps the one these rules score highest. New rules go
// here (Yuxuan, 11/11: an outfit algorithm of its own, built on rules).

// Shapes worn in cold weather and in hot weather; a set shouldn't mix them.
const WINTER_SHAPES = ["coat", "puffer", "beanie"];
const SUMMER_SHAPES = ["sandals", "shorts"];
// The three-color rule: neutrals count as one color, plus at most two others.
const MAX_COLOR_FAMILIES = 2;

// Hue (0 to 360), saturation, and lightness (0 to 1) of a #rrggbb color.
function colorTone(hex) {
  const value = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(value >> 16) & 255, (value >> 8) & 255, value & 255].map((channel) => channel / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  const saturation = max === min ? 0 : (max - min) / (1 - Math.abs(2 * lightness - 1));
  let hue = 0;
  if (max !== min) {
    const delta = max - min;
    if (max === r) {
      hue = ((g - b) / delta + 6) % 6;
    } else if (max === g) {
      hue = (b - r) / delta + 2;
    } else {
      hue = (r - g) / delta + 4;
    }
    hue *= 60;
  }
  return { hue, saturation, lightness };
}

// A bright, saturated main color (red, pink, green, royal blue...), as
// opposed to black, white, gray, beige, navy, brown, or olive.
function isLoud(item) {
  const { saturation, lightness } = colorTone(item.colors[0]);
  return saturation > 0.45 && lightness > 0.22 && lightness < 0.8;
}

// The color family of a piece's main color: "neutral" for black, white,
// gray, navy, and beige, which go with anything; otherwise one of twelve
// hue slices (reds, oranges, yellows, ...).
function colorFamily(item) {
  const { hue, saturation, lightness } = colorTone(item.colors[0]);
  const grayish = saturation < 0.2 || lightness < 0.12 || lightness > 0.92;
  const navy = lightness < 0.3 && hue >= 200 && hue <= 250;
  const beige = lightness > 0.7 && saturation < 0.5 && hue >= 25 && hue <= 55;
  return grayish || navy || beige ? "neutral" : `hue-${Math.floor(hue / 30)}`;
}

// Higher is better. One bright piece with neutrals reads as styled; two or
// more bright pieces clash. Winter and summer pieces together look odd, a set
// of all mid-tones with nothing dark or light looks flat, and more than three
// colors (neutrals counting as one) looks busy.
function harmonyScore(items) {
  let score = 0;
  const loud = items.filter(isLoud).length;
  if (loud > 1) {
    score -= 10 * (loud - 1);
  }
  const hasWinter = items.some((item) => WINTER_SHAPES.includes(item.shape));
  const hasSummer = items.some((item) => SUMMER_SHAPES.includes(item.shape));
  if (hasWinter && hasSummer) {
    score -= 8;
  }
  const lightness = items.map((item) => colorTone(item.colors[0]).lightness);
  const spread = Math.max(...lightness) - Math.min(...lightness);
  const anchored = lightness.some((value) => value < 0.2 || value > 0.85);
  if (items.length >= 3 && spread < 0.12 && !anchored) {
    score -= 2;
  }
  const families = new Set(items.map(colorFamily).filter((family) => family !== "neutral"));
  if (families.size > MAX_COLOR_FAMILIES) {
    score -= 4 * (families.size - MAX_COLOR_FAMILIES);
  }
  return score;
}
