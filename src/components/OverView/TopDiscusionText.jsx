import React from 'react'

function TopDiscusionText({topic,category}) {
    return (
      <div className="TopDiscusionText">
        <h2>{topic}</h2>
        <h5>{category}</h5>
      </div>
    );
}

export default TopDiscusionText
