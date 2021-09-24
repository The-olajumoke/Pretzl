import { NavLink } from "react-router-dom";
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import NavIcon from "./NavIcon";
import history from "../../utils/history";

function NavItem({ navSize, title, icon, path, active }) {
  // console.log(path);
  const bg = history.location.pathname===path?"bg-primary":""
  const color = history.location.pathname===path?"text-white":"text-textBody"
  const iconColor = history.location.pathname===path?"text-white":"text-primary"

  return (
    // <NavLink className="ring" to={path}>
    <button
      onClick={() => history.push(`${path}`)}
      className={`navItem ${navSize == "small" ? "px-0" : "px-12"}
    ${navSize == "small" ? "justify-end" : "justify-items-start"}
    ${navSize == "small" ? "pr-5" : ""} ${bg}  `}
    >
      <NavIcon
        className={`nav-icon ${navSize == "small" ? "" : "mr-4"} ${iconColor}`}
        icon={icon}
      />
      <h3
        className={`nav-text ${
          navSize == "small" ? "hidden" : "flex"
        } ${color} }`}
      >
        {title}
      </h3>
    </button>
    // </NavLink>
  );
}

export default NavItem;
