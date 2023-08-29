import "./categories.style.scss";
import CategoryCard from "../../Category-container/category-card.component";
import categoriesData from "./categories.json";
import { Outlet } from "react-router";

export const CategoryContainer = () => {
  return (
    <div>
      <div className="categories-container">
        {categoriesData.map((category) => (
          <CategoryCard
            title={category.title}
            src={category.imageUrl}
            key={category.id}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
