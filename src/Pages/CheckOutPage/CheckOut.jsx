// CheckOutPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import { useInfo } from "../../utils/AuthContext";

const CheckOutPage = () => {
  const { id } = useInfo();
  const navigate = useNavigate();
  const initialItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const itemsWithQuantity = initialItems.map(item => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  const [items, setItems] = useState(itemsWithQuantity);

  const handleDeleteAll = () => {
    setItems([]);
    localStorage.removeItem("cartItems");
  };

  const updateQuantity = (itemId, delta) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity + delta >= 1 && item.quantity + delta <= item.maxQuantity
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
    );
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const orderData = {
        userId: id,
        products: items.map(item => ({
          quantity: item.quantity,
          product: item.id,
        })),
        totalPrice: calculateTotalAmount(),
      };

      const add = await axios.post("http://localhost:4000/api/orders/", orderData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="checkout-container">
      <div className="navigation-links">
        <Link to="/">Home</Link> / <span className="current-page">Cart</span>
      </div>
      <h1 className="page-heading">Shopping Cart ({items.length})</h1>

      {/* Headers for the cart */}
      <div className="cart-headers">
        <h3 className="header-product">Product</h3>
        <h3 className="header-price">Price</h3>
        <h3 className="header-quantity">Quantity</h3>
        <h3 className="header-total">Total</h3>
      </div>
      <div className="cart-items">
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="product-info">
              <img src={item.images} alt={item.name} className="product-image" />
              <span className="product-name">{item.name}</span>
            </div>
            <span className="product-price">${item.price}</span>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn">-</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn">+</button>
            </div>
            <span className="total-price">${item.price * item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="checkout-summary">
        <h2 className="total-amount">Total: ${calculateTotalAmount()}</h2>
        <p className="tax-shipping-info">VAT and Shipping not included</p>
        <div className="checkout-actions">
          <button onClick={handleSubmit} className="checkout-btn">Check Out</button>
          <button onClick={handleDeleteAll} className="empty-cart-btn">Empty Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;