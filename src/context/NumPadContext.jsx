import {createContext, useContext, useMemo, useState} from "react";


const NumberContext = createContext()


const NumPadContext = ({ children }) => {

    const [padType, setPadType] = useState('type1')
    const [pad, setPad] = useState([])

    switch(padType) {
        case 'type1':
            setPad([1,2,3,4,5,6,7,8,9,'이전으로', 0, '초기화'])
            break;

        case 'type2':
            setPad([0,1,2,3,4,5,6,7,8,9, '010', '지우기', '초기화'])
            break;

        case 'type3':
            break;
    }

    let val = useMemo(() => ({ pad, setPadType }), [setPadType, padType])

    return (
        <NumberContext.Provider value={val}>
            {children}
        </NumberContext.Provider>
    );
};

export function useNumCtx() {
    return useContext(NumberContext)
}

export default NumPadContext;
