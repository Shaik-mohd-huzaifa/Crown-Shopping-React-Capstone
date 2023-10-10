import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import Logo from "../../assets/Brain logo.png";
import { UserContext } from "../../contexts/User.Context";
import Button, {
  BUTTON_CLASSES_TYPES,
} from "../../Components/button/button.component";
import { userSignOut } from "../../utils/Firebase/firebase.utils";
import CartIcon from "../../Components/Cart/Cart.component";
import CartDropDown from "../../Components/Cart-Dropdown/Cart-dropdown.component";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import {
  LogoContainer,
  NavLinkContainer,
  Navigation,
  NavLink,
} from "./navigation.styled";

export const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(ShoppingCartContext);

  const HandleSignout = async () => {
    await userSignOut();
  };

  return (
    <Fragment>
      <Navigation>
        <LogoContainer to="/">
          <img className="logo" src={Logo} alt="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <Button
              ButtonType={BUTTON_CLASSES_TYPES.base}
              onClick={HandleSignout}
            >
              Sign Out
            </Button>
          ) : (
            <NavLink to="/auth">Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </Navigation>
      <Outlet />
    </Fragment>
  );
};
