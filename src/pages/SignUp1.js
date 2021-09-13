import React, { useState } from "react";
import * as Yup from "yup";

import { MdClose } from "react-icons/md";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
function SignUp1({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [chosenOption, setChosenOption] = useState(false);


  const handleSubmit = (values, { setSubmitting, resetForm,}) => {
    setTimeout(() => {
      // STORE VALUES SOMEWHERE
       
      alert("submitting");
      resetForm();
      setSubmitting(false);
      setactiveModal("signUp2");
    }, 2000);
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      
  });

  return (
    <SignInCont
      title="Sign Up"
      largeText="Say something different."
      extraText="Sign up to all Inso features."
      setactiveModal={setactiveModal}
    >
      <div className="my-2 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl  sm:shadow-2xl p-0 sm:px-20 sm:py-7 sm:pb-8">
        <MdClose
          onClick={() => setactiveModal(false)}
          className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
        />

        <div className="h-auto sm:h-full flex flex-col justify-evenly p-2 sm:pt-5">
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
            {({ isSubmitting, isValid, isValidating,dirty }) => (
              <Form className="  flex flex-col">
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

                <div className="">
                  <Button
                    disabled={!(isValid &&dirty)}
                  >
                    Continue
                  
                  </Button>

                  <h3 className=" text-base text-textBody text-center my-4">
                    If you don't have an account,
                    <button
                      onClick={() => setactiveModal("logInUser")}
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
export default SignUp1;
