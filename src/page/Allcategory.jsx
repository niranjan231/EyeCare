import react,  { useEffect, useState } from 'react';  
import '../Card1/Card1';
import { FaShoppingCart } from "react-icons/fa";
import Modal from "../Card1/Modal"
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector,useDispatch} from 'react-redux';
import  {handleAddToCart}  from '../features/cartSlice';
import axios from 'axios';
import { fetchCategory } from '../features/Allcategory/categorySlice';

function Allcategory() {
    // const [data1 , setData1] =  useState([]);
    // useEffect(()=>{
    // axios.get("http://eye-care.developmentalphawizz.com/api/v1/products/latest")
    // .then(res=>{
    //   console.log(res.data)
    //   setData1(res.data)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
    // },[])
    // console.log(data1)
    

      const dispatch = useDispatch();
    //   const getItem = useSelector((state)=>state.allCart.items)
    //   // console.log(item)

    //   const [show , setShow] = useState(false);
    //   const [show1 , setShow1] = useState(false)
    //   const [show2 , setShow2] = useState(true)
    //   const [show3 , setShow3] = useState(true)
    //   const [show4 , setShow4] = useState(true)
    
    
    // const handleOpenDropdown5=()=>{
    //   setShow4(false)
    // }
    // const handleOpenDropdown6=()=>{
    //   setShow4(true)
    // }
    // const handleOpenDropdown4=()=>{
    //   setShow3(true)
    // }
    // const handleOpenDropdown3=()=>{
    //   setShow3(false)
    // }
    // const handleOpenDropdown=()=>{
    // setShow2(false)
    // }
    
    // const handleOpenDropdown2=()=>{
    //   setShow2(true)
    // }
    //   const handleLoadMoreBtnCard1=()=>{
    //     setShow(true)
    //   }
    
      const handleModal=()=>{
        setShow1(true)
      }
    
    //   const handleBackModal=()=>{
    //     setShow1(false)
    //   }
     
      const { AallCategori } = useSelector((state) => state.categories);
      console.log(AallCategori);
      
      console.log(fetchCategory);
      useEffect(() => {
        dispatch(fetchCategory());
     }, []);
  
        return (
          <>
      <div className='card1-5'>
      {
        AallCategori.map((data,id)=>{ 
          return <div key={data.id} data={data}  className='card1-3'>
          <img onClick={handleModal} 
                src={`https://eye-care.developmentalphawizz.com/storage/app/public/category/${data.icon}`} // Directly integrated URL
                alt={data.name} ></img>
          <span>Round Black Silver Sunglass</span>
          <div className='card1-4'><strike>RS:232</strike><button onClick={()=>dispatch(handleAddToCart(data))}><FaShoppingCart /></button></div>
        </div>
        })
      }
      </div>
         </>
)
}

export default Allcategory