import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import Logo from "../../assets/Website Logo.png";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer.component";
import CartIcon from "../../Components/Cart/Cart.component";
import CartDropDown from "../../Components/Cart-Dropdown/Cart-dropdown.component";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import {
  LogoContainer,
  NavLinkContainer,
  Navigation,
  NavLink,
} from "./navigation.styled";
import UserProfile from "../../Components/UserProfileDisplay/userProfile.component";
import Button, {
  BUTTON_CLASSES_TYPES,
} from "../../Components/button/button.component";
import UserProfileIcon from "../../Components/userProfileIcon/userIcon.component";
import { userToggleSelector } from "../../store/UserProfile/userProfile.selector";
import { ToggleUserProfile } from "../../store/UserProfile/userProfile.action";
import UserLogo from "./../../assets/userIcon.png";

export const Navbar = () => {
  const [PhotoURL, setPhotoURL] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const isProfileOpen = useSelector(userToggleSelector);
  const { isCartOpen } = useContext(ShoppingCartContext);

  useEffect(() => {
    const URL = currentUser ? currentUser.photoURL || UserLogo : "";
    console.log(URL);
    setPhotoURL(URL);
  }, [currentUser]);

  return (
    <Fragment>
      <Navigation>
        <LogoContainer to="/">
          <img className="logo" src={Logo} alt="logo" />
          <p>CoutureCart</p>
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>
          {!currentUser && <NavLink to="/auth">Sign in</NavLink>}
          <CartIcon />
          {isCartOpen && <CartDropDown />}
          {currentUser && (
            <UserProfileIcon
              ProfileImage={PhotoURL ? PhotoURL : `${currentUser.email[0].png}`}
            />
          )}
        </NavLinkContainer>
        {isProfileOpen && (
          <UserProfile
            ProfileImage={UserLogo}
            userName={currentUser ? currentUser.displayName || "" : ""}
            userEmail={currentUser ? currentUser.email || "" : ""}
          />
        )}
      </Navigation>
      <Outlet />
      <Footer />
    </Fragment>
  );
};
