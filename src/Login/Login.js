import "./Login.css";
import logo from "../Image/logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const navigate = useNavigate()
    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState("");

    // Login Submision
    const handleLoginForm = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordForm = (e) => {
        setPassword(e.target.value);
    }
    const handleLoginRegSubmit = (e) => {
        e.preventDefault()
        if(email.length<5){
            setError("Invalid Email")
                    }else{
                        setError("")
                    }
                    if(password.length<5){
                        setError("Invalid Password")
                    }
                    // if(!email || !password){
                    //     setError("All Field Required")
                    // }else{
                    //     setError("")
                    // }
        const user = { email, password };
        console.log(user);

        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    // Registration Submision

    // const [forgatPass , setForgatPas] = useState(false)
    // const handleForgatPassword=()=>{
    //     setShowLogin(true)
    // }
    const handleGoRegisterBtn = () => {
        navigate("/registration")
    }
   
    return (
        <>
            <div className="login-1">
            </div>
            <div className="login-2">
                <div className="login-3">
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <p>Login with your email & password</p>
                </div>
                <form onSubmit={handleLoginRegSubmit} className="login-4">
                    <div>
                        <label>Email</label>
                        <br />
                        <input onChange={handleLoginForm} value={email} className="login-inp" type="text" />
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input onChange={handlePasswordForm} value={password} className="login-inp" type="text" />
                    </div>
                    <div className="login-8"><span>Forget Password?</span></div>
                    <button className="login-btn-6">Login</button>
                    <div onClick={handleGoRegisterBtn} className="login-10">Register</div>
                    <div style={{color:"red"}}>{error}</div>
                </form>
            </div>
        </>
    );
}

export default Login;
