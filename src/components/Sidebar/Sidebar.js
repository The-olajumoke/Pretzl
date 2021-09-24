import React, { useState } from "react";
import "../../Styling/BodyWrapper.css";
import "../../Styling/SideBar.css";
import avatar from "../../Exports/Avatar.svg";
import NavItem from "./NavItem";
import { FiBarChart } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import NavIcon from "./NavIcon";
// import DeleteIcon from "@mui/icons-material/Delete";

function Sidebar({ navSize, setNavSize }) {
  return (
    <nav
      style={{ width: `${navSize == "small" ? "109px" : "25%"}` }}
      className="side-Cont font-Poppins"
    >
      {/* <svg data-testid="DeleteIcon"></svg> */}
      <div
        className={`userDetailsCont    ${
          navSize == "small" ? "justify-end" : "justify-center"
        }    ${navSize == "small" ? "pr-3" : ""}  `}
      >
        <img className={`user-img`} src={avatar} alt="" />
        <div className={`details ${navSize == "small" ? "hidden" : "flex"} `}>
          <h3>Patrick Dempsey</h3>
          <span>@patrick</span>
        </div>
      </div>

      <div className=" allNavItems">
        <NavItem
          navSize={navSize}
          title="Discussions"
          icon={<MdChatBubbleOutline />}
          path="/discussion"
          active
        />
        <NavItem
          navSize={navSize}
          title="Nofications"
          icon={<IoMdNotificationsOutline />}
          path="/notifications"
        />
        <NavItem
          navSize={navSize}
          title="Analytics"
          icon={<MdChatBubbleOutline />}
          path="/analytics"
          active
        />

        <NavItem
          navSize={navSize}
          title="Charts "
          icon={<FiBarChart />}
          path="/charts"
        />
        <NavItem
          navSize={navSize}
          title="Calendar"
          icon={<FaRegCalendar />}
          path="/calendar"
        />
        <NavItem
          navSize={navSize}
          title="Grades"
          icon={<MdShowChart />}
          path="/grades"
        />
        <NavItem
          navSize={navSize}
          title="Contact us"
          icon={<MdHeadsetMic />}
          path="/contact"
        />
        <NavItem
          navSize={navSize}
          title="Settings"
          icon={<IoSettingsOutline />}
          path="/settings"
        />
      </div>
      <div
        className={`my-14  w-full flex  
         ${navSize == "small" ? "" : "px-12"}
            ${navSize == "small" ? "pr-3" : ""}
    ${navSize == "small" ? "justify-end" : "justify-items-start"}`}
      >
        <button
          className={`upgradeBtn  ${navSize == "small" ? "p-3" : "p-3"}`}
          style={{ width: `${navSize == "small" ? "auto" : "230px"}` }}
        >
          {/* <img src={settingsIcon} alt="" /> */}
          <NavIcon
            className={`nav-icon ${navSize == "small" ? "" : "mr-4"}
            
            `}
            icon={<FaRegCalendar />}
          />
          <h3
            className={` ${navSize == "small" ? "hidden" : "flex"}
          `}
          >
            Upgrade
          </h3>
        </button>
      </div>
    </nav>
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
