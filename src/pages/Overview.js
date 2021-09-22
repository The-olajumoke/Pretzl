import React from "react";
import BodyWrapper from "../components/BodyWrapper";
import TopDiscusionText from "../components/OverView/TopDiscusionText";
import "../Styling/Overview.css"
import OverviewImg from "../Exports/dashboard/Pie Circular@2x.png"
function Overview() {
  return (
    <BodyWrapper>
      <div className=" overviewCont ring ring-red">
        {/* first section */}
        {/*Courses  */}
        <div className="courses-overview ring ring-red">
          <div className="w-1/2 flex justify-between ring">
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
        <div className="ring "></div>
        {/* THIRD SECTION */}
        {/*Thread*/}
        <div className="TopDisCont">
          <div className="TopDis">
            <h3>Top </h3>
            <div className="ring">
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
            <img src={OverviewImg} alt="" />
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Overview;
