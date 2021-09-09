import { ErrorMessage } from "formik";

const FormErrorMessage = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      className=" text-xs "
      component="div"
    />
  );
};

export default FormErrorMessage;