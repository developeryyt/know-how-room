import {ROUTES_CONFIG} from "../../../routes/route.config.jsx";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useCallback, useEffect} from "react";






const SidebarList = (props) => {

    const { navHandler } = props

    const { t } = useTranslation()
    const navArr = ROUTES_CONFIG.filter((list) => !Object.values(list).includes('login') && !Object.values(list).includes('signup'))

    const cb = useCallback(() => navHandler(), [location.pathname]);

    return (
        <>
            {
                navArr.map((list, idx) => {
                    return (
                        <li key={`nav__${list['id']}`} className='mb-12 last:mb-0' onClick={cb}>
                            <NavLink to={list['path']} className='inline-block py-4 w-full'>
                                {t(list['desc'])}
                            </NavLink>
                        </li>
                    )
                })
            }
        </>
    );
};

export default SidebarList;
