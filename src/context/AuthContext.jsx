import {createContext, useContext, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useNetworks} from "../hooks/useNetworks.js";

import PropTypes from "prop-types";

const AuthContext = createContext()

const UserAuth = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('userToken')??'')
    const navigate = useNavigate()

    const onLogin = async (data) => {
        await useNetworks({
            method: 'POST',
            url: '/auth/login',
            ...data,
        })
    }

    const onRegister = async (data) => {
        await useNetworks({
            method: 'POST',
            url: '/auth/register',
            ...data
        })
    }

    const onLogout = () => {
        localStorage.removeItem('myToken')
        localStorage.removeItem('myRefreshToken')
        navigate('/login')
    }

    const value = useMemo(() => ({
        onLogin,
        onLogout,
        onRegister
    }), [])


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

UserAuth.propTypes = {
    children: PropTypes.node,
}


export const useAuth = () => {
    return useContext(AuthContext);
}


export default UserAuth


