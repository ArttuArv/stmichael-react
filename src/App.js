import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages';
import WhiskyPage from './pages/whisky';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whisky, setWhisky] = useState([]);

  const toggle = () => {   
    setIsOpen( open => !open );
  } 

  useEffect(() => {
    axios.get('http://localhost:3001/whisky')
      .then(response => {
        setWhisky(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle} />
      <Navbar toggle = {toggle} />
      <Router>
        <Routes>
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/whisky' element = {<WhiskyPage whisky = {whisky} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
