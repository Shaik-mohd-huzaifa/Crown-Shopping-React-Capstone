import { REDUCER_ACTION_TYPES } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload: currentUser } = action;
  switch (type) {
    case REDUCER_ACTION_TYPES.UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser,
      };
    default:
      return state;
  }
};
