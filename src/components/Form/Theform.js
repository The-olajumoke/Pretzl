import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import {CustomField} from "./CustomInput"
function Theform() {
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
  const handleSubmit = (values, {setSubmitting, resetForm}) => {
      setTimeout(()=>{
          alert(JSON.stringify(values,null,2));
          resetForm();
          setSubmitting(false);
          
      },3000)
  };

  return (
    <div>
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
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form className=" w-2/5 flex flex-col">
            <h1>SIGN UP</h1>
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
              placeholder="Enter first name"
            />
            <CustomField
              label="User Name"
              name="userName"
              type="text"
              placeholder="Enter first name"
            />
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


          </Form> 
        )}
      </Formik>
    </div>
  );
}

export default Theform;
