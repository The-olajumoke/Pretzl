import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

function ChooseBtn({ onClick, src, mode, text }) {
  console.log(onClick);
  const [activeBtn, setActiveBtn] = useState(null);
  return (
    <div
      onClick={onClick}
      id="user"
      className="my-5 bg-inputField rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-28 shadow-lg hover:bg-secondary"
    >
      <div className="  flex justify-center">
        <img src={src} alt="" className=" " />
      </div>
      <div className="  col-span-3">
        <h3 className=" font-black">{mode}</h3>
        <h4 className=" leading-relaxed text-sm  sm:text-md">{text}</h4>
      </div>

      <div className=" flex justify-center">
        <FiArrowRight className="h-6 w-6 justify-center items-center text-secondary" />
      </div>
    </div>
  );
}

export default ChooseBtn;
