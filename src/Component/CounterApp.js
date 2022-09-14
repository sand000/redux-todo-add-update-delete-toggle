import { useDispatch, useSelector } from "react-redux"
import { add, substract } from "../Store/Counter/counter.action";

const CounterApp=()=>{
    const count = useSelector((store) => store.counter.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Counter{count}</h1>
            <div>
                <button onClick={()=> dispatch(substract)}>-</button>
                <button onClick={()=> dispatch(add)}>+</button>
                <button onClick={()=> dispatch(substract(5))}>-5</button>
                <button onClick={()=> dispatch(add(100))}>+100</button>
            </div>
        </div>
    )
}

export default CounterApp;