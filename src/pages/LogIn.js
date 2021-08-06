import React from "react";

import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

import LogFormat from "../components/SignInCont";
import FormInput from "../components/SignUp/FormInput";
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
          <div className=" my-5 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl  shadow-2xl p-0 sm:p-20">
            <MdClose
              onClick={() => setShowModal((prev) => !prev)}
              className="text-black absolute right-5 top-3 ms:right-10 ms:top-10 cursor-pointer  h-8 w-8"
            />
          
            <div className="border h-auto p-2">
              {/* first button layout */}
              <FormInput
                label="Email address"
                placeholder="Enter email..."
                type="email"
                name="email"
              />
              <FormInput
                label="Username"
                placeholder="Enter Username..."
                type="type"
                name="username"
              />
              {/* button */}
              <button className=" bg-secondary w-full border p-3 rounded-full  text-lg flex justify-center px-10 items-center">
                Log In
                <FiArrowRight className="mx-3 h-6 w-6 justify-center items-center text-white" />
              </button>
            </div>
          </div>
        </LogFormat>
      ) : null}
    </>
  );
};

export default LogIn;
