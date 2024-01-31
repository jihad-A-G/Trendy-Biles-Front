import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPageComponent.css';

import ProductComponent from '../ProductComponent/ProductComponent.jsx';
import ProductViewComponent from '../ProductViewComponent/ProductViewCoponent.jsx';

const ProductPage = ({categoryPage}) => {
 const [products, setProducts] = useState([]);
 const [dataFromChild, setDataFromChild] = useState('');
 const [selectedProduct, setSelectedProduct] = useState(null);
 const [isOpen, setIsOpen] = useState(false);

 const handleDataFromChild = (data) => {
    setDataFromChild(data);

    // Fetch details for the selected product
    const selectedProductDetails = products.find((product) => product._id === data);
    setSelectedProduct(selectedProductDetails);
    setIsOpen(true);
 };

 const handleButtonClick = () => {
    alert(`Data received from child: ${dataFromChild}`);
 };

 const handleCloseProductView = () => {
    setSelectedProduct(null);
    setIsOpen(false);
 };
 const category = categoryPage || ''; // Provide a default value for category

 useEffect(() => {
    const fetchProduct = async (categories) => {
       if (!categories) return;
       try {
         const response = await axios.get(`http://localhost:4000/api/products/?category=${categories}`);
         setProducts(response.data);
       } catch (error) {
         console.error("Error fetching company data:", error);
       }
    };
   
    // Clear the products before fetching new ones
    setProducts([]);
    // Replace 'Laptop' with the actual category
    fetchProduct(category);
   }, [category]); // Add category as a dependency

 return (
 <div className='maiPage'>
    <div className='titlePage'> {category} </div>

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
          className={isOpen ? 'open' : ''}
          product={selectedProduct}
          onClose={handleCloseProductView}
        />
      )}
    </div>
 </div>
    
 );
};

export default ProductPage;
