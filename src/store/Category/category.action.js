import { CategoryActionTypes } from "./category.types";

export const SetCategoryData = (payload) => {
  return {
    type: CategoryActionTypes.GET_CATEGORIES_DATA,
    payload,
  };
};
