import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";

const Checkout = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="checkout-container">
      <h2 className="checkout-header">Checkout</h2>
    </div>
  );
};
