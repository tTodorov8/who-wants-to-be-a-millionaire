import "./App.css";
import StartScreen from "./components/StartScreen";
import { useState, useEffect } from "react";
function App() {
  const [question, setQuestion] = useState([]);
  const getApiQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=15").then(
      (response) => response.json()
    );
    setQuestion(response);
  };

  useEffect(() => {
    getApiQuestions();
  }, []);
  console.log(question);
  return (
    <div className="App">
      <StartScreen></StartScreen>
    </div>
  );
}

export default App;
