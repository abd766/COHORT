import "./App.css";
import React, { useContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}
function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons() {
    const { count, setCount } = useContext(CountContext)
    return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
