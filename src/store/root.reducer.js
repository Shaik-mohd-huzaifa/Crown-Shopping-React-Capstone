import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { UserProfileToggleReducer } from "./UserProfile/userProfile.reducer";
import { CategoryReducer } from "./Category/category.reducer";

export const rootreducer = combineReducers({
  user: userReducer,
  ProfileOpen: UserProfileToggleReducer,
  Category: CategoryReducer,
});
