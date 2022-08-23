import React from "react";
import { useState } from "react";
import "./DigitalClock.css";

const Countdown = () => {
  const [time, setTime] = useState("");
  useState(() => {
    //fecha meta de la cuenta atrás
    let countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      if (distance < 0) {
        clearInterval(x);
        setTime("Countdown finished");
      }
    }, 1000);
  }, []);
  return (
    <div className="countdown">
      <h2>{time}</h2>
    </div>
  );
};

export default Countdown;
