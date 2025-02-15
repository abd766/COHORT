import axios from "axios";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [searchParams] = useSearchParams();
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/balance",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((response)=>{
        setBalance(parseInt(response.data.balance));
    })
  
  },[]);
  const name = searchParams.get('name');
  return (
    <div>
      <AppBar name={name} />
      <div className="mx-6">
        <Balance balance={balance} />
        <Users />
      </div>
    </div>
  );
}

// module.exports = {
//     Dashboard
// }
