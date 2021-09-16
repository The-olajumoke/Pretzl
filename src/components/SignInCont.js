import React from "react";
import "../Styling/signInCont.css";
import { MdClose } from "react-icons/md";
function SignInCont({
  children,
  title,
  largeText,
  extraText,
  showModal,
  setShowModal,
  setactiveModal,
}) {
  return (
    <div className=" main-container bg-white  font-Poppins">
      <div className="sub-container  text-white bg-white ">
        {/* RESPONSIVE CLOSEBUTTON */}
        <div className="lg:hidden flex  text-primary h-auto items-center justify-between text-base sm:text-xl mb-4 p-2  w-full  ">
          <h1>{title}</h1>
          <MdClose
            onClick={() => setactiveModal(false)}
            className=" text-black cursor-pointer  h-8 w-8"
          />
        </div>
        {/*//////// */}

        <div className="left-container bg-primary ">
          <h4 className="title  ">{title}</h4>

          <h1 className="largeText">{largeText}</h1>
          {extraText ? (
            <h5 className="extraText">{extraText}</h5>
          ) : (
            <h5 className="extraText text-primary"></h5>
          )}
        </div>
        {/* CONTENT */}
        <div className="right-container bg-white">{children}</div>
      </div>
    </div>
  );
}

export default SignInCont;
