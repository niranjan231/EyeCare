import React from "react";
import Slider from "react-slick";
import "./Swiper3.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Responsive.css"



// import Card from "./Card"; // Import your Card component
import Swiper1Card1 from "./Swiper1Card1";

const Swiper3 = () => {
  const settings = {
    dots: true,          // Show dots at the bottom
    infinite: true,      // Infinite scrolling
    speed: 500,          // Animation speed
    slidesToShow: 6,     // Show 6 cards at a time
    slidesToScroll: 1,   // Scroll 1 card at a time
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in ms
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
    <div className="car-2-hr"><h4 className="carosal2-h2">Our Brand</h4></div>
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Swiper1Card1 key={index} title={<img src={card.title}></img>} description={card.description} />
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Swiper3;
