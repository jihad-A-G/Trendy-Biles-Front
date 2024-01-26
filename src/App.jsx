import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import NewNavbar from "./Components/NewNavbar/NewNav,.jsx";
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <NewNavbar/>
      <ProductPage/>

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

