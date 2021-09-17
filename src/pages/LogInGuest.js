import React, { useState } from "react";
import * as Yup from "yup";
import "../Styling/Login.css";
import "../Styling/SignUp.css";

import { MdClose } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import Button from "../components/SignUp/Button";
function LogInGuest({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <SignInCont
      title="Log In"
      largeText="Welcome to Inso."
      extraText="Create an account to gain full access to our features."
      setactiveModal={setactiveModal}
      previousModal="chooseUser"
    >
      <div className=" h-full">
        <div className="logInUser-content">
          <div className="flex  justify-between mb-8 ml-0">
            <div
              onClick={() => setactiveModal("chooseUser")}
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
            {({ isSubmitting, isValid, isValidating, dirty }) => (
              <Form className="log-form ">
                <div className="form-cont">
                  <CustomField
                    label="Email address"
                    placeholder="Enter email..."
                    type="email"
                    name="email"
                  />
                  <CustomField
                    label="Preferred username"
                    placeholder="Enter preferred username..."
                    type="text"
                    name="username"
                  />
                </div>
                <div className="btn-holder">
                  <Button mt="mt-1" disabled={!(isValid && dirty)}>
                    Log In
                  </Button>

                  <div className="account-text">
                    <h3 className="">If you don't have an account,</h3>

                    <button
                      onClick={() => setactiveModal("chooseUser")}
                      className=" text-primary"
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

export default LogInGuest;
