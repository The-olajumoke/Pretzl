import React from "react";
import "../../Styling/BodyWrapper.css";
function NavIcon({ icon, className}) {
  return (
    <div className={`${className}`}>
  {icon}
  </div>
  );
}

export default NavIcon;
