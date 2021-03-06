import React from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import BodyWrapper from "../components/BodyWrapper";
import DiscussionBox from "../components/DiscussionBox";
import ResponsiveTop from "../components/ResponsiveTop"
import "../Styling/Discussion.css";


function Discussion() {
  return (
    <BodyWrapper>
        <ResponsiveTop title="Discussion Title"/>
      <div className="disMain ">
        <div className="disCont ">
          <div className="discBtnCont">
            <button 
            className="discBtn">
                <FiPlus/>
                Create new discussion
                <IoMdArrowDropdown/>
                </button>
          </div>
          <div className="allDisCont">
            <DiscussionBox
              title="Price Action in Foreign Exchange"
              date="Mar 21"
              numberOfPeople="4"
              name="Patrick Dempsey"
              code="51RP70F"
            />
            <DiscussionBox
              title="Price Action in Foreign Exchange"
              date="Mar 21"
              numberOfPeople="4"
              name="Patrick Dempsey"
              code="51RP70F"
            />
            <DiscussionBox
              title="Price Action in Foreign Exchange"
              date="Mar 21"
              numberOfPeople="4"
              name="Patrick Dempsey"
              code="51RP70F"
            />
            <DiscussionBox
              title="Types of Mineral Resources"
              date="Mar 21"
              numberOfPeople="2"
              name="Fakomi Idowu"
              code="89RWT2"
            />
            <DiscussionBox
              title="Benefits of Foreign Exchange"
              date="Mar 21"
              numberOfPeople="6"
              name="Patrick Dempsey"
              code="46FG0H"
            />
            <DiscussionBox
              title="Types of Mineral Resources"
              date="Mar 21"
              numberOfPeople="2"
              name="Fakomi Idowu"
              code="89RWT2"
            />
            <DiscussionBox
              title="Price Action in Foreign Exchange"
              date="Mar 21"
              numberOfPeople="4"
              name="Patrick Dempsey"
              code="51RP70F"
            />
            <DiscussionBox
              title="Types of Mineral Resources"
              date="Mar 21"
              numberOfPeople="2"
              name="Fakomi Idowu"
              code="89RWT2"
            />
            <DiscussionBox
              title="Price Action in Foreign Exchange"
              date="Mar 21"
              numberOfPeople="4"
              name="Patrick Dempsey"
              code="51RP70F"
            />
            <DiscussionBox
              title="Price Action in Foreign Exchange"
              date="Mar 21"
              numberOfPeople="4"
              name="Patrick Dempsey"
              code="51RP70F"
            />
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Discussion;
