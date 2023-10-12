import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import CheckoutItem from "../../Components/Checkout-Component/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(ShoppingCartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem itemdetails={item} key={item.id} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>
    </div>
  );
};

export default Checkout;
