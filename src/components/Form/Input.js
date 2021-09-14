import { Field, field } from "formik";

const Input = ({ name, type, placeholder }) => {
  return (
    <Field
      className=" py-5  px-6 sm:px-7 rounded-md outline-none my-1 ring-1 ring-border bg-white  text-placeholder h-14   shadow-sm  text-base "
      name={name}
      type={type}
      placeholder={placeholder}
     
    />
  );
};
export default Input;












// box-shadow: 1px 2px 10px rgba(169, 169, 169, 0.12);