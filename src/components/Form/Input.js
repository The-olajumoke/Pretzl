import { Field, field } from "formik";
import '../../Styling/CustomInput.css'
const Input = ({ name, type, placeholder }) => {
  return (
    <Field
      className=" input-box outline-none"
      name={name}
      type={type}
      placeholder={placeholder}
     
    />
  );
};
export default Input;












// box-shadow: 1px 2px 10px rgba(169, 169, 169, 0.12);