import React from 'react'

function FormInput({label,name,type,placeholder}) {
    return (
      <div className="h-20 mb-5 flex flex-col">
        <label className="text-black" htmlFor={label}>{label}</label>
        <input className="mt-1 p-3 rounded-md outline-none h-16 border border-primary bg-white text-textBody" name={name} type={type} placeholder={placeholder}  />
      </div>
    );
}

export default FormInput
