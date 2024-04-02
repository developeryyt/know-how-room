import {ROUTES_CONFIG} from "../../../routes/route.config.jsx";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";






const SidebarList = () => {

    const { t } = useTranslation()
    const navArr = ROUTES_CONFIG.filter((list) => !Object.values(list).includes('login') && !Object.values(list).includes('signup'))


    return (
        <>
            {
                navArr.map((list) => {
                    return (
                        <li key={`nav__${list['id']}`} className='pb-12 last:pb-0'>
                            <NavLink to={list['path']} >
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
