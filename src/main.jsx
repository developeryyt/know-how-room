import React, {Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes, useLocation, useParams, useSearchParams} from "react-router-dom";

import UserAuth from "./context/AuthContext.jsx";


import './style/index.css'
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {todoReducer} from "./todoSlice.js";
import {ROUTES_CONFIG} from "./routes/route.config.jsx";
import HeaderTemplate from "./components/layout/header/HeaderTemplate.jsx";


import './utils/i18n'
import {ErrorBoundary} from "react-error-boundary";

const _root = ReactDOM.createRoot(document.getElementById('root'))


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
            <Suspense fallback={<div>Loading...</div>}>
                <HeaderTemplate/>
                <div className='container'>
                    <Routes>
                        {
                            ROUTES_CONFIG?.map((route) => {
                                return <Route key={`route__${route['id']}`} {...route} />
                            })
                        }
                    </Routes>
                </div>
            </Suspense>
        </div>
    )
}


_root.render(
    <ErrorBoundary fallback={<div>ErrorBoundary....</div>}>
        <Router>
            <UserAuth>
                <Provider store={store}>
                    <App/>
                </Provider>
            </UserAuth>
        </Router>
    </ErrorBoundary>
)

