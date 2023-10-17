import {
  ProfileContainer,
  InfoContainer,
  ImageContainer,
  Info,
  QuickLinks,
} from "./userProfile.styled";
import { userSignOut } from "../../utils/Firebase/firebase.utils";
import Logout from "./../../assets/logout.png";
import Wishlist from "./../../assets/wishlist.png";
import Cart from "./../../assets/shopping-bag.svg";
import userIcon from "./../../assets/userIcon.png";
import { useDispatch } from "react-redux";
import { ToggleUserProfile } from "../../store/UserProfile/userProfile.action";

const UserProfile = ({ ProfileImage, userEmail, userName }) => {
  const dispatch = useDispatch();

  const HandleUserLogOut = () => {
    userSignOut();
    dispatch(ToggleUserProfile());
  };

  return (
    <ProfileContainer>
      <InfoContainer>
        <ImageContainer>
          <img src={ProfileImage || userIcon} alt="Profile" />
        </ImageContainer>
        <Info>
          <p>{userName || "User"}</p>
          <p>{userEmail}</p>
        </Info>
      </InfoContainer>
      <QuickLinks>
        <img src={Wishlist} alt="" />
        <span>Wishlist</span>
      </QuickLinks>
      <QuickLinks>
        <img src={Cart} alt="" />
        <span>Cart</span>
      </QuickLinks>
      <p className="logout" onClick={() => HandleUserLogOut()}>
        <img src={Logout} alt="" />
        Logout
      </p>
    </ProfileContainer>
  );
};

export default UserProfile;
