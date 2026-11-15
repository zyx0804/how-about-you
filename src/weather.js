// Today's weather for the outfit, as "cold", "mild", or "hot" (Yuxuan, 11/14:
// recommendations should suit the weather). With the visitor's permission it
// reads today's temperature near them from Open-Meteo, which is free and needs
// no key; without it, it guesses from the month (northern hemisphere).

// The day's average temperature (°C) below which it counts as cold, and above
// which it counts as hot.
const COLD_BELOW_C = 12;
const HOT_ABOVE_C = 24;
// How long to wait for the forecast before falling back to the month, so a
// slow weather service can't leave "Checking the weather..." on screen forever.
const WEATHER_TIMEOUT_MS = 10000;

function weatherForTemperature(averageCelsius) {
  if (averageCelsius < COLD_BELOW_C) {
    return "cold";
  }
  return averageCelsius > HOT_ABOVE_C ? "hot" : "mild";
}

// November to March cold, June to August hot, the rest mild.
function weatherForMonth(date = new Date()) {
  const month = date.getMonth() + 1;
  if (month >= 11 || month <= 3) {
    return "cold";
  }
  return month >= 6 && month <= 8 ? "hot" : "mild";
}

// The Open-Meteo address for today's lowest and highest temperature at a
// place. Coordinates are rounded to about a kilometer, which is plenty for
// weather and sends less about where the visitor is.
function weatherUrl(latitude, longitude) {
  const round = (value) => Math.round(value * 100) / 100;
  return (
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${round(latitude)}&longitude=${round(longitude)}` +
    "&daily=temperature_2m_min,temperature_2m_max&timezone=auto&forecast_days=1"
  );
}

// Reads Open-Meteo's answer into { kind, low, high }, or null if it is not
// the shape we expect.
function readForecast(body) {
  const low = body && body.daily && body.daily.temperature_2m_min && body.daily.temperature_2m_min[0];
  const high = body && body.daily && body.daily.temperature_2m_max && body.daily.temperature_2m_max[0];
  if (typeof low !== "number" || typeof high !== "number") {
    return null;
  }
  return { kind: weatherForTemperature((low + high) / 2), low: Math.round(low), high: Math.round(high) };
}

// Asks the browser for the visitor's location, then fetches today's forecast.
// Resolves to { kind, low, high }, or rejects if either step fails.
function fetchLocalWeather() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("no geolocation"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), WEATHER_TIMEOUT_MS);
        try {
          const response = await fetch(weatherUrl(coords.latitude, coords.longitude), { signal: controller.signal });
          const forecast = response.ok ? readForecast(await response.json()) : null;
          if (forecast) {
            resolve(forecast);
          } else {
            reject(new Error("bad forecast"));
          }
        } catch (error) {
          reject(error);
        } finally {
          clearTimeout(timer);
        }
      },
      reject,
      { timeout: WEATHER_TIMEOUT_MS, maximumAge: 3600000 },
    );
  });
}

if (typeof module !== "undefined") {
  module.exports = { weatherForTemperature, weatherForMonth, weatherUrl, readForecast };
}
