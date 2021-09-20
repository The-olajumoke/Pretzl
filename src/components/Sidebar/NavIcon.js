import React from "react";
import "../../Styling/BodyWrapper.css";
function NavIcon({ icon, className}) {
  console.log(icon.type);
  return (
    <div className={`${className}`}>
  {icon}
  </div>
  );
}

export default NavIcon;
