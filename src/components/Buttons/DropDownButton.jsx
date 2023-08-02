import React from "react";
import downArrow from "../../assets/images/down-arrow.png";
import { useState } from "react";
let test = "TEST";
function DropDownButton({ text }) {
  const [isVisible, setIsVisible] = useState(true);

  function handleDropDown() {
    setIsVisible((visible) => !visible);
  }
  return (
    <>
      <button className="drop-down-button" onClick={handleDropDown}>
        {text}
        <img src={downArrow} alt="asdf" />
      </button>
      <div
        className="drop-down-content"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div>
          <ul>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropDownButton;
//<div> Icons made by <a href="https://www.flaticon.com/authors/creativecons" title="CreativeCons"> CreativeCons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
