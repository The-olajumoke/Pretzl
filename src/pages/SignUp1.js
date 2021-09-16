import React, { useState } from "react";
import * as Yup from "yup";

import { MdClose } from "react-icons/md";
import SignInCont from "../components/SignInCont";
import "../Styling/SignUp.css";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
function SignUp1({ activeModal, setactiveModal }) {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // STORE VALUES SOMEWHERE

    resetForm();
    setSubmitting(false);
    setactiveModal("signUp2");
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    userName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Invalid phone number"),
  });

  return (
    <SignInCont
      title="Sign Up"
      largeText="Say something different."
      extraText="Sign up to all Inso features."
      setactiveModal={setactiveModal}
    >
      <div className="">
        <MdClose
          onClick={() => setactiveModal(false)}
          className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
        />

        <div className="signUp-content">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              userName: "",
              phoneNumber: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            isValid={false}
          >
            {({ isSubmitting, isValid, isValidating, dirty }) => (
              <Form className="sign-form ">
                <div className="frame">
                  <CustomField
                    label="First Name"
                    name="firstName"
                    type="text "
                    placeholder="Enter first name"
                  />
                  <CustomField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                  />
                  <CustomField
                    label="Preferred Username"
                    name="userName"
                    type="text"
                    placeholder="Enter username"
                  />
                  <CustomField
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter phone number"
                    req="(optional)"
                  />
                </div>

                <div className="btn-holder">
                  <Button mt="mt-10" disabled={!(isValid && dirty)}>
                    Continue
                  </Button>

                  <div className=" account-text">
                    <h3 className="">Already have an account?</h3>
                    <button
                      onClick={() => setactiveModal("logInUser")}
                      className="text-primary"
                    >
                      Log in
                    </button>
                  </div>
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
export default SignUp1;
