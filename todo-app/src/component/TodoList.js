import React, {useState,useEffect} from 'react'

import Todo from './Todo'
import { useSelector,useDispatch } from 'react-redux'
import {fetchitem,deleteitem,updateitem} from "../action/Action"
import '../App.css';


// import { connect } from 'react-redux'
const TodoList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchitem());
    });
    const allitems = useSelector((state) => state.todoReducer.allitems)

    
    // edit
    const updateItem=(id,tasks) => {
        console.log("idddd",tasks)
        dispatch(updateitem(id,tasks));
    }
     //delete
    const deleteItem=(id) => {
        console.log('idddea',id)
        dispatch(deleteitem(id));
    }
    return (
        <div  className="container my-3">
        <ol>
            {allitems.map((val,i) =>(
                

                <li key={i}>

                    {val.tasks}
                    <button onClick={()=>updateItem(val._id,val.tasks)}>edit</button>
                    <button className="" onClick={()=>deleteItem(val._id)}>Delete</button>
                    </li>
                
             ) )}
             </ol>
        </div>
    )

    // return <div> todo </div>
    // const taskobj = useSelector((state) => state.todoReducer.data)
    // const taskItems = taskobj.map((task) => {
    //     return <TodoItem task = {task} key = {task.id} />
    // } ) 
    // // console.log("task",taskobj)
    // return (
    //     <div className="container my-3">
            
    //         {taskItems}
    //     </div>
    // )
}

// const mapStateToProps = (state) => ({
//     todos:state.todoReducer.list,
// })

export default TodoList
