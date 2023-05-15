import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function VolunteerHome() {

    return (
        <section className='flex gap-6'>
            <div className='w-full mr-10'>
                <div className="p-5">
                    <div className="flex justify-center items-center h-full w-full bg-[#03254c]" style={{ flexDirection: "column" }}><div className="p-16">
                        <div className="p-8 bg-white shadow mt-24">
                            <div className="relative">
                                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                                <button className="text-white py-2 px-4 uppercase rounded dark:bg-[#ADD8E6] hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Update Student</button>
                            </div>
                        </div>
                        <div className="mt-20 text-center border-b pb-12">
                            <h1 className="text-4xl font-medium text-gray-700">Student Name, <span className="font-light text-gray-500">27</span></h1>
                            <p className="font-light text-gray-600 mt-3">Index Number</p>
                                <p className="font-light text-gray-600 mt-3">NIC</p>
                                <p className="mt-8 text-gray-500">Email</p>
                                <p className="mt-8 text-gray-500">Z-Score</p>
                                <p className="mt-2 text-gray-500">degree</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
