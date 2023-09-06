import { ShopdataContext } from "../../contexts/ShopData.Context";
import { useContext } from "react";
import "../Shop/shop.styles.scss";
import CategoryPreview from "../../Components/Category Preview/Category-preview.component";

const CategoriesPreview = () => {
  const { shopdata } = useContext(ShopdataContext);
  return (
    <div className="shop-container">
      {Object.keys(shopdata).map((title) => {
        const products = shopdata[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
