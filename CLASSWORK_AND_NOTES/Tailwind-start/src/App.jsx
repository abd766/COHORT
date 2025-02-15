import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="bg-red-500">One</div>
      <div className="bg-green-500">Two</div>
      <div className="bg-blue-500">Three</div>
    </div>
  );
}

export default App;
