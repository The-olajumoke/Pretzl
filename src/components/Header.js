import React, { useState } from "react";

import { ChooseUser } from "../pages/ChooseUser";
import LogIn from "../pages/LogIn";
// import { SignUp } from "../pages/SignUp";
import Logo from "../Exports/logo.svg"
function Header() {
  const [userModal, setUserModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const openUserModal = () => {
    setUserModal((prev) => !prev);
    console.log(userModal)
  };
  const openLoginModal = () => {
    setLoginModal((prev) => !prev);
  };
  return (
    <>
      <div className=" flex justify-between items-center my-6  w-full sm:p-2 sm:px-8 md:pr-0 ">
        <div className="flex justify-start items-center w-1/3 sm:w-1/2">
          <img
            className="w-11/12 h-1/2 sm:w-2/3 lg:w-1/3 "
            src={Logo}
            alt="logo"
          />
        </div>
        <div className="grid grid-cols-2   lg:grid-cols-3  justify-around w-2/3 sm:flex md:w-full  items-center  sm:justify-end sm:p-5">
          <button
            className=" border-2 mx-1 md:mx-2 text-primary border-solid text-sm md:text-lg  border-primary rounded-full  sm:px-12 py-1.5 hover:bg-primary hover:text-white"
            onClick={openUserModal}
          >
            Sign Up
          </button>
          <button
            className=" border-2 mx-1 md:mx-2 text-primary border-solid text-sm md:text-lg border-primary rounded-full sm:px-8 md:px-12 py-1.5 hover:bg-primary hover:text-white "
            onClick={openLoginModal}
          >
            Log In
          </button>
        </div>

        {/* <SignUp showModal={userModal} setShowModal={setUserModal} /> */}
        <ChooseUser showModal={userModal} setShowModal={setUserModal} />
        <LogIn showModal={loginModal} setShowModal={setLoginModal} />
      </div>
    </>
  );
}

export default Header;
