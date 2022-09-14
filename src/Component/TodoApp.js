import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Todo/todo.action';


const TodoApp = () => {

    const todo = useSelector((store)=> store.todos.todos)
    const dispatch = useDispatch();

  return (
    <div>
       <div>
        <button onClick={() => dispatch( add({text:"added again"}))}> ADD </button>
       </div>
       {todo.map((e)=> (
              <div key={e.id}>{e.text}
              <button onClick={() => dispatch(remove(e.id)) }>REMOVE</button>
              </div>
            ))}
       
      </div>
  );
}

export default TodoApp
