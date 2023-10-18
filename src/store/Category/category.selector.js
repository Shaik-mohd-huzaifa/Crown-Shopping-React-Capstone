export const CategorySelector = (state) => {
  const Category = state.Category.ShopData.reduce((acc, ShopData) => {
    const { title, items } = ShopData;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return Category;
};
