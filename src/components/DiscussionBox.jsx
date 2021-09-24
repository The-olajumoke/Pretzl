import React from 'react'
import { MdChatBubbleOutline } from 'react-icons/md'
import "../Styling/Discussion.css"
import img from "../Exports/DisIcon.svg"
function DiscussionBox() {
    return (
      <div className="discBox">
        <div>
          <div>
            <MdChatBubbleOutline />
            <h4>Patrick Dempsey</h4>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    );
}

export default DiscussionBox
