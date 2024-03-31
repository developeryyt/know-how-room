import {lazy} from "react";

const HomePage = lazy(() => import('../pages/home/Home.page'))
const LoginPage = lazy(() => import('../pages/login/Login.page'))
const SignUpPage = lazy(() => import('../pages/signup/SignUp.Page'))


const HeaderTemplate = lazy(() => import('../components/layout/header/HeaderTemplate.jsx'))


export const ROUTES_CONFIG = [
    {
        id: 'HomePage',
        path: '/',
        element: <HomePage />
    },
    {
        id: 'LoginPage',
        path: '/login',
        element: <LoginPage />
    },
    {
        id: 'SignUpPage',
        path: '/signup',
        element: <SignUpPage />
    }
]

