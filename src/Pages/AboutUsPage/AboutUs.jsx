import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import { useLoaderData  } from 'react-router-dom'

import Privacy from "../../assets/Privacy.jpg";
import Warrenty from "../../assets/Warrenty.jpg";
import FastDelivery from "../../assets/FastDelivery.jpg";
import SafeShipping from "../../assets/Safeshipping.jpg";

const AboutUsPage = () => {
  const data = useLoaderData()
  return (
    <>
     <div className="Links"> <Link to="/">Home / <Link to="/Category">AboutUs</Link></Link></div>
     <div className="AboutUsHeading"><h1>AboutUs</h1></div>
    <div className="AboutUsPage">
       <figure>
        <img className='CategoryImages' src={Privacy} alt="Mountains" />
        <figcaption>Privacy</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={Warrenty} alt="Mountains" />
        <figcaption>Warrenty</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={FastDelivery} alt="Mountains" />
        <figcaption>FastDelivery</figcaption>
      </figure>
      <figure>
        <img className='CategoryImages' src={SafeShipping} alt="Mountains" />
        <figcaption>SafeShipping</figcaption>
      </figure>
    </div>
    <div className="AboutUsText">
      {data.content}
        </div>
   
    </>
  );
};

export default AboutUsPage;
