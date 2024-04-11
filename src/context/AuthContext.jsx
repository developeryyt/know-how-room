import {createContext, useContext, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useNetworks} from "../hooks/useNetworks.js";

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


export const useAuth = () => {
    return useContext(AuthContext);
}


export default UserAuth


