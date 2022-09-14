import { combineReducers, legacy_createStore } from "redux";
import todoReducer from "../Todo/todo.reducer";
import counterReducer from "./Counter/counter.reducer";


// root reducer
let rooReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
});

// export store
export const store = legacy_createStore(rooReducer,window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__());