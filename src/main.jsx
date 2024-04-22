import React, {Suspense, useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import UserAuth from "./context/AuthContext.jsx";


import './style/index.css'
import {Provider} from "react-redux";
import {applyMiddleware, compose} from "redux";
import {ROUTES_CONFIG} from "./routes/route.config.jsx";
import HeaderTemplate from "./components/layout/header/HeaderTemplate.jsx";


import './utils/i18n'
import {ErrorBoundary} from "react-error-boundary";
import {configureStore} from "@reduxjs/toolkit";

import Slices from './store'
import Aside from "./components/aside/Aside.jsx";

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


const store = configureStore({
    reducer: {
        ...Slices
    }
}, enhancer)

const App = () => {

    const headerRef = useRef()
    const [headerH, setHeaderH] = useState(0)

    useEffect(() => {
        setHeaderH(headerRef.current.offsetHeight)
    }, []);


    useEffect(() => {
        console.log('헤더 높이', headerH)
    }, [headerH]);


    return (
        <div className='App'>
            <HeaderTemplate ref={headerRef}/>
            <div
                className={`relative m-auto border-red-500 border-1 border-box`}
                style={{
                    borderColor: 'blue',
                    height: `calc(100% - ${headerH}px)`
                }}
            >
                <Aside />
                <Routes>
                    {
                        ROUTES_CONFIG?.map((route) => {
                            return <Route key={`route__${route['id']}`} {...route} />
                        })
                    }
                </Routes>
            </div>
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

