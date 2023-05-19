import React, { useEffect, useState, useRef} from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import './project.css';

export default function AddVolproject() {
    const {id, from_login} =useParams();
    const [projectName, setProjectName] = useState("");
    const [ownerdata, setownerdata] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectCategoty, setProjectCategoty] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate , setProjectEndDate] = useState("");
    const [projectLocation, setProjectLocation] = useState("");

    const Ownerid =useRef();

    const navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();

        const newProject = {
            projectName,
            projectDescription,
            projectCategoty,
            projectStartDate,
            projectEndDate,
            projectLocation
        }
        
        axios.post("http://localhost:4000/project/addproject", newProject).then(() => {
            ("Project added")

            alert("project added");
            navigate(`/organization/viewallprojects/${id}/from_login`)

        }).then().catch((err) => {
            alert(err)
        })
    }
        useEffect(()=>{
            axios.get(`http://localhost:4000/organization/getorganization/${id}`).then((res) => {
                setownerdata(res.data);
                {console.log(setownerdata)}
        }).catch(err => console.log(`get owner data failed ${err}`))
        },[id]);
    
    return (
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>ADD A NEW VOLUNTEER PROJECT</h3>
                                <form className="requires-validation" action="/thankyou" method="post" onSubmit={sendData}>
                                <div>
                                {ownerdata &&<div className="col-md-12">
                                    
                                     <p>Project Owner ID</p>
                                        <input className="form-control" type="text" name="name" placeholder="ownerid" 
                                        readOnly
                                        defaultValue={ownerdata["id"] || ''}
                                        ref={Ownerid}
                                        
                                        >
                                            {console.log(Ownerid)}
                                        </input>
                                        
                                    </div>}
                                <div className="col-md-12">
                                    
                                <p>Project Name</p>
                                    <input className="form-control" type="text" name="name" placeholder="Project Name" 
                                    onChange={(e) => {
                                        setProjectName(e.target.value);
                                    }}>
                                    </input>
                                    
                                </div>
                                <div className="col-md-12">
                                    <p>Project description</p>
                                    <input className="form-control" type="textbox" name="name" placeholder="Project description" 
                                    onChange={(e) => {
                                        setProjectDescription(e.target.value);
                                    }}>
                                    </input>
                                </div>
                                <div className="col-md-12">
                                <p>Project category</p>
                                <select className="form-select mt-3" 
                                        onChange={(e) => {
                                            setProjectCategoty(e.target.value);
                                    }}>
                                      <option selected disabled defaultValue="">Category</option>
                                      <option defaultValue="jweb">TRADITIONAL VOLUNTEERING</option>
                                      <option defaultValue="sweb">ONE OFF EVENTS</option>
                                      <option defaultValue="pmanager">SKILL FOCUSED ROLES</option>
                                      <option defaultValue="pmanager">TRUSTEE ROLE</option>
                                      <option defaultValue="pmanager">CALL TO ACTION</option>
                               </select>
                                </div>
                                <div className="col-md-12">
                                    <p>Project Start Date</p>
                                    <input className="form-control" type="date" name="name" placeholder="Select start date" 
                                        onChange={(e) => {
                                            setProjectStartDate(e.target.value);
                                        }}>
                                    </input>
                                </div>
                                <div className="col-md-12">
                                    <p>Project End Date</p>
                                    <input className="form-control" type="date" name="name" placeholder="Select start date" 
                                     onChange={(e) => {
                                        setProjectEndDate(e.target.value);
                                    }}>
                                    </input>
                                </div>
                                <div className="col-md-12">
                                    <p>Project Location</p>
                                    <input className="form-control" type="text" name="name" placeholder="Project Location" 
                                    onChange={(e) => {
                                        setProjectLocation(e.target.value);
                                    }}>
                                    </input>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" 

                                ></input>
                                        <label className="form-check-label">I confirm that all data are correct</label>
                                        <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                </div>
                                <div className="form-button mt-3">
                                    <br></br>
                                    <button id="submit" type="submit" className="btn btn-primary">ADD PROJECT</button>
                                </div>

                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    )
}