import axios from "axios";
import { getConfig } from "../config/config.js";

export const fetchWeatherData = async (city = "London") => {
  const { weatherApiKey } = getConfig();

  console.log("API KEY:", weatherApiKey);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

  const response = await axios.get(url);
  return response.data;
};
