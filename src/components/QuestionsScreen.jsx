import React from "react";

function QuestionsScreen(props) {
  console.log(props);
  return (
    <div className="question-answer-wrapper">
      <div className="question-holder">Type your question here</div>
      <div className="answers-holder">
        <div className="answer a">Answer here</div>
        <div className="answer b">Answer here</div>
        <div className="answer c">Answer here</div>
        <div className="answer d">Answer here</div>
      </div>
    </div>
  );
}

export default QuestionsScreen;

// {props.questions.map((item) => {
//     console.log(item.question);
//   })}
