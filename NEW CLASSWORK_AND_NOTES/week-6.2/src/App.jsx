import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  
  const [id, setId] = useState(1);

  return (
    <div>
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
  <Todo id={id}/>
    </div>
  );
}


export default App;
