import { Field, field } from "formik";

const Input = ({ name, type, placeholder }) => {
  return (
    <Field
      className=" p-3 rounded-md outline-none my-1  h-12 ring-1 ring-border bg-white  text-placeholder"
      name={name}
      type={type}
      placeholder={placeholder}
     
    />
  );
};
export default Input;