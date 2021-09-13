import { FiArrowRight } from "react-icons/fi";

const Button = ({ children, ...props }) => {
  const { disabled, onClick, mt, } = props;
  // console.log(isValid);
  // console.log(isValidating);
  console.log(disabled);

  return (
    <button
      onClick={onClick}
      className={`mt-10 ${mt? 'sm:mt-2':'sm:mt-12'}  w-full  p-3 rounded-full text-xl flex justify-center px-10 items-center hover:text-white ${disabled?"bg-inputField disabled:cursor-not-allowed":"bg-border"
      }`}
      type="submit"
      disabled={disabled}
    >
      {children}
      <FiArrowRight className="mx-3 h-6 w-6 justify-center items-center" />
    </button>
  );
};

export default Button;
