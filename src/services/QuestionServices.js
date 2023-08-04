const QuestionServices = {};
QuestionServices.getApiQuestions = () => {
  let questions = {};
  debugger;
  const response = fetch(`https://opentdb.com/api.php?amount=15&type=multiple`);
  questions = response.then((x) => x.json());

  return questions;
};

export default QuestionServices;
