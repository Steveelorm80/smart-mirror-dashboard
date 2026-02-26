import { generateInsight } from "../clients/aiApiClient.js";

export const getAIInsight = async ({ weather, crypto, news }) => {
  const headlineSummary = news.map((n) => n.title).join(". ");

  const context = `
Weather in ${weather.city}: ${weather.description}, ${weather.temperature}°C.
Bitcoin: £${crypto.bitcoin}, Ethereum: £${crypto.ethereum}.
Top news: ${headlineSummary}.
Give a short smart daily summary.
`;

  return await generateInsight(context);
};
