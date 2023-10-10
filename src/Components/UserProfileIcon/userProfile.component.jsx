import { Styles } from "./userProfile.styled";

const UserProfile = ({ ProfileImage }) => {
  return (
    <div className={Styles.ProfileContainer}>
      <img src={ProfileImage} alt="Profile" />
    </div>
  );
};

export default UserProfile;
