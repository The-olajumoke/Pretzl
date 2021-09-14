import React from "react";
import Input from "./Input";
import FormErrorMessage from "./FormErrorMessage";

export const CustomField = (props) => {
  const { name, label, req } = props;
  return (
    <div className=" h-auto mb-5 sm:mb-5 flex flex-col">
      <label className=" text-sm sm:text-base text-primary" htmlFor="name">
        {label}
        {req ? (
          <span className=" text-btnText">{req}</span>
        ) : (
          <span style={{ color: "red" }}>*</span>
        )}
      </label>
      <Input {...props} />
      <FormErrorMessage name={name} />
    </div>
  );
};

export default CustomField;
