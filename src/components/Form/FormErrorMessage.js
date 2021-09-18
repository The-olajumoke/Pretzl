import { ErrorMessage } from "formik";

const FormErrorMessage = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      className=" text-xs text-red pl-4 sm:pl-9 "
      component="div"
    />
  );
};

export default FormErrorMessage;