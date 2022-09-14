import { ADD, REMOVE } from "./todo.action.types";

const initState = {
    todos:[
        {id:1, text:"This is a test", completed:false},
    ]
};

const todoReducer = (state=initState, {type,payload}) =>{

    switch(type){
        case ADD:
             return{
            ...state, 
            todos: [...state.todos, payload]
          }

        case REMOVE: 
           let newTodos = state.todos.filter((todo)=> todo.id !== payload.id)
            return{
                ...state,
                todos: newTodos
            }

        default: return state;
    }
}

export default todoReducer;