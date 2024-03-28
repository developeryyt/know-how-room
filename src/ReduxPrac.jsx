import {createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";




// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0,
//     },
//     reducers: {
//         incremented: state => {
//             state.value += 1
//         },
//         decremented: state => {
//             state.value -= 1
//         },
//     }
// })
//
//
// const secondSlice = createSlice({
//     name: 'second',
//     initialState: {
//         value: 10,
//     },
//     reducers: {
//         increment: state => {
//             state.value += 1
//         }
//     }
// })
//
//
// // const { actions, reducer } = counterSlice
//
// export const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//         second: secondSlice.reducer
//     }
// })



const ReduxPrac = () => {

    // const count = useSelector(state => state.counter.value)
    // const dispatch = useDispatch()

    return (
        <div>
            {/*<h1>Count: {count}</h1>*/}
            {/*<button onClick={() => dispatch(counterSlice.actions.incremented())}>Increment</button>*/}
            {/*<button onClick={() => dispatch(counterSlice.actions.decremented())}>Decrement</button>*/}
        </div>
    )
}

export default ReduxPrac
