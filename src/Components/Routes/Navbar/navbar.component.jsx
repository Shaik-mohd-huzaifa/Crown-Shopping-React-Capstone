import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crown } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

export const Navbar = () => {
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
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
