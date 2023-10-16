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

const UserProfile = ({ ProfileImage, userEmail, userName }) => {
  return (
    <ProfileContainer>
      <InfoContainer>
        <ImageContainer>
          <img src={ProfileImage} alt="Profile" />
        </ImageContainer>
        <Info>
          <p>{userName}</p>
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
      <p className="logout">
        <img src={Logout} alt="" />
        Logout
      </p>
    </ProfileContainer>
  );
};

export default UserProfile;
