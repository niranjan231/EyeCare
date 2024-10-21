import { useState } from "react";
import "./Modal.css";








const Modal=({handleBackModal})=>{
    const [count , setCount] = useState(1);
    const handleIncres=()=>{
setCount(count+1)
    }
    return (
        <>
        <div onClick={handleBackModal} className="modal-1"></div>
        <div className="modal-2">
                <div className="modal-3">
                    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-round-lenskart-blu-lb-e14790-c2_csvfile-1653639951597-g_4030.jpg"></img>
                </div>
                <div className="modal-4">
               <h2>Gradient Grey Wayfarer Sunglasses - MG3631</h2>
               <p>2Pfund</p>
               <span>Frame Colour: Silver Feature: UV Protected Ideal For: Men & Women Lens Colour: Black Lens Material: CR39 Frame Material: Metal Temple Material: Me</span>
               <span>see more</span>
               <h4><strike>Rs:</strike></h4>
               <p><button onClick={handleIncres}>Add Shopping Cart</button></p>
               {/* <p><button onClick={handleIncres}><button className="btn-1">+</button>{count}<button className="btn-2">-</button></button></p> */}
                </div>
        </div>
        </>
    )
}
export default Modal