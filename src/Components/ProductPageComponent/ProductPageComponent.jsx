// ProductPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPageComponent.css';

import ProductComponent from '../ProductComponent/ProductComponent.jsx';
import ProductViewComponent from '../ProductViewComponent/ProductViewCoponent.jsx';
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [dataFromChild, setDataFromChild] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);

    // Fetch details for the selected product
    const selectedProductDetails = products.find((product) => product._id === data);
    setSelectedProduct(selectedProductDetails);
  };

  const handleButtonClick = () => {
    alert(`Data received from child: ${dataFromChild}`);
  };

  const handleCloseProductView = () => {
    setSelectedProduct(null);
  };
  const category = "Phones";

  useEffect(() => {
    const fetchProduct = async (category) => {
       if (!category) return;
       try {
         const response = await axios.get(`http://localhost:4000/api/products/?category=${category}`);
         setProducts(response.data);
       } catch (error) {
         console.error("Error fetching company data:", error);
       }
    };
   
    // Replace 'Laptop' with the actual category
    fetchProduct(category);
   }, []);
   

  return (
  <div className='maiPage'>
    <div className='titlePage'> {category}  </div>

    <div className='mainProductPage'>
      <div className='productComponentMain'>
        {products.map((item) => (
          <ProductComponent
            key={item._id}
            product={item}
            onDataFromChild={handleDataFromChild}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductViewComponent
          product={selectedProduct}
          onClose={handleCloseProductView}
        />
      )}
    </div>
  </div>
    
  );
};

export default ProductPage;
