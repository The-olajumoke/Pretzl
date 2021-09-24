import React from "react";
import BodyWrapper from "../components/BodyWrapper";
import DiscussionBox from "../components/DiscussionBox";
import "../Styling/Discussion.css";

function Discussion() {
  return (
    <BodyWrapper>
      <div className="disMain">
        <div className="disCont ">
          <div className="discBtnCont">
            <button className="discBtn">Create new discussion</button>
          </div>
          <div className="allDisCont">
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Discussion;
