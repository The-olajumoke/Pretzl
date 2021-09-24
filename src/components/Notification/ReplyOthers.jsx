import React from "react";
import { MdHeadsetMic } from "react-icons/md";
import avatar from "../../Exports/Avatar.svg";
function ReplyOthers() {
  return (
    <div className="postCont">
      <div className=" postsubcont ">
        <div className="postIcon">
          <MdHeadsetMic className="icon" />
        </div>
        <div className="postInfo">
          <div className="avatars">
            <img src={avatar} alt="" />
            <div>
              <div className="flex items-center">
                <h5>Beth Keen</h5>
                <h4>@KEEN</h4>
              </div>
              <div className="time">posted 3 mins ago</div>
            </div>
          </div>
          <div className="moreInfo">
            <h4>
              Replying to <span className="ml-1">@patrick @kelly @pete </span>
            </h4>
          </div>
          <h5 className="postTopic">
            I’m more concerned about the opinions of environmentalists.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ReplyOthers;
