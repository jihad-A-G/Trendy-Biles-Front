import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ShippingPolicy from "./Pages/ShippingPolicyPage/ShippingPolicyPage.jsx";
import CustomerSupport from "./Pages/CustomerSupportPage/CustomerSupportPage.jsx";
import PriceMatchingPolicy from "./Pages/PriceMatchingPolicyPage/PriceMatchingPolicyPage.jsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFound.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import "./App.css";

const SpecificRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
        <Route path="/Customer-Support" element={<CustomerSupport />} />
        <Route path="/Price-Matching-Policy" element={<PriceMatchingPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        


        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/*" element={<SpecificRoutes />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
