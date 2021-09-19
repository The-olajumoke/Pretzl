import React from "react";
import NavIcon from "./NavIcon";

function NavItem({ navSize, title, icon }) {
  return (
    <button className="navItem">
      <NavIcon className="nav-icon" icon={icon} />
      <h3 className="nav-text">{title}</h3>
    </button>
  );
}

export default NavItem;
