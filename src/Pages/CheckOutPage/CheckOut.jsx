import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import { useInfo } from "../../utils/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOutPage = () => {
  const { id } = useInfo();
  const navigate = useNavigate();

  // Define a function to get initial items from local storage
  const getInitialItems = () => {
    const initialItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Initialize quantity of each product to 1
    return initialItems.map(item => ({
      ...item,
      quantity: 1,
      initialQuantity: item.quantity || 1, // Store initial quantity in a new variable
    }));
  };

  // Use state and set initial items using the function defined above
  const [items, setItems] = useState(getInitialItems());

  const handleDeleteAll = () => {
    setItems([]);
    localStorage.removeItem("cartItems");
  };

  const updateQuantity = (index, delta) => {
    setItems(prevItems =>
      prevItems.map((item, i) => {
        if (index === i) {
          const newQuantity = item.quantity + delta;
          // Check if the new quantity exceeds the maximum allowed quantity
          if (newQuantity < 1 || newQuantity > item.initialQuantity) {
            toast.error("Maximum quantity exceeded.");
            return item; // Do not update quantity if it exceeds the maximum
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
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
      if (items.length === 0) {
        toast.error("Cart is empty. Please add items before placing an order.");
        return; 
      }
  
      const orderData = {
        userId: id,
        products: items.map(item => ({
          quantity: item.quantity,
          product: item.id,
        })),
        totalPrice: calculateTotalAmount(),
      };
  
      await axios.post("http://localhost:4000/api/orders/", orderData);
      navigate("/");
      toast.success("Order placed successfully!");
      localStorage.removeItem("cartItems"); 
    } catch (err) {
      console.log(err);
      toast.error("Error placing order"); // Show error toast
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
        {items.map((item, index) => (
          <div className="cart-item" key={item.id}>
            <div className="product-info">
              {item.images.length > 0 && (
                <img src={item.images[0]} alt={item.name} className="product-image" />
              )}
              <span className="product-name">{item.name}</span>
            </div>
            <span className="product-price">
              ${item.dealPrice ? item.dealPrice : item.price}
            </span>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(index, -1)} className="quantity-btn">-</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => updateQuantity(index, 1)} className="quantity-btn">+</button>
            </div>
            <span className="total-price">
              ${item.dealPrice ? item.dealPrice * item.quantity : item.price * item.quantity}
            </span>
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
