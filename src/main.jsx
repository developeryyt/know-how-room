import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";

import {Provider} from "react-redux";
import {store} from "./store/index.js";

import './utils/i18n'

import {ErrorBoundary} from "react-error-boundary";
import UserAuth from "./context/AuthContext.jsx";
import App from "./layout/App.jsx";

import './style/index.css'

const $root = document.getElementById('root')
const _APP = createRoot($root)


console.log('2')
_APP.render(
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

