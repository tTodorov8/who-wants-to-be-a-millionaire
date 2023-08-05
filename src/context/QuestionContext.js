import { useState, useEffect, useCallback } from "react";
import QuestionServices from "../services/QuestionServices";
import QuestionContextStore from "./QuestionsContextStore";

function QuestionContext(props) {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [choosenCategory, setChoosenCategoryOne] = useState("");
  const [choosenDifficulty, setChoosenDifficultyOne] = useState("");

  const updateCategories = useCallback(
    () =>
      QuestionServices.getCategoryes().then((cats) => {
        if (!categories.length) {
          setCategories(cats);
        }
      }),
    [categories.length]
  );

  useEffect(() => {
    updateCategories();
  }, [updateCategories]);

  const filteredDifficulties = (difficulties) => {
    const uniqueDifficulty = [];
    difficulties.forEach((difficulty) => {
      if (!uniqueDifficulty.includes(difficulty)) {
        uniqueDifficulty.push(difficulty);
      }
    });
    return uniqueDifficulty;
  };

  const getQuestions = useCallback(
    function (questions) {
      if (questions !== undefined) {
        setQuestions(questions);

        if (!difficulties.length) {
          const uniqueDifficulties = filteredDifficulties(
            questions.map((x) => x.difficulty)
          );

          setDifficulties(uniqueDifficulties);
        }
      }
    },
    [difficulties.length]
  );

  const updateQuestions = useCallback(
    function () {
      return QuestionServices.getApiQuestions(
        choosenCategory,
        choosenDifficulty
      ).then((questions) => getQuestions(questions.results));
    },
    [choosenCategory, choosenDifficulty, getQuestions]
  );

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

  useEffect(() => {
    updateQuestions();
  }, [choosenDifficulty, choosenCategory, updateQuestions]);

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
