import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import UserAuth from "./context/AuthContext.jsx";


import './style/index.css'
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {todoReducer} from "./todoSlice.js";
import {ROUTES_CONFIG} from "./routes/route.config.jsx";
import HeaderTemplate from "./components/layout/header/HeaderTemplate.jsx";


import './utils/i18n'

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
            <Suspense fallback={<div>Loading...</div>}>
                {!['/login', '/signup'].includes(location.pathname) && <HeaderTemplate/>}
                <Routes>
                    {
                        ROUTES_CONFIG?.map((route) => {
                            return <Route key={route['id']} {...route} />
                        })
                    }
                </Routes>
            </Suspense>
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

