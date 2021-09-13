import React, { useState } from 'react'

function FormInput({label,name,type,placeholder,loginBtn, setLoginBtn}) {
const [value, setValue] = useState('')

  const handleOnClick=(e)=>{
setValue(e.target.value)
if (e.target.value.length>0 ) {
  setLoginBtn(true)
  
} else {
  setLoginBtn(false)
}
  }
 
    return (
      <div className="h-20 mb-5 sm:mb-8 flex flex-col">
        <label className="text-primary" htmlFor={label}>{label} <span style={{color:"red"}}>*</span> </label>
        <input className="mt-1 p-3 rounded-md outline-none h-16 border border-border bg-white text-black" name={name} type={type}
     onChange={handleOnClick}
      value={value}
       placeholder={placeholder} required  />
      </div>
    );
}

export default FormInput
