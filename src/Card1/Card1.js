import react, { useEffect, useState } from 'react';
import './Card1.css';
import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal"
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { handleAddToCart } from '../features/cartSlice';
import axios from 'axios';
import "../Responsive.css"
import "./Modal.css";




const Card1 = () => {




  const dispatch = useDispatch();
  const getItem = useSelector((state) => state.allCart.items)
  // console.log(getItem)




  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)
  const [show4, setShow4] = useState(true);

  const [mdetales, setMdetales] = useState([]);
  // const [show5 , setShow5] = useState(false)
  // add category
  const [catgy, setCatgy] = useState(getItem)


  const UpdateItem = (carditem) => {
    const filterCatogery = getItem.filter((curdItem) => {
      return curdItem.category === carditem
    })
    setCatgy(filterCatogery)
  }
const handleSubCat1=()=>{
  UpdateItem("men")
}
const handleSubCat2=()=>{
  UpdateItem("women")
}
const handleSubCat3=()=>{
  UpdateItem("kids")
}
const handleSubCat4=()=>{
  UpdateItem("men")
}
const handleSubCat5=()=>{
  UpdateItem("kids")
}
const handleSubCat6=()=>{
  UpdateItem("women")
}







  const handleOpenDropdown5 = () => {
    setShow4(false)
    UpdateItem("men")
  }
  const handleOpenDropdown6 = () => {
    setShow4(true)
    UpdateItem("kids")

  }
  const handleOpenDropdown4 = () => {
    setShow3(true)
    UpdateItem("women")

  }
  const handleOpenDropdown3 = () => {
    setShow3(false)
    UpdateItem("men")

  }
  const handleOpenDropdown = () => {
    setShow2(false)
    UpdateItem("kids")

  }

  const handleOpenDropdown2 = () => {
    setShow2(true)
    UpdateItem("women")

  }
  const handleLoadMoreBtnCard1 = () => {
    setShow(true)
  }
  // const handleOneMoreLoadMore = () => {
  //   setShow5(true)
  // }

  const handleModal = (Modal) => {
    setMdetales([{ ...Modal }])
    console.log(mdetales)
    setShow1(true)
  }

  const handleBackModal = () => {
    setShow1(false)
  }

  return (
    <>
      <div className='card1-1'>
        <div className='card1-2'>
          <div className='card1-7'>
            {
              show2 ? (<span onClick={handleOpenDropdown} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>)
                :
                (<>
                  <span onClick={handleOpenDropdown2} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>
                  <span onClick={handleSubCat1} className='open-1'>New Arrival</span>
                  <span onClick={handleSubCat2} className='open-2'>Best Sellers</span>
                </>
                )
            }
            {
              show3 ? (<span onClick={handleOpenDropdown3} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>)
                :
                (<>
                  <span onClick={handleOpenDropdown4} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>
                  <span onClick={handleSubCat3}  className='open-1'>New Arrival</span>
                  <span onClick={handleSubCat4}  className='open-2'>Best Sellers</span>
                </>
                )
            }
            {
              show4 ? (<span onClick={handleOpenDropdown5} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>)
                :
                (<>
                  <span onClick={handleOpenDropdown6} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>
                  <span onClick={handleSubCat5}  className='open-1'>New Arrival</span>
                  <span onClick={handleSubCat6}  className='open-2'>Best Sellers</span>
                </>
                )
            }

          </div>
        </div>


        {/* Product data */}
        <div className='loadmoreContainer'>
          <div className='card1-5'>
            {
              catgy.map((data, id) => {
                return <div key={data.id} data={data} className='card1-3'>
                  <img onClick={() => handleModal(data)} src={data.image}></img>
                  <span>Round Black Silver Sunglass</span>
                  <div className='card1-4'><strike>RS:232</strike>
                    <button onClick={() => dispatch(handleAddToCart(data))}><FaShoppingCart /></button>
                    {/* <button><button className='card-add-1'>+</button><span>1</span><button className='card-add-2'>-</button></button> */}
                  </div>
                </div>
              })
            }
          </div>

          {
            show && <div className='card1-5'>
              {
                getItem.map((data) => {
                  return <div key={data.id} className='card1-3'>
                    <img onClick={() => handleModal(data)} src={data.image}></img>
                    <span>Round Black Silver Sunglass</span>
                    <div className='card1-4'><strike>RS:232</strike><button><FaShoppingCart /></button></div>
                  </div>
                })
              }
            </div>
          }


        </div>

      </div>
      <div className='card1-6'><button onClick={() => {
        handleLoadMoreBtnCard1();
      }}>
        Load More</button>
      </div>
      {
        show1 && <Modal mdetales={mdetales} handleBackModal={handleBackModal} />
      }
    </>
  )
}
export default Card1;