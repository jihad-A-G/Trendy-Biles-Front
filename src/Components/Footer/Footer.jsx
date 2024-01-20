import React from 'react';
import './Footer.css'; 
import Logo from "../../assets/Full-Logo.jpg";
const Footer = () => {
  return (
    <section>
      <footer className="top">
        <img className='FullLogo' src={Logo} alt="Logo" />
        <div className="links">
          <div className="links-column">
            <h2>Get Started</h2>
            <a>Introduction</a>
            <a>Documentation</a>
            <a>Usage</a>
            <a>Globals</a>
            <a>Elements</a>
          </div>
          <div className="links-column">
            <h2>Resources</h2>
            <a>API</a>
            <a>Visibility</a>
            <a>Accessibility</a>
            <a>Community</a>
            <a>Marketplace</a>
          </div>
          <div className="links-column socials-column">
            <h2>Social Media</h2>
            <p>
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <div className="socials">
              <a className="fa-brands fa-facebook"></a>
              <a className="fa-brands fa-instagram"></a>
              <a className="fa-brands fa-linkedin"></a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <p className="copyright">© 2023 All rights reserved</p>
        <div className="legal">
          <a> License </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
