import React,{useState} from "react";

import SignUp2 from "./SignUp2";
import SignUp1 from "./SignUp1";
import SignUp3 from "./SignUp3";
import Page from "../components/SignUp/Page";
function SignUpModal() {
  const [activeModal, setactiveModal] = useState("signUp1");
  return (
    <Page>
      {activeModal === "signUp1" ? (
        <SignUp1 activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}
      {activeModal === "signUp2" ? (
        <SignUp2 activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}
      {activeModal === "signUp3" ? (
        <SignUp3 activeModal={activeModal} setactiveModal={setactiveModal} />
      ) : null}
    </Page>
  );
}

export default SignUpModal;
