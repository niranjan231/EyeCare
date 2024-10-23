import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar/Navbar';
import Carosal1 from './Carosal1/Carosal1';
import Carosal2 from './Carosal2/Carosal2';
import Swiper1 from './Swiper1/Swiper1';
import Swiper2 from './Swiper2/Swiper2';
import Home from './Home';
import InputBox from  "./InputBox/InputBox"
import Card1 from "./Card1/Card1"
import Footer from './Footer/Footer';
// import SwiperBrand from './Navbar/SwiperBrand/SwiperBrand';

function MainLogo() {
  
  return (
    <>
  {/* <Home/> */}
  <Carosal1/>
<InputBox/>
<Swiper1/>
<Swiper2/>
<Card1 />
{/* <Carosal1/> */}
{/* <Footer/> */}
    </>
  );
}

export default MainLogo;
