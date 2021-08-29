import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import whiteicon from "../../Exports/whiteicon.svg";

function ChooseBtn({ onClick, src, mode, text, color,name }) {
  console.log(onClick);
  console.log(src);

  const [activeIcon, setActiveIcon] = useState(false);
 
  const handleClick = () => {
    console.log("clicked");
    setActiveIcon((prev) => !prev);
    console.log(activeIcon);
    // onClick();
  };
  // if user is active set guest to false

  return (
    <button
      onClick={handleClick}
      name={name}
      id="user"
      className={`sm:mb-8 rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-24   w-full m-0 ${
        activeIcon ? "bg-primary" : "bg-inputField"
      }`}
    >
      <div className="  flex justify-center">
        <img
          src={activeIcon ? whiteicon : src}
          alt="currentIcon"
          className="w-1/2 sm:w-auto "
        />
      </div>
      <div
        className={`col-span-3 ${activeIcon ? "text-white" : " text-textBody"}`}
      >
        <h3 className=" text-left font-semibold sm:font-black">{mode}</h3>
        <h5 className="text-left leading-relaxed  sm:text-sm  text-xs ">
          {text}
        </h5>
      </div>

      <div className=" flex justify-center">
        <FiArrowRight
          className={`h-6 w-6 justify-center ${
            activeIcon ? "text-white" : { color }
          } items-center`}
        />
      </div>
    </button>
  );
}

export default ChooseBtn;
