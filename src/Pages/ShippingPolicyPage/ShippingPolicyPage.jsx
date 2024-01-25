import React, { useState } from 'react';
import './ShippingPolicyPage.css';
import { Link } from 'react-router-dom';
const ShippingPolicyPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const renderContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <div className="H3Ul1">
            <h3>Delivery Within 24 - 48 Hours:</h3>
            <ul className='three-per-line-list'>
              <li>Beirut</li>
              <li>Baabda</li>
              <li>Matn</li>
              <li>Byblos</li>
              <li>Miniyeh - Danniyeh</li>
              <li>Nabatiyeh</li>
              <li>Sidon</li>
              <li>Tyre</li>
              <li>Tripoli</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="H3Ul2">
            <h3>Delivery Within 24 - 72 Hours:</h3>
            <ul className='three-per-line-list'>
              <li>Aley</li>
              <li>Batroun</li>
              <li>Bsharri</li>
              <li>Chouf (Beiteddine)</li>
              <li>Keserwan (Jounieh)</li>
              <li>Koura (Amioun)</li>
              <li>Zgharta</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="H3Ul3">
            <h3>Delivery Within 3 - 5 Business Days:</h3>
            <ul className='three-per-line-list'>
              <li>Akkar</li>
              <li>Baalbek</li>
              <li>Bint Jbeil</li>
              <li>Hasbaya</li>
              <li>Hermel</li>
              <li>Jezzine</li>
              <li>Marjeyoun</li>
              <li>Rashaya</li>
              <li>Western Beqaa</li>
              <li>Zahle</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="ShippingHeading">
     <div className="Links"> <Link to="/">Home / <Link to="/shipping-policy">Shipping-Policy</Link></Link></div>
      <h1>Shipping Policy</h1>
      <div className="shipping-policy-container">
        <p>
          Thank you for shopping at Trendy-Biles. All orders are subject to product availability. If an item is not in stock at the time you place your order, we will notify you, and payment will be refunded.
        </p>
        <h2>Shipping Information:</h2>
        <p>Shipping is Free on all orders.</p>
        <div className="slider-container">
          {renderContent()}
          <a className="prev" onClick={prevSlide}>&#10094;</a>
          <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
