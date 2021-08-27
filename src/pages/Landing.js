import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingImg from "../Exports/landingimg.svg"
import landingCircle from "../Exports/landingcircle.svg"
import { FiMessageSquare } from "react-icons/fi";
const Landing = () => {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className=" h-auto sm:h-screen font-Poppins w-full flex flex-col items-center justify-between">
      <Header />
      <div className="p-0 mb-28  px-0 sm:pl-6 flex flex-col sm:flex-row items-center mt-5 sm:mt-0 justify-between w-11/12  sm:w-full">
        <div className=" sm:w-1/2 p-0 sm:px-4 ">
          <div className=" w-full sm:w-full  mb-4">
            <h1 className="font-semibold leading-loose text-3xl md:text-4xl md:leading-relaxed lg:text-big lg:leading-loose sm:font-medium   mb-8 sm:mb-3">
              Share ideas, discover meaning
            </h1>
            <h4 className="text-sm md:text-base leading-10 sm:leading-8 font-medium sm:font-normal text-textBody ">
              Education, presentations, collaboration. Now, you can interact
              easily and seamlessly.
            </h4>
          </div>
          <div className="w-full flex flex-col mb-7  sm:flex-row sm:mb-0 ">
            <div className="grid grid-cols-1 xl:grid-cols-2 sm:gap-4 w-full justify-between sm:w-9/12 pl-0 p-2 items-center">
              <button className=" relative flex items-center   justify-evenly  text-center border-primary  bg-primary p-3 rounded-full mb-5 text-white  w-3/4  sm:w-full sm:mb-0 md:text-base lg:text-xl ">
                <FiMessageSquare className="button" />
                Create discussion
              </button>
              <input
                type="text"
                value={value}
                onChange={handleKey}
                className="border border-border p-3 rounded-full outline-none w-full md:text-base"
                placeholder="Enter Inso link"
              />
            </div>

            {value.length > 0 && (
              <button className="text-center p-3 text-xl text-textBody font-medium">
                Join
              </button>
            )}
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
