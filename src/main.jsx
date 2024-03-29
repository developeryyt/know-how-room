import React, {useCallback, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";

import UserAuth from "./context/AuthContext.jsx";
import LoginPage from "./pages/login/Login.page.jsx";


import './style/index.css'
import KnowDate from "./components/common/KnowDate.jsx";
import {Provider} from "react-redux";
import ReduxTodo from "./ReduxTodo.jsx";
import {applyMiddleware, compose, createStore} from "redux";
import {todoReducer} from "./todoSlice.js";

const _root = document.getElementById('root')


const loggerMiddleware = store => next => action => {
    // console.log('Previous State:', store.getState());
    // console.log('Action:', action);
    const result = next(action);
    console.log('Next State:', store.getState());
    return result;
};


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(loggerMiddleware),
    // other store enhancers if any
);


const store = createStore(todoReducer, enhancer)

const App = () => {

    return (
        <div className='App'>

        </div>
    )
}


ReactDOM.createRoot(_root).render(
    <Router>
        <UserAuth>
            <Provider store={store}>
                <App/>
            </Provider>
        </UserAuth>
    </Router>
)

