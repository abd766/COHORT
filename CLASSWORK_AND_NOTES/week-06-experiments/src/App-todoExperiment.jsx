import { useState } from "react";
import React, { memo } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
let todoCounter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is task 1",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2",
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is task 3",
    },
  ]);

  function addTodo() {
    setTodos([...todos,
      {
        id: todoCounter++,
        title: `Task is ${todoCounter - 1}`,
        description: `This is task ${todoCounter - 1} description`,
      }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add TODOS</button>
      {todos.map(todo => 
        <Header key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  );
  
}

const Header = React.memo(function Todos({title, description}) {
  return <div>
      <h1>
        {title}
        </h1>
      <h3>
        {description}
        </h3>
    </div>

})

export default App;
