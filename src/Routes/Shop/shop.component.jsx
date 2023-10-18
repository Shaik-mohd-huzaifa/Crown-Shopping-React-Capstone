import { Route, Routes } from "react-router";
import CategoriesPreview from "../Categories-preview/Categories-preview.component";
import Category from "../../Components/Category/Category.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoriesAndData } from "../../utils/Firebase/firebase.utils";
import { SetCategoryData } from "../../store/Category/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryDataMap = async () => {
      const data = await getCategoriesAndData("categories");
      dispatch(SetCategoryData(data));
    };
    getCategoryDataMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
