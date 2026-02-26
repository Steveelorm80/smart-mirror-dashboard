import { fetchWeatherData } from "../clients/weatherApiClient.js";

export const getWeather = async () => {
  const data = await fetchWeatherData("London");

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
};
