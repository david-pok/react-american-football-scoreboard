import "../App.css";
import BottomRow from "./BottomRow";

import React from "react";
import "../App.css";

const ScoreBoard = (props) => {
  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>
          <div className="home__score">{props.lionScore}</div>
        </div>
        <div className="timer">{props.timer}</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{props.tigerScore}</div>
        </div>
      </div>
      <BottomRow />
    </section>
  );
};

export default ScoreBoard;
