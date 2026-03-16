// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./index.css";

// import Header from "./components/Header";
// import ClockWidget from "./components/ClockWidget";
// import WeatherWidget from "./components/WeatherWidget";
// import NewsWidget from "./components/NewsWidget";
// import CryptoWidget from "./components/CryptoWidget";
// import JokeWidget from "./components/JokeWidget";
// import InsightPopup from "./components/InsightPopup";

// function App() {
//   const [data, setData] = useState(null);
//   const [city, setCity] = useState("London");

//   /* ========================= */
//   /* FETCH DASHBOARD DATA      */
//   /* ========================= */

 
//   useEffect(() => {

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(
//         `https://smart-mirror-api.onrender.com/api/dashboard?city=${city}`
//       );

//       setData(res.data);

//     } catch (error) {
//       console.error("Dashboard fetch error:", error);
//     }
//   };

//   fetchData();

//   const interval = setInterval(fetchData, 300000); // refresh every 5 minutes

//   return () => clearInterval(interval);

// }, [city]);

//   if (!data) return <div className="loading">Loading...</div>;

 
//   return (
//     <div className="app-container">

//       {/* HEADER */}
//       <Header city={city} setCity={setCity} />

//       {/* MAIN GRID */}
//       <div className="main-content">
//         <div className="dashboard-grid">

//           <ClockWidget timezone={data.weather.timezone} />

//           <WeatherWidget weather={data.weather} />

//          <CryptoWidget crypto={data.crypto} />
        
//          <JokeWidget joke={data.joke} />

//          <NewsWidget news={data.news} />

//         </div>
//       </div>

//       {/* AI INSIGHT POPUP */}
//       <InsightPopup insight={data.aiInsight} />

//       {/* FOOTER */}
//       <footer className="footer-bar">
//         SMART MIRROR • AI POWERED DASHBOARD
//       </footer>

//     </div>
//   );
// }

// export default App;
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
  /* SPEAK AI INSIGHT          */
  /* ========================= */

  const speak = (text) => {

    if (!text) return;

    window.speechSynthesis.cancel(); // stop previous speech

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
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

  useEffect(() => {

    if (data?.aiInsight) {

      speak(data.aiInsight);

    }

  }, [data]);

  /* ========================= */
  /* LOADING SCREEN            */
  /* ========================= */

  if (!data) return <div className="loading">Loading...</div>;

  /* ========================= */
  /* MAIN UI                   */
  /* ========================= */

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