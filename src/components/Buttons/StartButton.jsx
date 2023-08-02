import { useState, useEffect } from "react";
function StartButton() {
  const [question, setQuestion] = useState([]);
  const getApiQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=15").then(
      (response) => response.json()
    );
    console.log(question.results);
    setQuestion(response);
  };

  return (
    <div className="start-button" onClick={getApiQuestions}>
      <h2>Start Game</h2>
    </div>
  );
}

export default StartButton;
