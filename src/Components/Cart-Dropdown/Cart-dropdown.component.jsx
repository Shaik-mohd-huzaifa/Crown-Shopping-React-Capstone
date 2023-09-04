import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {!cartItems.length ? (
          <p className="error-message">No record Found</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <Button onClick={navigateToCheckout}>CheckOut</Button>
    </div>
  );
};

export default CartDropDown;
