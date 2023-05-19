import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './project.css';
import './addvolunteerstyles.css';

export default function LoginVolunteer() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.patch(
            "http://localhost:4000/volunteers/volunteer_login",
            {
                email, password
            }
        ).then((result) => {
            if (result.status === 200) {
                console.log("login success")
                console.log(result.data)
                const id = result.data["volunteer"][0]["_id"]
                history(`/viewvolunteer/${id}/true`);
            } else {
                alert("Login failed,Try Again")
            }
        }).catch(Err => {
            console.log(`login failed ${Err}`)
            alert("Login failed,Try Again")
        })

    }
    return (
        <div className="home-container">

            <section className="home-description"></section>
            <section className="home-join-us">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="home-content">
                    <div className="home-main">
                        <div className="home-heading">
                            <h2 className="home-header">LOGIN</h2>
                        </div>
                    </div>
                    <form className="FORM" onSubmit={handleSubmit}>
                        <div className="home-container081">
                            <span className="home-text09">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input
                                type="text"
                                required
                                placeholder="EMAIL"
                                className="home-textinput4 input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                
                            />
                        </div>
                        <div className="home-container081">
                            <span className="home-text10">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input
                                type="password"
                                required
                                placeholder="PASSWORD"
                                className="home-textinput5 input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                            />
                        </div>
                        <br></br>
                        <div className="home-container0812">
                        <button className="home-view1 button">
                            <span>SIGN IN</span>
                        </button>
                        <br></br>
                            <span className="home-text15">
                            <a href='/addvolunteer'> Don't have an Account? Sign Up</a>
                            <br></br>
                        </span>
                        </div>
                    </form>
                    <img
                        alt="imagewe"
                        src="/Assets/Assests/group 2273.png"
                        className="home-image2"
                    />
                </div>
            </section > 
            </div >
    )
};