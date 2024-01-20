import React, { useState, useEffect } from 'react';
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

 // Reset the cart count to 0 only on initial page load
 useEffect(() => {
   setCartCount(0);
 }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">AboutUs</a>
        <a href="#">ContactUs</a>
        <div className="dropdown">
          <a href="#"
            >Categories
            <img src={chevron} alt="Chevron" />
          </a>
          <div className="menu">
            <a href="#"> Phones </a>
            <a href="#"> laptops </a>
            <a href="#"> PC </a>
            <a href="#"> Accessories </a>
          </div>
        </div>
      </div>
      <div className='Cart' onClick={handleClickCart}>
        <IoCartOutline />
        {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
      </div>
      <a href="#" className="join-link"> Register </a>
    </nav>
  );
};

export default Navbar;
