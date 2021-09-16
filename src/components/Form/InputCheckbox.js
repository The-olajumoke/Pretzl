import React from 'react'
import { Field } from "formik";
import FormErrorMessage from './FormErrorMessage';

const InputCheckbox=({ children, ...props }) => {

  const {name} = props;

    return (
      <label className="mb-3 flex items-center text-primary">
        <Field
          type="checkbox"
          name={name}
          className="checkbox appearance-none text-black border-black rounded-sm focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
        />
        <span className="text-textBody text-xs sm:text-base ml-2"> {children}</span>
      </label>
    );
}

export default InputCheckbox;



  
