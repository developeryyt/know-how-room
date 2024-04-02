import React from 'react';
import SideBar from "../navbar/SideBar.jsx";

const HeaderTemplate = () => {

    const flag = !['/login', '/signup', '/know-how'].includes(location.pathname)


    return (
        flag ? <header className='relative px-20 py-10 border-b-gray-300 border-b'>
            <SideBar />
        </header> : null
    );
};

export default HeaderTemplate;