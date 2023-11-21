import { createSelector } from "reselect";

const Category = (state) => state.Category;

export const CategorySelectorCheck = createSelector(
  [Category],
  (Category) => Category.ShopData,
);

export const CategorySelector = createSelector(
  [CategorySelectorCheck],
  (CategorySelectorCheck) =>
    CategorySelectorCheck.reduce((acc, ShopData) => {
      const { title, items } = ShopData;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {}),
);
