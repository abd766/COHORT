import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function useDebounce( value, delay ) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const clock = setInterval( () => {
      setDebouncedValue(value);
    }, delay)
    return () => {
      clearInterval(clock)
    }
  }, [value]);
  return debouncedValue;
}

function App() {
  const [inputValue, setInputValue] = useState(0);
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <div>
      Debounced value is {debouncedValue}
      <br />
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Search..."
      ></input>
    </div>
  );
}

export default App;
