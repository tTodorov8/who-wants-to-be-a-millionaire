import { createContext } from "react";

const QuestionContextStore = createContext({
  questions: [],
  categories: [],
  difficulties: [],
  choosenCategory: "",
  choosenDifficulty: "",
  setChoosenCategory: () => {},
  setChoosenDifficulty: () => {},
  getQuestions: () => {},
});

export default QuestionContextStore;
