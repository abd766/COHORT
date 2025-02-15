import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      <CountRenderer/>
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <h1>Count is: {count}</h1>
    </div>
  );
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
