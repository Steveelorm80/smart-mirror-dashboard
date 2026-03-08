import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

import Header from "./components/Header";
import ClockWidget from "./components/ClockWidget";
import WeatherWidget from "./components/WeatherWidget";
import NewsWidget from "./components/NewsWidget";
import CryptoWidget from "./components/CryptoWidget";
import JokeWidget from "./components/JokeWidget";
import InsightPopup from "./components/InsightPopup";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("London");

  /* ========================= */
  /* FETCH DASHBOARD DATA      */
  /* ========================= */

  useEffect(() => {
    const fetchData = () => {
      axios
        // .get(`/api/dashboard?city=${city}`)
        .get(`https://smart-mirror-api.onrender.com/api/dashboard?city=${city}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [city]);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="app-container">

      {/* HEADER */}
      <Header city={city} setCity={setCity} />

      {/* MAIN GRID */}
      <div className="main-content">
        <div className="dashboard-grid">

          <ClockWidget timezone={data.weather.timezone} />

          <WeatherWidget weather={data.weather} />

         <CryptoWidget crypto={data.crypto} />

         <JokeWidget joke={data.joke} />

         <NewsWidget news={data.news} />

        </div>
      </div>

      {/* AI INSIGHT POPUP */}
      <InsightPopup insight={data.aiInsight} />

      {/* FOOTER */}
      <footer className="footer-bar">
        SMART MIRROR • AI POWERED DASHBOARD
      </footer>

    </div>
  );
}

export default App;