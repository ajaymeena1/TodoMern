import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo, deleteTodo,deleteitem } from "../action/Action"
import {connect} from 'react-redux';
const axios = require('axios')

const Todo = (props) => {
    const [tasks, setTasks] = useState("")
    const [posts, setPosts] = useState({
        posts: [],
    })

    const dispatch = useDispatch()
    const allitems = useSelector((state) => state.todoReducer.allitems)
    console.log("aaaaaaa",allitems)
    const arr =  allitems.map((all,i) => (
        // alert(`${all.tasks}  ${all._id}`)  
        {all:all}
    ))


console.log("val",arr)
    const handleInput = (e) => {    
        setTasks(e.target.value)

    }

   


    const handler = (e) => {
        e.preventDefault();
       
        setTasks(dispatch(addTodo({tasks:tasks})));

        e.target.tsk.value = ""

    }

   
   
   
    return (
        <>
        {/* {allitems.map((a,i)=> (
            <h1 key = {i}></h1>
        )
        )} */}
            <div className="container my-3" id='aj'>
                <form onSubmit={handler}>
                    <div className="mb-3">
                    
                    
                        <label htmlFor="">Task</label>
                        <input id="in" type="text"  className="form-control" name="tsk" onChange={handleInput} required />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                

            </div>
        </>
    )
}


   
export default (Todo);
