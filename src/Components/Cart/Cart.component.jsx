import { useContext } from "react";
import { ReactComponent as CartImage } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";

const CartIcon = () => {
  const { isCartOpen, setCartState } = useContext(ShoppingCartContext);

  const HandleToggle = () => {
    setCartState(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={HandleToggle}>
      <CartImage className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
