// import { request } from "express";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import {Link}  from 'react-router-dom'


function Request({request}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="row bs">
    <div className="col-md-4">
        <img src={request.imageurls[0]} className="smalling" alt="" />
    </div>
    <div className="col-md-7">
    <h1>{request.name}</h1>
    <b>
        {" "}
        <p>Needed Foods: {request.neededfoods}</p>
        <p>About : {request.description}</p>
        <p>Date of Event: {request.date}</p>
    </b>
    <div style={{float: "right"}}>
      <Link to={`/book/${request._id}`}>
      <button className='btn btn-primary m-2'>Request</button>
      </Link>
    <button className="btn btn-primary" onClick={handleShow}>View Details</button>
    </div>
    </div>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{request.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
            {request.imageurls.map(url => {
              return    <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={url}
                alt="First slide"
              />
      
            </Carousel.Item> 
            })}
        </Carousel>
        <p>{request.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
    
}





export default Request;