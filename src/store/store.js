import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { rootreducer } from "./root.reducer";

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootreducer);