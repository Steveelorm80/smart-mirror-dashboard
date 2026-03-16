// const WeatherWidget = ({ weather }) => {
//   if (!weather) return null;

//   return (
//     <div className="widget weather-widget" style={{ gridArea: "weather" }}>
//       <h3>{weather.city}</h3>

//       <div className="weather-row">
//         <img
//           src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
//           alt="weather icon"
//           className="weather-icon"
//         />
//         <h3>{Math.round(weather.temperature)}°C</h3>
//       </div>

//       <p>{weather.description}</p>
//     </div>
//   );
// };

// export default WeatherWidget;
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog } from "react-icons/wi";

const WeatherWidget = ({ weather }) => {

  if (!weather) return null;

  const getIcon = () => {
    const desc = weather.description.toLowerCase();

    if (desc.includes("cloud")) return <WiCloud size={80} />;
    if (desc.includes("rain")) return <WiRain size={80} />;
    if (desc.includes("snow")) return <WiSnow size={80} />;
    if (desc.includes("fog")) return <WiFog size={80} />;

    return <WiDaySunny size={80} />;
  };

  return (
    <div className="widget weather-widget">

      <h3>Weather</h3>

      <div className="weather-icon">
        {getIcon()}
      </div>

      <h2>{Math.round(weather.temperature)}°C</h2>

      <p>{weather.description}</p>

      <p>{weather.city}</p>

    </div>
  );
};

export default WeatherWidget;