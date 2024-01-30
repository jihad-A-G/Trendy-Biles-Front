// HomePage.jsx
import React ,{useContext} from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useLoaderData  } from 'react-router-dom'
import AppleProducts from '../../assets/appleProducts.png'
import AppleProducts2 from '../../assets/appleProducts2.webp'
import Iphones from '../../assets/Iphones.jpg';
import SamPhone from '../../assets/samphone.jpg';
import Lenovo from '../../assets/Lenovo.png';
import Samsung from '../../assets/samsung.jpg';
import ACER from '../../assets/ACER.png';
import Tecno from '../../assets/TECNO.png';
import LenovoBrand from '../../assets/LENOVO.png';
import Huwawi from '../../assets/HUAWIE.png';
import LG from '../../assets/LG.png';
import AppleIcon from  '../../assets/APPLE.png';
import PS from '../../assets/PS.png';
import './HomePage.css';
import { AuthContext } from "../../utils/AuthContext";

const images = [
  Lenovo,  AppleProducts2,
  ,SamPhone,
  Iphones
];
const popularPhoneBrands = [
  Samsung,
  AppleIcon,
  Huwawi,
  LenovoBrand,ACER,
  LG,Tecno,PS
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
  const data = useLoaderData()
  const decoded = useContext(AuthContext);
  console.log('The decodedId from the context', decoded);
  

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
    <Carousel interval={5000} style={{ background: 'red', height:'80vh' }}>
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
