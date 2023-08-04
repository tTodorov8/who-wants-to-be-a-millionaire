import React from "react";
import { useState, useEffect } from "react";

function QuestionsScreen(props) {
  console.log(props);
  const [randomQuestion, setRandomQuestion] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(60);
  //
  // get random question from the api
  useEffect(() => {
    const localRandomQuestion =
      props.questions[Math.floor(Math.random() * props.questions.length)];
    setRandomQuestion(localRandomQuestion);
  }, [props.questions]);

  // set the correct and incorrect answers
  useEffect(() => {
    setCorrectAnswer(randomQuestion.correct_answer);
    if (randomQuestion.incorrect_answers !== undefined) {
      setIncorrectAnswers(randomQuestion.incorrect_answers);
    }
  }, [
    incorrectAnswers,
    randomQuestion.correct_answer,
    randomQuestion.incorrect_answers,
  ]);

  useEffect(() => {
    let timeInterval;

    if (timer > 0) {
      timeInterval = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(timeInterval);
  }, [timer]);

  const handleClearInterval = () => {};
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
  console.log(correctAnswer);
  console.log(allAnswers);

  console.log(typeof allAnswers);
  return (
    <>
      <div className="points">{points}</div>
      {/* <button
        className="next-question"
        onClick={useEffect(() => {
          setRandomQuestion();
          props.questions[Math.floor(Math.random() * props.questions.length)];
        }, [props.questions])}
      >
        Next
      </button> */}

      <div className="timer">{timer}</div>
      <div className="question-answer-wrapper">
        <div className="question-holder">{randomQuestion.question}</div>
        <div className="answers-holder">
          {allAnswers.map((answer, id) => {
            // if (answer === correctAnswer) {
            //   return <div className="correct">{answer}</div>;
            // }
            return (
              <div
                className={
                  answer === correctAnswer ? "answer correct" : "answer wrong"
                }
                key={id}
                onClick={(e) => {
                  if (answer === correctAnswer) {
                    e.target.style.backgroundColor = "#00b05090";
                    return setPoints(points + 1);
                  } else {
                    e.target.style.backgroundColor = "#c0000090";
                  }
                }}
              >
                {answer}
              </div>
            );
          })}
          {/* <div className="answer b">Answer here</div>
        <div className="answer c">Answer here</div>
        <div className="answer d">Answer here</div> */}
        </div>
      </div>
    </>
  );
}

export default QuestionsScreen;

// {props.questions.map((item) => {
//     console.log(item.question);
//   })}
