const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO" 
const DELETE_ITEM = "DELETE_ITEM"
const FETCH_ITEM = "FETCH_ITEM"
const UPDATE_iTEM = "UPDATE_iTEM"
const axios = require('axios')



export const addTodo = (tasks) => {

    // var OPTIONS = {
    //     url: "/api/save",
    //     method: "POST",
    //     data:message
      
    //   }
    axios({
      url: "/api/save",
      method: "POST", 
      data: {task:tasks}

  }).then((res) => { console.log(res) }).catch(() => console.log("errrrrrrr "))
    
     
       return{
        type:ADD_TODO,
        payload:tasks,
       }
    
    }

export const fetchitem = (allitems) => 
     async (dispatch) =>{
    axios({
        url: "/api/ajay",
        method: "GET",
      
      
      }).then((res) => {
        const items = res.data
        // console.log("actionnn",items)
        dispatch(getItem(items))
        console.log(res.data) } ).catch((err) => console.log(err))

    // return {
    //     type:FETCH_ITEM,
    //     payload:allitems,
    // }
}

export const updateitem=(id,tasks)=>{
  var OPTIONS = {
    url: "/api/upd",
    method: "PUT",
    data:{_id:id,_val:tasks},
    
  }

axios(OPTIONS).then(res=>console.log(res)).catch(err=>console.log(err));

  return {
      type:UPDATE_iTEM,
      payload:tasks,
      id:id
  }
}



export const deleteitem=(id)=>{
    var OPTIONS = {
      url: "/api/del/",
      method: "DELETE",
      data:{_id:id},
     
    }
  
  axios(OPTIONS).then(res=>console.log(res)).catch(err=>console.log(err));
  console.log("fyhjnbvcdfjv")
  
    return {
        type:DELETE_ITEM,
        payload:id,
    }
  }
  // export const deleteTodo = (id) => ({
  //         type:DELETE_TODO,
  //         id,
  //     }

  // )

export const getItem=(items)=>{
  // console.log("items",items)
    return {
        type:FETCH_ITEM,
        payload:items,
    }
}