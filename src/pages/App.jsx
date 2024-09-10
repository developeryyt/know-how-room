import {useEffect} from "react";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";

import Header from "@/pages/common/layout/header/Header.jsx";
import NavBar from "@/pages/common/layout/nav/NavBar.jsx";
import Footer from "@/pages/common/layout/footer/Footer.jsx";
import {AuthConf, ContentsConf} from "@/config/RoutesConfig.jsx";

function Routing(list) {

    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')) navigate('/login')
    }, []);


    return (
        <Routes>
            {
                list?.map((route) => {
                    const { id, path, element } = route;
                    return (
                        <Route key={id} path={path} element={element} />
                    )
                })
            }
        </Routes>
    )
}


const AuthChecker = () => {
    return Routing(AuthConf)
}

const Contents = () => {
    return Routing(ContentsConf)
}

const App = () => {

    if(!localStorage.getItem('token')) return <AuthChecker/>

    return (
        <>
            <div className='layout'>
                <Header />
                <NavBar />
                <div className='container'>
                    <div className='inner'>
                        <Contents />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}




export default App
