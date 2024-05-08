import {useNumCtx} from "../../context/NumPadContext.jsx";
import {memo, useEffect} from "react";
import EtcList from "./EtcList.jsx";

const NumPad = () => {

    const { pad, setPadType } = useNumCtx()

    useEffect(() => {
        setPadType('type1')
    }, [])


    return (
        <>
            <ul className='grid grid-cols-3'>
                {
                    pad?.map((dial, idx) => {
                        return (
                            <li key={`${dial}${idx}`} className='text-center'>
                                <button
                                    type='button'
                                    className='w-full px-10 min-h-[24px]'
                                    onClick={() => {}}
                                >{dial}</button>
                            </li>
                        )
                    })
                }
            </ul>
            <input />
            <EtcList />
        </>
    );
};

export default memo(NumPad);