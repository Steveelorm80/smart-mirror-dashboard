
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
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showInsight, setShowInsight] = useState(false);

  /* ========================= */
/* SPEECH FUNCTION           */
/* ========================= */

const speak = (text, onEnd) => {

  if (!text) return;

  const synth = window.speechSynthesis;

  // stop previous speech
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-GB";
  utterance.rate = 0.95;
  utterance.pitch = 1;

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  synth.speak(utterance);
};
  /* ========================= */
  /* FETCH DASHBOARD DATA      */
  /* ========================= */

  useEffect(() => {

    const fetchData = async () => {

      try {

        const res = await axios.get(
          `https://smart-mirror-api.onrender.com/api/dashboard?city=${city}`
        );

        setData(res.data);

      } catch (error) {

        console.error("Dashboard fetch error:", error);

      }
    };

    fetchData();

    /* AUTO REFRESH EVERY 5 MINUTES */

    const interval = setInterval(fetchData, 300000);

    return () => clearInterval(interval);

  }, [city]);

 /* ========================= */
/* SPEAK WHEN AI INSIGHT LOADS */
/* ========================= */


// useEffect(() => {

//   if (!data?.aiInsight) return;

//   setShowInsight(true);

//   if (audioEnabled) {
//     speak(data.aiInsight, () => {
//       setShowInsight(false);
//     });
//   }

// }, [data, audioEnabled]);
useEffect(() => {

  if (!data?.aiInsight) return;

  setShowInsight(true);

  if (audioEnabled) {
    speak(data.aiInsight);
  }

  // keep popup visible longer
  const timer = setTimeout(() => {
    setShowInsight(false);
  }, 20000); // 20 seconds

  return () => clearTimeout(timer);

}, [data, audioEnabled]);

  /* ========================= */
  /* LOADING SCREEN            */
  /* ========================= */

  if (!data) return <div className="loading">Loading...</div>;

  /* ========================= */
  /* MAIN UI                   */
  /* ========================= */

  return (
    <div
  className="app-container"
  onClick={() => setAudioEnabled(true)}
>

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
      {/* <InsightPopup insight={data.aiInsight} /> */}
      <InsightPopup insight={data.aiInsight} show={showInsight} />

      {/* FOOTER */}
      <footer className="footer-bar">
        SMART MIRROR • AI POWERED DASHBOARD •
         <span className="author">Developed by Stephen Kwaku Pometsey</span>
       
      </footer>

    </div>
  );
}

export default App;