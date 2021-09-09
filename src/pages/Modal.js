import React, { useState } from "react";
import * as Yup from "yup";

import firstIcon from "../Exports/firstIcon.svg";
import secondIcon from "../Exports/secondIcon.svg";
import FormInput from "../components/SignUp/FormInput";
import whiteicon from "../Exports/whiteicon.svg";
import { MdClose } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
function Modal({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [user, setUser] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);

  const setUserActive = () => {
    setUser(true);
    setGuest(false);
    setContinueBtn(true);
  };
  const setGuestActive = () => {
    setUser(false);
    setGuest(true);
    setContinueBtn(true);
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
      .required("Required"),
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
    primaryUse: Yup.string().oneOf(["reading", "debating", "studying"]),
    user: Yup.string().oneOf(["student", "Teacher", "none"]),
    work: Yup.string().oneOf(["work1", "work2"]),
    acceptedTerms: Yup.boolean()
      .oneOf([true], "Please check to proceed")
      .required("Required"),
    recieveInfo: Yup.boolean()
      .oneOf([true], "Please check to proceed")
      .required("Required"),
  });
  return (
    <div>
      {/* CHOOSEUSER */}
      {activeModal === "signUp" ? (
        <SignInCont
          title="Sign Up"
          largeText="How would you like to sign in?"
          setactiveModal={setactiveModal}
        >
          {
            <div className=" bg-white  flex flex-col justify-between items-center col-span-3 w-full   rounded-r-none sm:rounded-r-3xl  sm:shadow-2xl  p-0  sm:p-12 ">
              <MdClose
                onClick={() => setactiveModal(false)}
                className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
              />
              <div className=" h-full p-0 sm:py-8 sm:px-12 flex flex-col justify-around">
                <h3 className="my-6 sm:my-5 lg:my-0 font-normal sm:font-semibold lg:text-left text-center  w-full text-black text-lg pl-3 sm:text-2xl">
                  Join Discussion!
                </h3>

                <div className="p-2 flex flex-col w-full">
                  {/* BUTTON*/}
                  {/* USER */}
                  <button
                    onClick={setUserActive}
                    id="user"
                    className={`mb-5 sm:mb-8 rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-24   w-full m-0 ${
                      user ? "bg-primary" : "bg-inputField"
                    }`}
                  >
                    <div className="  flex justify-center">
                      <img
                        src={user ? whiteicon : firstIcon}
                        alt="currentIcon"
                        className="w-1/2 sm:w-auto "
                      />
                    </div>
                    <div
                      className={`col-span-3 ${
                        user ? "text-white" : " text-textBody"
                      }`}
                    >
                      <h3 className=" text-left font-semibold sm:font-black text-boldtext">
                        As User
                      </h3>
                      <h5
                        className={`text-left leading-relaxed  sm:text-sm  text-xs  ${
                          user ? "text-white" : "text-desc"
                        }`}
                      >
                        Create an Account to begin. Log in if you have one
                        already
                      </h5>
                    </div>

                    <div className=" flex justify-center">
                      <FiArrowRight
                        className={`h-6 w-6 justify-center ${
                          user ? "text-white" : " text-primary"
                        } items-center`}
                      />
                    </div>
                  </button>
                  {/* GUESt */}
                  <button
                    onClick={setGuestActive}
                    id="user"
                    className={`mb-5 sm:mb-8 rounded-lg grid grid-cols-5 items-center cursor-pointer  text-black h-24   w-full m-0 ${
                      guest ? "bg-primary" : "bg-inputField"
                    }`}
                  >
                    <div className="  flex justify-center">
                      <img
                        src={guest ? whiteicon : secondIcon}
                        alt="currentIcon"
                        className="w-1/2 sm:w-auto "
                      />
                    </div>
                    <div
                      className={`col-span-3 ${
                        guest ? "text-white" : " text-textBody"
                      }`}
                    >
                      <h3 className=" text-left font-semibold sm:font-black text-boldtext">
                        As Guest
                      </h3>
                      <h5
                        className={`text-left leading-relaxed  sm:text-sm  text-xs ${
                          guest ? "text-white" : "text-desc"
                        }`}
                      >
                        Join Discussion and create account later.
                      </h5>
                    </div>

                    <div className=" flex justify-center">
                      <FiArrowRight
                        className={`h-6 w-6 justify-center ${
                          guest ? "text-white" : " text-border"
                        } items-center`}
                      />
                    </div>
                  </button>

                  {continueBtn ? (
                    <button
                      className=" w-full bg-border border p-3 rounded-full  text-lg flex justify-center px-10 items-center mt-0 sm:mt-6"
                      onClick={() => {}}
                    >
                      Continue
                      <FiArrowRight className="mx-3 h-6 w-6 justify-center items-center text-white" />
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          }
        </SignInCont>
      ) : null}

      {/* LOGIN */}
      {activeModal === "logIn" ? (
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
                      type="type"
                      name="username"
                    />
                  </Form>
                )}
              </Formik>
              {/* button */}
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
            </div>
          </div>
        </SignInCont>
      ) : null}

      {/* SIGN UP */}
      {activeModal === "signIn" ? (
        <SignInCont
          title="Sign Up"
          largeText="Say something different."
          extraText="Sign up to all Inso features."
          setactiveModal={setactiveModal}
        >
          <div className="border-secondary  my-5 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl  sm:shadow-2xl p-0 sm:p-20 sm:pb-12">
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
                  email: "",
                  alternativeEmail: "",
                  password: "",
                  repeatPassword: "",
                  primaryUse: "",
                  user: "",
                  work: "",
                  acceptedTerms: false,
                  recieveInfo: false,
                }}
                validationSchema={validationSchema}
                // onSubmit={handleSubmit}
              >
                {(props) => (
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
                    />
                    {/* <CustomField
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
                    /> */}
                  </Form>
                )}
              </Formik>
              {/* button */}
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
            </div>
          </div>
        </SignInCont>
      ) : null}
    </div>
  );
}

export default Modal;
