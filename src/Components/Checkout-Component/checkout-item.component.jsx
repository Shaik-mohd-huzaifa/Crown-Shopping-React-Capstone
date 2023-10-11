import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import "./checkout-item.styles.scss";
import Button from "../button/button.component";

const CheckoutItem = ({ itemdetails }) => {
  const { reduceCartItem, addCartItems, removeItemfromCart } =
    useContext(ShoppingCartContext);
  const { name, imageUrl, quantity, price } = itemdetails;

  const reduceitemquantity = () => {
    reduceCartItem(itemdetails.id);
  };

  const increaseItemQuantity = () => {
    addCartItems(itemdetails);
  };

  const removeItem = () => {
    removeItemfromCart(itemdetails);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={reduceitemquantity}>
          &#8722;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemQuantity}>
          &#43;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
