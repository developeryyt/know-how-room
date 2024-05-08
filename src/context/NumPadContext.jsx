import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";


const NumberContext = createContext()


function numExample(type) {

    switch(type) {
        case 'type1':
            return [1,2,3,4,5,6,7,8,9,'삭제', 0, '초기화']

        case 'type2':
            return [0,1,2,3,4,5,6,7,8,9, '010', '지우기', '초기화']

        default:
            return []
    }
}


const NumPadContext = ({ children }) => {

    const [padType, setPadType] = useState('')
    const [pad, setPad] = useState([])
    const result = useCallback(() => numExample(padType), [padType])


    useEffect(() => {
        setPad(result)
    }, [padType])


    const value = useMemo(() => ({ pad, setPadType }), [padType, pad])


    return (
        <NumberContext.Provider value={value}>
            {children}
        </NumberContext.Provider>
    );
};

export function useNumCtx() {
    return useContext(NumberContext)
}

export default NumPadContext;
