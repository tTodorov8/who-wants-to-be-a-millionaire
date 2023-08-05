import React from "react";
import { useState, useEffect } from "react";

function QuestionsScreen({ questions }) {
  const [randomQuestion, setRandomQuestion] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [endGame, setEndGame] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(60);
  //
  // get random question from the api
  useEffect(() => {
    const localRandomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    setRandomQuestion(localRandomQuestion);
  }, [questions]);

  // set the correct and incorrect answers
  useEffect(() => {
    setCorrectAnswer(randomQuestion.correct_answer);
    if (randomQuestion.incorrect_answers !== undefined) {
      setIncorrectAnswers(randomQuestion.incorrect_answers);
    }
  }, [
    randomQuestion,
    incorrectAnswers,
    randomQuestion.correct_answer,
    randomQuestion.incorrect_answers,
  ]);

  useEffect(() => {
    let timeInterval;

    if (timer > 0 && !endGame && !correctAnswer) {
      timeInterval = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(timeInterval);
  }, [timer, endGame, correctAnswer]);

  const handleIncorectAnswer = () => {
    setEndGame(true);
  };

  // set array with all the possible answers
  function allRandomAnswers(answers) {
    for (let i = 0; i < answers.length; i++) {
      let tempAnswer = answers[i];
      let randomAnswers = Math.floor(Math.random() * answers.length);
      answers[i] = answers[randomAnswers];
      answers[randomAnswers] = tempAnswer;
    }
  }
  useEffect(() => {
    const answers = [correctAnswer, ...incorrectAnswers];
    allRandomAnswers(answers);
    setAllAnswers(answers);
  }, [correctAnswer, incorrectAnswers, randomQuestion]);

  const handleAnswerClick = (e, answer) => {
    if (answer === correctAnswer) {
      e.target.style.backgroundColor = "#00b05090";
      return setPoints(points + 1);
    } else {
      handleIncorectAnswer();
      e.target.style.backgroundColor = "#c0000090";
    }
  };
  return (
    <>
      <div className="points">{points}</div>
      {endGame && (
        <button
          hidden={!endGame}
          className="next-question"
          onClick={() => {
            setRandomQuestion(
              questions[Math.floor(Math.random() * questions.length)]
            );
          }}
        >
          {" "}
          New Game
        </button>
      )}
      {!endGame && (
        <button
          hidden={endGame}
          className="next-question"
          onClick={() => {
            setRandomQuestion(
              questions[Math.floor(Math.random() * questions.length)]
            );
          }}
        >
          {" "}
          Next
        </button>
      )}
      <div className="timer">{timer}</div>
      <div className="question-answer-wrapper">
        <div className="question-holder">{randomQuestion.question}</div>
        <div className="answers-holder">
          {allAnswers.map((answer, id) => {
            return (
              <div
                className={
                  answer === correctAnswer ? "answer correct" : "answer wrong"
                }
                key={id}
                onClick={(e) => !endGame && handleAnswerClick(e, answer)}
              >
                {answer}
              </div>
            );
          })}
        </div>
      </div>
      )
    </>
  );
}

export default QuestionsScreen;

// {props.questions.map((item) => {
//     console.log(item.question);
//   })}
