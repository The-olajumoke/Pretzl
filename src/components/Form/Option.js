import React from 'react'

function Option({name,value}) {
    return (
       <option className=" text-placeholder appearance-none h-64 bg-none hover:bg-none" value={value}>{name}</option>
    )
}

export default Option
