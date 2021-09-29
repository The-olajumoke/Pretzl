import React from "react";
import BodyWrapper from "../components/BodyWrapper";
import TopDiscusionText from "../components/Analytics/TopDiscusionText";
import "../Styling/Analytics.css";
import OverviewImg from "../Exports/dashboard/Pie Circular@2x.png";
import Courses from "../components/Analytics/Courses";
import ResponsiveTop from "../components/ResponsiveTop";
import { IoMdArrowDropdown } from "react-icons/io";
function Overview() {
  return (
    <BodyWrapper>
      <ResponsiveTop title="Analytics" />
      <div className=" overMain ">
        <div className=" overviewCont ">
          {/* first section */}
          {/*Courses  */}
          <div className="courses-overview">
            <div className="contForWidth">
              <div className="course-item">
                <h4>Courses</h4>
                <h2>14</h2>
              </div>
              <div className="course-item">
                <h4>Discussions</h4>
                <h2>38</h2>
              </div>
              <div className="course-item">
                <h4>Users</h4>
                <h2>100</h2>
              </div>
            </div>
          </div>

          {/* SECOND SECTION */}
          {/*Discussions*/}
          <div className="secondSect">
            <div className=" sect1">
              <div className="sectDetails">
                <h3>
                  Activity Chart
                  <IoMdArrowDropdown />
                </h3>
                <button>
                  This month
                  <IoMdArrowDropdown />
                </button>
              </div>

              <Courses />
            </div>
            <div className="ring sect2">
              <div>
                <input type="radio" name="type" id="" />
                <label>Users</label>
              </div>
              <div>
                <input type="radio" name="type" id="" />
                <label>Posts</label>
              </div>
            </div>
          </div>
          {/* THIRD SECTION */}
          {/*Thread*/}
          <div className="TopDisCont">
            <div className="TopDis">
              <h3>Top </h3>
              <div className="">
                <TopDiscusionText
                  topic="The Economics of Democracy."
                  category="Economics & Politics"
                />
                <TopDiscusionText
                  topic="The Economics of Democracy."
                  category="Economics & Politics"
                />
              </div>
            </div>
            <div className="EngRate">
              <h2>Engagement Rate</h2>
              <h4>State on how well a post is doing.</h4>
              <div className="flex justify-center ">
                <img src={OverviewImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Overview;
