import axios from "axios";
import { getConfig } from "../config/config.js";

export const fetchNews = async () => {
  const { newsApiKey } = getConfig();

  const url = `https://newsapi.org/v2/everything?q=technology&language=en&pageSize=5&sortBy=publishedAt&apiKey=${newsApiKey}`;

  const response = await axios.get(url);

  console.log("News raw response:", response.data);

  return response.data.articles;
};
