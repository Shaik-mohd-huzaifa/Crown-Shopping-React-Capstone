import { ShopdataContext } from "../../contexts/ShopData.Context";
import { useContext } from "react";
import { ProductCard } from "../../Components/Product-Card/Product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { shopdata } = useContext(ShopdataContext);
  return (
    <div className="products-container">
      {shopdata.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
