import { useState, useContext } from "react";
import {
  signupWithUserEmailAndPassword,
  createUserDocumentFromAuth,
  signinWithUserEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";
import FormInput from "../form-Component/form-input.component";
import "./Sign-up-form.component.scss";
import Button, { BUTTON_CLASSES_TYPES } from "../button/button.component";
import { UserContext } from "../../contexts/User.Context";

const formDataDefault = {
  displayName: "",
  email: "",
  password: "",
  repeatpassword: "",
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(formDataDefault);
  const { displayName, email, password, repeatpassword } = formData;
  // const { setCurrentUser } = useContext(UserContext);s

  const resetForm = () => {
    setFormData(formDataDefault);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (repeatpassword !== password) {
      console.log("Your Password Doesn't Match");
      return;
    }

    try {
      const { user } = await signupWithUserEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      // const { user: currentUser } = await signinWithUserEmailAndPassword(
      //   email,
      //   password,
      // );
      // setCurrentUser(currentUser);
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Create User Email Already Exists");
      } else {
        console.log("Error Occured during the creation of User", error);
      }
    }
  };

  const settingIndividualFieldData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log(formData);
  return (
    <div className="signup-form-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with Email and password</span>
      <form action="" onSubmit={HandleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={settingIndividualFieldData}
          name="displayName"
          required
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          onChange={settingIndividualFieldData}
          name="email"
          required
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={settingIndividualFieldData}
          name="password"
          required
          value={password}
        />

        <FormInput
          label="Repeat Password"
          type="password"
          onChange={(e) => {
            settingIndividualFieldData(e);
          }}
          name="repeatpassword"
          required
          value={repeatpassword}
        />
        <Button type="Submit" ButtonType={BUTTON_CLASSES_TYPES.base}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
