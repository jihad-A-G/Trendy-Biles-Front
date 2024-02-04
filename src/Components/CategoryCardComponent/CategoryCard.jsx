import React from 'react';
import "./CategoryCard.css"
const CategoryCard = ({category}) => {
  const images= category.categoryImage

  return (
    <div className='CategoryCards'>
      <figure>
        <img className='CategoryImages' src={`http://localhost:4000/${images}`} alt="Mountains" />
        <figcaption>{category.name}</figcaption>
      </figure>
    </div>
  );
};

export default CategoryCard;
