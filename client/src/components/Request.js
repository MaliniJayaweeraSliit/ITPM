// import { request } from "express";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
    <button className="btn btn-primary">View Details</button>
    </div>
    </div>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
    
}





export default Request;