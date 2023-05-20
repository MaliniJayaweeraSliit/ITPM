
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './viewall.css';
import { useParams } from "react-router-dom";

export default function ViewProject() {
    const { id, from_login } = useParams()
    const [project, setProject] = useState()
    
    useEffect(() => {
        axios.get(`http://localhost:4000/project/getproject/${id}`)
            .then((res) => {
                setProject(res["data"])
            })
            .catch(err => console.log(`get studetn data failed ${err}`))
            {console.log(project)}
    }, [id])


    return (
        <div className="div_1">
            <div className="div_2">
                {from_login === "false" && <div>
                <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                    {project && <a href={`/deletestudent/${project["_id"]}`} >
                        <button className="div_button"> Delete Student</button>
                    </a>}
                </div></div>}
                {project &&<div className="divpn">
                    <div className="divpn1">Project Name: {project["projectName"]}</div>
                    <br/>
                    <div className="divpn2">Start Date: {project["projectStartDate"]}</div>
                    <div className="divpn2">End Date: {project["projectEndDate"]}</div>
                    <br/>
                    <div className="divpn2">End Date: {project["projectDescription"]}</div>
                </div>}

        </div>

        </div >

    );
}