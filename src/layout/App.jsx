import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import AuthRoute from "../pages/login/AuthRoute.jsx";
import {useEffect} from "react";

const isAuthenticated = (state) => {
    if(state.auth.isAuthenticated) return true;
    return false;
}

// function withRouter(Component) {
//
//     function ComponentWithRouterProps(props) {
//         let location = useLocation()
//         let navigate = useNavigate()
//         let params = useParams()
//
//
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         )
//     }
//
//     return ComponentWithRouterProps;
// }




const App = (props) => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate= useNavigate();

    useEffect(() => {
        // checkAutoLogin(dispatch, navigate)
    }, [])

    if(!auth.isAuthenticated) return <AuthRoute />

    return (
        <>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state)
    }
}


// export default withRouter(connect(mapStateToProps)(App))
export default App
