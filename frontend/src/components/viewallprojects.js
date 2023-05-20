import React, { useState, useEffect } from "react";
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './viewall.css';
import { useParams } from "react-router-dom";

export default function ViewAllProjects() {
    const [projects, setProjects] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(() => {
        function getProjects() {
            axios.get("http://localhost:4000/project/getprojects").then((res) => {
                setProjects(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getProjects();
    }, []);


    const generatePdf = () => {
        const doc = new jsPDF({orientation: 'landscape'} )
        const columnStyles = {
            projectName: { columnWidth: 40 }, 
            projectDescription: { columnWidth: 70 }, 
            projectCategoty:{ columnWidth: 40 },
            projectStartDate: { columnWidth: 40 }, 
            projectEndDate: { columnWidth: 40 }, 
            projectLocation:{ columnWidth: 40 },
          };
        autoTable(doc, {
            columns: [
                { header: 'Project Name', dataKey: 'projectName' },
                { header: 'Project Description', dataKey: 'projectDescription' },
                { header: 'Project Categoty', dataKey: 'projectCategoty' },
                { header: 'Project Start Date', dataKey: 'projectStartDate' },
                { header: 'Project End Date', dataKey: 'projectEndDate' },
                { header: 'Project Location', dataKey: 'projectLocation' },
            ],
            body: projects.map(project => {
                return {
                    projectName: project.projectName,
                    projectDescription: project.projectDescription,
                    projectCategoty: project.projectCategoty,
                    projectStartDate: project.projectStartDate,
                    projectEndDate: project.projectEndDate,
                    projectLocation: project.projectLocation,
                };
            }),
            columnStyles,
        })
        doc.save('Projects Details.pdf')
    }
    return (
        <section className='flex gap-6'>
            <div className='w-full mr-10'>
                <div className="p-5">
                    <button
                        onClick={generatePdf}
                        className="div1">
                        Generate PDF
                    </button>
                    <a href='./addproject' className="div11"><button className="div1" >Add New Project</button></a>
                    <a href='./allapllication' className="div11"><button className="div1" >View Applications</button></a>
                </div>

                <table className="div2" border={1}>
                    <thead className="div3">
                        <tr>
                            <th scope="col" className="div4">
                            Project Name
                            </th>
                            <th scope="col" className="div4">
                            Project Description
                            </th>
                            <th scope="col" className="div4">
                            Project Categoty
                            </th>
                            <th scope="col" className="div4">
                            projectStartDate
                            </th>
                            <th scope="col" className="div4">
                            Project End Date
                            </th>
                            <th scope="col" className="div4">
                            projectLocation
                            </th>
                            <th scope="col" className="div4">
                                <span className="div5">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.filter(projects => {
                            if (search === "") {
                                return projects;
                            }
                            else if (projects.name.toLowerCase().includes(search.toLowerCase())) {
                                return projects;
                            }

                        }).map((projects) => {
                            return (
                                <tr className="div6">
                                    <th scope="row" className="div7">
                                        {projects.projectName}
                                    </th>
                                    <td className="div7">
                                        {projects.projectDescription}
                                    </td>
                                    <td className="div7">
                                        {projects.projectCategoty}
                                    </td>
                                    <td className="div7">
                                        {projects.projectStartDate}
                                    </td>
                                    <td className="div7">
                                        {projects.projectEndDate}
                                    </td>
                                    <td className="div7">
                                        {projects.projectLocation} 
                                    </td>
                                    <td className="div7 text-right">
                                    {projects && <a className="diva" href={`/viewproject/${projects._id}/false`} >
                                        <button className="div10"> View</button>
                                    </a>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section >
    );
};

