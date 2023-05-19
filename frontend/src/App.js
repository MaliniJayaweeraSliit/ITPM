import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addvolunteer from './components/addvolunteer';
import VolunteerInfo from './components/volunteerInfo';
import LoginVolunteer from './components/loginvolunteer';
import VolunteerHome from './components/volunteerHome';
import AddVolproject from './components/addvolproject';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/addvolunteer' element={<Addvolunteer />} />
    <Route path='/volunteerhome' element={<VolunteerInfo/>} />
    <Route path='/loginvolunteer' element={<LoginVolunteer/>} />
    <Route path='/homevolunteer' element={<VolunteerHome/>} />
    <Route path='/addproject' element={<AddVolproject/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
