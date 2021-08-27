import React from 'react'

function FormInput({label,name,type,placeholder}) {
    return (
      <div className="h-20 mb-5 flex flex-col">
        <label className="text-primary" htmlFor={label}>{label} * </label>
        <input className="mt-1 p-3 rounded-md outline-none h-16 border border-primary bg-white text-black" name={name} type={type} placeholder={placeholder} required  />
      </div>
    );
}

export default FormInput
