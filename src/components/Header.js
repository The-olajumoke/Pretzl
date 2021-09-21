import React, { useState } from "react";
import Logo from "../Exports/inso 4@2x.png";

import history from "../utils/history";
function Header() {
  const [userModal, setUserModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const [activeModal, setActiveModal] = useState(false);
  const openUserModal = () => {
    setUserModal((prev) => !prev);
    console.log(userModal);
  };
  const openLoginModal = () => {
    setLoginModal((prev) => !prev);
  };
  const handleActiveModal = (e) => {
    setActiveModal(e.target.name);
  };

  return (
    <>
      <div className="flex justify-between items-center my-6 h-20 sm:h-auto  w-full p-0 sm:p-2 sm:px-8 md:pr-0 ">
        <div className="flex  justify-center sm:justify-start items-center h-full sm:h-auto  w-30 sm:w-1/2 ml-4">
          <img
            className="w-full h-1/2 sm:w-2/5 md:w-2/3 lg:w-1/3  "
            src={Logo}
            alt="logo"
          />
        </div>
        <div className=" flex h-full sm:h-auto w-70 md:w-full  items-center justify-end  sm:justify-end sm:p-5">
          <button
            name="chooseUser"
            className=" border-2 mr-4 md:mx-2  w-35 sm:w-auto text-primary border-solid  text-base  md:text-lg  border-border rounded-full px-1 sm:px-12 py-1 hover:bg-border hover:text-white extralarge:text-xl extralarge:w-2/12"
            // onClick={openUserModal}
            // onClick={handleActiveModal}
            onClick={() => {
              history.push("./sign-up");
            }}
          >
            Sign up
          </button>
          <button
            name="logInUser"
            className=" border-2  mr-4  md:mx-2 w-35  sm:w-auto text-primary border-solid  text-base md:text-lg border-border sm:rounded-full px-1 rounded-3xl sm:px-8 md:px-12 py-1 hover:bg-border hover:text-white extralarge:text-xl extralarge:w-2/12 "
            // onClick={openLoginModal}
            // onClick={handleActiveModal}
            onClick={() => {
              history.push("log-in");
            }}
          >
            Log in
          </button>
        </div>

        {/* <Modal activeModal={activeModal} setactiveModal={setActiveModal} /> */}
      </div>
    </>
  );
}

export default Header;
