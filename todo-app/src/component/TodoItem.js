import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteTodo} from "../action/Action"

const TodoItem = ({ task }) => {
    const dispatch = useDispatch()
    
    return <div>
        <ul>
            <li>
                {/* {task.task} */}
                 {/* <button onClick = {() => dispatch(deleteTodo(task.id))}>delete</button> */}
            </li>
        </ul>
    </div>

}

export default TodoItem
