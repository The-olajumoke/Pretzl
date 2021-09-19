import React, { useState } from "react";
import "../../Styling/BodyWrapper.css";
import "../../Styling/SideBar.css";
import Pic from "../../Exports/secondIcon.svg";
import NavItem from "./NavItem";
import { FiBarChart } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import {IoSettingsOutline } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import {FaRegCalendar} from "react-icons/fa"
import {IoMdNotificationsOutline} from "react-icons/io"
import {MdChatBubbleOutline} from "react-icons/md"
// import DeleteIcon from "@mui/icons-material/Delete";



function Sidebar({ navSize, setNavSize }) {
  return (
    <div
      style={{ width: `${navSize == "small" ? "75px" : "333px"}` }}
      className="side-Cont font-Poppins"
    >
      {/* <svg data-testid="DeleteIcon"></svg> */}
      <div className="userDetailsCont">
        <img className="user-img" src={Pic} alt="" />
        <div className="details">
          <h3>Patrick Dempsey</h3>
          <span>@patrick</span>
        </div>
      </div>

      <div className="allNavItems">
        <NavItem
          navSize={navSize}
          title="Discussions"
          icon={<MdChatBubbleOutline />}
        />
        <NavItem
          navSize={navSize}
          title="Nofications"
          icon={<IoMdNotificationsOutline />}
        />
        {/*<NavItem
          navSize={navSize}
          title="Overview"
          icon={NotificationsNoneIcon}
        />
*/}

        <NavItem navSize={navSize} title="Charts " icon={<FiBarChart />} />

        <NavItem navSize={navSize} title="Calendar" icon={<FaRegCalendar />} />

        <NavItem navSize={navSize} title="Reports" icon={<MdShowChart />} />
        <NavItem navSize={navSize} title="Contact us" icon={<MdHeadsetMic />} />

        <NavItem
          navSize={navSize}
          title="Settings"
          icon={<IoSettingsOutline />}
        />
      </div>
      <div className="upgradeBtn">
        <div className="">
          {/* <img src={settingsIcon} alt="" /> */}
          <h3>Upgrade</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

// import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
// import { HeadsetMic } from "@material-ui/icons";
// import DiscusIcon from "../../Exports/sideBarPics/DiscIcon.svg";
// import {HeadsetMic} from "@mui/icons-material"
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import ShowChartIcon from "@mui/icons-material/ShowChart";
// import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import SettingsIcon from "@mui/icons-material/Settings";