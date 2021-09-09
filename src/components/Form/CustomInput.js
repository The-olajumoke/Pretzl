import React from "react";
import Input from "./Input";
import FormErrorMessage from "./FormErrorMessage";

export const CustomField = (props) => {
  const {
    name,
    type,
    placeholder,
    leftIcon,
    w,
    className,
    pl,
    showPassword,
    setShowPassword,
    label,
  } = props;
  return (
    <div className="border h-20 mb-5 sm:mb-5 flex flex-col">
      <label className="text-primary" htmlFor="name">
        {label}
        <span style={{ color: "red" }}>*</span>
      </label>
      <Input {...props} />
      <FormErrorMessage name={name} />
    </div>
  );
};
export default CustomField;