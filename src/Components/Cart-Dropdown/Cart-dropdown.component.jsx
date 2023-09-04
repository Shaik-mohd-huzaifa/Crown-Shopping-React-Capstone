import { useContext, useEffect, useState } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import { CartItem } from "../cart-item/cart-item.component";

const CartDropDown = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {!cartItems.length ? (
          <p className="error-message">No record Found</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <a href="/checkout"></a>
      <Button ButtonType="" style={{ width: "100%" }}>
        CheckOut
      </Button>
    </div>
  );
};

export default CartDropDown;
