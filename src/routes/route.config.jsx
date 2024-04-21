import {lazy} from "react";
import Loadable from "./Loadable.jsx";

const HomePage = Loadable(lazy(() => import('../pages/home/Home.page')))
const LoginPage = Loadable(lazy(() => import('../pages/login/Login.page')))
const SignUpPage = Loadable(lazy(() => import('../pages/signup/SignUp.Page')))
const MakeKnowHow = Loadable(lazy(() => import('../pages/knowhow/MakeKnowhow')))
const DatesListPage = Loadable(lazy(() => import('../components/dates/DatesListWrapper')))

export const ROUTES_CONFIG = [
    {
        id: 'HomePage',
        path: '/',
        element: <HomePage />,
        desc: 'Home'
    },
    // {
    //     id: 'KNOWHOWPAGE',
    //     path: '/know-how',
    //     element: <MakeKnowHow />,
    //     desc: 'MY KNOW-HOW'
    // },
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
    },
    {
        id: 'CalendarListPage',
        path: '/calendarlist',
        element: <DatesListPage />,
        desc: 'Calendar List'
    }
]

