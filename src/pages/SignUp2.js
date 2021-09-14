import React, { useState } from "react";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";

import { MdClose } from "react-icons/md";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
function SignUp2({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [chosenOption, setChosenOption] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email address").required("Required"),
    alternativeEmail: Yup.string()
      .email("invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // STORE VALUES SOMEWHERE
    setactiveModal("signUp3");
  };

  return (
    <SignInCont
      title="Sign Up"
      largeText="Just a 
few more details"
      extraText="You are almost there."
      setactiveModal={setactiveModal}
    >
      <div className=" border sm:border-btnText my-5 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl   p-0 sm:px-20 sm:py-7 sm:pb-4">
        <MdClose
          onClick={() => setactiveModal(false)}
          className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
        />

        <div className="h-auto sm:h-full flex flex-col justify-evenly p-2 sm:pt-5">
          <Formik
            initialValues={{
              email: "",
              alternativeEmail: "",
              password: "",
              repeatPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="">
                <CustomField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter email adress"
                />
                <CustomField
                  label="Alternative Email Address"
                  name="alternativeEmail"
                  type="email"
                  placeholder="Enter email adress"
                />
                <CustomField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
                <CustomField
                  label="Confirm Password"
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat password"
                />
                <div className="mt-9 sm:m-0">
                  <Button disabled={!(isValid && dirty)}>Continue</Button>
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
export default SignUp2;
