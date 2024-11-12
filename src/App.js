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
import InputBox from "./InputBox/InputBox"
import MainLogo from './MainLogo';
// import Cemra from "./Cemra/Cemra"
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Contect from './Contect/Contect';
import FlashSale from './FlashSale/FlashSale';
import Demo from './Demo';
import Offer from './Offer/Offer';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Registration from './Register/Registration';
import { auth } from './Firebase';
function App() {
  
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName("")
      }
      console.log(user);
    })
  }, [])

  return (
    <>
      <Navbar userName={userName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/flashsale' element={<FlashSale />} />
        <Route path='mainlogo' element={<MainLogo />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <div className='footer-gap'>
        <Footer />
      </div>

    </>
  );
}

export default App;
