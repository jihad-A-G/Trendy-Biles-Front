import React from 'react';
import "./Navbar.css";
import Logo from "../../assets/Logo3.jpg";
import WrittenLogo from "../../assets/Logo2.jpg";
import chevron from "../../assets/chevron.png";
// import burger from "../../assets/burger.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {/* <img className='WrittenLogo' src = {WrittenLogo} alt= "Logo" /> */}
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
          </div>
        </div>
       
      </div>
      <a href="#" className="join-link"> Register </a>
    </nav>
  );
};

export default Navbar;
