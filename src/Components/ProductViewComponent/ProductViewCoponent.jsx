import React, { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import "./ProductViewComponent.css";
import ImageSlider from "./ImagesSlider/ImagesSlider.jsx";
import closeIcon from "../../assets/images/CloseIcon.svg";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useInfo } from "../../utils/AuthContext.jsx";

const ProductViewComponent = ({ product, onClose, className }) => {
  const { userlogin } = useInfo();
  console.log("zaaaaaa valueeee",userlogin);
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentDetailIndex = useRef(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handleAddToCart = (detail) => {
    if (userlogin) {
      console.log('Detail in cart:', detail);
      if (detail) {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = existingCartItems.find(item => item._id === detail._id);

        if (!existingItem) {
          existingCartItems.push(detail);
          localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
          toast.success('Item added to cart!');
        } else {
          toast.error('Item is already in the cart!');
        }
      } else {
        toast.error('Invalid detail.');
      }
    } else {
      toast.error('Please log in to add items to the cart.');
      navigate("/register");
    }
  };

  if (!product || !product.details || !product.categories || !product.brand) {
    return null;
  }

  const { productName, _id } = product;
  const details = product.details || [];
  const brand = product.brand.name;

  return (
    <div className={`overlayProduct ${className}`}>
      <Carousel 
        showArrows={true}
        showStatus={false}
        showThumbs={true}
        emulateTouch={true}
        swipeable={true}
        autoPlay={false}
        interval={3000}
        infiniteLoop={true}
        className="mainCarousel"
      >
        {details.map((detail, index) => (
          <div className="mainView" key={index}>
            <div className="mainProductView">
              <div className="multyCloseICon"> 
                <button className="closeButton" onClick={onClose}>
                  <img src={closeIcon} alt="Close" />
                </button>
              </div>
              <div className="mainImageView">
                <ImageSlider className='imageViewComponent' detail={detail} onChange={handleImageChange} />
              </div>
              <div className="DetailsAndButtonsView">
                <div className="mainDetailsView">
                  <div className="titleProductName">
                    <p className="productTitle">{productName}</p>
                  </div>
                  <div className="detailsAlone">
                    <ul className="detailsText">
                      {detail.deal ? (
                        <div className="displayDealAndPrice">
                          <ul className="detailsText">
                            <p className="dealPriceText">Deal Price: {detail.dealPrice}$</p>
                          </ul>
                          <ul className="detailsText">
                            <p className="regularPriceText">{detail.price}$</p>
                          </ul>
                        </div>
                      ) : (
                        <ul className="detailsText">
                          <p className="productDetail">Price: {detail.price}$</p>
                        </ul>
                      )}
                    </ul>
                    <ul className="detailsText">
                      <p className="productDetail">Storage: {detail.storage} GB</p>
                    </ul>
                    <ul className="detailsText">
                      <p className="productDetail">RAM: {detail.ram} GB</p>
                    </ul>
                    <ul className="detailsText">
                      <p className="productDetail">SIM: {detail.sim}</p>
                    </ul>
                    <ul className="detailsText">
                      <p className="productDetail">Color: {detail.color}</p>
                    </ul>
                    <ul className="detailsText">
                      <p className="productDetail">Quantity: {detail.quantity}</p>
                    </ul>
                    <ul className="detailsText">
                      <p className="productDetail">Brand: {brand}</p>
                    </ul>
                  </div>
                </div>
                <div className="mainButtonsView">
                  <button className="addCartButtonView" onClick={() => handleAddToCart(detail)}>Add to Cart</button>
                  <button className="buyButtonView">Buy</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductViewComponent;
