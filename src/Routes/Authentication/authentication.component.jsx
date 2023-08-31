import SignUpForm from "../../Components/Sign-up/Sign-up-form.component";
import SignInForm from "../../Components/Sign-in/sign-in-form.component";
import "./signin-component.style.scss";
const Signin = () => {
  return (
    <div className="user-login-signin-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Signin;
