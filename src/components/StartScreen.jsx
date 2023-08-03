import { useState, useEffect } from "react";
import "../assets/styles/start-screen-style.css";
import StartButton from "./Buttons/StartButton";
import CategoryDropDownButton from "./Buttons/CategoryDropDownButton";
import DifficultyDropDownButton from "./Buttons/DifficultyDropDownButton";
import QuestionsScreen from "./QuestionsScreen";
function StartScreen(props) {
  const [isStarted, setIsStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [category, setCategory] = useState("");
  function handleStartGame() {
    setIsStarted(true);
    console.log(isStarted);
  }

  useEffect(() => {
    setIsVisible(!isStarted);
  }, [isStarted]);

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      <div
        className="start-screen-wrapper"
        style={{ display: isVisible ? "flex" : "none" }}
      >
        <div className="buttons-wrapper">
          <StartButton questions={props.questions} onStart={handleStartGame} />
          <div className="dropdown-wrapper">
            <h2>Category</h2>
            <CategoryDropDownButton questions={props.questions} />
            {/* <DropDownButton text="category" questions={props.questions} /> */}
          </div>
          <div className="dropdown-wrapper">
            <h2>Difficulty:</h2>
            <DifficultyDropDownButton questions={props.questions} />

            {/* <DropDownButton questions={props.questions} /> */}
          </div>
        </div>
      </div>
      {/*  */}
      {/* Question screen when the start game button is clicked */}
      {isStarted ? <QuestionsScreen questions={props.questions} /> : ""}
    </>
  );
}

export default StartScreen;
