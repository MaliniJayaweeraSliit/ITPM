import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addvolunteer from './components/addvolunteer';
import volunteerInfo from './components/volunteerInfo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/addvolunteer' element={<Addvolunteer />} />
    <Route path='/volunteerhome' element={<volunteerInfo/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
