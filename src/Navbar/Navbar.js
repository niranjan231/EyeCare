import "./Navbar.css"
import { IoBagAdd } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Modal2 from "./Modal2"
import Logo from '../Image/logo.webp'
// import "../Responsive.css"
import { FaQuestionCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";


import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()


const Navbar=()=>{  
   
    const [showModal , setShowModal] = useState(false)

    const { loginWithRedirect } = useAuth0();
  const handleGoNavtoHome=()=>{
    navigate("/")
  }
    const navigate = useNavigate();
    const handleFlashSale=()=>{
        navigate("flashsale")
    }
   const openProfile=()=>{
    navigate("profile")
   }
const handleCartModalClose=()=>{
    setShowModal(false);
}
    const handleCartModal=()=>{
        setShowModal(true);
    }
   
    const handleGoLogoFromHome=()=>{
navigate("mainlogo")
    }
    const handleContect=()=>{
        navigate("contect")
    }
    return (    
        <>
        <div className="nav">
            <img onClick={handleGoLogoFromHome} className="nav-img" src={Logo}></img>
            
            <div className="navMenuContainerList">

                <div className="NavMenuList">   
         
         <div className="hoverList">      <li>Eyeglasses</li>

                <div className="hoverComponent">
                    <div className="hoverContent">
                        <div className="hoverNavList">
                        <a href="https://www.google.com">Round Frames</a>
                        <a href="https://www.google.com">Sunglasses</a>
                        <a href="https://www.google.com">Rounded Glasses</a>
                        <a href="https://www.google.com">Computer Glasses</a>
                        </div>
                        <div className="hoverNavList">
                        <a href="https://www.google.com">Round Frames</a>
                        <a href="https://www.google.com">Sunglasses</a>
                        <a href="https://www.google.com">Rounded Glasses</a>
                        <a href="https://www.google.com">Computer Glasses</a>
                        </div>
                        <div className="hoverNavList">
                        <a href="https://www.google.com">Round Frames</a>
                        <a href="https://www.google.com">Sunglasses</a>
                        <a href="https://www.google.com">Rounded Glasses</a>
                        <a href="https://www.google.com">Computer Glasses</a>
                        </div>  
                        
                    </div>
                    </div>
                    
                </div>
                </div>
                <li>Kids Glasses</li>
                
                
                <li>Sunglasses</li>
                <li onClick={handleContect}>Contact</li>
                <li onClick={handleFlashSale}>Flash Sale</li>
                </div>  
                <li onClick={openProfile} className="nav-ques"><FaQuestionCircle /></li>
            
            <span className="nav-serch"><CiSearch /></span>
            <button className="nav-btn">Join</button>
            <span onClick={handleCartModal} className="nav-cart"><FaCartPlus /></span>
            <div className="notifaction">{0}</div>
        </div>

{/* for responsive degines */}
<div className="nav-res">
<div className="nav-res-1">
    <span onClick={handleGoNavtoHome}><IoHome /></span>
</div>
<div className="nav-res-2">
    <span onClick={openProfile}><FaUser /></span>
</div>
<div className="nav-res-3">
    <span><CiSearch /></span>
</div>
<div className="nav-res-4">
<div className="nav-res-6">45</div>
    <span onClick={handleCartModal}><FaShoppingCart /></span>
</div>
</div>



        {
showModal && <Modal2 handleCartModalClose={handleCartModalClose} />
        }


        

        </>
    )
}
export default Navbar;