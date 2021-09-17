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
import LogInGuest from "./LogInGuest";
import LogInUser from "./LogInUser";
import SignUp2 from "./SignUp2";
import SignUp1 from "./SignUp1";
import SignUp3 from "./SignUp3";
function Modal({ activeModal, setactiveModal }) {
  
  return (
    <div>
      {/* CHOOSEUSER */}
      {activeModal === "chooseUser" ? (
        <ChooseUser activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}

      {/* LOGIN AS GUEST */}
      {activeModal === "logInGuest" ? (
        <LogInGuest activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}
      {/* LOGIN AS USER */}
      {activeModal === "logInUser" ? (
        <LogInUser activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}

      {/* SIGN UP1 */}
      {activeModal === "signUp1" ? (
        <SignUp1 activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}

      {/* SIGN UP2 */}
      {activeModal === "signUp2" ? (
        <SignUp2 activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}
      {/* SIGN UP3 */}
      {activeModal === "signUp3" ? (
        <SignUp3 activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}
    </div>
  );
}

export default Modal;
