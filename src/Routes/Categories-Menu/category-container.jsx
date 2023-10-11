import "./categories.style.scss";
import CategoryCard from "../../Components/Category-container/category-card.component";
import categoriesData from "./categories.json";
import { Outlet } from "react-router";
import Intro from "../../Components/IntroContainer/IntroContainer.component";

export const CategoryContainer = () => {
  return (
    <div>
      <Intro />
      <h2 className="category-header">Categories</h2>
      <div className="categories-container">
        {categoriesData.map((category) => (
          <CategoryCard
            title={category.title}
            src={category.imageUrl}
            key={category.id}
            route={category.route}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
