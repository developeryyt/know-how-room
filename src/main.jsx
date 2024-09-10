import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

import './utils/i18n'

import {store} from "@/src/store/index.js";
import {ErrorBoundary} from "react-error-boundary";

import './style/index.css'
import UserAuth from "@/src/context/AuthContext.jsx";
import App from "@/src/pages/App.jsx";

const $root = document.getElementById('root')
const _APP = createRoot($root)

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

