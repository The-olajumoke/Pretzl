import React, { useState } from "react";
import * as Yup from "yup";
import "../Styling/ChooseUser.css";
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

  const handleChooseGuest = () => {
    setactiveModal("logInGuest");

  };

  const handleChooseUser = () => {
    setactiveModal("signUp1");

  };
  return (
    <SignInCont
      title="Sign Up"
      largeText="How would you like to log in?"
      setactiveModal={setactiveModal}
      width="w-1/2"
      previousModal="false"
    >
      {
        <div className="  ">
          <MdClose
            onClick={() => setactiveModal(false)}
            className="hidden lg:flex text-primary absolute right-5 top-3 sm:right-0 sm:top-10 cursor-pointer  h-8 w-8"
          />
          <div className="main-content ">
            <h3 className=" section-title">Join Discussion!</h3>

            <div className="btn-Cont">
              {/* BUTTON*/}
              {/* USER */}
              <button
                onClick={handleChooseUser}
                id="user"
                className={`chooseBtn  ${
                  user ? "bg-primary" : "bg-inputField"
                }`}
              >
                <div className="  flex justify-center">
                  <img
                    src={user ? whiteicon : firstIcon}
                    alt="currentIcon"
                    className="img"
                  />
                </div>
                <div className=" btn-textCont">
                  <h3
                    className={`btn-mainText ${
                      user ? "text-white" : "text-boldtext"
                    }`}
                  >
                    As User
                  </h3>
                  <h5
                    className={`btn-subText  ${
                      user ? "text-white" : "text-desc"
                    }`}
                  >
                    Create an Account to begin. Log in if you have one already
                  </h5>
                </div>

                <div className=" flex justify-center">
                  <FiArrowRight
                    className={`icon ${
                      user ? "text-white" : " text-primary"
                    } items-center`}
                  />
                </div>
              </button>
              {/* GUESt */}

              <button
                onClick={handleChooseGuest}
                id="guest"
                className={`chooseBtn  ${
                  guest ? "bg-primary" : "bg-inputField"
                }`}
              >
                <div className="flex justify-center">
                  <img
                    src={guest ? whiteicon : secondIcon}
                    alt="currentIcon"
                    className="img"
                  />
                </div>
                <div className=" btn-textCont ">
                  <h3
                    className={`btn-mainText ${
                      guest ? "text-white" : "text-boldtext"
                    }`}
                  >
                    As Guest
                  </h3>
                  <h5
                    className={`btn-subText  ${
                      guest ? "text-white" : "text-desc"
                    }`}
                  >
                    Join Discussion and create account later.
                  </h5>
                </div>

                <div className=" flex justify-center">
                  <FiArrowRight
                    className={`icon ${
                      guest ? "text-white" : " text-border"
                    } items-center`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      }
    </SignInCont>
  );
}
export default ChooseUser;
