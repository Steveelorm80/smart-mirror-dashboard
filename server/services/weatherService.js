import { fetchWeatherData } from "../clients/weatherApiClient.js";

//export const getWeather = async () => {
  //const data = await fetchWeatherData("London");
  export const getWeather = async (city = "London") => {
  const data = await fetchWeatherData(city);

  return {
     city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    timezone: data.timezone, // needed for clock sync
  };
};
