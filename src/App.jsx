import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ShippingPolicy from "./Pages/ShippingPolicyPage/ShippingPolicyPage.jsx";
import CustomerSupport from "./Pages/CustomerSupportPage/CustomerSupportPage.jsx"
import PriceMatchingPolicy from "./Pages/PriceMatchingPolicyPage/PriceMatchingPolicyPage.jsx"
import RegisterPage from "./Pages/RegisterPage/RegisterPage.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
        <Route path="/Customer-Support" element={<CustomerSupport />} />
        <Route path="/Price-Matching-Policy" element={<PriceMatchingPolicy />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
