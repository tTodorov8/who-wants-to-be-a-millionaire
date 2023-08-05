import React from "react";
import downArrow from "../../assets/images/down-arrow.png";
import { useState } from "react";

function CategoryDropDownButton({
  categories,
  choosenCategory,
  setChoosenCategory,
}) {
  const [isVisible, setIsVisible] = useState(false);
  function handleDropDown() {
    setIsVisible((visible) => !visible);
  }

  return (
    <>
      <button className="drop-down-button" onClick={handleDropDown}>
        {choosenCategory || "Category"}
        <img src={downArrow} alt="asdf" />
      </button>
      <div
        className="drop-down-content"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className="categories-list category">
          <ul>
            {categories.map((element, id) => {
              return (
                <li
                  key={id}
                  onClick={(e) => {
                    setChoosenCategory(e.target.innerText);
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
