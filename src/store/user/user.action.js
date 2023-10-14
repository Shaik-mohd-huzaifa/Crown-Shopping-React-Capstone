import { REDUCER_ACTION_TYPES } from "./user.types";
export const setCurrentUser = (user) => {
  return {
    type: REDUCER_ACTION_TYPES.UPDATE_CURRENT_USER,
    payload: user,
  };
};
