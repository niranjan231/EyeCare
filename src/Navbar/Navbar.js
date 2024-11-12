import "./Navbar.css";
import { IoBagAdd, IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus, FaQuestionCircle, FaUser, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Modal2 from "./Modal2";
import Logo from '../Image/logo.webp';
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = (props) => {
    // console.log(props)
// incress add to card
const incresCard = useSelector((state)=> state.allCart.cart);
// console.log(incresCard)


    const [showModal, setShowModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    const handleGoNavtoHome = () => {
        navigate("/");
        setSidebarOpen(false); // Close the sidebar after navigating
    };
    
    const handleMobileLogin=()=>{
        navigate("login")
    }
    const handleGoJointoLogin=()=>{
        navigate("login")
    }
    const handleFlashSale = () => {
        navigate("flashsale");
        setSidebarOpen(false); // Close the sidebar after navigating
    };
    
    const openProfile = () => {
        navigate("profile");
        setSidebarOpen(false); // Close the sidebar after navigating
    };

    const handleCartModalClose = () => setShowModal(false);
    const handleCartModal = () => setShowModal(true);
    const handleGoLogoFromHome = () => {
        navigate("mainlogo");
        setSidebarOpen(false); // Close the sidebar after navigating
    };
    const handleContect = () => {
        navigate("contect");
        setSidebarOpen(false); // Close the sidebar after navigating
    };

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen); // Toggle sidebar

    return (
        <>
            <div className="nav">
                {/* Sidebar Toggle Button */}
                <span className="nav-sidebar-toggle" onClick={toggleSidebar}>
                    <FaBars />
                </span>

                <img onClick={handleGoLogoFromHome} className="nav-img" src={Logo} alt="Logo" />

                <div className="navMenuContainerList">
                    <div className="NavMenuList">
                        <div className="hoverList">
                            <li>Eyeglasses</li>
                            <div className="hoverComponent">
                                <div className="hoverContent">
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
                <button onClick={handleGoJointoLogin} className="nav-btn">Join</button>
                <span>{props.userName}</span>
                <span onClick={handleCartModal} className="nav-cart"><FaCartPlus /></span>
                <div className="notifaction">{incresCard.length}</div>
            </div>

            {/* Sidebar for small screens */}
            {sidebarOpen && (
                <div className="sidebar">
                    <div className="sidebar-content">
                        <span className="sidebar-close" onClick={toggleSidebar}>X</span>
                        <li onClick={handleGoNavtoHome}>Home</li>
                        {/* <li onClick={openProfile}>Profile</li> */}
                        <li onClick={handleContect}>Contact</li>
                        <li onClick={handleFlashSale}>Flash Sale</li>
                    </div>
                </div>
            )}

            {/* Responsive Nav */}
            <div className="nav-res">
                <div className="nav-res-1">
                    <span onClick={handleGoNavtoHome}><IoHome /></span>
                </div>
                <div className="nav-res-2">
                    <span onClick={handleMobileLogin}><FaUser /></span>
                </div>
                <div className="nav-res-3">
                    <span><CiSearch /></span>
                </div>
                <div className="nav-res-4">
                    <div className="nav-res-6">45</div>
                    <span onClick={handleCartModal}><FaCartPlus /></span>
                </div>
            </div>

            {showModal && <Modal2 handleCartModalClose={handleCartModalClose} />}
        </>
    );
}

export default Navbar;
