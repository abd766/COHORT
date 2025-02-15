import { useEffect, useState } from "react";
import React, { memo } from "react";
import axios from "axios";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
let todoCounter = 0;
function App() {
  let [buttonValue, setButtonValue] = useState(1);
  function changeButtonValue(value){
    setButtonValue(value);
  }
  return (
    <div>
        
        <button onClick={function (){
         changeButtonValue(1)
        }}>1</button>
        <button onClick={function (){
         changeButtonValue(2)
        }}>2</button>
        <button onClick={function (){
         changeButtonValue(3)
        }}>3</button>
        <button onClick={function (){
         changeButtonValue(4)
        }}>4</button>
      <Todo id={buttonValue} />
    </div>
  );
}

//get data via axios
    // axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
    // .then(response => {
    // setTodos(response.data.todos)


function Todo({ id }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://sum-server.100xdevs.com/todos?id=${id}`);
      const json = await res.json()
      setTodos(json.todos);
}fetchData();
}, [id]);
  return (
    <div>
        <h1>Id:{id}</h1>
      {todos.map(todo => {
        return <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
        </div>
      })}
    </div>
  );
}
export default App;
