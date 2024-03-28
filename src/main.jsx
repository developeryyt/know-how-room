import React, {useCallback, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";

import UserAuth from "./context/AuthContext.jsx";
import LoginPage from "./pages/login/Login.page.jsx";


import './style/index.css'
import KnowDate from "./components/common/KnowDate.jsx";
import {Provider} from "react-redux";
import ReduxTodo from "./ReduxTodo.jsx";
import {createStore} from "redux";
import {todoReducer} from "./todoSlice.js";

const _root = document.getElementById('root')


const loggerMiddleware = store => next => action => {
    console.log('Previous State:', store.getState());
    console.log('Action:', action);
    const result = next(action);
    console.log('Next State:', store.getState());
    return result;
};



const store = createStore(todoReducer)

const App = () => {


    // const [intervalId, setIntervalId] = useState(null);
    //
    // useEffect(() => {
    //     return () => {
    //         if (intervalId) clearInterval(intervalId);
    //     };
    // }, [intervalId]);
    //
    // const handleMouseDown = () => {
    //     setIntervalId(setInterval(() => console.log('1'), 100));
    // };
    //
    // const handleMouseUpOrLeave = () => {3
    //     clearInterval(intervalId);
    //     setIntervalId(null);
    // };





    return (
        <div className='App'>
            {/*<LoginPage />*/}
            {/*<KnowDate />*/}
            {/*<button*/}
            {/*    type='button'*/}
            {/*    onMouseDown={handleMouseDown}*/}
            {/*    onMouseUp={handleMouseUpOrLeave}*/}
            {/*    onMouseLeave={handleMouseUpOrLeave}*/}
            {/*>*/}
            {/*마우스다운*/}
            {/*</button>*/}
            {/*<ReduxPrac />*/}
            <ReduxTodo />
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

