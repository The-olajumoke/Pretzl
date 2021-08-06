import React from "react";
import blueIcon from "../Exports/blueIcon.svg";
import pinkIcon from "../Exports/pinkIcon.svg";
import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import LogFormat from "../components/SignInCont";

export const SignUp = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <LogFormat
          title="Sign Up"
          largeText="How would you like to sign in?"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <div className="border flex flex-col justify-around  col-span-3 w-full border-secondary rounded-none sm:rounded-r-3xl  shadow-2xl  sm:p-20">
            <MdClose
              onClick={() => setShowModal((prev) => !prev)}
              className="text-black absolute right-5 top-3 ms:right-10 ms:top-10 cursor-pointer  h-8 w-8"
            />
            <h3 className="font-semibold text-black text-sm sm:text-3xl">
              Join Discussion!
            </h3>

            <div className=" bg-primary p-2">
              <div className="my-5 rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-28">
                <div className=" flex justify-center">
                  <img src={pinkIcon} alt="" className=" " />
                </div>
                <div className=" bg-primarycol-span-3">
                  <h3 className="font-black">As User</h3>
                  <h4 className="leading-relaxed text-md">
                    Create an Account to begin. Log in if you have one already,
                  </h4>
                </div>

                <div className="flex justify-center">
                  <FiArrowRight className="h-6 w-6 justify-center items-center text-secondary" />
                </div>
              </div>
              <div className="my-5 bg-inputField rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-28 ">
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
              </div>
              <button className=" bg-secondary w-full border p-3 rounded-full  text-lg flex justify-center px-10 items-center">
                Continue
                <FiArrowRight className="mx-3 h-6 w-6 justify-center items-center text-white" />
              </button>
            </div>
          </div>
        </LogFormat>
      ) : null}
    </>
  );
};
