import React from "react";
import "../App.css";

const Buttons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button
          onClick={() => props.setLionScore(props.lionScore + 6)}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={() => props.setLionScore(props.lionScore + 3)}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={() => props.setTigerScore(props.tigerScore + 6)}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={() => props.setTigerScore(props.tigerScore + 3)}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>

        <button
          className={`button button-primary button-primary-${
            props.isActive ? "active" : "inactive"
          }`}
          onClick={props.toggle}
        >
          {props.isActive ? "Pause Timer" : "Start Timer"}
        </button>

        <button className="button" onClick={props.reset}>
          Reset Timer
        </button>
      </div>
    </section>
  );
};

export default Buttons;
