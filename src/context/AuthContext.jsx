import {createContext, useState} from "react";

const AuthContext = createContext()

const UserAuth = ({children}) => {




    return (
        <AuthContext.Provider value={[]}>
            {children}
        </AuthContext.Provider>
    )
}


export default UserAuth


