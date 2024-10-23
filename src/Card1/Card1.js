import react, { useEffect, useState } from 'react';
import './Card1.css';
import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal"
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { handleAddToCart } from '../features/cartSlice';
import axios from 'axios';
import "../Responsive.css"




const Card1 = () => {




  const dispatch = useDispatch();
  const getItem = useSelector((state) => state.allCart.items)
  // console.log(item)




  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)
  const [show4, setShow4] = useState(true);
  // const [show5 , setShow5] = useState(false)


  const handleOpenDropdown5 = () => {
    setShow4(false)
  }
  const handleOpenDropdown6 = () => {
    setShow4(true)
  }
  const handleOpenDropdown4 = () => {
    setShow3(true)
  }
  const handleOpenDropdown3 = () => {
    setShow3(false)
  }
  const handleOpenDropdown = () => {
    setShow2(false)
  }

  const handleOpenDropdown2 = () => {
    setShow2(true)
  }
  const handleLoadMoreBtnCard1 = () => {
    setShow(true)
  }
  // const handleOneMoreLoadMore = () => {
  //   setShow5(true)
  // }

  const handleModal = () => {
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
                  <span className='open-1'>New Arrival</span>
                  <span className='open-2'>Best Sellers</span>
                </>
                )
            }
            {
              show3 ? (<span onClick={handleOpenDropdown3} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>)
                :
                (<>
                  <span onClick={handleOpenDropdown4} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>
                  <span className='open-1'>New Arrival</span>
                  <span className='open-2'>Best Sellers</span>
                </>
                )
            }
            {
              show4 ? (<span onClick={handleOpenDropdown5} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>)
                :
                (<>
                  <span onClick={handleOpenDropdown6} className='modal-8'>Classic Eyeglasses<RiArrowDropDownLine /></span>
                  <span className='open-1'>New Arrival</span>
                  <span className='open-2'>Best Sellers</span>
                </>
                )
            }

          </div>
        </div>
        <div className='loadmoreContainer'>
          <div className='card1-5'>
            {
              getItem.map((data, id) => {
                return <div key={data.id} data={data} className='card1-3'>
                  {/* {console.log(id)} */}
                  <img onClick={handleModal} src={data.image}></img>
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
                    <img src={data.image}></img>
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
        show1 && <Modal handleBackModal={handleBackModal} />
      }
    </>
  )
}
export default Card1;