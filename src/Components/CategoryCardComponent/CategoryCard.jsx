import React from 'react';
import "./CategoryCard.css"
import CategoryPhoneImg from "../../assets/PhoneCategory.png";
import DesktopCategoryImg from "../../assets/DesktopCategory.png"
import LaptopCategoryImg from "../../assets/LaptopCategory.png"
import ScreensCategory from "../../assets/ScreensCategory.png"
import AccsCategory from "../../assets/AccsCategory.jpg"
const CategoryCard = () => {
  return (
    <div className='CategoryCards'>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={DesktopCategoryImg} alt="Mountains" />
        <figcaption>Desktops</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={LaptopCategoryImg} alt="Mountains" />
        <figcaption>LapTops</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={CategoryPhoneImg} alt="Mountains" />
        <figcaption>Phones</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={ScreensCategory} alt="Mountains" />
        <figcaption>Screens</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={AccsCategory} alt="Mountains" />
        <figcaption>Accessories</figcaption>
      </figure>
    </div>
  );
};

export default CategoryCard;
