import { useState, useEffect, useCallback } from "react";
import QuestionServices from "../services/QuestionServices";
import QuestionContextStore from "./QuestionsContextStore";

function QuestionContext(props) {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [choosenCategory, setChoosenCategoryOne] = useState("");
  const [choosenDifficulty, setChoosenDifficultyOne] = useState("");

  const filteredCategories = (categories) => {
    const uniqueCategories = [];
    categories.forEach((category) => {
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    });
    return uniqueCategories;
  };

  const filteredDifficulties = (difficulties) => {
    const uniqueDifficulty = [];
    difficulties.forEach((difficulty) => {
      if (!uniqueDifficulty.includes(difficulty)) {
        uniqueDifficulty.push(difficulty);
      }
    });
    return uniqueDifficulty;
  };

  const getQuestions = function (questions) {
    if (questions !== undefined) {
      setQuestions(questions);

      const uniqueCategories = filteredCategories(
        questions.map((x) => x.category)
      );

      const uniqueDifficulties = filteredDifficulties(
        questions.map((x) => x.difficulty)
      );

      setCategories(uniqueCategories);
      setDifficulties(uniqueDifficulties);
      setChoosenCategoryOne(categories[0]);
      setChoosenDifficultyOne(difficulties[0]);
    }
  };

  function setChoosenCategory(params) {
    setChoosenCategoryOne(params);
    const localQuestions = questions.filter(
      (x) =>
        x.category === choosenCategory && x.difficulty === choosenDifficulty
    );
    setQuestions(localQuestions);
  }
  function setChoosenDifficulty(params) {
    setChoosenDifficultyOne(params);
    const localQuestions = questions.filter(
      (x) =>
        x.category === choosenCategory && x.difficulty === choosenDifficulty
    );
    setQuestions(localQuestions);
  }

  const updateQuestions = useCallback(function () {
    return QuestionServices.getApiQuestions().then((questions) =>
      getQuestions(questions.results)
    );
  }, []);

  useEffect(() => {
    updateQuestions();
  }, [updateQuestions]);

  return (
    <QuestionContextStore.Provider
      value={{
        questions,
        categories,
        difficulties,
        choosenCategory,
        choosenDifficulty,
        getQuestions,
        setChoosenCategory,
        setChoosenDifficulty,
      }}
    >
      {props.children}
    </QuestionContextStore.Provider>
  );
}

export default QuestionContext;

// const getApiQuestions = async () => {
//   const response = await fetch("https://opentdb.com/api.php?amount=15").then(
//     (response) => response.json()
//   );
//   console.log(question.results);
//   setQuestion(response);

//   return (
//     <AppContext.Provider>
//       <div>
//         {question}
//         <Child setQuestion={setQuestion} />
//       </div>
//     </AppContext.Provider>
//   );
// };
