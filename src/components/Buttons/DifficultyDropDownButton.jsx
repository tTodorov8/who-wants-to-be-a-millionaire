import React from "react";
import downArrow from "../../assets/images/down-arrow.png";
import { useState, useRef } from "react";

function DifficultyDropDownButton(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [difficultyButtonText, setDifficultyButtonText] =
    useState("difficulty");
  const difficultyButtonRef = useRef("");
  function handleDropDown() {
    setIsVisible((visible) => !visible);
  }
  return (
    <>
      <button className="drop-down-button" onClick={handleDropDown}>
        {difficultyButtonText}
        <img src={downArrow} alt="asdf" />
      </button>
      <div
        className="drop-down-content"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className="categories-list difficulty">
          <ul>
            {props.difficulties.map((element, id) => {
              return (
                <li
                  key={id}
                  onClick={(e) => {
                    setDifficultyButtonText(e.target.innerText);
                    props.setChoosenDifficulty(e.target.innerText);
                    difficultyButtonRef.innerHTML = difficultyButtonText;
                    handleDropDown();
                  }}
                >
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DifficultyDropDownButton;
//<div> Icons made by <a href="https://www.flaticon.com/authors/creativecons" title="CreativeCons"> CreativeCons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
