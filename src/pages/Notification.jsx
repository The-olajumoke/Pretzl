import React, { useState } from "react";
import { FaDiscourse } from "react-icons/fa";
import BodyWrapper  from "../components/BodyWrapper";
import MentionNotification from "../components/Notification/MentionNotification";
import PostNofication from "../components/Notification/PostNofication";
import ReplyOthers from "../components/Notification/ReplyOthers";
import ReplyNotification from "../components/Notification/ReplyToYourPostNoti";
import UpvotedNotif from "../components/Notification/UpvotedNotif";
import "../Styling/Notification.css";

function Notification() {
    const [disMenu, setDiscMenu] = useState(false)
  return (
    <BodyWrapper>
        <div className="notificationCont">
          <div className="flex items-center relative justify-between">
            <h5 className="leadText">Notifications</h5>
            <FaDiscourse
              onClick={() => {
                setDiscMenu(!disMenu);
              }}
              className="leadTextIcon"
            />
            {disMenu && (
              <div className="notiBox">
                <h4>Clear notifications</h4>
                <hr />
                <h4>Notification settings</h4>
              </div>
            )}
          </div>
          <div className=" allNotifications ">
            <PostNofication />
            <ReplyNotification />
            <ReplyOthers />
            <MentionNotification />
            <UpvotedNotif />
            <UpvotedNotif />
            <UpvotedNotif />
          </div>
        </div>
    </BodyWrapper>
  );
}

export default Notification;
