import React, { useState } from "react";
import * as Yup from "yup";

import firstIcon from "../Exports/firstIcon.svg";
import secondIcon from "../Exports/secondIcon.svg";
 import whiteicon from "../Exports/whiteicon.svg";
import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
function ChooseUser({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [ chosenOption, setChosenOption] = useState(false);
  

  const setUserActive = () => {
    setUser(true);
    setGuest(false);
    setContinueBtn(true);
    setChosenOption("signUp1");
  };
  const setGuestActive = () => {
    setUser(false);
    setGuest(true);
    setContinueBtn(true);
    setChosenOption("logInGuest");

  };
 

  const handleChooseUser = (e) => {
    const signModal =e.target.name
setactiveModal(`${signModal}`)  
  
  };
  return (
    <SignInCont
      title="Sign Up"
      largeText="How would you like to log in?"
      setactiveModal={setactiveModal}
      width="w-1/2"
    >
      {
        <div className=" bg-white  flex flex-col justify-between items-center col-span-3 w-fullh-full rounded-r-none sm:rounded-r-3xl  sm:shadow-2xl  p-0  sm:p-12 ">
          <MdClose
            onClick={() => setactiveModal(false)}
            className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
          />
          <div className=" h-full p-0 sm:py-8 sm:px-12 flex flex-col justify-around">
            <h3 className="my-6 sm:my-5 lg:my-0 font-normal sm:font-semibold lg:text-left text-center  w-full text-black text-lg pl-3 sm:text-2xl">
              Join Discussion!
            </h3>

            <div className="p-2 flex flex-col w-full">
              {/* BUTTON*/}
              {/* USER */}
              <button
                onClick={setUserActive}
                id="user"
                className={`mb-5 sm:mb-8 rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-24   w-full m-0 ${
                  user ? "bg-primary" : "bg-inputField"
                }`}
              >
                <div className="  flex justify-center">
                  <img
                    src={user ? whiteicon : firstIcon}
                    alt="currentIcon"
                    className="w-1/2 sm:w-auto "
                  />
                </div>
                <div
                  className={`col-span-3 ${
                    user ? "text-white" : " text-textBody"
                  }`}
                >
                  <h3 className=" text-left font-semibold sm:font-black text-boldtext">
                    As User
                  </h3>
                  <h5
                    className={`text-left leading-relaxed  sm:text-sm  text-xs  ${
                      user ? "text-white" : "text-desc"
                    }`}
                  >
                    Create an Account to begin. Log in if you have one already
                  </h5>
                </div>

                <div className=" flex justify-center">
                  <FiArrowRight
                    className={`h-6 w-6 justify-center ${
                      user ? "text-white" : " text-primary"
                    } items-center`}
                  />
                </div>
              </button>
              {/* GUESt */}
              <button
                onClick={setGuestActive}
                id="user"
                className={`mb-5 sm:mb-8 rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-24   w-full m-0 ${
                  guest ? "bg-primary" : "bg-inputField"
                }`}
              >
                <div className="  flex justify-center">
                  <img
                    src={guest ? whiteicon : secondIcon}
                    alt="currentIcon"
                    className="w-1/2 sm:w-auto "
                  />
                </div>
                <div
                  className={`col-span-3 ${
                    guest ? "text-white" : " text-textBody"
                  }`}
                >
                  <h3 className=" text-left font-semibold sm:font-black text-boldtext">
                    As Guest
                  </h3>
                  <h5
                    className={`text-left leading-relaxed  sm:text-sm  text-xs ${
                      guest ? "text-white" : "text-desc"
                    }`}
                  >
                    Join Discussion and create account later.
                  </h5>
                </div>

                <div className=" flex justify-center">
                  <FiArrowRight
                    className={`h-6 w-6 justify-center ${
                      guest ? "text-white" : " text-border"
                    } items-center`}
                  />
                </div>
              </button>

              {continueBtn ? (
                <button
                  className=" w-full bg-border border p-3 rounded-full  text-lg flex justify-center px-10 items-center mt-0 sm:mt-6"
                  onClick={handleChooseUser}
                  name={chosenOption}
                >
                  Continue
                  <FiArrowRight className="mx-3 h-6 w-6 justify-center items-center text-white" />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      }
    </SignInCont>
  );
}
export default ChooseUser;