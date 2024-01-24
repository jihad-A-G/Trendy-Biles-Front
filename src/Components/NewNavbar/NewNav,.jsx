import React , { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "../../assets/FullLogo2.jpg";
import "../NewNavbar/NewNav.css";
import chevron from "../../assets/chevron.png";
import { IoCartOutline } from "react-icons/io5";


const NewNavbar = () => {
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

  const navigate = useNavigate();
  const [collapse, setCollapsed] = useState(true);
  const executeScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Contact");
      element.scrollIntoView({ behavior: "smooth" });
      const element2 = document.getElementById("About");
      element2.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="headerNavbar sticky">
      <img
        className="Logo"
        src={Logo}
        alt=""
        onClick={() => {
          navigate("/", { replace: true });
        }}
      />
      <div className="Navbar">
        <div className="header_Links">
          <Link
            to="/"
            className="N-home"
            onClick={() => {
              scrollToTop;
            }}
          >
            <a>Home</a>
          </Link>

          <Link to="/#About" name={"aboutus"} onClick={executeScroll}>
            <a
              onClick={() => {
                navigate("/", { replace: true });
                executeScroll();
              }}
              className="N-about"
            >
              AboutUs
            </a>{" "}
          </Link>
          <Link
            to="/#Contact"
            name={"contactUs"}
            onClick={executeScroll}
            className="N-contact"
          >
            <a
              onClick={() => {
                navigate("/", { replace: true });
                executeScroll();
              }}
              className="N-contact"
            >
              ContactUs
            </a>
          </Link>
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
          <Link>
            Customer Service
            <img src={chevron} alt="Chevron" />
          </Link>
          <div className="menu">
            <Link to="/customer-support">Customer Support</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
            <Link to="/price-matching-policy">Price Matching Policy</Link>
          </div>
        </div>
        </div>
        <div className='Cart' onClick={handleClickCart}>
        <IoCartOutline />
        {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
      </div>
      <Link to="/Register" className="join-link">Register</Link>
        <FontAwesomeIcon
          icon={collapse ? faBars : faXmark}
          className="header_icon"
          onClick={() => setCollapsed(!collapse)}
        />
      </div>
      {!collapse ? (
        <nav className="header_mobile_nav">
          <div className="header_mobile_ul">
          <div className='MobileCart' onClick={handleClickCart}>
        <IoCartOutline />
        {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
      </div>
            <Link className="N-home" to="/">
              Home
            </Link>
            <Link
              to="/#About"
              name={"aboutus"}
              onClick={executeScroll}
              className="N-about"
            >
              <a
                onClick={() => {
                  navigate("/", { replace: true });
                  executeScroll();
                }}
                className="N-about"
              >
                About
              </a>
            </Link>
            <Link
              to="/#Contact"
              name={"contactUs"}
              onClick={executeScroll}
              className="N-contact"
            >
              <a
                onClick={() => {
                  navigate("/", { replace: true });
                  executeScroll();
                }}
                className="N-contact"
              >
                ContactUs
              </a>
            </Link>
            <div className="Mobiledropdown">
          <Link to="/categories">
            Categories
            <img src={chevron} alt="Chevron" />
          </Link>
          <div className="Mobilemenu">
            <Link to="/phones">Phones</Link>
            <Link to="/laptops">Laptops</Link>
            <Link to="/pc">PC</Link>
            <Link to="/accessories">Accessories</Link>
          </div>
        </div>
        <div className="Mobiledropdown">
          <Link>
            Customer Service
            <img src={chevron} alt="Chevron" />
          </Link>
          <div className="Mobilemenu">
            <Link to="/customer-support">Customer Support</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
            <Link to="/price-matching-policy">Price Matching Policy</Link>
          </div>
        </div>
        
          </div>
          <Link to="/Register" className="Mobile-join-link">Register</Link>
       
        </nav>
      ) : null}
    </header>
  );
};

export default NewNavbar;
