import { getWeather } from "../services/weatherService.js";
import { getCrypto } from "../services/cryptoService.js";
import { getJoke } from "../services/jokeService.js";
import { getNews } from "../services/newsService.js";
import { getAIInsight } from "../services/aiService.js";

let cache = {};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getDashboardData = async (req, res) => {
  try {
    const city = req.query.city || "London";
    const now = Date.now();

    if (
      cache[city] &&
      now - cache[city].timestamp < CACHE_DURATION
    ) {
      console.log(`Serving ${city} from cache ✅`);
      return res.json(cache[city].data);
    }

    console.log(`Fetching fresh data for ${city} 🔄`);

    // const [weather, crypto, joke, news] = await Promise.all([
    //   getWeather(),
    //   getCrypto(),
    //   getJoke(),
    //   getNews(),
    // ]);

    let weather, crypto, joke, news;

   try {
  const city = req.query.city || "London";

  weather = await getWeather(city);

  console.log("Weather OK:", city);
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

   cache[city] = {
  data: responseData,
  timestamp: now,
};

    res.json(responseData);
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
