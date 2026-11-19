// Starts the page once every script has loaded: the text in the saved
// language, local weather if already allowed, and the title fitted.

aiNote.hidden = !aiEnabled();
setLanguage(language);
weatherButton.addEventListener("click", useLocalWeather);
// A visitor who already allowed location gets local weather without asking.
if (navigator.permissions) {
  navigator.permissions
    .query({ name: "geolocation" })
    .then((permission) => {
      if (permission.state === "granted") {
        useLocalWeather();
      }
    })
    .catch(() => {});
}
fitTitleWhenFontsReady();
window.addEventListener("resize", fitTitle);
// The mood fonts arrive after the page shows (see index.html); a title fitted
// before then is fitted again in its real font.
document.querySelector('link[data-fonts="later"]')?.addEventListener("load", fitTitleWhenFontsReady);
