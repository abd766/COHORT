import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Go to the gym today",
      completed: false,
    },
    {
      title: "Study",
      description: "Go to the School today",
      completed: false,
    },
    {
      title: "Go for Namaz",
      description: "Go to Mosque today",
      completed: false,
    },
  ]);

  function addTodos() {
    setTodos([
      ...todos,
      {
        title: "New todo",
        description: "this is description of the new todo",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodos}>Add a Todo</button>
      {todos.map(function (todo) {
        return <Todo key ={todo.title} title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return(
  <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>)
}

export default App;
