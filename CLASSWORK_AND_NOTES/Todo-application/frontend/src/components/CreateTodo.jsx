import { useState } from "react"
import { Todos } from "./Todos";

export function CreateTodo() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    return <div>
        <input onChange={function (inp) {
            const value = inp.target.value;
            setTitle(value) 
        }}
         type="text" placeholder="Enter todo title"></input><br /><br />
        <input onChange={function (inp) {
            const value = inp.target.value;
            setDescription(value) 
        }} type="text" placeholder="Enter task descirption"></input><br /><br />

        <button onClick={async () => {
            const response = await fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const json = await response.json();
                alert('Todo Added');
            } 
            
        }}>Add Todo</button>
    </div >
}