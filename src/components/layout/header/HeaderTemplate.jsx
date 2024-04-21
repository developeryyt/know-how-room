import React, {forwardRef, useEffect, useState} from 'react';
import SideBar from "../navbar/SideBar.jsx";
import {useLocation} from "react-router-dom";

const HeaderTemplate = forwardRef((props, ref) => {

    const {pathname} = useLocation()
    const [flag, setFlag] = useState(false)


    useEffect(() => {

        switch (pathname) {
            case '/login':
            case '/signup':
            case '/know-how':
            case '/calendarlist':
                console.log(pathname)
                setFlag(true)
                return

            default:
                setFlag(false)
                return
        }

    }, [pathname])


    return (
        !flag ? (
            <header className='relative px-20 py-10 border-b-gray-300 border-b' ref={ref}>
                <SideBar/>
            </header>
        ) : null
    );
});

export default HeaderTemplate;