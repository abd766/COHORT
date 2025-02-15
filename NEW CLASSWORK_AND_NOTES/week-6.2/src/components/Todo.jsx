import { useState, useEffect } from "react";
import axios from "axios";
function Todo({id}) {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
      axios.get(`https://dummyjson.com/todos/${id}`).then(function (response) {
        console.log(response.data);
        setTodos(response.data);
      });
    }, [id]);
  
    return (
      <div>
        Id:{id}
        <h1>{todos.id}</h1>
        <h2>{todos.todo}</h2>
      </div>
    );
  }

export default Todo;