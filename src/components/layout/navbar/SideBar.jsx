import {RiMenuFoldLine} from "react-icons/ri";
import {ROUTES_CONFIG} from "../../../routes/route.config.jsx";
import SidebarList from "./SidebarList.jsx";
import styled from "styled-components";
import tw from "twin.macro";
import { IoIosClose } from "react-icons/io";


const NavWrapper = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .24);
`

const NavBar = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  height: 100%;
  width: 50%;
  ${tw`p-20 transition-all`}
`


const SideBar = () => {


    return (
        <>
            <div className='flex justify-end'>
                <button
                    onClick={() => {
                    }}
                    className='w-30 h-30 inline-block text-center'
                    title='메뉴'>
                    <RiMenuFoldLine className='w-25 h-25 inline-block'/>
                </button>
            </div>
            <NavWrapper>
                <NavBar>
                    <div className='flex justify-end'>
                        <button type='button' className='w-30 h-30 inline-block text-center' onClick={() => {}} title='닫기'>
                            <IoIosClose className='w-26 h-26 inline-block' />
                        </button>
                    </div>
                    <ul>
                        <SidebarList/>
                    </ul>
                </NavBar>
            </NavWrapper>

        </>
    );
};

export default SideBar;