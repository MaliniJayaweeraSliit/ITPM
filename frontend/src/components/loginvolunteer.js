import React from 'react';
import './addvolunteerstyles.css';

export default function loginVolunteer() {
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

                    <div className="home-container081">
                        <span className="home-text09">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type="text"
                            required
                            placeholder="EMAIL"
                            className="home-textinput4 input"
                        />
                    </div>
                    <div className="home-container081">
                        <span className="home-text10">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type="text"
                            required
                            placeholder="PASSWORD"
                            className="home-textinput5 input"
                        />
                    </div>

                    <button className="home-view1 button">
                        <span>SIGN IN</span>
                    </button>
                    <span className="home-text15">
                        <br></br>
                        <a href='/addvolunteer'> Don't have an Account? Sign Up</a>
                        <br></br>
                    </span>
                    <img
                    alt="imagewe"
                    src="/Assets/Assests/group 2273.png"
                    className="home-image2"
                />
                </div>
       </section >

        <span>Text</span>
     </div >

  
)
};