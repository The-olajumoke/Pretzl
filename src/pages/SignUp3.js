import React, { useState } from "react";
import * as Yup from "yup";
import "../Styling/SignUp.css";

import { MdClose } from "react-icons/md";
import SignInCont from "../components/SignInCont";

import { Form, Formik } from "formik";
import InputCheckbox from "../components/Form/InputCheckbox";
import FormErrorMessage from "../components/Form/FormErrorMessage";
import Dropdown from "../components/Form/Dropdown";
import Button from "../components/SignUp/Button";

function SignUp3({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [selected, setSelected] = useState("Select One");
  const [selected2, setSelected2] = useState("Select One");
  const [selected3, setSelected3] = useState("Where do you work");

  const validationSchema = Yup.object({
    acceptedTerms: Yup.boolean()
      .oneOf([true], "Please check to proceed")
      .required("Required"),
  });

  return (
    <SignInCont
      title="Sign Up"
      largeText="Final Questions"
      extraText=""
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
              acceptedTerms: false,
            }}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="sign-form3">
                <div className="frame-3">
                  <Dropdown
                    name="primaryUse"
                    label="I plan to primarily use Inso for:"
                    selected={selected}
                    setSelected={setSelected}
                    initial="Select One"
                    options={[
                      "Education",
                      "Presentations",
                      "Team work",
                      "Other",
                    ]}
                  />
                  <Dropdown
                    name="user"
                    label="I am a:"
                    selected={selected2}
                    setSelected={setSelected2}
                    initial="Select One"
                    options={[
                      "Student",
                      "Teacher",
                      "Instructional Designer/Technologist",
                      "Presenter",
                      "Director/Administrator",
                      "Manager",
                      "Team Member",
                      "Other",
                    ]}
                  />
                  <Dropdown
                    name="work"
                    label="I work in:"
                    selected={selected3}
                    setSelected={setSelected3}
                    initial="Where do you work"
                    options={[
                      "Elementary Education (K-6)",
                      "Secondary Education (7-12)",
                      "Higher Education",
                      "Government",
                      "Non-profit",
                      "Other",
                    ]}
                  />
                </div>

                <div
                  className="other-part
                "
                >
                  <div className="checkboxCont">
                    <InputCheckbox name=" acceptedTerms">
                      I agree to <a href="">terms & conditions</a>
                    </InputCheckbox>
                    <FormErrorMessage name="acceptedTerms" />

                    <InputCheckbox name="recieveInfo">
                      I agree to receive Inso news and updates
                    </InputCheckbox>
                  </div>
                  <div className="">
                    <Button mt="mt-8" disabled={!(isValid && dirty)}>
                      Continue
                    </Button>
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
export default SignUp3;
