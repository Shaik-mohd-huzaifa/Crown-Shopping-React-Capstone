import { ProfileContainer, ToggleContainer } from "./userProfile.styled";
import { userSignOut } from "../../utils/Firebase/firebase.utils";
import Button, { BUTTON_CLASSES_TYPES } from "../button/button.component";

const UserProfile = ({ ProfileImage }) => {
  const HandleSignout = async () => {
    await userSignOut();
  };
  return (
    <ProfileContainer>
      <img src={ProfileImage} alt="Profile" />
      <ToggleContainer>
        <span onClick={HandleSignout()}>Log Out</span>
        <Button ButtonType={BUTTON_CLASSES_TYPES.inverted} />
      </ToggleContainer>
    </ProfileContainer>
  );
};

export default UserProfile;
