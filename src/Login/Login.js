import "./Login.css";
import logo from "../Image/logo.webp";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const Login = () => {
    const navigate = useNavigate()
    const goRegtoLogin = () => {
        navigate("/registration")
    }

    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState("");
    const [submitbtn , setSubmitBtn] = useState(false);

    // Login Submision
    // login with google
    const googleprovider=  new GoogleAuthProvider();
    const handleLoginGoogleBtn=()=>{
signInWithPopup(auth,googleprovider)
.then(async(res)=>{
    console.log(res)
    setSubmitBtn(false)
    const user = res.user;
    navigate("/")
})
.catch(err=>{
    console.log(err);
    setSubmitBtn(false)
    setError(err.message);
})
    }
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
        const userdata = {email, password };
        console.log(userdata);
        setSubmitBtn(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(async(res)=>{
            console.log(res)
            setSubmitBtn(false)
            const user = res.user;
            navigate("/")
        })
        .catch(err=>{
            console.log(err);
            setSubmitBtn(false)
            setError(err.message);
        })
    }

    // Registration Submision

    // const [forgatPass , setForgatPas] = useState(false)
    // const handleForgatPassword=()=>{
    //     setShowLogin(true)
    // }
    const handleGoRegisterBtn = () => {
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
                <form  onSubmit={handleLoginRegSubmit} className="login-4">
                    <div>
                        <label>Email</label>
                        <br />
                        <input onChange={handleLoginForm} value={email} className="login-inp" type="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input onChange={handlePasswordForm} value={password} className="login-inp" type="password" />
                    </div>
                    <div className="login-8"><span>Forget Password?</span></div>
                    <button className="login-btn-6" onClick={handleLoginRegSubmit} disabled={submitbtn}>Login</button>
                    <div onClick={goRegtoLogin} className="login-10">Register</div>
                    <div style={{color:"red"}}>{error}</div>
                    <button className="login-with-google" onClick={handleLoginGoogleBtn}>Login With Google</button>
                </form>
            </div>
        </>
    );
}

export default Login;