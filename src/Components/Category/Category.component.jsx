import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductCard } from "../Product-Card/Product-card.component";
import "./Category.styles.scss";
import { useSelector } from "react-redux";
import { CategorySelector } from "../../store/Category/category.selector";

const Category = () => {
  const { category } = useParams();
  const shopdata = useSelector(CategorySelector);
  const [products, setProducts] = useState(shopdata[category]);

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
