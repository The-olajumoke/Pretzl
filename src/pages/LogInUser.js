import React, { useState } from "react";
import * as Yup from "yup";
import '../Styling/Login.css'
import { MdClose } from "react-icons/md";
import { FiArrowRight,FiArrowLeft } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
function LogInUser({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);

  const handleSubmit = () => {
    alert("form submitted Successfully");
  };
  return (
    <SignInCont
      title="Log in"
      largeText="Say something different."
      extraText="Enter login details."
      setactiveModal={setactiveModal}
      previousModal="false"
    >
      <div className="h-full">
        <div className="logInUser-content ">
          <div className="flex  justify-between mb-8 ml-0">
            <div
              onClick={() => setactiveModal("false")}
              className="backBtn hidden lg:flex cursor-pointer  "
            >
              <FiArrowLeft className=" backIcon" />
              <h3>Back</h3>
            </div>
            <MdClose
              onClick={() => setactiveModal(false)}
              className="hidden lg:flex text-primary cursor-pointer  h-8 w-8"
            />
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(6, "Must be at least 6 characters")
                .required("Required"),
            })}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="log-form">
                <div className="form-cont">
                  <CustomField
                    label="Email address"
                    placeholder="Enter email..."
                    type="email"
                    name="email"
                  />
                  <CustomField
                    label="Password"
                    placeholder="Enter password..."
                    type="password"
                    name="password"
                  />
                </div>

                <div className="btn-holder">
                  <Button mt="mt-16" disabled={!(isValid && dirty)}>
                    Log In
                  </Button>

                  <div className="account-text ">
                    <h3 className="">If you don't have an account, </h3>
                    <button
                      onClick={() => setactiveModal("chooseUser")}
                      className="text-primary"
                    >
                      Sign up
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

export default LogInUser;
