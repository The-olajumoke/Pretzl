import React from "react";
import BodyWrapper from "../components/BodyWrapper";
import "../Styling/Overview.css"
function Overview() {
  return (
    <BodyWrapper>
      <div className=" overviewCont ring ring-red">
        <div className="courses-overview">
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
      </div>
    </BodyWrapper>
  );
}

export default Overview;
