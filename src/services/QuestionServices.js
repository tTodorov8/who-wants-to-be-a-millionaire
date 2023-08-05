const QuestionServices = {};
const baseUrl = "https://opentdb.com";
const questionsEp = "/api.php";
const categoriesEp = "/api_category.php";
let categories = [];

QuestionServices.getCategoryes = () => {
  return fetch(baseUrl + categoriesEp)
    .then((x) => x.json())
    .then((x) => {
      if (!categories.length) {
        x.trivia_categories.forEach((element) => {
          categories.push(element);
        });
      }
    })
    .then((x) => categories.map((c) => c.name));
};

const buildQuerryParams = (category, difficulty) => {
  let querryParams = "?amount=15&type=multiple";

  if (category) {
    const selected = categories.find((x) => x.name === category)?.id;
    querryParams += `&category=${selected}`;
  }
  if (difficulty) {
    querryParams += `&difficulty=${difficulty}`;
  }
  return querryParams;
};
QuestionServices.getApiQuestions = (category, defficulty) => {
  let questions = {};
  const response = fetch(
    baseUrl + questionsEp + buildQuerryParams(category, defficulty)
  );
  questions = response.then((x) => x.json());

  return questions;
};

export default QuestionServices;
