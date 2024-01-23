// ProductViewComponent.jsx
import React from "react";
import "./ProductView.css";

const ProductViewComponent = ({ product }) => {
  // Check if product or product.details is undefined
  if (!product || !product.details) {
    return null;
  }

  const productDetail = product.details[0];
  const productName = product.name;

  return (
    <div className="product-view-container">
      <div className="header">
        <div className="row r1">
          <div className="col-md-9 abc">
            <h1>{productName}</h1>
          </div>
          <div className="col-md-3 text-right pqr">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <p className="text-right para">Based on 250 Review</p>
        </div>
      </div>
      <div className="container-body mt-4">
        <div className="row r3">
          <div className="col-md-5 p-0 klo">
            <ul>
              <li>100% Quality</li>
              <li>Free Shipping</li>
              <li>Easy Returns</li>
              <li>12 Months Warranty</li>
              <li>EMI Starting from (On Credit Cards)</li>
              <li>Normal Delivery: 4-5 Days</li>
              <li>Express Delivery: 2-3 Days</li>
              <li>COD Available (All Over India)</li>
            </ul>
          </div>
          <div className="col-md-7">
            <img
              src={`http://localhost:4000/images/${productDetail?.images[0]}`}
              alt={productName}
              width="90%"
              height="95%"
            />
          </div>
        </div>
      </div>
      <div className="footer d-flex flex-column mt-5">
        <div className="row r4">
          <div className="col-md-2 myt des">
            <a href="#">Description</a>
          </div>
          <div className="col-md-2 myt">
            <a href="#">Review</a>
          </div>
          <div className="col-md-2 mio offset-md-4">
            <a href="#">ADD TO CART</a>
          </div>
          <div className="col-md-2 myt">
            <button type="button" className="btn btn-outline-warning">
              <a href="#">BUY NOW</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewComponent;
