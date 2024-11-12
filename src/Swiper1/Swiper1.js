import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Swiper1.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiper1Card1 from "./Swiper1Card1";
import "../Responsive.css";

const Swiper1 = () => {
  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setSlidesToShow(5); 
      } else if (width >= 992) {
        setSlidesToShow(4); 
      } else if (width >= 768) {
        setSlidesToShow(3); 
      } else if (width >= 576) {
        setSlidesToShow(2); 
      } else {
        setSlidesToShow(1); 
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
    <div className="swiper-11">
      <div className="unserLine">
        <h4 className="carosal2-h2">WEAR THE TREND</h4>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Swiper1Card1 key={index} title={<img src={card.title} alt="Glasses" />} description={card.description} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Swiper1;
