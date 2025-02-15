import { useEffect, useState } from "react";
import React, { memo } from "react";
import axios from "axios";
import { number } from "zod";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [sum, setSum] = useState(0);
  let [number, setNumber] = useState(0);
  let [counter, setCounter] = useState(0);
  function performSum(value) {
    sum = 0;
    for (let i = 0; i <= value; i++) {
      sum = sum + i;
    }
      setSum(sum);
      setCounter(counter);
    }
  return (
    <div>
      <input
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        type="number"
        placeholder="Enter your number"
      ></input>
      <br />
      <h1>Sum is {sum}</h1>
      <br />
      <button onClick={ () => {
          counter++;
          performSum(number)
          
        }}
      >
        Count ({counter})
      </button>
    </div>
  );
}
export default App;
