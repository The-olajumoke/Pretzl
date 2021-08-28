import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingImg from "../Exports/landingimg.svg";
import landingCircle from "../Exports/landingcircle.svg";
import { FiMessageSquare } from "react-icons/fi";
const Landing = () => {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className=" h-auto sm:h-screen font-Poppins w-full flex flex-col items-center justify-between">
      <Header />
      <div className="p-0 mb-28  px-0 sm:pl-6 flex flex-col sm:flex-row items-center mt-8 sm:mt-0 justify-between w-11/12  sm:w-full">
        <div className="sm:w-1/2  p-0 sm:px-4 ">
          <div className=" w-full md:5/6 lg:w-4/5  mb-4">
            <div className="font-semibold leading-relaxed text-3xl md:text-4xl md:leading-relaxed lg:text-4xl xl:text-big lg:leading-tight sm:font-medium  mb-4 sm:mb-3">
              <h1>Share ideas,</h1>
              <h1> discover meaning.</h1>
            </div>
            <h4 className="w-4/5 md:5/6 text-md md:text-base leading-relaxed sm:leading-8 font-medium sm:font-normal text-textBody ">
              Education, presentations, collaboration. Now, you can interact
              easily and seamlessly.
            </h4>
          </div>
          <div className="w-full p-2 lg:w-11/12 mt-12 flex flex-col mb-7  xl:flex-row sm:mb-0 ">
            <div className="  justify-between  w-2/3 md:w-5/6 xl:w-2/5 pl-0 pr-0 xl:p-2 items-center">
              <button className=" relative flex items-center   justify-center  text-center border-primary  bg-primary p-3 rounded-full mb-5 text-white w-full sm:mb-0 md:text-base lg:text-xl xl:text-lg mr-0 ">
                <FiMessageSquare className="icon" />
                Create discussion
              </button>
            </div>
            <div className="flex items-center justify-between w-full mt-2 xl:mt-0 xl:w-3/5 px-0  xl:px-4">
              <input
                type="text"
                value={value}
                onChange={handleKey}
                className="border-2 border-border p-3 rounded-full outline-none  md:text-base lg:text-xl xl:text-lg   w-2/3  md:w-10/12  xl:w-3/4"
                placeholder="Enter Inso link"
              />
              {value.length > 0 && (
                <button className="text-center p-3 text-xl sm:text-xl text-textBody font-medium mr-4 md:mr-0 lg-mr-4">
                  Join
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=" mockupCont relative flex justify-evenly items-center w-full  h-96  lg:w-1/2 sm:w-2/5  sm:h-full overflow-hidden sm:overscroll-none">
          <img
            className=" circle transform translate-x-24 sm:translate-x-0  sm:ml-9"
            style={{ height: "600px", width: "600px" }}
            src={landingCircle}
            alt=""
          />
          <img
            // style={{ height: "90%" }}
            className="mockup "
            src={landingImg}
            draggable="false"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
