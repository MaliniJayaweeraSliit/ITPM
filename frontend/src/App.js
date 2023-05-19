import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addvolunteer from './components/addvolunteer';
import VolunteerInfo from './components/volunteerInfo';
import LoginVolunteer from './components/loginvolunteer';
import VolunteerHome from './components/volunteerHome';
import AddVolproject from './components/addvolproject';
import ViewVolunteer from './components/volunteerprofile';
import UpdateVolunteer from './components/editprofile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/addvolunteer' element={<Addvolunteer />} />
    <Route path='/volunteerhome' element={<VolunteerInfo/>} />
    <Route path='/loginvolunteer' element={<LoginVolunteer/>} />
    <Route path='/homevolunteer' element={<VolunteerHome/>} />
    <Route path='/addproject' element={<AddVolproject/>} />
    <Route path='/volunteers/getvolunteer/:id/:from_login' element={<ViewVolunteer/>} />
    <Route path='/updatevolunteer/:id' element={<UpdateVolunteer/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
