import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import FormErrorMessage from "./FormErrorMessage";
function Dropdown({name, label, selected, initial, setSelected ,options}) {

  const [isActive, setIsActive] = useState(false);
// console.log(selected,initial)
  return (
    <div className=" mb-5 my-2">
      <label className="text-primary">{label}</label>
      <div className=" dropdown bg-none rounded-md ring-1 ring-border w-full">
        <div
          className="dropdown-btn text-textBody"
          onClick={(e) => setIsActive(!isActive)}
        >
          {selected}

          <MdKeyboardArrowDown />
        </div>
        {isActive && (
          <div className=" dropdown-content  bg-white  z-10 w-3/4">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
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
      <FormErrorMessage name={name}/>
    </div>
  );
}

export default Dropdown;
