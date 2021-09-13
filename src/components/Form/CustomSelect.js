import { Field } from "formik";
// import {} from "react-icons/fi"
import React from "react";
import FormErrorMessage from "./FormErrorMessage";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { Field } from "formik";

const CustomSelect = ({ label, name, children }) => {
  return (
    <div className=" text-black relative">
      <label className="text-primary"> {label}</label>

      <div className="relative p-0">
        <MdKeyboardArrowDown className="absolute top-0 right-6 h-full  w-6  text-black z-10" />
        <select
          className="ring-1 ring-border p-3 rounded-md outline-none bg-white text-placeholder w-full relative appearance-none"
          name={name}
          placeholder="sdrbv"
        >
          {children}
        </select>
      </div>
      <FormErrorMessage name={name} />
    </div>
  );
};

export default CustomSelect;
