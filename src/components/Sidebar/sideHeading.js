import React from "react";
import toggleBtn3 from "../../Exports/Toggle.svg";
import Logo2 from "../../Exports/inso 4.svg";
function SideHeading({ navSize, setNavSize, handleClick, icon }) {
  return (
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
  );
}

export default SideHeading;
