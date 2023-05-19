import React, { useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './project.css';

export default function AddVolproject() {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectCategoty, setProjectCategoty] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate , setProjectEndDate] = useState("");
    const [projectLocation, setProjectLocation] = useState("");

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
            setProjectName('');
            setProjectDescription('');
            setProjectCategoty('');
            setProjectStartDate('');
            setProjectEndDate('');
            setProjectLocation('');

            alert("project added");
            navigate('/viewallproject')

        }).then().catch((err) => {
            alert(err)
        })
    }

    return (
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>ADD A NEW VOLUNTEER PROJECT</h3>
                                <form className="requires-validation" action="/thanksyou" method="post" onSubmit={sendData}>
                                <div>
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
                                      <option selected disabled defaultValue="">Position</option>
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
                                            setProjectCategoty(e.target.value);
                                        }}>
                                    </input>
                                </div>
                                <div className="col-md-12">
                                    <p>Project End Date</p>
                                    <input className="form-control" type="date" name="name" placeholder="Select start date" 
                                     onChange={(e) => {
                                        setProjectStartDate(e.target.value);
                                    }}>
                                    </input>
                                </div>
                                <div className="col-md-12">
                                    <p>Project Location</p>
                                    <input className="form-control" type="text" name="name" placeholder="Project Location" 
                                    onChange={(e) => {
                                        setProjectEndDate(e.target.value);
                                    }}>
                                    </input>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" 
                                    onChange={(e) => {
                                        setProjectLocation(e.target.value);
                                    }}></input>
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