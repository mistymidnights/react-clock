import { useState } from "react";
import "./App.css";
import Chronometer from "./components/Chronometer";
import Countdown from "./components/Countdown";
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <div className="App">
      <div className="titles">
        <h1>Real time clock</h1>
      </div>
      <DigitalClock />
      <div className="titles">
        <h1>Countdown</h1>
        <h3>time left until Jan 1, 2023</h3>
      </div>
      <Countdown />
      <div className="titles">
        <h1>Chronometer</h1>
      </div>
      <Chronometer />
    </div>
  );
}

export default App;
