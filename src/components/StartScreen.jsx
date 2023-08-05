import { useState, useEffect } from "react";
import "../assets/styles/start-screen-style.css";
import StartButton from "./Buttons/StartButton";
import CategoryDropDownButton from "./Buttons/CategoryDropDownButton";
import DifficultyDropDownButton from "./Buttons/DifficultyDropDownButton";
import QuestionsScreen from "./QuestionsScreen";
import { useContext } from "react";
import QuestionContextStore from "../context/QuestionsContextStore";

function StartScreen() {
  const [isStarted, setIsStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const {
    questions,
    categories,
    difficulties,
    getQuestions,
    choosenCategory,
    choosenDifficulty,
    setChoosenCategory,
    setChoosenDifficulty,
  } = useContext(QuestionContextStore);

  function handleStartGame() {
    if (questions.length > 0) {
      getQuestions();
      setIsStarted(true);
    }
  }

  useEffect(() => {
    setIsVisible(!isStarted);
  }, [isStarted]);

  return (
    <>
      <div
        className="start-screen-wrapper"
        style={{ display: isVisible ? "flex" : "none" }}
      >
        <div className="buttons-wrapper">
          <StartButton questions={questions} onStart={handleStartGame} />
          <div className="dropdown-wrapper">
            <h2>Category</h2>
            <CategoryDropDownButton
              questions={questions}
              categories={categories}
              choosenCategory={choosenCategory}
              setChoosenCategory={setChoosenCategory}
            />
          </div>
          <div className="dropdown-wrapper">
            <h2>Difficulty:</h2>
            <DifficultyDropDownButton
              questions={questions}
              difficulties={difficulties}
              choosenDifficulty={choosenDifficulty}
              setChoosenDifficulty={setChoosenDifficulty}
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/* Question screen when the start game button is clicked */}
      {isStarted ? <QuestionsScreen questions={questions} /> : ""}
    </>
  );
}

export default StartScreen;
