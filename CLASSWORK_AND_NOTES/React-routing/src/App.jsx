import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./store/atoms/atoms";

function App() {
    return(
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>)
}
function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationNotificationCount = useRecoilValue(notificationAtom);
  const totalNoOfNotifications = useRecoilValue(totalNotificationSelector);
  return (
    <div>
        <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount > 99 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs {jobsNotificationCount}</button>
      <button>Messsaging ({messagingNotificationCount})</button>
      <button>Notification ({notificationNotificationCount > 99 ? "99+" : notificationNotificationCount})</button>
      <button>Me ({totalNoOfNotifications})</button>
    </div>
  );
}

export default App;
