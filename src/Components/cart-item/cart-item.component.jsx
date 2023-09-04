import "./cart-item.styles.scss";

export const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span
          className="
        price"
        >
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};
