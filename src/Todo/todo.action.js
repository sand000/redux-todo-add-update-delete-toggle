import {v4} from "uuid";
import { ADD, REMOVE, UPDATE } from "./todo.action.types";

// add
export const add = (payload) => ({
    type: ADD,
    payload:{
        id:v4(),
        markCompleted:false,
        ...payload
    }
});

// remove
export const remove = (id) => ({
    type: REMOVE,
    payload: {id},
});

// update
export const markCompleted = (id) => ({
    type: UPDATE,
    payload: {id}
})