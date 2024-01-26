import React from "react";
import "./ProductViewComponent.css";

const ProductView = ({ product }) => {
  if (!product || !product.details || !product.categories || !product.brand) {
    return null;
  }

  const { productName } = product;
  const { images } = product.details?.[0];
  const { price, deal, dealPrice, quantity, storage, ram, sim, color } = product.details?.[0];
  const brand = product.brand.name;

  return (
    <div className="mainProductView">
      <div className="mainImageView">
        {images && (
          <img
            className="imageViewComponent"
            src={`http://localhost:4000/images/${images[0]}`}
            alt="Product"
          />
        )}
      </div>
      <div className="DetailsAndButtonsView">
        <div className="mainDetailsView">
          <div className="titleProductName">
            <h1>{productName}</h1>
          </div>
          <div className="detailsAlone">
            <ul className="detailsText">
              <h3 className="priceText">
                
                {deal ? (
                  <>
                    <span className="dealPriceText">Deal price: {dealPrice}$</span>
                    <span className="regularPriceText">Price:{price}$</span>
                  </>
                ) : (
                  <span>Price: {price}$</span>
                )}
              </h3>
            </ul>
            <ul className="detailsText">
              <h3>Storage (ROM): {storage} GB</h3>
            </ul>
            <ul className="detailsText">
              <h3>RAM: {ram} GB</h3>
            </ul>
            <ul className="detailsText">
              <h3>SIM: {sim}</h3>
            </ul>
            <ul className="detailsText">
              <h3>Color: {color}</h3>
            </ul>
            <ul className="detailsText">
              <h3>Quantity: {quantity}</h3>
            </ul>
            <ul className="detailsText">
              <h3>Brand: {brand}</h3>
            </ul>
          </div>
        </div>
        <div className="mainButtonsView">
          <button className="addCartButtonView">Add to Cart</button>
          <button className="buyButtonView">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
