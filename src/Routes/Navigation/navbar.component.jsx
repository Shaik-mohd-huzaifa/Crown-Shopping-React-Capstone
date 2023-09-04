import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User.Context";
import "./navigation.styles.scss";
import Button from "../../Components/button/button.component";
import { userSignOut } from "../../utils/Firebase/firebase.utils";
import CartIcon from "../../Components/Cart/Cart.component";
import CartDropDown from "../../Components/Cart-Dropdown/Cart-dropdown.component";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";

export const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(ShoppingCartContext);

  const HandleSignout = async () => {
    await userSignOut();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Button ButtonType="" onClick={HandleSignout}>
              Sign Out
            </Button>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
