import { useEffect, useState } from "react";
import "./Modal2.css";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeCart } from "../features/AddCart/cartSlice";


const Modal2 = ({ handleCartModalClose }) => {
  const dispatch =useDispatch()

  const {Allcart} = useSelector((state)=>state.cart)
   console.log(Allcart);

  console.log(fetchCart);
  useEffect(() => {
    dispatch(fetchCart());
 }, [dispatch]);

    const [incresCounter , setIncresCounter] = useState(1)
    const handleIncresCountModal2=()=>{
        setIncresCounter(incresCounter+1);
    }

      const handleremove=(data)=>{
       dispatch(removeCart(data))
      }

    return (
        <>
    <div className="modal2-1"></div>
    <div className="modal2-2" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div className="modal2-3">
        <div className="modal2-4">
        <span className="modal2-cart"><IoCartOutline /></span>
        <span className="modal2-5">Item 2</span>
        </div>
        <div className="modal2-6">
        <span className="modal2-7" onClick={handleCartModalClose}><RxCross2 /></span>
        </div>
    </div>

    {Allcart && Allcart.length > 0 ? (
        Allcart.map((data) => (
        <div className="modal2-9" key={data.id} data={data}>
            <div className="modal2-8">
            <button>-</button>
            <span>{incresCounter}</span>
            <button onClick={handleIncresCountModal2}>+</button>
            </div>
            <div className="modal2-10">
            <img
                src={`https://eye-care.developmentalphawizz.com/storage/app/public/product/thumbnail/${data.thumbnail}`} 
                alt={data.name}
            />
            </div>
            <div className="modal2-11">
            <h6>{data.name}</h6> {/* Assuming 'data.name' is the product name */}
            <span>RS: {data.price}</span> {/* Assuming 'data.price' is the product price */}
            <p>{data.size}</p> {/* Assuming 'data.size' is the product size */}
            </div>
            <div className="modal2-12">
            <p onClick={()=>handleremove(data.id)}><RxCross2 /></p>
            </div>
            <hr />
        </div>
        ))
    ) : (
        <p>No products available.</p>
    )}

    <div style={{ marginTop: 'auto', padding: '10px' }}>
        <button 
        style={{ 
            width: '100%', 
            padding: '10px 20px', 
            backgroundColor: '#1c88B4', 
            color: 'white', 
            border: 'none', 
            borderRadius: '120px', 
            borderRight:"100px",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
        }}>
          Checkout
        <h6 style={{
          padding: '10px 20px', 
            backgroundColor:"white",
            color:"#1c88B4",
           borderRadius:"50px",
           textAlign:"center",
           margin:"0px"
        }}>₹14.10</h6>
        </button>
       

    </div>
    </div>

        </>
    )
}
export default Modal2;