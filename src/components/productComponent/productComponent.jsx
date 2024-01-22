import React from 'react';
import './productComponent.css';

const ProductComponent = (props) => {
  const details = 1;
  const productName = 'a';
  const price = 70;
  const deal = true;

  const dealPrice = () => {
    if (deal) {
      return 10;
    }
    // You might want to handle the case when there is no deal
    return null;
  };

  return (
    <div className='mainProductComponent'>
      <div className='imageProductComponent'>image</div>

      <div className='descriptionProductComponent'>
        <ul className='productDescription productName'>{productName}</ul>
        <ul className='productDescription productBrand'>Brand</ul>
        <ul className={`productDescription productPrice${deal ? ' deal' : ''}`}>
          Price: {price}
        </ul>
        {deal && (
          <ul className='productDescription productDealPrice'>
            Deal Price: {dealPrice()}
          </ul>
        )}
        <ul className='productDescription productDeal'>a</ul>
        <ul className='productDescription'>a</ul>
      </div>
    </div>
  );
};

export default ProductComponent;
