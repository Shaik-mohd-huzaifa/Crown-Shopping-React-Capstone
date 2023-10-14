import { isUserProfileOpenActions } from "./userProfile.types";
const INITALSTATE = {
  isUserProfileOpen: false,
};

export const UserProfileToggleReducer = (state = INITALSTATE, action) => {
  const { type } = action;
  if (type === isUserProfileOpenActions.TOGGLE_PROFILE) {
    return {
      ...state,
      isUserProfileOpen: !state.isUserProfileOpen,
    };
  }
  return state;
};
