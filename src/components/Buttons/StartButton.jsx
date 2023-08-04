import { useState, useEffect } from "react";

function StartButton(props) {
  return (
    <div className="start-button" onClick={props.onStart}>
      <h2>Start Game</h2>
    </div>
  );
}

export default StartButton;
