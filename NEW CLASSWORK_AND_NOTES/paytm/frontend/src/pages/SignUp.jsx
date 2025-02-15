import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp({ label }) {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigator = useNavigate("");
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-90 border-solid rounded-lg p-4 bg-white h-max shadow-lg">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an Account."} />
        <InputBox
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          title={"First Name"}
          placeholder={"John"}
        />
        <InputBox
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          title={"Last Name"}
          placeholder={"Doe"}
        />
        <InputBox
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          title={"Email"}
          placeholder={"johndoe@gmail.com"}
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          title={"Password"}
          placeholder={"123456"}
        />
        
          <Button onClick={async () => {
           const response = await axios.post("http://localhost:3000/api/v1/users/signup",{
              username,
              firstName,
              lastName,
              password,
            });
            localStorage.setItem("token", response.data.token);
            navigator(`/dashboard?name=${firstName}`);
          }} label={"Sign up"} />
        <BottomWarning
          label="Already have an Account?"
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}

// module.exports = {
//     SignUp
// }
