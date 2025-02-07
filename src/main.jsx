import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

import './utils/i18n'

import {ErrorBoundary} from "react-error-boundary";

import './style/index.css'
import App from "@/pages/App.jsx";
import UserAuth from "@/context/AuthContext.jsx";
import { store } from "@/store/index.js";

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

