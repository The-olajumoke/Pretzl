import React from "react";
import ActivityItem from "./ActivityItem";

function ActivityChart() {
  return (
    <div className="allActCont">
      <ActivityItem height="32" />      <ActivityItem height="80" />
      <ActivityItem height="43" />
      <ActivityItem height="84" />
      <ActivityItem height="144" />
      <ActivityItem height="96" />
      <ActivityItem height="248" />
      <ActivityItem height="96" />
      <ActivityItem height="144" />
      <ActivityItem height="248" />
      <ActivityItem height="300" />
      <ActivityItem height="168" />
      <ActivityItem height="96" />
    </div>
  );
}

export default ActivityChart;
