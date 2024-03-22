import {createContext, useState} from "react";

const AuthContext = createContext()



const UserAuth = ({children}) => {

    const [] = useState()



    return (
        <AuthContext.Provider value={[]}>
            {children}
        </AuthContext.Provider>
    )
}


export default UserAuth


