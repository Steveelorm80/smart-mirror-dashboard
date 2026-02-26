import { getWeather } from "../services/weatherService.js";
import { getCrypto } from "../services/cryptoService.js";
import { getJoke } from "../services/jokeService.js";
import { getNews } from "../services/newsService.js";
import { getAIInsight } from "../services/aiService.js";

let cache = {
  data: null,
  timestamp: null,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getDashboardData = async (req, res) => {
  try {
    const now = Date.now();

    if (cache.data && now - cache.timestamp < CACHE_DURATION) {
      console.log("Serving from cache ✅");
      return res.json(cache.data);
    }

    console.log("Fetching fresh data 🔄");

    // const [weather, crypto, joke, news] = await Promise.all([
    //   getWeather(),
    //   getCrypto(),
    //   getJoke(),
    //   getNews(),
    // ]);

    let weather, crypto, joke, news;

    try {
      weather = await getWeather();
      console.log("Weather OK");
    } catch (err) {
      console.log("Weather FAILED", err.response?.status);
    }

    try {
      crypto = await getCrypto();
      console.log("Crypto OK");
    } catch (err) {
      console.log("Crypto FAILED", err.response?.status);
    }

    try {
      joke = await getJoke();
      console.log("Joke OK");
    } catch (err) {
      console.log("Joke FAILED", err.response?.status);
    }

    try {
      news = await getNews();
      console.log("News OK");
    } catch (err) {
      console.log("News FAILED", err.response?.status);
    }

    let aiInsight = null;

    try {
      aiInsight = await getAIInsight({ weather, crypto, news });
    } catch (err) {
      aiInsight = "AI insight currently unavailable.";
    }

    const responseData = {
      weather,
      crypto,
      joke,
      news,
      aiInsight,
    };

    cache = {
      data: responseData,
      timestamp: now,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
