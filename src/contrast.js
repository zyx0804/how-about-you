// Text that stays readable on a mood's accent color. Buttons used the page
// background as their text color, but three moods have gradient backgrounds,
// which a text color can't be, and the accent itself changes with the mood;
// on 11/14 the RECOMMEND button was 2.6:1 in calm, under the 4.5:1 that
// small text needs (WCAG). These follow the WCAG formulas.

// How bright a #rrggbb color looks, from 0 (black) to 1 (white).
function relativeLuminance(hex) {
  const value = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(value >> 16) & 255, (value >> 8) & 255, value & 255].map((channel) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// From 1 (no difference) to 21 (black on white).
function contrastRatio(hexA, hexB) {
  const [light, dark] = [relativeLuminance(hexA), relativeLuminance(hexB)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

// White or black, whichever reads better on the given color.
function textColorOn(background) {
  return contrastRatio(background, "#ffffff") >= contrastRatio(background, "#000000") ? "#ffffff" : "#000000";
}

if (typeof module !== "undefined") {
  module.exports = { relativeLuminance, contrastRatio, textColorOn };
}
