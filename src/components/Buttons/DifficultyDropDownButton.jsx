import React from "react";
import downArrow from "../../assets/images/down-arrow.png";
import { useState } from "react";

function DifficultyDropDownButton({
  setChoosenDifficulty,
  choosenDifficulty,
  difficulties,
}) {
  const [isVisible, setIsVisible] = useState(false);

  function handleDropDown() {
    setIsVisible((visible) => !visible);
  }
  return (
    <>
      <button className="drop-down-button" onClick={handleDropDown}>
        {choosenDifficulty || "Difficulty"}
        <img src={downArrow} alt="asdf" />
      </button>
      <div
        className="drop-down-content"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className="categories-list difficulty">
          <ul>
            {difficulties.map((element, id) => {
              return (
                <li
                  key={id}
                  onClick={(e) => {
                    setChoosenDifficulty(e.target.innerText);
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
