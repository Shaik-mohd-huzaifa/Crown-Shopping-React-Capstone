import { useContext } from "react";
import "./cart-icon.styled.jsx";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import {
  CartIconContainer,
  CartIconImage,
  ItemCount,
} from "./cart-icon.styled.jsx";

const CartIcon = () => {
  const { totalQuantity, toggleCart } = useContext(ShoppingCartContext);

  const HandleToggle = () => {
    toggleCart();
  };

  return (
    <CartIconContainer onClick={HandleToggle}>
      <CartIconImage />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
