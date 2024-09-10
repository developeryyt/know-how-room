import {lazy} from "react";
import Loadable from "@/utils/Loadable.jsx";



const LoginPage = Loadable(lazy(() => import('../pages/login/Login.page')))
const SignUpPage = Loadable(lazy(() => import('../pages/signup/SignUp.page.jsx')))
const MakeKnowHow = Loadable(lazy(() => import('../pages/knowhow/MakeKnowhow')))
const DatesListPage = Loadable(lazy(() => import('../components/dates/DatesListWrapper')))


export const AuthConf = [
    {
        id: 'LoginPage',
        path: 'login',
        element: <LoginPage />,
    },
    {
        id: 'SignUpPage',
        path: 'signup',
        element: <SignUpPage />,
    }
]


export const ContentsConf = [
    {
        id: 'KNOWHOWPAGE',
        path: '/know-how',
        element: <MakeKnowHow />,
    },
]

