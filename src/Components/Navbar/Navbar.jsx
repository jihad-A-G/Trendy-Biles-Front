import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";
import Logo from "../../assets/FullLogo2.jpg";
import chevron from "../../assets/chevron.png";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  // Retrieve the cart count from localStorage or default to 0
  const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0;
  const [cartCount, setCartCount] = useState(initialCartCount);

  // Update localStorage when cartCount changes
  useEffect(() => {
    localStorage.setItem('cartCount', cartCount.toString());
  }, [cartCount]);

  const handleClickCart = () => {
    // Increment the cart count
    setCartCount(cartCount + 1);
  };

  // Reset the cart count to 0 only on the initial page load
  useEffect(() => {
    setCartCount(0);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">AboutUs</Link>
        <Link to="/contact">ContactUs</Link>
        <div className="dropdown">
          <Link to="/categories">
            Categories
            <img src={chevron} alt="Chevron" />
          </Link>
          <div className="menu">
            <Link to="/phones">Phones</Link>
            <Link to="/laptops">Laptops</Link>
            <Link to="/pc">PC</Link>
            <Link to="/accessories">Accessories</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/customer-service">
            Customer Service
            <img src={chevron} alt="Chevron" />
          </Link>
          <div className="menu">
            <Link to="/Customer-Support">Customer Support</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
            <Link to="/Price-Matching-Policy">Price Matching Policy</Link>
          </div>
        </div>
      </div>
      <div className='Cart' onClick={handleClickCart}>
        <IoCartOutline />
        {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
      </div>
      <Link to="/Register" className="join-link">Register</Link>
    </nav>
  );
};

export default Navbar;
