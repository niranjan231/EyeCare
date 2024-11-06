import "./Registration.css";
import logo from "../Image/logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()
const goRegtoLogin=()=>{
    navigate("/login")
}


    return (
        <>
            <div className="login-1">
            </div>
            <div className="login-2">
                <div className="login-3">
                    <img src={logo} alt="Logo" />
                </div>
                <form className="login-4">
                            <div>
                                <p>Login with your email & password</p>
                            </div>
                            <div>
                                <label>Name</label>
                                <br />
                                <input className="login-inp" type="text" />
                            </div>
                            <div>
                                <label>Email</label>
                                <br />
                                <input className="login-inp" type="text" />
                            </div>
                            <div>
                                <label>Password</label>
                                <br />
                                <input className="login-inp" type="text" />
                            </div>
                            <button className="login-btn-6">Register</button>
                            <div onClick={goRegtoLogin} className="login-10">Login</div>
                        </form>
            </div>
        </>
    );
}

export default Registration;
