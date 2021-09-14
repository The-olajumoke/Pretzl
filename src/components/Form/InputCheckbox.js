import React from 'react'
import { Field } from "formik";
import FormErrorMessage from './FormErrorMessage';

const InputCheckbox=({ children, ...props }) => {

  const {name} = props;

    return (
      <label className="flex items-center space-x-2 text-primary">
        <Field
          type="checkbox"
          name={name}
          className="form-checkbox  text-black border-primary  rounded-3xl focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
        />
        <span className="text-textBody text-xs sm:text-base">{children}</span>
      </label>
    );
}

export default InputCheckbox;



  
