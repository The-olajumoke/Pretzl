import React from 'react'

function ActivityItem({height}) {
    const newheight = `${height}px`;
    console.log(newheight);
    return (
        <div 
        // style={{height:{newheight}}}
        style={{height:`${newheight}`}}
        className=" bg-white mx-2 w-9" >
            {height} 
        </div>
    )
}

export default ActivityItem
