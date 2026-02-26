import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [data, setData] = useState(null);
  const [time, setTime] = useState(new Date());
  const [showInsight, setShowInsight] = useState(false);

  /* ========================= */
  /* FETCH DASHBOARD DATA      */
  /* ========================= */

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/api/dashboard")
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  /* ========================= */
  /* LIVE CLOCK                */
  /* ========================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* ========================= */
  /* AI INSIGHT POPUP          */
  /* ========================= */

  useEffect(() => {
    if (!data) return;

    const showTimer = setTimeout(() => setShowInsight(true), 3000);
    const hideTimer = setTimeout(() => setShowInsight(false), 11000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [data]);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="mirror">
      {/* ========================= */}
      {/* AI FLOATING INSIGHT       */}
      {/* ========================= */}

      {showInsight && (
        <div className="floating-insight">
          <div className="insight-card">
            <div className="insight-title">AI Briefing</div>
            <div className="insight-text">{data.aiInsight}</div>
          </div>
        </div>
      )}

      {/* ========================= */}
      {/* LEFT COLUMN (HERO AREA)   */}
      {/* ========================= */}

      <div className="left-column">
        {/* CLOCK */}
        <div className="widget clock-widget">
          <p className="greeting">
            {time.getHours() < 12
              ? "Good Morning"
              : time.getHours() < 18
              ? "Good Afternoon"
              : "Good Evening"}
          </p>

          <h1 className="clock">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h1>

          <p className="date">
            {time.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* WEATHER */}
        <div className="widget weather-widget">
          <h2>{data.weather.city}</h2>

          <div className="weather-row">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`}
              alt="weather icon"
              className="weather-icon"
            />
            <h3>{Math.round(data.weather.temperature)}°C</h3>
          </div>

          <p>{data.weather.description}</p>
        </div>
      </div>

      {/* ========================= */}
      {/* RIGHT COLUMN              */}
      {/* ========================= */}

      <div className="right-column">
        {/* CRYPTO */}
        <div className="widget crypto-widget">
          <h3>Crypto Market</h3>

          <div className="crypto-row">
            <span>Bitcoin</span>
            <strong>£{data.crypto.bitcoin}</strong>
          </div>

          <div className="crypto-row">
            <span>Ethereum</span>
            <strong>£{data.crypto.ethereum}</strong>
          </div>
        </div>

        {/* NEWS */}
        <div className="widget news-widget">
          <h3>Top Headlines</h3>

          <div className="news-container">
            <div className="news-scroll">
              {data.news.slice(0, 5).map((item, index) => (
                <p key={index}>• {item.title}</p>
              ))}
            </div>
          </div>
        </div>

        {/* JOKE */}
        <div className="widget joke-widget">
          <h3>Daily Joke</h3>
          <p>{data.joke}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
