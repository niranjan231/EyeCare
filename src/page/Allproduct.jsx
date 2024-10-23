import react,  { useEffect, useState } from 'react';  
import '../Card1/Card1';
import { FaShoppingCart } from "react-icons/fa";
import Modal from "../Card1/Modal"
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector,useDispatch} from 'react-redux';
import  {handleAddToCart}  from '../features/cartSlice';
import axios from 'axios';
import { fetchProduct } from '../features/Product/productSlice';
import { AddCart } from '../features/AddCart/cartSlice';

function Allproduct() {
      const dispatch = useDispatch();

      const handleModal=()=>{
        setShow1(true)
      }
     
      const { Allproduct } = useSelector((state) => state.product);
      console.log(Allproduct);
      
      console.log(fetchProduct);
      useEffect(() => {
        dispatch(fetchProduct());
     }, [dispatch]);
  


     const addCard =(data)=>{
     console.log("hello",data);
     dispatch(AddCart(data))
     }

        return (
          <>
    <div className='card1-5'>
        {Allproduct && Allproduct && Allproduct.products && Allproduct.products.length > 0 ? (
          Allproduct.products.map((data) => (
             <div key={data.id} data={data}  className='card1-3'>
            <img    onClick={handleModal} 
                src={`https://eye-care.developmentalphawizz.com/storage/app/public/product/thumbnail/${data.thumbnail}`} // Directly integrated URL
                alt={data.name} ></img>
            <span>Round Black Silver Sunglass</span>
            <div className='card1-4'><strike>RS:232</strike><button onClick={(()=>addCard(data.id))}><FaShoppingCart /></button></div>
          </div>
          ))
        ) : (
          <p>No products available.</p> // Fallback message
        )}
      </div>
         </>
)
}

export default Allproduct