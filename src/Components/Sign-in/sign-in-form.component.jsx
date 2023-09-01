import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signinWithUserEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-Component/form-input.component";
import "./signin-form-component.style.scss";
import { UserContext } from "../../contexts/User.Context";

const DEFAULT_FORM_VALUES = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [loginDetails, setLoginDetails] = useState(DEFAULT_FORM_VALUES);
  const { email, password } = loginDetails;
  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      // const datamodel = await createUserDocumentFromAuth(user);
      setCurrentUser(user);
    } catch (error) {
      console.log("There is an Error", error);
    }
  };

  const SigninUser = async () => {
    try {
      const { user } = await signinWithUserEmailAndPassword(email, password);
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Entered Wrong Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this account");
          break;
        default:
          console.log(error);
      }
    }
  };

  const HandleValue = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  return (
    <div className="signin-form-container">
      <h2>Already have a account ? </h2>
      <span>Sign in with your Existing Email</span>
      <div className="input-container">
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={HandleValue}
          required
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={HandleValue}
          required
          value={password}
        />
      </div>
      <div className="buttons-containers">
        <Button ButtonType="" onClick={SigninUser}>
          Sign In
        </Button>
        <Button ButtonType="google" onClick={logGoogleUser}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
