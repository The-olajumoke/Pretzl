import React, { useState } from "react";
import img from "../Exports/Pretzl Logo 1.png";
import { ChooseUser } from "../pages/ChooseUser";
import LogIn from "../pages/LogIn";
function Header() {
  const [userModal, setUserModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const openUserModal = () => {
    setUserModal((prev) => !prev);
  };
  const openLoginModal = () => {
    setLoginModal((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-center my-6  sm:w-11/12 sm:p-2 sm:pr-8 ">
        <div className="flex justify-start w-1/3 sm:w-1/2">
          <img className="w-full sm:w-1/3 " src={img} alt="logo" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  justify-around w-2/3 sm:flex  sm:w-1/2 items-center  sm:justify-end sm:p-5 ">
          <button
            className=" border-2 mx-1 sm:mx-2 text-border border-solid text-sm sm:text-lg  border-border rounded-full  sm:px-12 py-1.5 hover:bg-secondary hover:text-white"
            onClick={openUserModal}
          >
            Sign Up
          </button>
          <button
            className=" border-2 mx-1 sm:mx-2 text-border border-solid text-sm sm:text-lg border-border rounded-full sm:px-12 py-1.5 hover:bg-secondary hover:text-white "
            onClick={openLoginModal}
          >
            Log In
          </button>
        </div>

        <ChooseUser showModal={userModal} setShowModal={setUserModal} />
        <LogIn showModal={loginModal} setShowModal={setLoginModal} />
      </div>
    </>
  );
}

export default Header;
