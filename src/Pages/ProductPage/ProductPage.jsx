// ProductPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductComponent from '../../Components/ProductComponent/ProductComponent.jsx';
import './ProductPage.css';
import ProductViewComponent from '../../Components/ProductView/ProductView.jsx';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products/");
        setProducts(response.data);
        console.log(response.data);  // Log the products array
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/productDetails"
        );
        setProductDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <div className='mainProductPage'>
      <div className='productComponentMain'>
        {products.map((item, index) => (
          <ProductComponent key={index} product={item} />
        ))}
      </div>
      <div className='productViewComponentMain'>
        {productDetails.map((item, index) => (
          <ProductViewComponent key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
