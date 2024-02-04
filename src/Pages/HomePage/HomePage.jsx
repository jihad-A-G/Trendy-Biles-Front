// HomePage.jsx
import React ,{useContext} from 'react';
import { Carousel, Container } from 'react-bootstrap';
import HomePageSlider from "../../Components/HomePageSlider/HomePageSlider.jsx"
import { useLoaderData  } from 'react-router-dom'
import HomeSliderimg1 from "../../assets/Home1.jpg"
import HomeSliderimg2 from "../../assets/Home2.jpg"
import HomeSliderimg3 from "../../assets/Home3.jpg"
import HomeSliderimg5 from "../../assets/Home7.jpg"
import HomeSliderimg6 from "../../assets/Home15.jpg"
import HomeSliderimg8 from "../../assets/Home17.jpg"
import HomeSliderimg11 from "../../assets/Home20.jpg"
import HomeCenter1 from "../../assets/Home10.jpg"
import HomeCenter2 from "../../assets/Home11.jpg"
import HomeCenter3 from "../../assets/Home12.jpg"
import HomeCenter4 from "../../assets/Home13.jpg"
import HomeCenter5 from "../../assets/Home14.jpg"
import Samsung from '../../assets/samsung.jpg';
import S24 from '../../assets/S24.png';
import ACER from '../../assets/ACER.png';
import Tecno from '../../assets/TECNO.png';
import MSI from "../../assets/MSI-Logo.png";
import LenovoBrand from '../../assets/LENOVO-LOGO.png';
import Huwawi from '../../assets/HUAWIE.png';
import LG from '../../assets/LG.png';
import AppleIcon from  '../../assets/APPLE.png';
import PS from '../../assets/PS.png';
import './HomePage.css';
// import { AuthContext } from "../../utils/AuthContext";
import { useInfo } from '../../utils/AuthContext';

const images = [
  HomeSliderimg11,
  HomeSliderimg6,
  HomeSliderimg8,
  HomeSliderimg1,
  HomeSliderimg2,
  HomeSliderimg3,
  HomeSliderimg5,
];
const popularPhoneBrands = [
  Samsung,
  Huwawi,
  LenovoBrand,ACER,
  LG,Tecno,PS,
  AppleIcon,
  MSI,
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
  const { info } = useInfo();
  const {id} = useInfo();
  console.log('The decodedId from the context', id);
  

  const MovementBanner = () => {
    const bannerText = 'Welcome to TrendyBiles We sell phones, computers, accessories, and more!';
    return (
      <div className="movement-banner">
        <p>{bannerText}</p>
      </div>
    );
  };

  const PopularPhoneBrandsBanner = () => {
    const data  = useLoaderData();
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
    <Carousel interval={5000} style={{ height:'80vh' }}>
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
        {data
          .filter(item => item.details && item.details[0].deal)
          .slice(startIndex, startIndex + 3)
          .map((item, index) => {
            // Assuming item.details[0] has the necessary properties
            const detail = item.details[0];
            const image = detail.images[0]; // Select the first image from the array
            console.log(`Image URL for ${detail.specificName}: http://localhost:4000/${image}`); // Log the image URL
            return (
              <div key={detail._id} className="card" style={{ width: '300px', height: '400px' }}>
                <img src={`http://localhost:4000/${image}`} alt={detail.specificName} />
                <p>Deal Price: ${detail.dealPrice}</p>
              </div>
            );
          })}
      </div>
    </Carousel.Item>
  ))}
</Carousel>






<h2 className="deals-header">BRANDS</h2>


<PopularPhoneBrandsBanner />
<div className="HomeImgOne">
<img className='S24-Image' src={S24} alt="s24" />
</div>
<div className="HomeFourImages">
<img className='HomeMiddleImg' src={HomeCenter1} alt="s24" />
<img className='HomeMiddleImg' src={HomeCenter2} alt="s24" />
<img className='HomeMiddleImg' src={HomeCenter3} alt="s24" />
<img className='HomeMiddleImg' src={HomeCenter4} alt="s24" />
</div>
<div className="HomeImgOne">
<img className='S24-Image' src={HomeCenter5} alt="s24" />
</div>
<HomePageSlider/>
    </div>
  );
};

export default HomePage;
