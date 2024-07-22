import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onRegister: () => {},
        onLogin: (state, action) => {

        },
        onLogout: () => {},
    }
})

export const {
    onRegister,
    onLogin,
    onLogout
} = AuthSlice.actions

export default AuthSlice.reducer