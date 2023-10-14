import { IconContainer } from "./userIcon.styled";

const UserProfileIcon = ({ ProfileImage }) => {
  return (
    <IconContainer>
      <img src={ProfileImage} alt="Profile" />
    </IconContainer>
  );
};

export default UserProfileIcon;
