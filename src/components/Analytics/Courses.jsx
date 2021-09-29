import React from 'react'
import ActivityChart from '../ActivityChart';


function Courses() {
    return (
      <div>
        <div className="flex">
          <div>
            <h2>Active Courses</h2>
            <h4>Stats are based on engagement per course</h4>
          </div>
          <div>
            <span> 18</span> courses
          </div>
        </div>
        <div className="actCont">
          <ActivityChart />
        </div>
      </div>
    );
}

export default Courses
