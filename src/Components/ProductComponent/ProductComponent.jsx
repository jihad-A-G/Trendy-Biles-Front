// ProductComponent.jsx
import React, { useState } from "react";
import "./ProductComponent.css";

const ProductComponent = ({ product }) => {
  const [productId, setProductId] = useState("")
  


  // Add a check for the existence of 'product'
  if (!product || !product.details || !product.categories || !product.brand) {
    return null; // or handle the case when product or product.details is not available
  }

  // Destructure properties from product.details
  const { productName, description } = product;
  const { price, deal, dealPrice, quantity, images, storage, ram, sim, color } = product.details?.[0];
  const categoryName = product.categories?.[0].name;
  const brand = product.brand.name;

  const DealPrice = () => {
    if (deal) {
      return dealPrice !== undefined && dealPrice !== 0 ? (
        <ul className="productDescription productDealPrice">
          Deal Price: {dealPrice}$
        </ul>
      ) : null;
    }
    return null;
  };

  return (
    <div className="mainProductComponent">
      {images && images.length > 0 && (
        <div className="imageContainer">
          <img
            className="imageProductComponent"
            src={`http://localhost:4000/images/${images[0]}`}
            alt="Product"
          />
          <button className="overlayButton">View Details</button>
        </div>
      )}

      <div className="descriptionProductComponent">
        <ul className="productDescription productName"><h3>{productName}</h3> </ul>
        <ul className="productDescription productDeal">{brand}</ul>
        <ul className="productDescription">{categoryName}</ul>
        <ul className={`productDescription productPrice${deal ? " deal" : ""}`}>
          Price: {price}$
        </ul>
        {DealPrice()}
        <ul className="productDescription productDescription">{description}</ul>
      </div>
    </div>
  );
};

export default ProductComponent;
