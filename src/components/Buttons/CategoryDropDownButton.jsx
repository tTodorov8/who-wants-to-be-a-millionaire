import React from "react";
import downArrow from "../../assets/images/down-arrow.png";
import { useState, useRef } from "react";

function CategoryDropDownButton(props) {
  const filteredCategories = () => {
    const uniqueCategories = [];
    props.questions.forEach((question) => {
      if (!uniqueCategories.includes(question.category)) {
        uniqueCategories.push(question.category);
      }
    });
    console.log(uniqueCategories);
    return uniqueCategories;
  };

  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState("category");
  const buttonRef = useRef("");
  function handleDropDown() {
    setIsVisible((visible) => !visible);
  }

  return (
    <>
      <button
        className="drop-down-button"
        onClick={handleDropDown}
        ref={buttonRef}
      >
        {buttonText}
        <img src={downArrow} alt="asdf" />
      </button>
      <div
        className="drop-down-content"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className="categories-list">
          <ul>
            {filteredCategories().map((element, id) => {
              return (
                <li
                  key={id}
                  onClick={(e) => {
                    setButtonText(e.target.innerText);
                    buttonRef.innerHTML = buttonText;
                    console.log(buttonText);
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

export default CategoryDropDownButton;
//<div> Icons made by <a href="https://www.flaticon.com/authors/creativecons" title="CreativeCons"> CreativeCons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
