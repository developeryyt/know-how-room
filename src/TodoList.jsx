import {memo} from "react";

const TodoList = ({ list }) => {

    console.log(list, 'todolist')

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

export default memo(TodoList, (prevProps, nextProps) => nextProps.list.length === prevProps.list.length)
