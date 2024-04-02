import {RiMenuFoldLine} from "react-icons/ri";
import {ROUTES_CONFIG} from "../../../routes/route.config.jsx";
import SidebarList from "./SidebarList.jsx";
import styled from "styled-components";
import tw from "twin.macro";
import {IoIosClose} from "react-icons/io";
import {useState} from "react";

// display: ${({ onOpen }) => onOpen ? "block" : "none"};
const NavWrapper = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: ${({onOpen}) => onOpen ? '50%' : '0%'};
  height: 100%;
  background-color: rgba(0, 0, 0, .24);
  ${tw`transition-all duration-150`}
`

const NavBar = styled.nav`
  position: fixed;
  right: ${({ onOpen }) => onOpen ? "0%" : "-100%"};
  top: 0;
  background-color: white;
  height: 100%;
  width: 50%;
  ${tw`px-20 py-10 transition-all duration-150`}
`


const SideBar = () => {

    const [openNav, isOpenNav] = useState(false)

    const navHandler = () => {
        isOpenNav(prev => !prev)
    }

    return (
        <>
            <div className="flex justify-end">
                <button
                    onClick={navHandler}
                    className='w-30 h-30 inline-block text-center'
                    title='메뉴'
                >
                    <RiMenuFoldLine className='w-25 h-25 inline-block' />
                </button>
            </div>
            <NavWrapper onOpen={openNav}>
                <NavBar onOpen={openNav}>
                    <div className="flex justify-end">
                        <button
                            type='button'
                            className='w-30 h-30 inline-block text-center'
                            onClick={navHandler}
                            title='닫기'
                        >
                            <IoIosClose className='w-26 h-26 inline-block' />
                        </button>
                    </div>
                    <div className='pt-12'>
                        <ul>
                            <SidebarList/>
                        </ul>
                    </div>
                </NavBar>
            </NavWrapper>
        </>
    );
};

export default SideBar;