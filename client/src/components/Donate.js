/* eslint-disable jsx-a11y/alt-text */
import React, { useState }from 'react'
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
import {useDispatch,useSelector} from 'react-redux'
import { addtoCart } from '../actions/cartAction';

export default function Donate({donate}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  function addtocart()
  {
    // dispatch(addtoCart(donated,payment_Method,payment))
  }
  return (
    <div className='m-3 mt-1 mb-1 
    shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
      <h1 className='m-5'>{donate.name}</h1>
      <img src={donate.image} className="img-fluid m-5 mt-1 mb-1" style={{height:'100px',width:'100px'}}/>
    </div>
    <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Method</p>
          <select className='form-control'>
            {
              donate.payment_Method.map(payment_Method=>{
                    return <option value={payment_Method}>{payment_Method} </option>
              })
            }
          </select>
        </div>

        <div className='w-100 m-1'>
          <p>Payment</p>
          <select className='form-control'>
            {
              donate.payment.map(payment=>{
                    return <option value={payment}>{payment} </option>
              })
            }
          </select>
        </div>
    </div>
    <div className='flex-container'>
      
      <div className='m-10 w-100 '>
            <button className='btn m-5 mt-1 mb-1'onClick={addtoCart}>ADD TO CART</button>
      </div>
    </div>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{donate.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={donate.image} className="img-fluid m-5 mt-1 mb-1" style={{height:'300px',width:'300px'}}/>
        </Modal.Body>

        <Modal.Body>
        {donate.description}
        </Modal.Body>

        <Modal.Footer>
            <button className='btn' onClick={handleClose}>CLOSE</button>
          
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}
