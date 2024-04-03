import React, {useEffect, useState} from 'react';
import SideBar from "../navbar/SideBar.jsx";
import {useLocation} from "react-router-dom";

const HeaderTemplate = () => {

    const {pathname} = useLocation()
    const [ flag, setFlag ] = useState(false)


    useEffect(() => {

        switch(pathname) {
            case '/login':
            case '/signup':
            case '/know-how':
                console.log(pathname)
                setFlag(true)
                return

            default:
                return
        }

    }, [pathname])


    return (
        !flag ? <header className='relative px-20 py-10 border-b-gray-300 border-b'>
            <SideBar />
        </header> : null
    );
};

export default HeaderTemplate;