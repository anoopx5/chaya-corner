// Server-only helper: finds one real Pexels photo for a search query.
// Needs a free API key from https://www.pexels.com/api/ in .env.local (PEXELS_API_KEY).
// Returns null if the key is missing or the request fails, so the page falls back to an emoji tile.
const KEY = process.env.PEXELS_API_KEY;
let warnedMissingKey = false;

export async function searchPhoto(query, orientation = "landscape") {
  if (!KEY) {
    if (!warnedMissingKey) {
      warnedMissingKey = true;
      console.warn("[pexels] PEXELS_API_KEY is not set. Put it in .env.local in the project root, then restart `npm run dev`.");
    }
    return null;
  }
  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=${orientation}`;
    const res = await fetch(url, {
      headers: { Authorization: KEY },
      next: { revalidate: 60 * 60 * 24 * 7 }, // cache each search for a week
    });
    if (!res.ok) {
      console.warn(`[pexels] Request for "${query}" failed with status ${res.status}. Check that the key is correct and active.`);
      return null;
    }
    const data = await res.json();
    const p = data.photos?.[0];
    if (!p) {
      console.warn(`[pexels] No photo found for "${query}".`);
      return null;
    }
    return { src: p.src.large2x || p.src.large, alt: p.alt || query, credit: p.photographer, link: p.url };
  } catch (err) {
    console.warn(`[pexels] Could not reach Pexels for "${query}":`, err.message);
    return null;
  }
}
