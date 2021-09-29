import React from "react";
import { MdChatBubbleOutline, MdContentCopy, MdLock, MdLockOpen } from "react-icons/md";
import "../Styling/Discussion.css";
import img from "../Exports/DisIcon.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
function DiscussionBox({ title, code,name, numberOfPeople, date }) {
  return (
    <div className="discBox">
      <div className="boxHead">
        <div className=" box-1">
          <MdChatBubbleOutline />
          <h4>{name}</h4>
        </div>
        <div className="box-2">
          <div className="flex items-center">
            <img src={img} alt="" />
            <h5>{numberOfPeople}</h5>
          </div>
          <div className="flex">
              <MdLock/>
              <BsThreeDotsVertical/>
          </div>
        </div>
      </div>

      <div className="boxDetail">
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>

      <div className="boxfooter">
        <h4>{code}</h4>
        <MdContentCopy/>
        <button>Open</button>
      </div>
    </div>
  );
}

export default DiscussionBox;
