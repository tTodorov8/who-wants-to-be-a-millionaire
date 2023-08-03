// import React from "react";
// import downArrow from "../../assets/images/down-arrow.png";
// import { useState } from "react";

// function DropDownButton(props) {
//   const filteredCategories = (arr) => {
//     const uniqueCategories = [];
//     props.questions.forEach((question) => {
//       if (!uniqueCategories.includes(question.category)) {
//         uniqueCategories.push(question.category);
//       }
//     });
//     console.log(uniqueCategories);
//     return uniqueCategories;
//   };
//   const filteredDifficulty = (arr) => {
//     const uniqueDifficulty = [];
//     props.questions.forEach((question) => {
//       if (!uniqueDifficulty.includes(question.difficulty)) {
//         uniqueDifficulty.push(question.difficulty);
//       }
//     });
//     console.log(uniqueDifficulty);
//     return uniqueDifficulty;
//   };
//   const [isVisible, setIsVisible] = useState(true);
//   console.log(props.difficulty);
//   function handleDropDown() {
//     setIsVisible((visible) => !visible);
//   }
//   return (
//     <>
//       <button className="drop-down-button" onClick={handleDropDown}>
//         <img src={downArrow} alt="asdf" />
//       </button>
//       <div
//         className="drop-down-content"
//         style={{ display: isVisible ? "block" : "none" }}
//       >
//         <div className="categories-list">
//           <ul>
//             {filteredCategories().map((element) => {
//               return <li>{element}</li>;
//             })}
//           </ul>
//         </div>
//       </div>
//       <div
//         className="drop-down-content"
//         style={{ display: isVisible ? "block" : "none" }}
//       >
//         <div className="difficulty-list">
//           <ul>
//             {filteredDifficulty().map((element) => {
//               return <li>{element}</li>;
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DropDownButton;
// //<div> Icons made by <a href="https://www.flaticon.com/authors/creativecons" title="CreativeCons"> CreativeCons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
