import React from 'react'

function ActivityItem({height}) {
    const newheight = `${height *0.6}px `;
    return (
        <div 
        style={{height:`${newheight}`}}
        className=" actItem mx-2 w-9" >
       <h3>{height}</h3>
        </div>
    )
}

export default ActivityItem