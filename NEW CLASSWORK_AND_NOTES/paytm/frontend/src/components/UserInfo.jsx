import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

export function UserInfo({user}) {
  const navigate = useNavigate(0);
  
  return (
    <div className="flex justify-between">
      <div className="flex font-semibold">
        <div className="flex flex-col justify-center items-center pr-2">
          <div className="rounded-full h-10 w-10 bg-slate-300 flex justify-center items-center">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center">{user.firstName} {user.lastName}</div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="pt-4 pb-1">
          <Button onClick={()=>{
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }} label={"Send Money"}/>
            
        </div>
      </div>
    </div>
  );
}
