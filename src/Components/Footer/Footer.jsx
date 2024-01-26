import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo3.jpg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <section className="FooterSection">
      <div className="line"></div>
      <footer className="top">
      <img className="FooterFullLogo" src={Logo} alt="Logo" />
        <div className="links">
          <div className="links-column">
            <h2>NAVIGATE</h2>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/categories">Categories</a>
            <a href="/contact">ContactUs</a>
            <a href="/about">AboutUs</a>
            <a href="/register">Register</a>
          </div>
          <div className="links-column">
            <h2>CATEGORIES</h2>
            <a href="/deals">DEALS</a>
            <a href="/laptops">LAPTOPS</a>
            <a href="/phones">PHONES</a>
            <a href="/accessories">Accessories</a>
            <a href="/pc">PC</a>
          </div>
          <div className="links-column socials-column">
            <h2>Social Media</h2>
            <p>
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <div className="socials">
              <a className="facebook" href="https://www.facebook.com">
                <img className="img" src={Facebook} alt="" />
              </a>
              <a className="instagram" href="https://www.instagram.com">
                <img className="img" src={Instagram} alt="" />
              </a>
              <a className="linkedin" href="https://www.linkedin.com">
                <img className="img" src={Linkedin} alt="" />
              </a>
              <a className="Twitter" href="https://www.twitter.com">
                <img className="img" src={Twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <p className="copyright">© 2023 All rights reserved</p>
        <div className="legal">
          <a href="/license">License</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
