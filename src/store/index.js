import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {applyMiddleware, compose} from "redux";
import authReducer from "./authSlice.js";


const reducer = combineReducers({
    auth: authReducer,
})

const loggerMiddleware = store => next => action => {
    const result = next(action);
    console.log('Next State:', store.getState());
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(loggerMiddleware),
);

export const store = configureStore({
    reducer,
})
