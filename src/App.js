import "./App.css";
import StartScreen from "./components/StartScreen";
import { useState, useEffect } from "react";

function App() {
  const [question, setQuestion] = useState([]);
  const [category, setCategory] = useState("");
  const getApiQuestions = async () => {
    const response = await fetch(`https://opentdb.com/api.php?amount=15`)
      .then((response) => response.json())
      .catch((err) => {
        console.error("Fetching error", err);
      });
    setQuestion(response.results);
  };

  useEffect(() => {
    getApiQuestions();
  }, []);

  console.log(question);
  return (
    <div className="App">
      <StartScreen questions={question}></StartScreen>
    </div>
  );
}

export default App;

//https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple
