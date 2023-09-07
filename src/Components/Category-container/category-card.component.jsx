import {
  HomePageCategoryContainer,
  BackgroundImage,
  CategoryContainer,
} from "./category-card.styled.jsx";
import { useNavigate } from "react-router";

const CategoryCard = ({ title, src, route }) => {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate(`/${route}`);
  };
  return (
    <HomePageCategoryContainer onClick={HandleNavigate}>
      <BackgroundImage imageUrl={src}></BackgroundImage>
      <CategoryContainer>
        <h2>{title}</h2>
        <a href="https://www.google.com">Shop Now</a>
      </CategoryContainer>
    </HomePageCategoryContainer>
  );
};

export default CategoryCard;
