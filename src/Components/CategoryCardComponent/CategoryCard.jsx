import React from 'react';
import "./CategoryCard.css"
import CategoryPhoneImg from "../../assets/Phone.jpg";
const CategoryCard = () => {
  return (
    <div className='CategoryCards'>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
    </div>
  );
};

export default CategoryCard;
