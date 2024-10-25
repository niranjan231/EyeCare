import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Swiper2.css";
import "../Responsive.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Swiper2Card2 from "./Swiper2Card2";

const Swiper2 = () => {
  const [slidesToShow, setSlidesToShow] = useState(5); // Default value for large screens

  // Function to handle screen width changes
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setSlidesToShow(5); // Large screens
    } else if (width >= 992) {
      setSlidesToShow(4); // Medium screens
    } else if (width >= 768) {
      setSlidesToShow(3); // Tablets
    } else if (width >= 576) {
      setSlidesToShow(2); // Small devices
    } else {
      setSlidesToShow(2); // Mobile screens
    }
  };

  // Set up event listener on component mount and clean up on unmount
  useEffect(() => {
    updateSlidesToShow(); // Call once on initial load
    window.addEventListener("resize", updateSlidesToShow); // Listen for screen resize
    return () => window.removeEventListener("resize", updateSlidesToShow); // Clean up
  }, []);

  const settings = {
    dots: true,          // Show dots at the bottom
    infinite: true,      // Infinite scrolling
    speed: 400,          // Animation speed
    slidesToShow: slidesToShow, // Dynamic based on screen size
    slidesToScroll: 1,   // Scroll 1 card at a time
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 1000, // Autoplay speed in ms
    swipeToSlide: true,  // Allows users to swipe directly to a slide
    draggable: true,     // Allows dragging slides on desktop
    swipe: true,         // Enables swipe on touch devices
    touchThreshold: 100  // Controls sensitivity to swipe (adjust as needed)
  };

  // Sample data for the cards
  const cards = [
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-screen-glasses:-matte-black-full-rim-square-lenskart-blu-lb-e13526-c1_vincent-chase-vc-e13526-c1-eyeglasses_g_8388_28july23.jpg", description: "This is the first card" },
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-round-lenskart-blu-lb-e14790-c2_csvfile-1653639951597-g_4030.jpg", description: "This is the second card" },
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-round-lenskart-blu-lb-e14131-c4_lenskart-blu-lb-e14131-c4-c4-eyeglasses_lenskart-blu-lb-e14131-c4-c4-eyeglasses_g_8344_125_02_2022.jpg", description: "This is the third card" },
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-rectangle-lenskart-blu-lb-e14255-c3_g_2060_6_16_22.jpg", description: "This is the fourth card" },
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-matte-black-red-full-rim-rectangle-lenskart-blu-lb-e13527-c2_vincent-chase-vc-e13527-c2-eyeglasses_g_008322_02_2022.jpg", description: "This is the fifth card" },
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-blue-full-rim-rectangle-lenskart-blu-lb-e13738-c3_lenskart-blu-lb-e13738-c3-eyeglasses_lenskart-blu-lb-e13738-c3-eyeglasses_g_655925_02_2022.jpg", description: "This is the sixth card" },
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-computer-glasses:-blue-full-rim-round-lenskart-blu-lb-e16220-c1_csvfile-1704900202876-g_8962.jpg", description: "This is the seventh card" },
    { title: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-computer-glasses:-blue-full-rim-round-lenskart-blu-lb-e16220-c1_csvfile-1704900202876-g_8962.jpg", description: "This is the eighth card" },
  ];

  return (
    <>
      <div className="unserLine">
        <h4 className="carosal2-h2">Our Brand</h4>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div className="swiper2-1" key={index}>
              <Swiper2Card2 
                title={<img className="swiper2-img" src={card.title} alt={`Card ${index}`} />} 
                description={card.description} 
              />
              <h5>AVAITOR TATINUM</h5>
              <span>Price Rs:695</span>
              <div className="cardBtnDiv">
                <button className="swiper2-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Swiper2;
