import React, { useState } from "react";
// import { FiArrowRight } from "react-icons/fi";

function ChooseBtn({ onClick, src, mode, text }) {
  console.log(onClick);
//   const [activeBtn, setActiveBtn] = useState(null);
 // return (
    // <button
    //   onClick={handleUserClick}
    //   id="user"
    //   className={
    //     clickedUser ||
    //     "my-5 active rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-28"
    //   }
    // >
    //   <div className="  pointer-events-none flex justify-center">
    //     <img src={src} alt="" className=" pointer-events-none" />
    //   </div>
    //   <div className="pointer-events-none col-span-3">
    //     <h3 className="pointer-events-none font-black">{mode}</h3>
    //     <h4 className="pointer-events-none leading-relaxed text-md">{text}</h4>
    //   </div>

    //   <div className="flex justify-center">
    //     <FiArrowRight className="h-6 w-6 justify-center items-center text-secondary" />
    //   </div>
    // </button>
 // );
}

export default ChooseBtn;
