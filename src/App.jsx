import React,{useEffect} from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import NewNavbar from "./Components/NewNavbar/NewNav.jsx";
import "./App.css";
import socket from "./config/socket-client.js";
import { ToastContainer } from "react-toastify";
const App = () => {
  useEffect(()=>{
    
    socket.on('connect',()=>{
      console.log("Client Connected");
    })
return ()=>{
  socket.disconnect()
}
  },[])
  return (
    <div>
      <ToastContainer />
      <NewNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

