export const CartItem = ({ item }) => {
  const { name, quantity } = item;
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>{quantity}</p>
    </div>
  );
};
