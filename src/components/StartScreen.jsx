import { useState, useEffect } from "react";
import "../assets/styles/start-screen-style.css";
import StartButton from "./Buttons/StartButton";
import DropDownButton from "./Buttons/DropDownButton";
function StartScreen() {
  return (
    <>
      <div className="start-screen-wrapper">
        <div className="button-wrapper">
          <StartButton />
          <div className="dropdown-wrapper">
            <h2>Category</h2>
            <DropDownButton text="category" />
          </div>
          <div className="dropdown-wrapper">
            <h2>Difficulty:</h2>
            <DropDownButton text="difficulty" />
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default StartScreen;
