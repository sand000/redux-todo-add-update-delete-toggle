import { ADD, SUBSTRACT } from "./counter.action.types";

// // init state
let initState = {count:0};

// reducer
const counterReducer = (state=initState, action) =>{
    switch(action.type){
        case  ADD:  {
            return{
                ...state, count: state.count + (action.payload || 1)
            };
        }
        case SUBSTRACT : {
            return{
                ...state, count: state.count - (action.payload || 1)
            }
        }
        default: return state;
    }
}
export default counterReducer;