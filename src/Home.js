import React from 'react';
import Carosal1 from './Carosal1/Carosal1';
import Carosal2 from './Carosal2/Carosal2';
import Swiper1 from './Swiper1/Swiper1';
import Swiper2 from './Swiper2/Swiper2';
import Carosal3 from './Carosal3/Carosal3';
import Carosal4 from './Carosal4/Carosal4';
import Footer from './Footer/Footer';


function Home({userName}) {
  return (
    <>
    {/* <Navbar/> */}
    <Carosal1/>
    <Carosal2/>
    <Swiper1/>
    <Swiper2/>
    <Carosal3/>
    <Carosal4/>
    <Swiper2/>
    {/* <Footer/> */}
    </>
  );
}

export default Home;
