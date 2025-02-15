import { useCallback, useEffect, useMemo, useState } from "react";
import React, { memo } from "react";
import axios from "axios";
import { number } from "zod";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  let [number, setNumber] = useState(0);
  let [counter, setCounter] = useState(0);
// A useCallback function is used to memoize a function although useMemo can do the same but it is better to memoize a function with a useCallback
//   let callback = useCallback(()=>{
//     console.log("Hi there")
//   },[])

  let sum = useMemo(() => {
    let finalSum = 0;
    console.log("This is changing")
    for (let i = 0; i <= number; i++) {
        finalSum = finalSum + i;
  } return finalSum;
},[number])

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
      <h1>Sum from 1 to {number} is {sum}</h1>
      <br />
      <button onClick={ () => {

          setCounter(++counter);
}}>
        Count ({counter})
      </button>
    </div>
  );
}
export default App;
