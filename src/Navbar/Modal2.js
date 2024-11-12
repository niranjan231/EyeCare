import { useState } from "react";
import "./Modal2.css";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "../Responsive.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCard } from "../features/cartSlice";







const Modal2 = ({ handleCartModalClose }) => {
    const dispatch = useDispatch()

    const {cart, totalQuantaty,totalPrice } = useSelector((state)=>state.allCart)

    const [incresCounter , setIncresCounter] = useState(1)
    const handleIncresCountModal2=()=>{
        setIncresCounter(incresCounter+1);
    }
    return (
        <>
            <div className="modal2-1"></div>
            <div className="modal2-2">

                <div className="modal2-3">
                    <div className="modal2-4">
                        <span className="modal2-cart"><IoCartOutline /></span>
                        <span className="modal2-5">Item 2</span>
                    </div>
                    <div className="modal2-6">
                        <span className="modal2-7" onClick={handleCartModalClose}><RxCross2 /></span>
                    </div>
                </div>
                <div className="modal2-9">
                    {
                        cart.map((data2, id)=>{
                            return <> <div key={data2.id} className="modal2-cart-data"> <div className="modal2-8">
                            <button>-</button>
                                <span>{()=> incresCounter({id: data2.id})}</span>
                                <button onClick={handleIncresCountModal2}>+</button>
                            </div>
                            <div className="modal2-10">
                                <img src={data2.image}></img>
                            </div>
                            <div className="modal2-11">
                                <h6>Sunglasses - MG3631</h6>
                                <span>RS:0.68</span>
                                <p>7*11MB</p>
                            </div>
                            <div className="modal2-12">
                            <p onClick={()=> dispatch(removeCard({id: data2.id}))}><RxCross2 /></p>
                            </div>
                            </div>
                           <hr></hr>
                            </>
                            
                        })
                    }
                </div>

                {/* <div className="modal2-9">
                    <div className="modal2-8">
                    <button>-</button>
                        <span>{incresCounter}</span>
                        <button onClick={handleIncresCountModal2}>+</button>
                    </div>
                    <div className="modal2-10">
                        <img src="https://m.media-amazon.com/images/I/514O6V2S9dL._SX679_.jpg"></img>
                    </div>
                    <div className="modal2-11">
                        <h6>Sunglasses - MG3631</h6>
                        <span>RS:0.68</span>
                        <p>7*11MB</p>
                    </div>
                    <div className="modal2-12">
                    <p><RxCross2 /></p>
                    </div>
                </div>
                <hr />                

                <div className="modal2-9">
                    <div className="modal2-8">
                    <button>-</button>
                        <span>{incresCounter}</span>
                        <button onClick={handleIncresCountModal2}>+</button>
                    </div>
                    <div className="modal2-10">
                        <img src="https://m.media-amazon.com/images/I/514O6V2S9dL._SX679_.jpg"></img>
                    </div>
                    <div className="modal2-11">
                        <h6>Sunglasses - MG3631</h6>
                        <span>RS:0.68</span>
                        <p>7*11MB</p>
                    </div>
                    <div className="modal2-12">
                    <p><RxCross2 /></p>
                    </div>
                </div>
                <hr /> */}
                


                {/* add checkpout */}
            </div>
        </>
    )
}
export default Modal2;