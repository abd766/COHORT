import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  
  networkAtom,
 
} from "./atoms";

function App() {
  return <div>
    Hello
    <RecoilRoot>
       <MainApp />
       </RecoilRoot>
    </div>;
}

function MainApp() {
  const networkValue = useRecoilValue(networkAtom);
  // const jobsValue = useRecoilValue(jobsAtom);
  // const notifcationValue = useRecoilValue(notificationAtom);
  // const messagesValue = useRecoilValue(messagingAtom);

  return (
    <div>
      {networkValue}
      {/* <button>Home</button>
      <button>My Network ({networkValue >= 100 ? "99+" : networkValue})</button>
      <button>Jobs ({jobsValue})</button>
      <button>Notification ({notifcationValue})</button>
      <button>Messaging ({messagesValue})</button>
      <button>Me</button> */}
    </div>
  );
}
export default App;
