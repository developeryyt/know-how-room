import {useEffect, useReducer, useState} from "react";
import TodoList from "./TodoList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {saveHandler, writeHandler} from "./acitonType.jsx";



function reducer(state, action) {

    switch(action.type) {

        case 'WRITE_TODO':
            return {
                val: action?.nextValue,
                todo: [...state['todo']],
            }


        case 'REMOVE_TODO':
            return {
                ...state,
                val: ''
            }


        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state['todoList'],
                    state.val
                ]
            }


        default:
            return state;
    }

}

const initialState = {
    val: '',
    todoList: []
}

const ReduxTodo = () => {

    // const [state, dispatch] = useReducer(reducer, initialState)
    //
    // const todoHandler = e => {
    //     const { target: { value } } = e
    //     dispatch({ type: 'WRITE_TODO', nextValue: value })
    // }
    //
    // const resetInput = () => {
    //     dispatch({ type: 'REMOVE_TODO' })
    // }
    //
    // const makeTodoHandler = () => {
    //     dispatch({ type: 'ADD_TODO' })
    // }

    const value = useSelector(state => state.val)
    const dispatch = useDispatch()



    return (
        <div>
            <div className='add'>
                <input
                    type='text'
                    value={value}
                    onChange={e => dispatch(writeHandler(e.target.value))}
                    className='border-2'
                />
                <button type='button' onClick={() => {
                    // makeTodoHandler()
                    // resetInput()
                    dispatch(saveHandler())
                }}>만들기</button>
            </div>
            <ul>
                <TodoList />
            </ul>
        </div>
    )
}

export default ReduxTodo
