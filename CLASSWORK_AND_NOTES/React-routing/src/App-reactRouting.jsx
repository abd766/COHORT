import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";
// import Landing from React.lazy( () => import("./components/Landing"));
const Landing = React.lazy( () => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));


function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}
export default App;
