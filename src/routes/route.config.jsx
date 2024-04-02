import {lazy} from "react";

const HomePage = lazy(() => import('../pages/home/Home.page'))
const LoginPage = lazy(() => import('../pages/login/Login.page'))
const SignUpPage = lazy(() => import('../pages/signup/SignUp.Page'))



export const ROUTES_CONFIG = [
    {
        id: 'HomePage',
        path: '/',
        element: <HomePage />,
        desc: 'Home'
    },
    {
        id: 'KNOWHOWPAGE',
        path: '/know-how',
        element: <></>,
        desc: 'MY KNOW-HOW'
    },
    {
        id: 'LoginPage',
        path: '/login',
        element: <LoginPage />,
        desc: 'login',
    },
    {
        id: 'SignUpPage',
        path: '/signup',
        element: <SignUpPage />,
        desc: 'signup'
    }
]

