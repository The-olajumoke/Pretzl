import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import SideHeading from "./Sidebar/sideHeading";
import "../Styling/BodyWrapper.css";
import toggleBtnOpen from "../Exports/Toggle.svg";

import toggleBtnClosed from "../Exports/Hamburger.svg";
function BodyWrapper({ children }) {
  const [navSize, setNavSize] = useState("large");
  const [bodySize, setBodySize] = useState("mid");
  const [newIcon, setNewIcon] = useState(toggleBtnOpen);

  const handleClick = () => {
    console.log("clicked");
    if (navSize == "small") {
      setNewIcon(toggleBtnOpen);
      setNavSize("large");
      setBodySize("mid");
    } else {
      setNewIcon(toggleBtnClosed);
      setNavSize("small");
      setBodySize("full");
      //
    }
  };
  return (
    <div className="body-wrapper font-Poppins">
      <SideHeading
        navSize={navSize}
        setNavSize={setNavSize}
        handleClick={handleClick}
        icon={newIcon}
        setNewIcon={setNewIcon}
      />
      <div className=" secondCont flex">
        <Sidebar navSize={navSize} setNavSize={setNavSize} />
        {/* {Children} */}
        <div className={`secondContItem  w-full`}>{children}</div>
      </div>
    </div>
  );
}

export default BodyWrapper;
