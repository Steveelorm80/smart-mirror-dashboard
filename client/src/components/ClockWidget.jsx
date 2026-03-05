
import { useEffect, useState } from "react";

const ClockWidget = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!timezone) return;

    const timer = setInterval(() => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const localTime = new Date(utc + timezone * 1000);
      setTime(localTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [timezone]);

  return (
   <div className="widget clock-widget" style={{ gridArea: "clock" }}>
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
  );
};

export default ClockWidget;