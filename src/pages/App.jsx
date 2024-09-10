import {useEffect} from "react";
import {Outlet, Routes, useNavigate} from "react-router-dom";

import Header from "@/pages/common/layout/header/Header.jsx";
import NavBar from "@/pages/common/layout/nav/NavBar.jsx";
import Footer from "@/pages/common/layout/footer/Footer.jsx";





const RouterConfig = () => {

    return (
        <Routes>
        </Routes>
    )
}

const App = () => {

    const navigate= useNavigate()

    useEffect(() => {
        navigate('/login')
    }, [])


    return (
        <>
            <div className='layout'>
                <Header />
                <NavBar />
                <div className='container'>
                    <div className='inner'>
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}




export default App
