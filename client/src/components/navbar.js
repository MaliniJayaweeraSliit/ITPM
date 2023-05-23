import React from "react";
//import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from "../actions/userAction";

export default function ButtonComponents() {
  const cartState = useSelector(state=>state.cartReducer);
  const userState = useSelector(state=>state.loginUserReducer);
  const {currentuser}=userState;
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
        DONATION
        </a>
       <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="ml-auto navbar-nav">
            {currentuser ? (<div class="dropdown mt-2">
  <a style={{color:"black"}} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {currentuser.name}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Donate</a>
    <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser)}}><li>Logout</li></a>
  </div>
</div>):(<li className="nav-item">
              <a className="nav-link" href="login">
                Login 
              </a>
            </li>
            )}
            
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart{cartState.cartItem.length}

              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
