import "./App.css";
import React, { useContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenOdd />
      
    </div>
  );
}
function EvenOdd(){
    const isEven = useRecoilValue(evenSelector);
    return <div>
    It is { (isEven == 0) ? "Even" : "Odd"}
    </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
//   const [ count, setCount ] = useRecoilState(countAtom);
  // more optimized approach here:- since buttons does not need the value of count and when i setCount the button should not re-render so the more optmized approach is defined as follows : - 
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
