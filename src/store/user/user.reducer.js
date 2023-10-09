export const REDUCER_ACTION_TYPES = {
  UPDATE_CURRENT_USER: "UPDATE_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, currentUser } = action;
  switch (type) {
    case REDUCER_ACTION_TYPES.UPDATE_CURRENT_USER:
      console.log(currentUser);
      return {
        ...state,
        currentUser,
      };
    default:
      return state;
  }
};
