import React from 'react'


function Button({text,color,Icon,onClick}) {
    // console.log(icon.type.name)
    const iconTag =<Icon className="mx-3 h-6 w-6 justify-center items-center text-white" />
    return (
      <button
        className= 'bg-primary w-full border p-3 rounded-full  text-lg flex justify-center px-10 items-center'
      >
{text}
        {iconTag} 
      </button>
    );
}

export default Button
