import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './viewall.css';

export default function DeleteProject() {
    const {id}  = useParams()
    const history = useNavigate();
    function deleteProject(_id) {
        axios.delete("http://localhost:4000/project/deleteproject/" + _id).then((res) => {
            alert("Project deleted successfully");
             history(`/organization/viewallprojects/${id}/from_login`);
             {console.log(id)}
        }).catch((err) => {
            alert(err.message);
           
        }) 

    }
    return (
        <section className='flex gap-6'>
            <div className='w-full mr-10'>

                <div className="bigdelete" >
                    <div className="delete">
                        <div className="deletesub">
                            <div className="deletesubimg">
                                <svg className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                            </div>

                            <div className="ml-3">
                                <h2 className="font-semibold text-gray-800">Delete</h2>
                                
                            </div>
                        </div>

                        <div className="buttonsmal5">
                        <p className="buttonsmal5">Are you sure You want to Delete this?  </p>
                            <a className='./buttona' href='/volunteers/getvolunteer/${id}/true'>
                                <button className="div10b">
                                    Cancel
                                </button>
                            </a>
                            <button className="div10b"
                                onClick={() => deleteProject(id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

