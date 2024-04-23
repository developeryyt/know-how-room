import DatePick from "./DatePick";
import List from "./List";
import Button from "../../components/button/Button.jsx";
import React from "react";
import {useNavigate} from "react-router-dom";

const ListWrapper = () => {

    const navigate = useNavigate()

    const moveToWrite = () => {
        navigate('/know-how')
    }


    return (
        <>
            {/*<DatePick />*/}
            {/*<List />*/}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h3>아직 <b>{`{회원네임}`}</b>님의 노하우가 없으시네요!</h3>
                <Button
                    type='button'
                    className=''
                    onClick={moveToWrite}
                >
                    노하우 등록해보기
                </Button>
            </div>
        </>
    )
}

export default ListWrapper
