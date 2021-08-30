import React, { useState } from "react";
import firstIcon from "../Exports/firstIcon.svg";
import secondIcon from "../Exports/secondIcon.svg";
import FormInput from "../components/SignUp/FormInput";
import whiteicon from "../Exports/whiteicon.svg";
import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
function Modal({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);

  const setUserActive = () => {
    setUser(true);
    setGuest(false);
    setContinueBtn(true);
  };
  const setGuestActive = () => {
    setUser(false);
    setGuest(true);
    setContinueBtn(true);
  };
const onInput = () => {
    setLoginBtn((prev)=>!prev);
};
  return (
    <div>
      {/* CHOOSEUSER */}
      {activeModal === "signUp" ? (
        <SignInCont
          title="Sign Up"
          largeText="How would you like to sign in?"
          setactiveModal={setactiveModal}
        >
          {
            <div className=" bg-white  flex flex-col justify-between items-center col-span-3 w-full h-full sm:h-auto   rounded-r-none sm:rounded-r-3xl  shadow-2xl  p-0  sm:p-12 ">
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
                        Create an Account to begin. Log in if you have one
                        already
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
            </div>
          }
        </SignInCont>
      ) : null}

      {/* LOGIN */}
      {activeModal === "logIn" ? (
        <SignInCont
          title="Log In"
          largeText="Welcome to Inso."
          extraText="Create an account to gain full access to our features."
         
          setactiveModal={setactiveModal}
        >
          <div className=" my-5 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl  shadow-2xl p-0 sm:p-20 sm:pb-12">
            <MdClose
          
              onClick={() => setactiveModal(false)}
              className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
            />

            <div className="h-auto sm:h-full flex flex-col justify-evenly p-2 sm:pt-5">
              {/* first button layout */}
              <div>
                <FormInput
                  label="Email address"
                  placeholder="Enter email..."
                  type="email"
                  name="email"
                //   onInpu

                />
                <FormInput
                  label="Username"
                  placeholder="Enter username..."
                  type="type"
                  name="username"
                />
              </div>
              {/* button */}
              <div className="">
                <button className={`mt-10 sm:mt-12 w-full  p-3 rounded-full ${loginBtn?"bg-primary":"bg-inputField"} text-btnText  text-xl flex justify-center px-10 items-center hover:text-white`}>
                  Log In
                </button>
                <h3 className=" text-base text-textBody text-center my-4">
                  If you don't have an account,
                  <button
                    onClick={() => setactiveModal("signUp")}
                    className="text-primary"
                  >
                    Sign up
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </SignInCont>
      ) : null}
    </div>
  );
}

export default Modal;
