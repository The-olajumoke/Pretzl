import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

function ChooseBtn({ onClick, src, mode, text,color }) {
  console.log(onClick);
  const [activeBtn, setActiveBtn] = useState(null);
  return (
    <div
      // style={{ width: "426px" }}
      onClick={onClick}
      id="user"
      className=" mb-4 sm:mb-8  bg-inputField rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-24  hover:bg-primary hover:text-white w-full m-0"
    >
      <div className="  flex justify-center">
        <img src={src} alt="" className="w-1/2 sm:w-auto " />
      </div>
      <div className="  col-span-3">
        <h3 className=" font-semibold sm:font-black">{mode}</h3>
        <h5 className=" leading-relaxed  sm:text-sm  text-xs ">{text}</h5>
      </div>

      <div className=" flex justify-center">
        <FiArrowRight
          className={`h-6 w-6 justify-center ${color} items-center`}
        />
      </div>
    </div>
  );
}

export default ChooseBtn;
