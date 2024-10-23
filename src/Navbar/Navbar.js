import "./Navbar.css"
import { IoBagAdd } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Modal2 from "./Modal2"
import Logo from '../Image/logo.webp'
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { loginUser,registerUser } from "../features/user/authSlice";
import logo from "../Image/logo.png";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";


const Navbar=()=>{  
   
    const dispatch = useDispatch();
    const [filteredContacts, setFilteredContacts] = useState([]);
    // const navigate = useNavigate();

    const swalOptions = {
        title: `<img src"${logo}" alt="logo" style="margin: 20px; height: 50px;width:100px;" />`,
        html: `
            <style>
                .swal2-popup {
                    width: 400px !important;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #f8f9fa;
                }
                .swal2-input {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ced4da;
                    border-radius: 5px;
                    margin-bottom: 15px;
                    box-sizing: border-box;
                }
                .login-btn, .register-btn {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                }
                .login-btn:hover, .register-btn:hover {
                    background-color: #0056b3;
                }
                .google-btn, .mobile-btn {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                }
                .google-btn:hover {
                    background-color: #5a6268;
                }
                .forgot-link {
                    float: right;
                    font-size: 12px;
                    color: #007bff;
                    text-decoration: none;
                    margin-bottom: 15px;
                }
                .forgot-link:hover {
                    text-decoration: underline;
                }
                .divider {
                    text-align: center;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    color: #6c757d;
                    font-size: 14px;
                }
            </style>
            <div id="login-form">
                <p style="font-size: 18px; color:gray; margin-top:-40px;">Login with your email & password</p>
                <input id="swal-input-email" class="swal2-input" placeholder="Email" type="email">
                <input id="swal-input-password" class="swal2-input" placeholder="Password" type="password">
                <a href="#" class="forgot-link">Forgot password?</a>
                <button id="loginBtn" class="login-btn">Login</button>
                <div class="divider">Or</div>
                <button id="googleLoginBtn" class="google-btn">Login with Google</button>
                <button id="mobileLoginBtn" style="background-color: #6c757d;" class="mobile-btn">Login with Mobile number</button>
                <p style="font-size: 18px; color:gray; margin-top:30px;">Don't have an account? <span id="register-link" class="register-link" style="cursor: pointer;color:#007bff">Register</span></p>
            </div>
            
         <div id="register-form" style="display: none;">
            <p style="font-size: 18px; color:gray; margin-top:-40px;">Register with your details</p>
            <input id="swal-input-f_name" class="swal2-input" placeholder="First Name" type="text">
            <input id="swal-input-l_name" class="swal2-input" placeholder="Last Name" type="text">
            <input id="swal-input-email-reg" class="swal2-input" placeholder="Email" type="email">
            <input id="swal-input-phone" class="swal2-input" placeholder="Phone" type="text">
            <input id="swal-input-password-reg" class="swal2-input" placeholder="Password" type="password">
            <input id="swal-input-city" class="swal2-input" placeholder="City" type="text">
            <input id="swal-input-state" class="swal2-input" placeholder="State" type="text">
            <input id="swal-input-friend_code" class="swal2-input" placeholder="Friend Code" type="text">
            <button id="registerBtn" class="register-btn">Register</button>
        </div>
        `,
        showConfirmButton: false,
        focusConfirm: false,
        didOpen: () => {
            // Event Listeners for Login and Register
            document.getElementById('loginBtn').addEventListener('click', handleLogin);
            document.getElementById('register-link').addEventListener('click', showRegisterForm);
            document.getElementById('registerBtn').addEventListener('click', handleRegister);
        }
    };

    const handleButtonClick = async () => {
        await Swal.fire(swalOptions);
    };

    const handleLogin = () => {
        const email = document.getElementById('swal-input-email').value;
        const password = document.getElementById('swal-input-password').value;

        if (email && password) {
            dispatch(loginUser({ email, password }));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please fill in all fields',
            });
        }
    };

    const showRegisterForm = () => {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    };

    const handleRegister = () => {
        const f_name = document.getElementById('swal-input-f_name').value;
        const l_name = document.getElementById('swal-input-l_name').value;
        const email = document.getElementById('swal-input-email-reg').value;
        const phone = document.getElementById('swal-input-phone').value;
        const password = document.getElementById('swal-input-password-reg').value;
        const city = document.getElementById('swal-input-city').value;
        const state = document.getElementById('swal-input-state').value;
        const friend_code = document.getElementById('swal-input-friend_code').value;
    
        if (f_name && l_name && email && phone && password && city && state && friend_code) {
               // Dispatch register action
                dispatch(registerUser({ f_name, l_name, email, phone, password, city, state, friend_code }));
                // console.log({ f_name, l_name, email, phone, password, city, state, friend_code });
                
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Passwords do not match',
                });
            }
        // } else {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Error!',
        //         text: 'Please fill in all fields',
        //     });
        // }
    };

    // ////////
    const [showModal , setShowModal] = useState(false)

    const { loginWithRedirect } = useAuth0();
    const handleFlashSale=()=>{
        navigate("flashsale")
    }
   
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
                <li>Screen Glasses</li>
                <li onClick={handleContect}>Contact</li>
                <li onClick={handleFlashSale}>Flash Sale</li>
                <Link to={"/allcategory"}><li>Allcategory</li></Link>
                <Link to={"/allproduct"}><li>AllProduct</li></Link>
                </div>  
            
            <span className="nav-span"><CiSearch /></span>
            <button className="nav-btn" onClick={handleButtonClick}>Join</button>
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