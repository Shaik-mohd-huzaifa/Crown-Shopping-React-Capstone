import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopdataContext } from "../../contexts/ShopData.Context";
import { ProductCard } from "../Product-Card/Product-card.component";
// import "./Category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { shopdata } = useContext(ShopdataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(shopdata[category]);
  }, [category, shopdata]);

  return (
    <div className="category-container">
      <h2>{category.toUpperCase()}</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
