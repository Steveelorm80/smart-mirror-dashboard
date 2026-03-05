import { fetchNews } from "../clients/newsApiClient.js";

export const getNews = async () => {
  const articles = await fetchNews();

  return articles
    .filter((article) => article.title && article.url)
    .filter((article) => !article.title.toLowerCase().includes("amazon"))
    .filter((article) => !article.source.name.toLowerCase().includes("rlsbb"))
    .slice(0, 5)
    .map((article) => ({
      title: article.title,
      source: article.source.name,
      url: article.url,
    }));
};
