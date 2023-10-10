import { Styles } from "./userProfile.styled";
import { userSignOut } from "../../utils/Firebase/firebase.utils";
import Button, { BUTTON_CLASSES_TYPES } from "../button/button.component";

const UserProfile = ({ ProfileImage }) => {
  const HandleSignout = async () => {
    await userSignOut();
  };
  return (
    <div className={Styles.ProfileContainer}>
      <img src={ProfileImage} alt="Profile" />
      <div className={Styles.ToggleContainer}>
        <span onClick={HandleSignout()}>Log Out</span>
        <Button ButtonType={BUTTON_CLASSES_TYPES.inverted} />
      </div>
    </div>
  );
};

export default UserProfile;
