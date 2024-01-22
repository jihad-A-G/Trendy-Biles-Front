// ShippingPolicyPage.jsx

import React from 'react';
import './ShippingPolicyPage.css';

const ShippingPolicyPage = () => {
  return (
    <div className="shipping-policy-container">
      <h1>Shipping Policy</h1>
      <p>
        Thank you for shopping at Trendy-Biles. All orders are subject to product availability. If an item is not in stock at the time you place your order, we will notify you, and payment will be refunded.
      </p>

      <h2>Shipping Information:</h2>
      <p>Shipping is Free on all orders.</p>

      <h3>Delivery Within 24 - 48 Hours:</h3>
      <ul>
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

      <h3>Delivery Within 24 - 72 Hours:</h3>
      <ul>
        <li>Aley</li>
        <li>Batroun</li>
        <li>Bsharri</li>
        <li>Chouf (Beiteddine)</li>
        <li>Keserwan (Jounieh)</li>
        <li>Koura (Amioun)</li>
        <li>Zgharta</li>
      </ul>

      <h3>Delivery Within 3 - 5 Business Days:</h3>
      <ul>
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
}

export default ShippingPolicyPage;
