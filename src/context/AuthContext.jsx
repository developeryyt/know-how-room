import {createContext, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext()

const UserAuth = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('userToken')??'')
    const navigate = useNavigate()

    const onLogin = async (id, pw) => {}
    const onRegister = async () => {}


    const onLogout = () => {}


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


export default UserAuth


