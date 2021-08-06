import React from 'react'

import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

import LogFormat from "../components/LogFormat";
const LogIn = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <LogFormat
          title="Log In"
          largeText="Welcome to Pretzl."
          extraText="Create an account to gain full access to our features."
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <div className="border flex flex-col justify-around bg-white col-span-3 w-full border-secondary  rounded-r-3xl  shadow-2xl    p-20">
            <MdClose
              onClick={() => setShowModal((prev) => !prev)}
              className="text-black absolute right-10 top-10 cursor-pointer z-20 h-8 w-8"
            />
            <h3 className="font-semibold text-black text-3xl">
              Donot Join Discussion!
            </h3>

            <div className=" p-2">
              {/* first button layout */}
              <div className="my-5 bg-inputField rounded-lg p-3  items-center cursor-pointer  text-black h-28">
                <input type="text" className="h-full w-full" placeholder="enter email address" />
              </div>
              {/* secondbutton layout */}
              <div className="my-5 bg-inputField rounded-lg p-3 items-center cursor-pointer  text-black h-28 ">
                <input type="text" className="h-full w-full" placeholder="enter Password" />
              </div>
              {/* button */}
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

export default LogIn
