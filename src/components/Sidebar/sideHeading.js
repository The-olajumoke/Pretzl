import React, { useState } from "react";
import toggleBtn3 from "../../Exports/Toggle.svg";
import Logo2 from "../../Exports/inso 4.svg";
import Logo from "../../Exports/inso 4.png";
import toggleBtnClosed from "../../Exports/Hamburger.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import ResponsiveSideBar from "./ResponsiveSideBar";
import Sidebar from "./Sidebar";
function SideHeading({
  navSize,
  setNavSize,
  handleClick,
  icon,
ResponsiveHandleClick
}) {
  return (
    <>
      <div
        className={`sideHeading  py-4 pr-12 ${
          navSize == "small" ? "pl-7" : "pl-12"
        }
          ${navSize == "small" ? "pr-6" : ""}

      `}
      >
        <div className="sideHeading-logoCont">
          <button onClick={handleClick}>
            <img className="toggleBtn" src={icon} alt="" />
          </button>
          <img className="heading-logo" src={Logo2} alt="" />
        </div>
      </div>
      {/* RESPONSIVE SIDEBAR */}
      <div className="responsiveHeader">
        <button>
          <img
            className="toggleBtn"
            src={toggleBtnClosed}
            onClick={ResponsiveHandleClick}
            alt=""
          />
        </button>
        <img src={Logo} alt="" />
        <div>
          <IoMdNotificationsOutline className="notiBtn" />
        </div>
      </div>
      {/* {navOpen ? <Sidebar navSize={navSize} /> : null} */}
    </>
  );
}

export default SideHeading;
