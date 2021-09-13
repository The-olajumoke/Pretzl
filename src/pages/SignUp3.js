import React, { useState } from "react";
import * as Yup from "yup";

import { MdClose } from "react-icons/md";
import SignInCont from "../components/SignInCont";
import { FiArrowRight } from "react-icons/fi";

import { Field, Form, Formik } from "formik";
import CustomField from "../components/Form/CustomInput";
import InputCheckbox from "../components/Form/InputCheckbox";
import FormErrorMessage from "../components/Form/FormErrorMessage";
import CustomSelect from "../components/Form/CustomSelect";
import Option from "../components/Form/Option";
import Dropdown from "../components/Form/Dropdown";
import Button from "../components/SignUp/Button";

function SignUp3({ activeModal, setactiveModal }) {
  const [guest, setGuest] = useState(false);
  const [selected, setSelected] = useState("Select One");
  const [selected2, setSelected2] = useState("Select One");
  const [selected3, setSelected3] = useState("Where do you work");

  const [loginBtn, setLoginBtn] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    acceptedTerms: Yup.boolean()
      .oneOf([true], "Please check to proceed")
      .required("Required"),
  });

  return (
    <SignInCont
      title="Sign Up"
      largeText="Final Questions"
      setactiveModal={setactiveModal}
    >
      <div className="border border-btnText my-5 sm:my-0  flex flex-col justify-around bg-white col-span-3 w-full  rounded-r-3xl   p-0 sm:px-20 sm:py-7 sm:pb-8">
        <MdClose
          onClick={() => setactiveModal(false)}
          className="hidden lg:flex text-black absolute right-5 top-3 sm:right-10 sm:top-10 cursor-pointer  h-8 w-8"
        />

        <div className="h-auto sm:h-full flex flex-col   justify-between p-2 sm:pt-5">
          <Formik
            initialValues={{
              acceptedTerms: false,
            }}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="flex flex-col justify-between h-full">
                <div className="">
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
                    label="I am a:"
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
                  className=" flex flex-col justify-end
                "
                >
                  <div className="my-3 py-2 flex flex-col">
                    <InputCheckbox name=" acceptedTerms">
                      I agree to <a href="">terms & conditions</a>
                    </InputCheckbox>
                    <FormErrorMessage name="acceptedTerms" />
                  </div>

                  <InputCheckbox name="recieveInfo">
                    I agree to receive Inso news and updates
                  </InputCheckbox>
                  <Button mt="mt-2" disabled={!(isValid && dirty)}>
                    Continue
                  </Button>

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
