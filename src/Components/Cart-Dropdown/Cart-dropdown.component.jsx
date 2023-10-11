import { useContext } from "react";
import Button from "../button/button.component";
import {
  CartDropdownContainer,
  CartItems,
  ErrorMessage,
} from "./cart-dropdown.styled";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import { CartItem } from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {!cartItems.length ? (
          <ErrorMessage>No Items</ErrorMessage>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </CartItems>
      <Button onClick={navigateToCheckout} disabled={cartItems || true}>
        CheckOut
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
