import logo from './logo.svg';
import './App.css';
import CounterApp from './Component/CounterApp';
import TodoApp from './Component/TodoApp';
import { useState } from 'react';


function App() {

 const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
       <div>

        <button onClick={()=>setToggle(!toggle)}>{toggle? "Show Todos App" : "Show Counter App"}</button>
        {toggle?  <CounterApp /> : <TodoApp />}
         
       </div>
    </div>
  );
}

export default App;
