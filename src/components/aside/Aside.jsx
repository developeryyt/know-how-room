import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Button from "../button/Button.jsx";

const Aside = () => {

    const {pathname} = useLocation()
    const [flag, setFlag] = useState(false)
    const [cate, setCate] = useState(new Array(0))

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

    const handleCategory = () => {
        setCate(prev => ([
            ...(new Array(prev.length + 1))
        ]))
    }


    useEffect(() => {
        console.log(cate)
    }, [cate]);



    return (
        !flag ? (
            <aside className='absolute left-0 top-0 bg-#fff'>
                <div className='text-left'>
                    <Button
                        type='button'
                        className='inline-block !w-auto gap-6'
                        onClick={handleCategory}
                    >
                        <span>카테고리 추가</span>
                        <span>+</span>
                    </Button>
                </div>
                <ul>
                    {
                        cate?.map((tab, idx) => (
                            <li key={`tabs__${idx}`}>
                                <input type='text' placeholder='제목없음' />
                            </li>
                        ))
                    }
                </ul>
            </aside>
        ) : null
    );
};

export default Aside;