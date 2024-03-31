import {RiMenuFoldLine} from "react-icons/ri";


const SideBar = () => {




    return (
        <>
            <div className='flex justify-end'>
                <button
                    onClick={() => {}}
                    className='w-24 h-24 inline-block'
                    title='메뉴버튼'>
                    <RiMenuFoldLine className='w-full h-full' />
                </button>
            </div>
            <nav>
                <ul>

                </ul>
            </nav>
        </>
    );
};

export default SideBar;