import axios from "axios";

export const fetchJoke = async () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  const response = await axios.get(url);
  return response.data;
};
