import React from 'react';
import './addvolunteerstyles.css';

export default function addVolunteer() {
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
           <div className="home-container03">
             <div className="home-container04">
               <span className="home-text05">First Name &nbsp;&nbsp;&nbsp; </span>
               <input
                 type="text"
                 required
                 placeholder="FIRST NAME"
                 className="home-textinput input"
               />
             </div>
             <div className="home-container05">
               <span className="home-text06">Last Name &nbsp;&nbsp;&nbsp;    </span>
               <input
                 type="text"
                 required
                 placeholder="LAST NAME"
                 className="home-textinput1 input"
               />
             </div>
             <div className="home-container06">
               <span className="home-text07">User name &nbsp;&nbsp;&nbsp;   </span>
               <input
                 type="text"
                 required
                 placeholder="UserName"
                 className="home-textinput2 input"
               />
             </div>
             <div className="home-container07">
               <span className="home-text08">NIC Number  </span>
               <input
                 type="text"
                 required
                 placeholder="NIC NUMBER"
                 className="home-textinput3 input"
               />
             </div>
             <div className="home-container08">
               <span className="home-text09">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
               <input
                 type="text"
                 required
                 placeholder="EMAIL"
                 className="home-textinput4 input"
               />
             </div>
             <div className="home-container09">
               <span className="home-text10">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
               <input
                 type="text"
                 required
                 placeholder="PASSWORD"
                 className="home-textinput5 input"
               />
             </div>
             <div className="home-container10">
               <span className="home-text11">
                 <span className="home-text12">Re-Password</span>
                 <span> </span>
               </span>
               <input
                 type="text"
                 required
                 placeholder="CONFIRM PASSWORD"
                 className="home-textinput6 input"
               />
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
         </div>
       </section>
      
       <span>Text</span>
     </div>

  
)};