export const getConfig = () => {
  return {
    weatherApiKey: process.env.WEATHER_API_KEY,
    newsApiKey: process.env.NEWS_API_KEY,
    openaiApiKey: process.env.OPENAI_API_KEY,
  };
};
