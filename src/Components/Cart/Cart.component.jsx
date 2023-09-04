import { useContext } from "react";
import { ReactComponent as CartImage } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";

const CartIcon = () => {
  const { isCartOpen, setCartState, cartItems } =
    useContext(ShoppingCartContext);

  const HandleToggle = () => {
    setCartState(!isCartOpen);
  };

  const totalQuantity = cartItems.reduce(
    (accumulator, currentElement) => accumulator + currentElement.quantity,
    0,
  );

  return (
    <div className="cart-icon-container" onClick={HandleToggle}>
      <CartImage className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
