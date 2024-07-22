import {Route, Routes} from "react-router-dom";
import {AuthConfig} from "../../routes/route.config.jsx";

const AuthRoute = () => {


    return (
        <Routes>
            {
               AuthConfig.map(item => {
                   const { id, path, element, desc } = item;
                   return <Route key={`page_${id}`} path={path} element={element} />
               })
            }
        </Routes>
    )
}

export default AuthRoute
