// import axios from "axios";
// import { NextResponse } from "next/server";
import client from "@/db"

async function fetchData() {
  const user = await client.user.findFirst();
  return {
    username: user?.username,
    password: user?.password,
  };
}
export default async function getUserDetails() {
  try {
    const user = await fetchData();
    return (
      <div>
        Username: {user.username}
        <br />
        Password: {user.password} <br />
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}
