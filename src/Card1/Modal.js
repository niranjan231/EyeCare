import { useState } from "react";
import "./Modal.css";
import { RxCross2 } from "react-icons/rx";
// import { useSelector } from "react-redux";






const Modal = ({ handleBackModal, mdetales }) => {


    const [count, setCount] = useState(1);
    const [changeBtn, setChangeBtn] = useState(false)

    const price = 4.00;

    const handleIncres2 = () => {
        setCount(count + 1)
    }
    const handleDecres2 = () => {
        setCount(count - 1)
        if (count === 1) {
            setChangeBtn(false)
            setCount(count)
        }
    }
    //     const h=()=>{
    // setCount(count+1)
    //     }

    const handleChangeBtn = () => {
        setChangeBtn(true)
    }

    return (
        <>
            <div onClick={handleBackModal} className="modal-1"></div>
            <div className="modal-2">
                <div onClick={handleBackModal} className="modal-cros-20"><span><RxCross2 /></span></div>
               


               {
                mdetales.map((data3)=>{
                    return  <> <div className="modal-3">
                        console.log(data3)
                    <img src={data3.image}></img>
                </div>
                <div className="modal-4">
                    <h2>Gradient Grey Wayfarer Sunglasses - MG3631</h2>
                    <p>2Pfund</p>
                    <span>Frame Colour: Silver Feature: UV Protected Ideal For: Men & Women Lens Colour: Black Lens Material: CR39 Frame Material: Metal Temple Material: Me</span>
                    <span>see more</span>
                    <h4><span>Rs:{price * count}</span> <strike className="modal-strike">Rs:5.00</strike></h4>

                    {
                        changeBtn ? (<p><div className="modal-btn-2" ><button onClick={handleIncres2}>+</button><span>{count}</span><button onClick={handleDecres2}>-</button></div></p>)

                            :
                            (<p onClick={handleChangeBtn}><button>Add Shopping Cart</button></p>)

                    }

                </div>
                </>
                })
               }
            </div>
        </>
    )
}
export default Modal