import './App.css';
import Home from './Home';
import MainLogo from './MainLogo';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Contect from './Contect/Contect';
import FlashSale from './FlashSale/FlashSale';
import Offer from './Offer/Offer';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Registration from './Register/Registration';
import { auth } from './Firebase';
import Card1 from './Card1/Card1';
import Brand from './Brand/Brand';
import Category from './Category/Category';
function App() {

  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName("")
      }
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
        <Route path='/product' element={<Card1 />}></Route>
        <Route path='/brand' element={<Brand/>}/>
        <Route path='/category' element={<Category/>}/>
      </Routes>
      <div className='footer-gap'>
        <Footer />
      </div>

    </>
  );
}

export default App;