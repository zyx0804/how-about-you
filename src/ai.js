// Talks to an AI model through the app's Cloudflare Worker (worker/index.mjs).
// While AI_ENDPOINT is empty the AI features stay hidden and the app uses
// keyword mood detection only.

const AI_ENDPOINT = "https://how-about-you-ai.how-about-you.workers.dev";
// Give up on the AI after this long and fall back, so the page never hangs.
const AI_TIMEOUT_MS = 10000;

function aiEnabled() {
  return AI_ENDPOINT !== "";
}

// Posts to the worker; returns the JSON reply, or null on any failure.
async function callAi(path, body) {
  if (!aiEnabled()) {
    return null;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);
  try {
    const response = await fetch(`${AI_ENDPOINT}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// { mood, score, reply } from the AI, or null.
function aiReadMood(text) {
  return callAi("/mood", { text });
}

// { answer } from the AI, or null.
function aiAskStylist(question, brand, item, language) {
  return callAi("/ask", { question, brand, item, lang: language });
}
