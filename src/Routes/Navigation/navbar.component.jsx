import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import Logo from "../../assets/Website Logo.png";
import { useSelector } from "react-redux";
import { UserContext } from "../../contexts/User.Context";
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
import UserProfile from "../../Components/UserProfileIcon/userProfile.component";
import Button, {
  BUTTON_CLASSES_TYPES,
} from "../../Components/button/button.component";
import { userSignOut } from "../../utils/Firebase/firebase.utils";

export const Navbar = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useContext(ShoppingCartContext);

  const email = currentUser ? currentUser.email : "";

  return (
    <Fragment>
      <Navigation>
        <LogoContainer to="/">
          <img className="logo" src={Logo} alt="logo" />
          <p>CoutureCart</p>
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink onClick={userSignOut}>Sign Out</NavLink>
          ) : (
            <NavLink to="/auth">Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </Navigation>
      {currentUser && <UserProfile ProfileImage="../../assets/crown.svg" />}
      <Outlet />
      <Footer />
    </Fragment>
  );
};
