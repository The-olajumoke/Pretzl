import React from 'react'
import { MdHeadsetMic} from "react-icons/md";
import avatar from "../../Exports/Avatar.svg";
function ReplyNotification() {
    return (
      <div className="postCont">
      <div className=" postsubcont ">

        <div className="postIcon ">
          <MdHeadsetMic className="icon" />
        </div>
        <div className="postInfo">
          <div className="avatars">
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
            <img src={avatar} alt="" />
          </div>
          <div className="moreInfo">
            <h5>@COLLINS</h5>
            <h4 className=" ml-1">and 5 others replied to your post </h4>
          </div>
          <h5 className="postTopic">
            Currently, Government agencies are discussing the dangers of dumping
            nuclear water into the ocean.
          </h5>
        </div>
      </div>
      </div>
    );
}

export default ReplyNotification
