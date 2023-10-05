import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthUserStateChanged,
} from "../utils/Firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const REDUCER_ACTION_TYPES = {
  UPDATE_CURRENT_USER: "UPDATE_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state, action) => {
  const { type, currentUser } = action;
  switch (type) {
    case REDUCER_ACTION_TYPES.UPDATE_CURRENT_USER:
      console.log(currentUser);
      return {
        ...state,
        currentUser,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) =>
    dispatch({
      type: REDUCER_ACTION_TYPES.UPDATE_CURRENT_USER,
      currentUser: user,
    });

  useEffect(() => {
    const unsubscribe = onAuthUserStateChanged((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
