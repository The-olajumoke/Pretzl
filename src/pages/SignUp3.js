import React, { useState } from "react";
import * as Yup from "yup";
import "../Styling/SignUp.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import SignInCont from "../components/SignInCont";
import { Form, Formik } from "formik";
import InputCheckbox from "../components/Form/InputCheckbox";
import FormErrorMessage from "../components/Form/FormErrorMessage";
import Dropdown from "../components/Form/Dropdown";
import Button from "../components/SignUp/Button";
import history from "../utils/history";

function SignUp3({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");

  const validationSchema = Yup.object({
    acceptedTerms: Yup.boolean()
      .oneOf([true], "Please check to proceed")
      .required("Required"),
  });
  const handleBack = () => {
    setactiveModal("signUp2");
  };
  return (
    <SignInCont
      title="Sign Up"
      largeText="Final Questions"
      extraText=""
      setactiveModal={setactiveModal}
      backBtnFunction={handleBack}
    >
      <div className="signUp-content">
        <div className="desktopCancel ml-0 ">
          <div
            onClick={() => setactiveModal("signUp2")}
            className="backBtn items-center flex cursor-pointer  "
          >
            <FiArrowLeft className=" backIcon" />
            <h3>Back</h3>
          </div>

          <MdClose
            // onClick={() => setactiveModal(false)}
            onClick={() => {
              history.push("./");
            }}
            className="hidden lg:flex text-primary cursor-pointer  h-8 w-8"
          />
        </div>
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
                  options={["Education", "Presentations", "Team work", "Other"]}
                  isActive1={isActive1}
                  setIsActive1={setIsActive1}
                  setIsActive2={setIsActive2}
                  setIsActive3={setIsActive3}
                  initial="select one"
                />
                <Dropdown
                  name="user"
                  label="I am a:"
                  selected={selected2}
                  setSelected={setSelected2}
                  initial="Select one"
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
                  isActive1={isActive2}
                  setIsActive1={setIsActive2}
                  setIsActive2={setIsActive1}
                  setIsActive3={setIsActive3}
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
                  isActive1={isActive3}
                  setIsActive1={setIsActive3}
                  setIsActive2={setIsActive2}
                  setIsActive3={setIsActive1}
                />
              </div>

              <div className="other-part">
                <div className="checkboxCont">
                  <InputCheckbox name=" acceptedTerms">
                    I agree to <a href="">terms & conditions</a>
                  </InputCheckbox>
                  <FormErrorMessage name="acceptedTerms" />

                  <InputCheckbox name="recieveInfo">
                    I agree to receive Inso news and updates
                  </InputCheckbox>
                </div>
                <Link to="ring" className="">
                  <div className="">
                    <Button mt="mt-8" disabled={!(isValid && dirty)}>
                      Continue
                    </Button>
                  </div>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </SignInCont>
  );
}
export default SignUp3;
