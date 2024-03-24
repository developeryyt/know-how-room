import {createContext, useState} from "react";

const AuthContext = createContext()

const UserAuth = ({children}) => {

    const [userId, setUserName] = useState('')



    return (
        <AuthContext.Provider value={{ userId }}>
            {children}
        </AuthContext.Provider>
    )
}


export default UserAuth


