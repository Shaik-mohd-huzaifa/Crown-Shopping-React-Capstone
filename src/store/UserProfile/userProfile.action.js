import { isUserProfileOpenActions } from "./userProfile.types";

export const ToggleUserProfile = () => {
  return {
    type: isUserProfileOpenActions.TOGGLE_PROFILE,
  };
};
