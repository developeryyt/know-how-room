import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Button from "../button/Button.jsx";

const Aside = () => {

    const {pathname} = useLocation()
    const [flag, setFlag] = useState(false)

    useEffect(() => {

        switch (pathname) {
            case '/login':
            case '/signup':
                setFlag(true)
                return

            default:
                setFlag(false)
                return
        }

    }, [pathname])


    return (
        !flag ? (
            <aside className='absolute left-0 top-0 bg-#fff'>
                <div className='text-left'>
                    <Button
                        type='button'
                        className='inline-block !w-auto gap-6'
                        onClick={() => {

                        }}
                    >
                        <span>카테고리 추가</span>
                        <span>+</span>
                    </Button>
                </div>
                <ul>

                </ul>
            </aside>
        ) : null
    );
};

export default Aside;