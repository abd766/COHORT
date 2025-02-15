import { useEffect, useState } from "react";
import React, { memo } from "react";
import axios  from "axios"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
let todoCounter = 0;
let id = 1;
function App() {
  const [todos, setTodos] = useState([]);
  let [todoCounter, setTodoCounter] = useState(0);
  //we can also send this request every five second without using the dependency
//   useEffect(() => {
//     setTimeout(() => {
//       async function fetchData() {
//         const res = await fetch("https://sum-server.100xdevs.com/todos");
//         const json = await res.json();
//         setTodos(json.todos);
//       }
//       fetchData();
//     },5000);
//     }),[];

//  One more way of doing async call is using Axios
// useEffect(async () => {
//       const res = await axios.get(`https://sum-server.100xdevs.com/todos?id:${id}`);
//       setTodos(res.data.todos[0]);
//     }, [todoCounter]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://sum-server.100xdevs.com/todos`);
      const json = await res.json();
      setTodos(json.todos);
    }
    fetchData();
  }, [todoCounter]);

  return (
    <div>
      <button
        onClick={() => {
          setTodoCounter(++todoCounter);
        }}
      >
        New TODOS
      </button>
      {todos.map((todo) => (
        <Todos
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

function Todos({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
