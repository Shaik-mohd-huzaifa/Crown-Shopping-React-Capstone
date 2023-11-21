import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { rootreducer } from "./root.reducer";


const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }

    console.log('type:', action.type);
    console.log('Payload:', action.payload);
    console.log('CurrentState', store.getState());

    next(action);

    console.log('Next State: ', store.getState());
}

// const middlewares = [logger];
const middlewares = [loggerMiddleware];
// const composedEnhancers = compose(applyMiddleware(...middlewares));
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootreducer, undefined, composedEnhancers);


// console.log(store);