const initialData = {
    tasks:"",
    allitems:[],
    id:'',

}

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                tasks:action.payload,

            }

        case 'FETCH_ITEM':
            return {
                ...state,
                allitems:action.payload
            }  

        case 'UPDATE_ITEM' :return{
            ...state,
            tasks:action.payload,
            id:action.id,
            msg:"Password Category Updated Successfully"
            
        }


        case 'DELETE_ITEM':
            return {
                ...state,
                msg:"delete succes"
                // action:'Add'
                // data: [...state.data.filter((todo) => todo.id !== action.id)]
            }
        default:
            return state
    }
};

export default todoReducer