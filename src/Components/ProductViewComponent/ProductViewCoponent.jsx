import React, { useState } from "react";
import "./ProductViewComponent.css";


const ProductView = ({ product }) => {

  // if (!product || !product.details || !product.categories || !product.brand) {
  //   return null;
  // }

  // const { productName } = product;
  // const { images } = product.details?.[0];
  // const { price, deal, dealPrice, quantity, storage, ram, sim, color } =
  //   product.details?.[0];

  return (
    <div>
      <div className="mainProductView">
        <div className="mainImageView">

        </div>
        <div className="DetailsAndButtonsView">

          <div className="mainDetailsView">

          </div>
          <div className="mainButtonsView">
            <button className="addCartButtonView">Add to Cart</button>
            <button className="buyButtonView">Buy</button>
          </div>
        </div>



      </div>
    
    </div>
   
 );
};

export default ProductView;
