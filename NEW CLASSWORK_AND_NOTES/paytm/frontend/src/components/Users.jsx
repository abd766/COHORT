import { useEffect, useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { UserInfo } from "./UserInfo";
import axios from "axios";


export function Users() {
  const [users, setUsers] = useState([])
  const [input,setInput] = useState("");
  const token = localStorage.getItem("token");
  useEffect(()=>{
    //  async function fetchUsers(input){
  //     const response = await axios.get(`http://localhost:3000/api/v1/users/bulk/?filter=${input}`)
  //       setUsers(response.data.users);
  //   }
  //   fetchUsers(input);

  // another way by simple promise
  axios.get(`http://localhost:3000/api/v1/users/bulk/?filter=${input}`,{
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then((response)=>{
    setUsers(response.data.users);
  })
  },[input])
  return (
    <div className="">
      <div className="text-[16px] font-bold text-md">
        <InputBox onChange={(e)=>{
          setInput(e.target.value);
        }} title={"Users"} placeholder={"Search Users..."} />
      </div>
      <div>
        {users.map((user) => {
         return <UserInfo user={user} />
        })}
      </div>
    </div>
  );
}
