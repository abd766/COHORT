import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn( ) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigater = useNavigate("");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="w-90 border-solid rounded-lg p-4 border h-max border-slate-300">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an Account."} />
          <InputBox onChange={(e)=>{
              setUserName(e.target.value);
          }} title={"Email"} placeholder={"johndoe@gmail.com"} />
          <InputBox onChange={(e)=>{
            setPassword(e.target.value);
          }} title={"Password"} placeholder={""} />
          <Button onClick={async()=>{
              const response = await axios.post("http://localhost:3000/api/v1/users/signin",{
                username,
                password
              });
              const token = response.data.token;
              localStorage.setItem("token",token);

              navigater(`/dashboard?name=Hello`);
          }} label={"Sign In"} />
          <BottomWarning
            label="Don't have an Account?"
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
// module.exports = {
//     SignIn
// }
