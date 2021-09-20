import React from 'react'
import ActivityItem from './ActivityItem'

function ActivityChart() {
    return (
        <div className="w-screen  h-14 bg-primary text-red flex items-end">
            <ActivityItem height="32"/>
            <ActivityItem height="248"/>
            <ActivityItem height="248"/>
            <ActivityItem height="50"/>
            <ActivityItem height="700"/>
            <ActivityItem height="50"/>
            <ActivityItem height="500"/>
            <ActivityItem height="200"/>
        </div>
    )
}

export default ActivityChart
