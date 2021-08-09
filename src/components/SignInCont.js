import React from "react";
import img from "../Exports/Group 1364.png";
import { MdClose } from "react-icons/md";
import {FaGripfire} from "react-icons/fa" 
function SignInCont({ children, title, largeText, extraText,showModal, setShowModal }) {
  return (
    <div
      style={{ height: "100vh" }}
      className=" bg-white sm:bg-opacity-80 pt-8 sm:pt-2 p-3 w-full h-full bottom-0 left-0 top-0 fixed flex flex-col justify-center items-center z-50"
    >
      <div className=" content relative  border-white h-full sm:h-4/5  text-white flex flex-col lg:grid gap-0 sm:grid-cols-5">
        <div className="lg:hidden flex  text-primary h-auto items-center justify-between mb-10 text-xl p-2  ">
          <h1>{title}</h1>
          <MdClose
            onClick={() => setShowModal((prev) => !prev)}
            className=" text-black cursor-pointer  h-8 w-8"
          />
        </div>

        <div className=" w-full bg-primary rounded-3xl mb-4 sm:mb-0 sm:rounded-l-3xl sm:rounded-none col-span-2 p-5  relative flex flex-col  items-center    h-1/3 sm:h-auto">
          <div className=" h-3/4  flex flex-col justify-between p-7">
            <h4 className="hidden sm:flex text-base sm:text-md sm:text-xl">
              {title}
            </h4>
            <h1 className=" text-3xl sm:text-6xl font-medium leading-relaxed">
              {largeText}
            </h1>
            {extraText ? <h5 className="text-md">{extraText}</h5> : ""}
          </div>

          <img
            className="right-0 sm:right-none absolute bottom-0 w-2/6 sm:w-auto"
            src={img}
            alt="pretzl-logo"
          />
          {/* <FaGripfire
            className="right-0 sm:right-none absolute bottom-0 w-full sm:w-auto"
          /> */}

        </div>
        {/* CONTENT */}
        {children}
      </div>
    </div>
  );
}

export default SignInCont;
