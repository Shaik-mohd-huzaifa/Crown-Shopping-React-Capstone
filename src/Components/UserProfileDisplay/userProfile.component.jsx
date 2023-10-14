import { ProfileContainer, ToggleContainer } from "./userProfile.styled";
import { userSignOut } from "../../utils/Firebase/firebase.utils";
import Button, { BUTTON_CLASSES_TYPES } from "../button/button.component";

const UserProfile = ({ ProfileImage }) => {
  return (
    <ProfileContainer>
      <img src={ProfileImage} alt="Profile" />
      <ToggleContainer>
        <span onClick={userSignOut}>Log Out</span>
        <Button ButtonType={BUTTON_CLASSES_TYPES.inverted} />
      </ToggleContainer>
    </ProfileContainer>
  );
};

export default UserProfile;
