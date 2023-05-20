import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './volunteerprofile.css';

export default function ViewVolunteer() {
    const { id, from_login } = useParams()
    const [volunteer, setVolunteer] = useState()
    useEffect(() => {
        axios.get(`http://localhost:4000/volunteers/getvolunteer/${id}`)
            .then((result) => {
                setVolunteer(result["data"])
            })
            .catch(err => console.log(`get volunteer data failed ${err}`))
{console.log(volunteer)}
    }, [id])



    return (
        <div className="row gutters-sm" >
            <div className="col-md-4 mb-3" >
                <div className="card" >
                    <div className="card-body" >
                        <div className="d-flex flex-column align-items-center text-center ">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                            {
                                volunteer && <div className="mt-3">
                                    <h4>{volunteer["volunteer_username"]}</h4>
                                    <p className="text-secondary mb-1">Volunteer</p>
                                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                    <button className="primary">Apply for new project</button>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
            
                <div className="card mb-4">
                    {
                        volunteer && <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">First Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {volunteer["volunteer_firstname"]}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Last Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {volunteer["volunteer_lastname"]}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {volunteer["email"]}
                                </div>
                            </div>

                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Phone</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {volunteer["phone"]}
                                </div>
                            </div>
                            <hr />
                                <div className="buttondiv">
                                    <a href={`/updatevolunteer/${volunteer["_id"]}`} ><button className="buttonup">UPDATE INFORMATION</button></a>
                                </div>
                        </div>}
                </div>
        </div>
    );
};


