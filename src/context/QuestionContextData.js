// import { useState, useEffect, createContext } from "react";

// const AppContext = createContext(null);

// function QuestionsContext() {
//   const [question, setQuestion] = useState([]);
//   const getApiQuestions = async () => {
//     const response = await fetch("https://opentdb.com/api.php?amount=15").then(
//       (response) => response.json()
//     );
//     console.log(question.results);
//     setQuestion(response);

//     return (
//       <AppContext.Provider>
//         <div>
//           {question}
//           <Child setQuestion={setQuestion} />
//         </div>
//       </AppContext.Provider>
//     );
//   };
// }

// export default QuestionsContext;
