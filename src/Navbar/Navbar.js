import "./Navbar.css"
import { IoBagAdd } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Modal2 from "./Modal2"
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()


const Navbar=()=>{
   
    const [showModal , setShowModal] = useState(false)

    const { loginWithRedirect } = useAuth0();
   
const handleCartModalClose=()=>{
    setShowModal(false);
}
    const handleCartModal=()=>{
        setShowModal(true);
    }
    const navigate = useNavigate();
    const handleGoLogoFromHome=()=>{
navigate("home")
    }
    const handleContect=()=>{
        navigate("contect")
    }
    return (
        <>
        <div className="nav">
            <img onClick={handleGoLogoFromHome} className="nav-img" src="http://localhost:3003/_next/image?url=%2Fimg%2Flogo.png&w=1920&q=75"></img>
            <ul>
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
                <li>Screen Glasses</li>
                <li onClick={handleContect}>Contact</li>
                <li>Flash Sale</li>
            </ul>
            <span className="nav-span"><CiSearch /></span>
            <button className="nav-btn">Join</button>
            <span onClick={handleCartModal} className="nav-cart"><FaCartPlus /></span>
            <div className="notifaction">{0}</div>
        </div>
        {
showModal && <Modal2 handleCartModalClose={handleCartModalClose} />
        }

        </>
    )
}
export default Navbar;