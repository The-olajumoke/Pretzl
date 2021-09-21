import React, { useState } from "react";
import * as Yup from "yup";

import { MdClose } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";

import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
import history from "../utils/history";
function SignUp2({ activeModal, setactiveModal }) {
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
    setSubmitting(false);
    resetForm();

    setactiveModal("signUp3");
  };
 const handleBack = () => {
   setactiveModal("signUp1");
 };
  return (
    <SignInCont
      title="Sign Up"
      largeText="Just a 
few more details"
      extraText="You are almost there."
      setactiveModal={setactiveModal}
      backBtnFunction={handleBack}
    >
      <div className="signUp-content ">
        <div className="desktopCancel mb-8 ml-0">
          <div
            onClick={() => setactiveModal("signUp1")}
            className="backBtn flex items-center "
          >
            <FiArrowLeft className=" backIcon cursor-pointer" />
            <h3>Back</h3>
          </div>

          <MdClose
            onClick={() => {
              history.push("./");
            }}
            className="cursor-pointer  h-8 w-8"
          />
        </div>
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
            <Form className="sign-form">
              <div className="frame">
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
              </div>
              <div className="btn-holder">
                <Button mt="mt-10" disabled={!(isValid && dirty)}>
                  Continue
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {/* button */}
      </div>
    </SignInCont>
  );
}
export default SignUp2;
