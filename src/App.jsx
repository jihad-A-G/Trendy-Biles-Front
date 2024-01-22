import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ShippingPolicy from "./Pages/ShippingPolicyPage/ShippingPolicyPage.jsx";
import CustomerSupport from "./Pages/CustomerSupportPage/CustomerSupportPage.jsx";
import PriceMatchingPolicy from "./Pages/PriceMatchingPolicyPage/PriceMatchingPolicyPage.jsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFound.jsx";
import "./App.css";

const DefaultRoutes = () => {
  const [error, setError] = useState(false);

  const handleNavigationError = () => {
    console.error("Error: Invalid path");
    setError(true);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/Shipping-Policy"
          element={<ShippingPolicy />}
          onEnter={handleNavigationError}
        />
        <Route
          path="/Customer-Support"
          element={<CustomerSupport />}
          onEnter={handleNavigationError}
        />
        <Route
          path="/Price-Matching-Policy"
          element={<PriceMatchingPolicy />}
          onEnter={handleNavigationError}
        />
      </Routes>
      <Footer />
    </div>
  );
};



function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="*"
          element={
            <div>
              <DefaultRoutes />
            </div>
          }
        />
        <Route path="*" element= {<NotFoundPage/>} />
        <Route path="/Register" element={<RegisterPage />} />
   
      </Routes>
    </Router>
  );
}

export default App;
