import { Field, field } from "formik";

const Input = ({ name, type, placeholder }) => {
  return (
    <Field
      className=" p-3 rounded-md outline-none h-16 border border-border bg-white text-black"
      name={name}
      type={type}
      placeholder={placeholder}
     
    />
  );
};
export default Input;