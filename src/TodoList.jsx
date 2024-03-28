import {memo} from "react";
import {useSelector} from "react-redux";

const TodoList = () => {

    // console.log(list, 'todolist')

    const list = useSelector(state => state.todo)

    console.log(list)

    return (
        <>
            {
                list?.map((item, idx) => {

                    return (
                        <li key={item}>{item}</li>
                    )
                })
            }
        </>
    )
}

export default memo(TodoList)
