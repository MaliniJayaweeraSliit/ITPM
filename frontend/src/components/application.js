// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import './viewall.css';
// import { useNavigate, useParams } from "react-router-dom";

// export default function Application() {
//     const [projectName, setProjectName] = useState("");
//     const [ownerdata, setownerdata] = useState("");
//     const [projectDescription, setProjectDescription] = useState("");

//     const navigate = useNavigate();

//     function sendData(e) {
//         e.preventDefault();

//         const newApplication = {
//             projectName,
//             projectDescription,
//             projectCategoty,
//         }
        
//         axios.post("http://localhost:4000/application/addapplication", newApplication).then(() => {
//             ("Project added")

//             alert("project added");
//             navigate(`/organization/viewallprojects/${id}/from_login`)

//         }).then().catch((err) => {
//             alert(err)
//         })
//     }
//     return (
//         <section className='flex gap-6'>
//             <div className='w-full mr-10'>
//                 <table className="div2" border={1}>
//                     <thead className="div3">
//                         <tr>
//                             <th scope="col" className="div4">
//                             Project Name
//                             </th>
//                             <th scope="col" className="div4">
//                             Project Description
//                             </th>
//                             <th scope="col" className="div4">
//                             Project Categoty
//                             </th>
//                             <th scope="col" className="div4">
//                             projectStartDate
//                             </th>
//                             <th scope="col" className="div4">
//                             Project End Date
//                             </th>
//                             <th scope="col" className="div4">
//                             projectLocation
//                             </th>
//                             <th scope="col" className="div4">
//                                 <span className="div5">Apply</span>
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {projects.filter(projects => {
//                             if (search === "") {
//                                 return projects;
//                             }
//                             else if (projects.name.toLowerCase().includes(search.toLowerCase())) {
//                                 return projects;
//                             }

//                         }).map((projects) => {
//                             return (
//                                 <tr className="div6">
//                                     <th scope="row" className="div7">
//                                         {projects.projectName}
//                                     </th>
//                                     <td className="div7">
//                                         {projects.projectDescription}
//                                     </td>
//                                     <td className="div7">
//                                         {projects.projectCategoty}
//                                     </td>
//                                     <td className="div7">
//                                         {projects.projectStartDate}
//                                     </td>
//                                     <td className="div7">
//                                         {projects.projectEndDate}
//                                     </td>
//                                     <td className="div7">
//                                         {projects.projectLocation} 
//                                     </td>
//                                     <td className="div7 text-right">
//                                     {projects && <a className="diva" href={`/application/${projects._id}`} >
//                                         <button className="div10"> Apply</button>
//                                     </a>}
//                                     </td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </section >
//     );
// };

