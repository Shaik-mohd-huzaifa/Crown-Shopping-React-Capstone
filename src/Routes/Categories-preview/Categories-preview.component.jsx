import "../Shop/shop.styles.scss";
import CategoryPreview from "../../Components/Category Preview/Category-preview.component";
import { CategorySelector } from "./../../store/Category/category.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const shopdata = useSelector(CategorySelector);
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
