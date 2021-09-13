import React from "react";
import { MdClose } from "react-icons/md";
function SignInCont({
  children,
  title,
  largeText,
  extraText,
  showModal,
  setShowModal,
  setactiveModal,
}) {
  return (
    <div className="bg-white sm:bg-opacity-95   sm:pt-2 p-1 h-auto w-full bottom-0 left-0 top-0 fixed   flex flex-col justify-center items-center z-50 font-Poppins">
      <div className="border content relative  border-white h-auto lg:h-4/5 overflow-y-scroll  lg:overflow-y-hidden text-white   w-full lg:w-1080 xl:w-2/3 desktop:h-5/6 ">
        {/* RESPONSIVE CLOSEBUTTON */}
        <div className="lg:hidden flex  text-primary h-auto items-center justify-between mb-4 text-xl p-2  ">
          <h1>{title}</h1>
          <MdClose
            onClick={() => setactiveModal(false)}
            className=" text-black cursor-pointer  h-8 w-8"
          />
        </div>
        {/*//////// */}

        <div className=" flex flex-col lg:grid gap-0 sm:grid-cols-5 w-full h-full  ">
          <div className="bg-primary w-full rounded-3xl  mb-4 sm:mb-0 sm:rounded-l-3xl sm:rounded-r-3xl lg:rounded-r-none xl:w-full sm:rounded-none col-span-2 p-2 sm:p-5 sm:pr-10 relative flex flex-col  items-center  h-44 sm:h-72  md:h-72 lg:h-full  desktop:h-full">
            <div className="w-full flex flex-col justify-between h-full text-left sm:h-full p-7 sm:py-4">
              <h4 className="hidden flex-wrap lg:flex text-base sm:text-md sm:text-2xl">
                {title}
              </h4>

              <div className=" h-full flex flex-col justify-evenly">
                <h1 className="border-4 border-primary largeText flex sm:items-center  text-3xl md:text-5xl  xl:text-signCont w-full  font-medium">
                  {largeText}
                </h1>
                {extraText ? (
                  <h5 className="leading-8 text-sm sm:text-lg  font-thin">
                    {extraText}
                  </h5>
                ) : (
                  <h5 className=" text-primary"></h5>
                )}
              </div>
            </div>
          </div>
          {/* CONTENT */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default SignInCont;
