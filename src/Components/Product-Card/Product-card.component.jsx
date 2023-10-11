import Button, { BUTTON_CLASSES_TYPES } from "../button/button.component";
import "./product-card.styles.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCart.Context";
import { useContext, useState } from "react";
import { ShopdataContext } from "../../contexts/ShopData.Context";

export const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addCartItems } = useContext(ShoppingCartContext);

  const HandleAddtoCart = () => addCartItems(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        ButtonType={BUTTON_CLASSES_TYPES.inverted}
        onClick={HandleAddtoCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};
