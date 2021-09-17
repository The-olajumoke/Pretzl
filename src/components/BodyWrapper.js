import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import SideHeading from "./Sidebar/sideHeading";
import toggleBtnOpen from "../Exports/Toggle.svg";

import toggleBtnClosed from "../Exports/inso 4.svg"
function BodyWrapper({ children }) {
  const [navSize, setNavSize] = useState("large");
  const [bodySize, setBodySize] = useState("mid");
  const [newIcon, setNewIcon] = useState(toggleBtnOpen);

  const handleClick = () => {
      console.log("clicked");
    if (navSize == "small") {
      setNavSize("large");
      setBodySize("mid");
      setNewIcon(toggleBtnOpen);


    } else {
      setNavSize("small");
      setBodySize("full");
      setNewIcon(toggleBtnClosed);
// 
    }
  };
  return (
    <div className="body-wrapper">
      <SideHeading
        navSize={navSize}
        setNavSize={setNavSize}
        handleClick={handleClick}
        icon={newIcon}
        setNewIcon={setNewIcon}
      />
      <div className="">
        <Sidebar navSize={navSize} setNavSize={setNavSize} />
        {/* {Children} */}
      </div>
    </div>
  );
}

export default BodyWrapper;
