import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../src/components/CreateTodo'
import { Todos } from '../src/components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos")
  .then( async function (response){
    const json = await response.json();
    setTodos(json.todos);
  })

  return (
   
      <div>
       <CreateTodo/>
       <Todos todos={todos}/>
    </div>
  )
}

export default App
