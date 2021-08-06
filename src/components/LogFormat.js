import React from "react";
import img from "../Exports/Group 1364.png";

function LogFormat({ children, title,largeText,extraText }) {

  return (
    <div className="bg-white w-full h-full fixed flex flex-col justify-center items-center">
      <div className="relative w-7/12 border-white  h-4/5  text-white grid grid-cols-6  gap-0 z-100  sm:grid-cols-5">
        <div className="border w-full bg-primary rounded-l-3xl col-span-2 p-5 border-secondary relative flex flex-col  items-center">
          <div className=" h-3/4  flex flex-col justify-between p-7">
            
            <h4 className="text-xl">{title}</h4>
            <h1 className="text-6xl font-medium leading-snug">{largeText} </h1>
            {extraText ? <h5>{extraText}</h5> : ""}
          </div>

          <img className="absolute bottom-0" src={img} alt="pretzl-logo" />
        </div>
        {/* CONTENT */}
        {children}
      </div>
    </div>
  );
}

export default LogFormat;
