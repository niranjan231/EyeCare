import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar/Navbar';
import Carosal1 from './Carosal1/Carosal1';
import Carosal2 from './Carosal2/Carosal2';
import Swiper1 from './Swiper1/Swiper1';
import Swiper2 from './Swiper2/Swiper2';
// import Carosal3 from './Carosal3/Carosal3';
// import Carosal4 from './Carosal4/Carosal4';
import Home from './Home';
import InputBox from  "./InputBox/InputBox"
import MainLogo from './MainLogo';
// import Cemra from "./Cemra/Cemra"
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { useState } from 'react';
import Contect from './Contect/Contect';
import FlashSale from './FlashSale/FlashSale';
import Demo from './Demo';

function App() {
 
  

  return (
    <>
    <Navbar/>
    
   
    <Routes>
      <Route path='/flashsale' element={ <FlashSale/>}/>
      <Route path='/' element={<MainLogo/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contect' element={<Contect/>}/>
    </Routes>
    <Demo></Demo>
    </>
  );
}

export default App;
