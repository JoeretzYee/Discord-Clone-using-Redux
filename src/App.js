import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { selectUser } from "./features/userSlice";

function App() {
  //const user = useSelector(selectUser);
  return (
    <div className='app'>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
