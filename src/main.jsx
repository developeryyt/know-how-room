import React, {useCallback, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";

import UserAuth from "./context/AuthContext.jsx";
import LoginPage from "./pages/login/Login.page.jsx";


import './style/index.css'
import KnowDate from "./components/common/KnowDate.jsx";

const _root = document.getElementById('root')


const App = () => {


    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    const handleMouseDown = () => {
        setIntervalId(setInterval(() => console.log('1'), 100));
    };

    const handleMouseUpOrLeave = () => {3
        clearInterval(intervalId);
        setIntervalId(null);
    };



    return (
        <div className='App'>
            {/*<LoginPage />*/}
            <KnowDate />
            {/*<button*/}
            {/*    type='button'*/}
            {/*    onMouseDown={handleMouseDown}*/}
            {/*    onMouseUp={handleMouseUpOrLeave}*/}
            {/*    onMouseLeave={handleMouseUpOrLeave}*/}
            {/*>*/}
            {/*마우스다운*/}
            {/*</button>*/}


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

