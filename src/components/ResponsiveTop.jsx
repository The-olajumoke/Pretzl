import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdCollectionsBookmark } from "react-icons/md";
import img1 from "../Exports/Responsive/icon.svg";
import img2 from "../Exports/Responsive/icon2.svg";
import "../Styling/BodyWrapper.css";
import { BsThreeDotsVertical } from "react-icons/bs";
function responsiveTop({ title, dotHandle }) {
  return (
    <div className="responCont">
      <div className="cont1 ">
        <FiArrowLeft className="icon" />
        <h3>{title}</h3>
      </div>
      <div className="cont2">
        <div className="resIcon">
          <img src={img1} alt="" />
        </div>
        <div className="resIcon">
          <img src={img2} alt="" />
        </div>
        <div>
          <BsThreeDotsVertical onClick={dotHandle} className="ic" />
        </div>{" "}
      </div>
    </div>
  );
}

export default responsiveTop;
