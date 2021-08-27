import React, { useState } from "react";
import firstIcon from "../Exports/firstIcon.svg"
import secondIcon from "../Exports/secondIcon.svg"

import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import ChooseBtn from "../components/SignUp/ChooseBtn";

export const ChooseUser = ({ showModal, setShowModal }) => {
  const [continueBtn, setContinueBtn] = useState(false);
 

  const handleClick=()=>{
    setContinueBtn(true);
      
  }
  return (
    <>
      {showModal ? (
        <SignInCont
          title="Sign Up"
          largeText="How would you like to sign in?"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          {
            <div className="flex flex-col justify-between items-center col-span-3 w-full   sm:rounded-r-3xl  shadow-2xl p-0 sm:p-20 ">
              <MdClose
                onClick={() => setShowModal((prev) => !prev)}
                className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
              />
              <h3 className=" font-normal sm:font-semibold  w-full text-black text-lg pl-3 sm:text-3xl">
                Join Discussion!
              </h3>

              <div className=" p-2 flex flex-col w-full">
                {/* BUTTON*/}

                <ChooseBtn
                  onClick={handleClick}
                  src={firstIcon}
                  mode="As User"
                  text="  Create an Account to begin. Log in if you have one already"
                  color="text-primary"
                />
                <ChooseBtn
                  onClick={handleClick}
                  src={secondIcon}
                  mode="As Guest"
                  text="Join Discussion and create account later."
                  color="text-secondary"
                />

                {continueBtn ? (
                  <button
                    className=" w-full bg-primary border p-3 rounded-full  text-lg flex justify-center px-10 items-center"
                    onClick={() => {}}
                  >
                    Continue
                    <FiArrowRight className="mx-3 h-6 w-6 justify-center items-center text-white" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          }
        </SignInCont>
      ) : null}
    </>
  );
};
