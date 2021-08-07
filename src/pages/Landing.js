import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../Exports/Group 123.svg";
import { FiMessageSquare } from "react-icons/fi";
const Landing = () => {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="h-auto sm:h-screen w-full flex flex-col items-center justify-between ">
      <Header />
      <div className=" mt-4 p-0 mb-28  px-0 sm:pl-6 flex flex-col sm:flex-row items-center justify-between w-11/12 sm:w-full">
        <div className="sm:w-1/2 p-0 sm:px-4 ">
          <div className="w-full sm:w-2/3 mb-4">
            <h1 className="font-semibold sm:font-medium leading-relaxed mb-8 sm:mb-3  text-4xl">
              Easy to use discussion media. Seamless and Interactive.
            </h1>
            <h4 className="text-lg leading-10 sm:leading-8 font-medium sm:font-normal text-textBody">
              Interactions have never been easier. Say something different in
              different ways.
            </h4>
          </div>
          <div className="w-full flex flex-col mb-7 sm:flex-row sm:mb-0 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 w-full justify-between sm:w-9/12 pl-0 p-2 items-center">
              <button className="border flex items-center text-center border-border bg-secondary p-3 rounded-full mb-5 text-white w-4/6 sm:w-auto sm:mb-0 ">
                <FiMessageSquare className="text-lg mr-2" />
                Create discussion
              </button>
              <input
                type="text"
                value={value}
                onChange={handleKey}
                className="border border-border p-3 rounded-full outline-none w-full"
                placeholder="Enter discussion link"
              />
            </div>

            {value.length > 0 && (
              <button className="text-center p-3 text-xl text-textBody font-medium">
                Join
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-evenly  items-center w-full  h-96 sm:w-1/2 sm:h-full overflow-hidden sm:overscroll-none">
          <img
            // style={{ height: "90%" }}
            className=" mockup transform translate-x-32 sm:transform-none "
            src={img}
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
