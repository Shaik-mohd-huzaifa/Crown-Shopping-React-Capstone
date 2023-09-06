import { Route, Routes } from "react-router";
import CategoriesPreview from "../Categories-preview/Categories-preview.component";
import Category from "../../Components/Category/Category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
