import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-inputField py-5 px-10 flex flex-col justify-between  w-full h-auto">
      <ul className=" flex flex-col text-center  sm:flex-row w-full md:w-2/5 mb-3 justify-between text-textBody">
        {/* <li className="mb-2 sm:mb-0">
          <NavLink activeClassName="activeLink" to="/about">
            ABOUT
          </NavLink>
        </li> */}
        <li className="mb-2 sm:mb-0">
          <NavLink activeClassName="activeLink" to="/">
            ABOUT
          </NavLink>
        </li>
        <li className="mb-2 sm:mb-0">
          <NavLink activeClassName="activeLink" 
          to="/">
            PRODUCT
          </NavLink>
        </li>
        <li className="mb-2 sm:mb-0">
          <NavLink activeClassName="activeLink" to="/">
            PRICING
          </NavLink>
        </li>
        <li className="mb-2 sm:mb-0">
          <NavLink activeClassName="activeLink" to="/">
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-col text-center sm:flex-row justify-between text-sm text-textBody">
        <span cla>Copyright 2021 Fuego LLC.</span>
        <span>Privacy Policy | Terms of Use</span>
      </div>
    </div>
  );
}

export default Footer;
