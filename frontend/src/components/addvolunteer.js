import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './addvolunteerstyles.css';

export default function AddVolunteer() {

  const [volunteer_firstname, setVolunteer_firstname] = useState("");
  const [volunteer_lastname, setVolunteer_lastname] = useState("");
  const [volunteer_username, setVolunteer_username] = useState("");
  const [NIC, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth_day, setBirth_day] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newVolunteer = {
      volunteer_firstname,
      volunteer_lastname,
      volunteer_username,
      NIC,
      email,
      password,
      birth_day,
      phone
    }
    axios.post("http://localhost:4000/volunteers/addvolunteer", newVolunteer).then(() => {
      ("volunteer added")

      setVolunteer_firstname('');
      setVolunteer_lastname('');
      setVolunteer_username('');
      setNIC('');
      setEmail('');
      setPassword('');
      setBirth_day('');
      setPhone('');

      alert("volunteer added");
      navigate('/loginvolunteer')

    }).then().catch((err) => {
      alert(err)
    })
  }
  return (
    <div className="home-container">

      <section className="home-description"></section>
      <section className="home-join-us">
        <div className="home-content">
          <div className="home-main">
            <div className="home-heading">
              <h2 className="home-header">REGISTER</h2>
            </div>
          </div>
          <form className="FORM" action="/home" method="post" onSubmit={sendData}>
            <div className="home-container03">
              <div className="home-container04">
                <span className="home-text05">First Name &nbsp;&nbsp;&nbsp; </span>
                <input
                  type="text"
                  required
                  placeholder="FIRST NAME"
                  className="home-textinput input"
                  onChange={(e) => {
                    setVolunteer_firstname(e.target.value);
                  }}>
                </input>
              </div>
              <div className="home-container05">
                <span className="home-text06">Last Name &nbsp;&nbsp;&nbsp;    </span>
                <input
                  type="text"
                  required
                  placeholder="LAST NAME"
                  className="home-textinput1 input"
                  onChange={(e) => {
                    setVolunteer_lastname(e.target.value);
                  }}>
                </input>
              </div>
              <div className="home-container06">
                <span className="home-text07">User name &nbsp;&nbsp;&nbsp;   </span>
                <input
                  type="text"
                  required
                  placeholder="UserName"
                  className="home-textinput2 input"
                  onChange={(e) => {
                    setVolunteer_username(e.target.value);
                  }}>
                </input>

              </div>
              <div className="home-container07">
                <span className="home-text08">NIC Number  </span>
                <input
                  type="text"
                  required
                  placeholder="NIC NUMBER"
                  className="home-textinput3 input"
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}>
                </input>
              </div>
              <div className="home-container08">
                <span className="home-text09">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input
                  type="text"
                  required
                  placeholder="EMAIL"
                  className="home-textinput4 input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}>
                </input>
              </div>
              <div className="home-container09">
                <span className="home-text10">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input
                  type="password"
                  required
                  placeholder="PASSWORD"
                  className="home-textinput5 input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}>
                </input>
              </div>
              <div className="home-container10">
                <span className="home-text11">
                  <span className="home-text12">Re-Password</span>
                  <span> </span>
                </span>
                <input
                  type="password"
                  required
                  placeholder="CONFIRM PASSWORD"
                  className="home-textinput6 input"
                   >
                </input>
              </div>
              <div className="home-container10">
                <span className="home-text11">
                  <span className="home-text12">Birthday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span> </span>
                </span>
                <input
                  type="date"
                  required
                  className="home-textinput6 input"
                  onChange={(e) => {
                    setBirth_day(e.target.value);
                  }}>
                </input>
              </div>
              <div className="home-container10">
                <span className="home-text11">
                  <span className="home-text12">Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span> </span>
                </span>
                <input
                  type="text"
                  required
                  placeholder="Phone Number"
                  className="home-textinput6 input"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}>
                </input>
              </div>
              <button className="home-view1 button">
                <span>Register</span>
              </button>
              <span className="home-text15">
                <br></br>
                <a href='/loginvolunteer'> Have an Account? Sign In</a>
                <br></br>
              </span>
            </div>
            <img
              alt="imagewe"
              src="/Assets/Assests/group 2273.png"
              className="home-image2"
            />
            </form>
        </div>

      </section>

      <span>Text</span>
    </div>


  )
};