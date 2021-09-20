// import {NavLink} from "react-router-dom"
import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import NavIcon from "./NavIcon";

function NavItem({ navSize, title, icon, path,active }) {
  // console.log(path);
  console.log(navSize);
  return (
    // <NavLink to="./">
    <button
 
      className={`navItem ${navSize == "small" ? "px-0" : "px-12"}
    ${navSize == "small" ? "justify-end" : "justify-items-start"}
    ${navSize == "small" ? "pr-5" : ""} ${active && "bg-primary"}`}
    >
      <NavIcon
        className={`nav-icon ${navSize == "small" ? "" : "mr-4"}`}
        icon={icon}
      />
      <h3 className={`nav-text ${navSize == "small" ? "hidden" : "flex"} }`}>
        {title}
      </h3>
    </button>
    // </NavLink>
  );
}

export default NavItem;
