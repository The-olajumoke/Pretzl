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
function LogInUser({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);

  const handleSubmit = () => {
    alert("form submitted Successfully");
  };
  return (
    <SignInCont
      title="Log in"
      largeText="Welcome to Inso.."
      extraText="Enter login details."
      setactiveModal={setactiveModal}
    >
      <div className="border sm:border-btnText my-1 sm:my-0  flex flex-col justify-items-end bg-white col-span-3 w-full  sm:rounded-r-3xl  p-0 sm:p-20 sm:pb-12">
        <MdClose
          onClick={() => setactiveModal(false)}
          className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
        />

        <div className=" h-full sm:h-full flex flex-col  justify-end sm:p-2 sm:pt-5">
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
              <Form className=" flex  flex-col  justify-evenly h-full">
                <div className="h-64 flex flex-col justify-end">
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

                <div className="mt-6 sm:mt-0 sm:h-2/6 flex flex-col justify-end">
                  <Button disabled={!(isValid && dirty)}>Log In</Button>

                  <h3 className=" text-sm sm:text-base text-textBody text-center my-4">
                    If you don't have an account, 
                    <button
                      onClick={() => setactiveModal("chooseUser")}
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

export default LogInUser;
