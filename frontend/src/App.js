import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addvolunteer from './components/addvolunteer';
import VolunteerInfo from './components/volunteerInfo';
import LoginVolunteer from './components/loginvolunteer';
import VolunteerHome from './components/volunteerHome';
import AddVolproject from './components/addvolproject';
import ViewVolunteer from './components/volunteerprofile';
import UpdateVolunteer from './components/editprofile';
import ApplyProject from './components/applyproject';
import LoginOrganization from './components/loginorganization';
import ViewAllProjects from './components/viewallprojects';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/addvolunteer' element={<Addvolunteer />} />
    <Route path='/volunteerhome' element={<VolunteerInfo/>} />
    <Route path='/loginvolunteer' element={<LoginVolunteer/>} />
    <Route path='/homevolunteer' element={<VolunteerHome/>} />
    <Route path='/organization/viewallprojects/:id/addproject' element={<AddVolproject/>} />
    <Route path='/volunteers/getvolunteer/:id/:from_login' element={<ViewVolunteer/>} />
    <Route path='/updatevolunteer/:id' element={<UpdateVolunteer/>} />
    <Route path='/applyproject' element={<ApplyProject/>} />
    <Route path='/loginorganization' element={<LoginOrganization/>} />
    <Route path='/organization/viewallprojects/:id/:from_login' element={<ViewAllProjects/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
