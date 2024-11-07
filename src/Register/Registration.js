import "./Registration.css";
import logo from "../Image/logo.webp";
import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";


const Registration = () => {
    const navigate = useNavigate()

    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name , setName ] = useState("");
    const [error , setError] = useState("");
    const [submitbtn , setSubmitBtn] = useState(false);

    // Login Submision
    const handleLoginForm = (e) => {
        setEmail(e.target.value);
    }
    const handleNameLoginForm=(e)=>{
setName(e.target.value)
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
        const userdata = { name,email, password };
        console.log(userdata);
        setSubmitBtn(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(async(res)=>{
            console.log(res)
            setSubmitBtn(false)
            const user = res.user;
           await updateProfile(user, {
                displayName: userdata.name,
            })
            navigate("/login")
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
                <div>
                    <p>Login with your email & password</p>
                </div>
                <form  onSubmit={handleLoginRegSubmit} className="login-4">
                <div>
                        <label>Name</label>
                        <br />
                        <input onChange={handleNameLoginForm} value={name} className="login-inp" type="text" />
                    </div>
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
                    <button className="login-btn-6" disabled={submitbtn}>Register</button>
                    <div onClick={handleGoRegisterBtn} className="login-10">Login</div>
                    <div style={{color:"red"}}>{error}</div>
                </form>
            </div>
        </>
    );
}

export default Registration;
