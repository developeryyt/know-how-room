import {useEffect} from "react";
import {Routes, useNavigate} from "react-router-dom";



const RouterConfig = () => {

    return (
        <Routes>

        </Routes>
    )
}

const App = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/login')
    }, []);

    return (
        <>

        </>
    )
}




export default App
