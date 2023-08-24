import "./categories.style.scss";
import CategoryCard from "../Category-container/category-card.component";
import categoriesData from "./categories.json";

export const CategoryContainer = () => {
  return (
    <div className="categories-container">
      {categoriesData.map((category) => (
        <CategoryCard
          title={category.title}
          src={category.imageUrl}
          key={category.id}
        />
      ))}
    </div>
  );
};
