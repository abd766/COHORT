"use client";
import { useState } from "react";
import { solve } from "@/app/actions/user";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <div className="flex flex-col items-center border shadow rounded">
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="border border-slate-200 rounded p-4 m-2"
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="p-4 m-2 border border-slate-200 rounded"
          type="password"
          placeholder="Enter your password"
        />
        <button
          onClick={async () => {
            const res = await solve(username, password);
          }}
          className="shadow rounded border-slate-200 bg-black text-white py-3 px-2"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
