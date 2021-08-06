import React, { useState } from "react";
import blueIcon from "../Exports/blueIcon.svg";
import pinkIcon from "../Exports/pinkIcon.svg";
import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import LogFormat from "../components/LogFormat";
import ChooseBtn from "../components/SignUp/ChooseBtn";

export const ChooseUser = ({ showModal, setShowModal }) => {
  const [continueBtn, setContinueBtn] = useState(false);
  const [clickedUser, setClickedUser] = useState(false);
  const [clickedGuest, setClickedGuest] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);


  const handleUserClick = (e) => {
    e.preventDefault();
    clickedUser
      ? setClickedUser(" ")
      : setClickedUser(
          "my-5 bg-secondary rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-28"
        );
    setContinueBtn(true);
  };

  const handleGuestClick = (e) => {
    e.preventDefault();

    clickedGuest
      ? setClickedGuest(" ")
      : setClickedGuest(
          "my-5 bg-secondary rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-28"
        );
    setContinueBtn(true);
  };
  const showContinueBtn = (e) => {
    console.log(e.target);

    setContinueBtn((prev) => !prev);
  };

  const handleClick=()=>{
    setContinueBtn((prev) => !prev);
      
  }
  return (
    <>
      {showModal ? (
        <LogFormat
          title="Sign Up"
          largeText="How would you like to sign in?"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          {
            <div className="border flex flex-col justify-around bg-white col-span-3 w-full border-secondary  rounded-r-3xl  shadow-2xl    p-20">
              <MdClose
                onClick={() => setShowModal((prev) => !prev)}
                className="text-black absolute right-10 top-10 cursor-pointer z-20 h-8 w-8"
              />
              <h3 className="font-semibold text-black text-3xl">
                Join Discussion!
              </h3>

              <div className=" p-2">
                {/* BUTTON*/}

                <ChooseBtn
                  onClick={handleClick}
                  src={pinkIcon}
                  mode="As User"
                  text="  Create an Account to begin. Log in if you have one already"
                />
                <ChooseBtn
                  onClick={handleClick}
                  src={blueIcon}
                  mode="As Guest"
                  text="Join Discussion and create account later.
"
                />
                {/* BUTTON2 */}

                {/* <button
                  onClick={handleGuestClick}
                  id="guest"
                  className={
                    clickedGuest ||
                    "my-5 bg-inputField rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-28"
                  }
                >
                  <div className=" flex justify-center">
                    <img src={blueIcon} alt="" className=" " />
                  </div>
                  <div className="col-span-3">
                    <h3 className="font-black">As Guest</h3>
                    <h4 className="leading-relaxed text-md">
                      Join Discussion and create account later.
                    </h4>
                  </div>

                  <div className="flex justify-center">
                    <FiArrowRight className="h-6 w-6 justify-center items-center text-secondary" />
                  </div>
                </button> */}
                {continueBtn ? (
                  <button
                    className=" bg-secondary w-full border p-3 rounded-full  text-lg flex justify-center px-10 items-center"
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
        </LogFormat>
      ) : null}
    </>
  );
};
