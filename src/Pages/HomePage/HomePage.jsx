// HomePage.jsx
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import AppleProducts from '../../assets/appleProducts.png'
import AppleProducts2 from '../../assets/appleProducts2.webp'
import Iphones from '../../assets/Iphones.jpg';
import SamPhone from '../../assets/samphone.jpg';
import Lenovo from '../../assets/Lenovo.png';
import Apple from '../../assets/apple.jpg';
import Samsung from '../../assets/samsung.jpg';
import Tecno from '../../assets/tecno.png';
import LenovoBrand from '../../assets/lenovo.png';
import Huwawi from '../../assets/huwawi.jpg';
import LG from '../../assets/lg.jpg';
import './HomePage.css';

const images = [
  Lenovo,  AppleProducts2,
  ,SamPhone,
  Iphones
];
const popularPhoneBrands = [
  Samsung,
  Apple,
  Huwawi,
  LenovoBrand,
  LG,Tecno,
];

const cardData = [
  { title: 'Card 1', description: 'Description 1' },
  { title: 'Card 2', description: 'Description 2' },
  { title: 'Card 3', description: 'Description 3' },
  { title: 'Card 4', description: 'Description 4' },
  { title: 'Card 5', description: 'Description 5' },
  { title: 'Card 6', description: 'Description 6' },
  { title: 'Card 7', description: 'Description 7' },
];

const HomePage = () => {
  const MovementBanner = () => {
    const bannerText = 'Welcome to TrendyBiles We sell phones, computers, accessories, and more!';
    // const bannerText = 'كافيه السعد: مشروبات ساخنة, قهوة,مشروبات باردة, عصيرات';
    // const bannerText = "سناك السعد: روستو,مقانق,زنغرو تشكن صب,فروج على الفحم, فروج على الغاز";


    return (
      <div className="movement-banner">
        <p>{bannerText}</p>
      </div>
    );
  };

  const PopularPhoneBrandsBanner = () => {
    return (
      <div className="popular-brands-banner">
        <div className="popular-brands-images">
          {popularPhoneBrands.map((brand, index) => (
            <img key={index} className="popular-brand-image" src={brand} alt={`Popular Brand ${index + 1}`} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="home-page">
    <Carousel interval={5000} style={{ background: 'white' }}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="custom-carousel-image" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <MovementBanner /> 

      <h2 className="deals-header">DEALS</h2>



<Carousel interval={null} indicators={false} controls={true} className="card-carousel">
  {[0, 1, 2].map((startIndex) => (
    <Carousel.Item key={startIndex}>
      <div className="card-container">
        {cardData.slice(startIndex, startIndex + 3).map((card, index) => (
          <div key={index} className="card" style={{ width: '300px', height: '400px' }}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </Carousel.Item>
  ))}
</Carousel>
<h2 className="deals-header">BRANDS</h2>


<PopularPhoneBrandsBanner />


    </div>
  );
};

export default HomePage;
