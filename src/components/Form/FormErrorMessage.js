import { ErrorMessage } from "formik";

const FormErrorMessage = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      className="pl-4 text-xs text-red "
      component="div"
    />
  );
};

export default FormErrorMessage;