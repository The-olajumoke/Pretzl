import React, { useState } from "react";
import * as Yup from "yup";

import firstIcon from "../Exports/firstIcon.svg";
import secondIcon from "../Exports/secondIcon.svg";
import whiteicon from "../Exports/whiteicon.svg";
import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import ChooseUser from "./ChooseUser";
import Button from "../components/SignUp/Button";
function LogInGuest({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [chosenOption, setChosenOption] = useState(false);

  const setUserActive = () => {
    setUser(true);
    setGuest(false);
    setContinueBtn(true);
    setChosenOption("signUp1");
  };
  const setGuestActive = () => {
    setUser(false);
    setGuest(true);
    setContinueBtn(true);
    setChosenOption("signUp2");
  };
  const handleSignUp1 = () => {};

  const handleSignUp2 = () => {};

  const handleChooseUser = (e) => {
    const signModal = e.target.name;
    setactiveModal(`${signModal}`);
  };
  return (
    <SignInCont
      title="Log In"
      largeText="Welcome to Inso."
      extraText="Create an account to gain full access to our features."
      setactiveModal={setactiveModal}
    >
      <div className=" my-5 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl  sm:shadow-2xl p-0 sm:p-20 sm:pb-12">
        <MdClose
          onClick={() => setactiveModal(false)}
          className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
        />

        <div className="h-auto sm:h-full flex flex-col justify-evenly p-2 sm:pt-5">
          <Formik
            initialValues={{
              email: "",
              username: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("invalid email address")
                .required("Required"),
              username: Yup.string()
                .min(3, "Must be at least 3 characters")
                .required("Required"),
            })}
          >
            {(props) => (
              <Form>
                <CustomField
                  label="Email address"
                  placeholder="Enter email..."
                  type="email"
                  name="email"
                  // loginBtn={loginBtn}
                  // setLoginBtn={setLoginBtn}
                />
                <CustomField
                  label="User Name"
                  placeholder="Enter username..."
                  type="text"
                  name="username"
                />
                <div className="">
                  
                  <button
                    className={`mt-10 sm:mt-12 w-full  p-3 rounded-full    ${
                      loginBtn ? "bg-border" : "bg-inputField"
                    } 
                
                 ${loginBtn ? "text-white" : " text-btnText"}
                 text-xl flex justify-center px-10 items-center hover:text-white`}
                  >
                    Log In
                  </button>
                  <h3 className=" text-base text-textBody text-center my-4">
                    If you don't have an account,
                    <button
                      onClick={() => setactiveModal("signUp")}
                      className="text-primary"
                    >
                      Sign up
                    </button>
                  </h3>
                </div>
              </Form>
            )}
          </Formik>
          {/* button */}
        </div>
      </div>
    </SignInCont>
  );
}

export default LogInGuest;