import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-footer py-5 px-10 flex flex-col justify-between  w-full h-auto leading-relaxed">
      <ul className="flex flex-col text-center  sm:flex-row w-full md:w-1/2 mb-3 justify-between text-textBody text-base">
        {/* <li className="mb-2 sm:mb-0">
          <NavLink activeClassName="activeLink" to="/about">
            ABOUT
          </NavLink>
        </li> */}
        <li className=" mb-3 sm:mb-0">
          <NavLink
            className=""
            to="/"
          >
            ABOUT
          </NavLink>
        </li>
        <li className=" mb-3 sm:mb-0">
          <NavLink  to="/">
            PRODUCT
          </NavLink>
        </li>
        <li className=" mb-3 sm:mb-0">
          <NavLink  to="/">
            PRICING
          </NavLink>
        </li>
        <li className=" mb-3 sm:mb-0">
          <NavLink  to="/">
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-col text-center sm:flex-row justify-between text-sm text-textBody">
        <span cla>Copyright 2021 Pretzl LLC.</span>
        <span>Privacy Policy | Terms of Use</span>
      </div>
    </div>
  );
}

export default Footer;
