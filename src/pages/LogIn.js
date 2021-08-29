import React from "react";

import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

import LogFormat from "../components/SignInCont";
import FormInput from "../components/SignUp/FormInput";
const LogIn = ({ showModal, setShowModal }) => {
  const openSignUp = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {showModal ? (
        <LogFormat
          title="Log In"
          largeText="Welcome to Inso."
          extraText="Create an account to gain full access to our features."
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <div className=" my-5 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl  shadow-2xl p-0 sm:p-20 sm:pb-12">
            <MdClose
              onClick={() => setShowModal((prev) => !prev)}
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
                <button className="mt-10 sm:mt-12 bg-button w-full  p-3 rounded-full text-gray  text-xl flex justify-center px-10 items-center hover:text-white">
                  Log In
                </button>
                <h3 className=" text-base text-textBody text-center my-4">
                  If you don't have an account,
                  <button
                    onClick={openSignUp}
                    className="text-primary"
                  >
                    Sign up
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </LogFormat>
      ) : null}
    </>
  );
};

export default LogIn;
