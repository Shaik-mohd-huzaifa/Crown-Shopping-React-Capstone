import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { UserProfileToggleReducer } from "./UserProfile/userProfile.reducer";

export const rootreducer = combineReducers({
  user: userReducer,
  ProfileOpen: UserProfileToggleReducer,
});
