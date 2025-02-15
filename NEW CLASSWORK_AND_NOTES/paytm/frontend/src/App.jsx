import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import {SendMoney} from "./pages/SendMoney";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<SignIn />} path={"/signin"} />
          <Route element={<SignUp />} path={"/signup"} />
          <Route element={<Dashboard />} path={"/dashboard"} />
          <Route element={<SendMoney /> } path={"/send"} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
