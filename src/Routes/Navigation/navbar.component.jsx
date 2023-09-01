import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User.Context";
import "./navigation.styles.scss";
import Button from "../../Components/button/button.component";
import { userSignOut } from "../../utils/Firebase/firebase.utils";

export const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const HandleSignout = async () => {
    await userSignOut();
    setCurrentUser(null);
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
