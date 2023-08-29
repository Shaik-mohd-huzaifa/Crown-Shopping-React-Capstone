import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/Firebase/firebase.utils";
const Signin = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const datamodel = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("There is an Error", error);
    }
  };
  return (
    <div>
      <p>This is sign in page</p>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default Signin;
