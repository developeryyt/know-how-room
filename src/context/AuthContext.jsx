import {createContext, useState} from "react";

const AuthContext = createContext()

const UserAuth = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('userToken')??'')


    const loginHandler = async (id, pw) => {
        await axiosController
    }


    return (
        <AuthContext.Provider value={[]}>
            {children}
        </AuthContext.Provider>
    )
}


export default UserAuth


