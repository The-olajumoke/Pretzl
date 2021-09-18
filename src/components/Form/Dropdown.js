import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import FormErrorMessage from "./FormErrorMessage";
import "../../Styling/CustomInput.css";
function Dropdown({
  name,
  label,
  selected,
  initial,
  setSelected,
  options,
  isActive1,
  setIsActive1,
  setIsActive2,
  setIsActive3,
}) {
  const [isActive, setIsActive] = useState(false);
  // console.log(selected,initial)
  return (
    <div className="drop-container ">
      <label className="">{label}</label>
      <div className="dropdown">
        <div
          className=" dropdown-btn "
          onClick={(e) => {
            setIsActive1(!isActive1);
            setIsActive2(false);
            setIsActive3(false);
          }}
        >
          {selected== "" ? (
            <h2 className="placeholder">{initial}</h2>
          ) : (
            <h2 className="selected">{selected}</h2>
          )}
          <MdKeyboardArrowDown style={{ width: "24px", height: "24px" }} />
        </div>
        {isActive1 && (
          <div className=" dropdown-content  bg-white  z-10 w-3/4 p-0">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={(e) => {
                  setSelected(option);
                  setIsActive1(false);
                }}
                className="dropdown-item  border-b-2 text-textBody border-placeholder border-opacity-5"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* {selected === initial ? (
        <FormErrorMessage name={name} />
      ) : null} */}
      <FormErrorMessage name={name} />
    </div>
  );
}

export default Dropdown;
