import { REDUCER_ACTION_TYPES } from "./user.types";
export const setCurrentUser = (user) => ({
  type: REDUCER_ACTION_TYPES.UPDATE_CURRENT_USER,
  currentUser: user,
});
