import { IconContainer } from "./userIcon.styled";
import { ToggleUserProfile } from "../../store/UserProfile/userProfile.action";
import { useDispatch } from "react-redux";
const UserProfileIcon = ({ ProfileImage }) => {
  const dispatch = useDispatch();
  const HandleUserProfileToggle = () => {
    console.log("Works");
    dispatch(ToggleUserProfile());
  };

  return (
    <IconContainer onClick={() => HandleUserProfileToggle()}>
      <img src={ProfileImage} alt="Profile" />
    </IconContainer>
  );
};

export default UserProfileIcon;
