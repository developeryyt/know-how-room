import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";

import UserAuth from "./context/AuthContext.jsx";
import LoginPage from "./pages/login/Login.page.jsx";


import './style/index.css'

const _root = document.getElementById('root')


const App = () => {

    return (
        <div className='App'>
            <LoginPage />
        </div>
    )
}


ReactDOM.createRoot(_root).render(
    <Router>
        <UserAuth>
            <App/>
        </UserAuth>
    </Router>
)

