import React from "react";
import "../Styling/signInCont.css";
import { MdClose } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import history from "../utils/history";

function SignInCont({
  children,
  title,
  largeText,
  extraText,
  backBtnFunction,
}) {
  return (
    <div className=" main-container  font-Poppins">
      <div className="sub-container  text-white bg-white ">
        {/* RESPONSIVE CLOSEBUTTON */}
        <div className="mediumForHiddenBtn:hidden flex  text-primary h-auto items-center justify-between text-base sm:text-xl mb-4 py-2  w-full ">
          <FiArrowLeft
            // onClick={}
            onClick={backBtnFunction}
            className="backIconsm"
          />
          <h1 className=" text-textBody">{title}</h1>
          <MdClose
            onClick={() => {
              history.push("./");
            }}
            className=" text-primary cursor-pointer  h-8 w-8"
          />
        </div>
        {/*//////// */}

        <div className="left-container bg-primary ">
          <h4 className="title ">{title}</h4>

          <h1 className="largeText">{largeText}</h1>
          {extraText ? (
            <h5 className="extraText ">{extraText}</h5>
          ) : (
            <h5 className=""></h5>
          )}
        </div>
        {/* CONTENT */}
        <div className="right-container bg-white relative p-0">{children}</div>
      </div>
    </div>
  );
}

export default SignInCont;
