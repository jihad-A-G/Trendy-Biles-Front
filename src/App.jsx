import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import "./App.css";

const App= ()=> {
  return (
    <div>
      <Navbar />
     <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
