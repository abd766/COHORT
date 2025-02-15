import { useState } from "react"

export default function Todos({todos}){
    
    return <div>
        {todos.map(function(todo){
            const [complete, setComplete] = useState(todo.complete);
            function markComplete(){
                if(!complete){
                        setComplete(true);
                        alert("Todo Marked as Completed");
                    }
                }   
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={markComplete} >{complete == true ? "Complete" : "Mark as Complete"}</button>
                </div>
        })}
    </div>
}


// {todos.map(function(todo){
//     const [complete, setComplete] = useState(todo.complete);
//     function markComplete(){
//         if(!complete){
//             fetch("http://localhost:3000/completed", {
//                 method: "PUT",
//                 body: JSON.stringify({
//                     _id: todo._id
//                 }),
//                 headers: {
//                     "Content-type": "application/json",
//                 }
//             })
//             .then(async function(res) {
//                 const value = await res.json();
//                 setComplete(true)
//                 alert("Todo Marked as Completed")
//             });
            
//         }
//     }
//     return <div>
//         <h1>{todo.title}</h1>
//         <h2>{todo.description}</h2>
//         <button onClick={markComplete} >{complete == true ? "Complete" : "Mark as Complete"}</button>
//         </div>
// })}