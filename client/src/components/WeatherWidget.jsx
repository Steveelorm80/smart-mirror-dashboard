const WeatherWidget = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="widget weather-widget" style={{ gridArea: "weather" }}>
      <h3>{weather.city}</h3>

      <div className="weather-row">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
          className="weather-icon"
        />
        <h3>{Math.round(weather.temperature)}°C</h3>
      </div>

      <p>{weather.description}</p>
    </div>
  );
};

export default WeatherWidget;