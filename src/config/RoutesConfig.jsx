import {lazy} from "react";
import Loadable from "@/utils/Loadable.jsx";



const LoginPage = Loadable(lazy(() => import('../pages/login/Login.page')))
const SignUpPage = Loadable(lazy(() => import('../pages/signup/SignUp.page.jsx')))
const MakeKnowHow = Loadable(lazy(() => import('../pages/knowhow/MakeKnowhow')))
const DatesListPage = Loadable(lazy(() => import('../components/dates/DatesListWrapper')))


export const AuthConfig = [
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


export const ALLROUTES_CONFIG = [
    {
        id: 'KNOWHOWPAGE',
        path: '/know-how',
        element: <MakeKnowHow />,
        desc: 'MY KNOW-HOW'
    },
    {
        id: 'CalendarListPage',
        path: '/calendarlist',
        element: <DatesListPage />,
        desc: 'Calendar List'
    }
]

