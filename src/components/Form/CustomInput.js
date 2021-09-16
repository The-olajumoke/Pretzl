import React from "react";
import Input from "./Input";
import "../../Styling/CustomInput.css";

import FormErrorMessage from "./FormErrorMessage";

export const CustomField = (props) => {
  const { name, label, req } = props;
  return (
    <div className=" input-container">
      <label className="label " htmlFor="name">
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
