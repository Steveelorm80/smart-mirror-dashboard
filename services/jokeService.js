import { fetchJoke } from "../clients/jokeApiClient.js";

export const getJoke = async () => {
  const data = await fetchJoke();

  return `${data.setup} — ${data.punchline}`;
};
