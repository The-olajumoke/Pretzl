import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import SideHeading from "./Sidebar/sideHeading";
import "../Styling/BodyWrapper.css";
import toggleBtnOpen from "../Exports/Toggle.svg";

import toggleBtnClosed from "../Exports/Hamburger.svg";
import ResponsiveSideBar from "./Sidebar/ResponsiveSideBar";

function BodyWrapper({ children }) {
  const [navSize, setNavSize] = useState("large");
  const [bodySize, setBodySize] = useState("mid");
  const [newIcon, setNewIcon] = useState(toggleBtnOpen);
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
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

  const ResponsiveHandleClick = () => {
    setNavOpen((navOpen) => !navOpen);
  };
  return (
    <div className="body-wrapper font-Poppins">
      <SideHeading
        navSize={navSize}
        setNavSize={setNavSize}
        handleClick={handleClick}
        icon={newIcon}
        setNewIcon={setNewIcon}
     ResponsiveHandleClick={ResponsiveHandleClick}
      />

      {/* <ResponsiveSideBar/> */}
      <div className=" secondCont flex">
        {navOpen ? (
          <ResponsiveSideBar />
        ) : (
          <Sidebar navSize={navSize} setNavSize={setNavSize} />
        )}

        {/* {Children} */}
        <div className={`secondContItem `}>{children}</div>
      </div>
    </div>
  );
}

export default BodyWrapper;
