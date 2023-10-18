import { CategoryActionTypes } from "./category.types";

const INITAL_STATE = {
  ShopData: [],
};

export const CategoryReducer = (state = INITAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CategoryActionTypes.GET_CATEGORIES_DATA:
      return {
        ...state,
        ShopData: payload,
      };
    default:
      return state;
  }
};
