import { generateInsight } from "../clients/aiApiClient.js";

const getGreeting = (timezoneOffset) => {
  const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + timezoneOffset * 1000);

  const hour = cityTime.getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

export const getAIInsight = async ({ weather, crypto, news }) => {

  const greeting = getGreeting(weather.timezone);

  const headlineSummary = news.map((n) => n.title).join(". ");

  const context = `
${greeting}! Here is your smart mirror briefing.

Weather in ${weather.city}: ${weather.description}, ${weather.temperature}°C.

Bitcoin: £${crypto.bitcoin}, Ethereum: £${crypto.ethereum}.

Top news: ${headlineSummary}.

Give a short smart daily summary in friendly bullet points.
`;

  return await generateInsight(context);
};