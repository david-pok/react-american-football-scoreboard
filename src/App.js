//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Buttons from "./components/Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container">
      <ScoreBoard
        lionScore={lionScore}
        tigerScore={tigerScore}
        timer={seconds}
      />

      <Buttons
        lionScore={lionScore}
        setLionScore={setLionScore}
        tigerScore={tigerScore}
        setTigerScore={setTigerScore}
        isActive={isActive}
        setIsActive={setIsActive}
        toggle={toggle}
        reset={reset}
      />
    </div>
  );
}

export default App;
