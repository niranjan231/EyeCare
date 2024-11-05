import "./Login.css";
import logo from "../Image/logo.webp";
import { useState } from "react";

const Login = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [forgatPass , setForgatPas] = useState(false)
    // const handleForgatPassword=()=>{
    //     setShowLogin(true)
    // }
    const handleGoRegisterBtn = () => {
        setShowLogin(true);
    }
    const handleGoLoginBtn = () => {
        setShowLogin(false)
    }
    return (
        <>
            <div className="login-1">
            </div>
            <div className="login-2">
                <div className="login-3">
                    <img src={logo} alt="Logo" />
                </div>
                {
                    showLogin ? (
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
                            <div onClick={handleGoLoginBtn} className="login-10">Login</div>
                        </form>
                    ) : (
                        <>
                            <div>
                                <p>Login with your email & password</p>
                            </div>
                            <form className="login-4">
                                <div>
                                    <label>Email</label>
                                    <br />
                                    <input className="login-inp" type="text" />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <div className="login-8"><span>Forget Password?</span></div>
                                    <br />
                                    <input className="login-inp" type="text" />
                                </div>
                                <button className="login-btn-6">Login</button>
                                <div onClick={handleGoRegisterBtn} className="login-10">Register</div>
                            </form>
                        </>
                    )
                }


                {/* Forgat Password */}

                
            </div>
        </>
    );
}

export default Login;
