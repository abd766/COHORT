import reactLogo from "./assets/react.svg";
import React, { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function useDebounce(inputValue,interval){
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(()=>{
    const clock = setTimeout(()=>{
      setDebouncedValue(inputValue)
      console.log("APi call made");
    },interval)
    return ()=>{
      clearTimeout(clock);
    }
   },[inputValue])
return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 2000); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    Debounced value is {debouncedValue}
    <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Search..."
  />
  </>
    
  );
};

export default SearchBar;

// Custom Hook to show a timer
// function useInterval(fn,timeout){
//   useEffect(()=>{
//     setInterval(()=>{
//       fn();
//     },timeout)

//     return ()=>{
//     }
//   },[])
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// export default App;

//Custom Hook to find Mouse pointer position
// function useMousePosition() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const handleMouseOver = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };
//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseOver);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseOver);
//     };
//   }, []);
//   return position;
// }

// function App() {
//   const position = useMousePosition();
//   return (<div>{`Location of Pointer is: X:${position.x} Y:${position.y}`}</div>);
// }

// Custom Hook to client if user is online or not
// function App() {
//   const online = useIsOnline();
//   if(online)
//     console.log("You are Online");
//   else
//   console.log("you are offline")
//   return  <div>
//     Hello there!
//   </div>
// }

// function useIsOnline(){
//   const [online,setOnline] = useState(window.navigator.onLine);
//   useEffect(()=>{
//     window.addEventListener("online", ()=>{setOnline(true)});
//     window.addEventListener("offline", ()=>{setOnline(false)});
//   },[])

//   return online;
// }

// function App() {
//   // const [count, setCount] = useState(true);
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(false);
//   //       },5000)
//   // },[])
//   // return (
//   //   <div>
//   //     {count ? <MyComponent /> : <div></div>}
//   //   </div>
//   // );
//    return <div>
// <MyComponent/>
//    </div>
// }

// class MyComponent extends React.Component {
//   componentDidMount() {
// console.log("Component Mounted");
//   }

//   componentWillUnmount() {
//     console.log("Component UnMounted");
//   }

//   render() {
//     return    <div>
//       This is from inside the container
//     </div>
//     // Render UI
//   }
// }

// function MyComponent() {

//   useEffect(() => {
//     // Perform setup or data fetching here
// console.log("componenet Mounted");
//     return () => {
//       console.log("component unmounted")
//       // Cleanup code (similar to componentWillUnmount)
//     };
//   }, []);
// return <div>
//   From inside the container
// </div>
//   // Render UI
// }
// export default App;
