import React from "react";
import Slider from "react-slick";
import "./Carosal2.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import KidsWear from "../Image/KidsWear.webp";
import MenWear from "../Image/MenWear.webp";
import WomanWear from "../Image/WomanWear.webp";
import contactLens from "../Image/contactLens.webp";

const Carosal2 = () => {
  const settings = {
    dots: false,           // Hide dots for smoother scrolling
    infinite: true,        // Infinite scrolling
    speed: 2000,           // Slow down animation speed for smoothness
    slidesToShow: 6,       // Show 6 cards at a time
    slidesToScroll: 2,     // Scroll 2 cards at a time for better flow
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 0,      // Continuous autoplay, no pauses
    cssEase: "linear",     // Linear easing for smooth animation
    pauseOnHover: false,   // Keep scrolling without pausing on hover
  };

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
      <div className="underLine"><h2 className="carosal2-h2">WEAR THE TREND</h2></div>
      <div className="carousel-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Card key={index} title={<img src={card.title} alt={`Card ${index + 1}`} />} description={card.description} />
          ))}
        </Slider>
      </div>
      <img className="car-one-img" src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg" alt="Banner" />

      <div className="underLine"><h3 className="carosal2-h2">Our Categories</h3></div>
      <div className="car-four-image">
          <img src={KidsWear} alt="Kids Wear" />
          <img src={MenWear} alt="Men Wear" />
          <img src={contactLens} alt="Contact Lens" />
          <img src={WomanWear} alt="Woman Wear" />
      </div>
    </>
  );
};

export default Carosal2;
