import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages';
import WhiskyPage from './pages/whisky';
import BeerPage from './pages/beer';
import SportsPage from './pages/sports';
import StoryPage from './pages/story';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TestPage from './pages/test';
import './App.css'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whisky, setWhisky] = useState([]);
  const [beer, setBeer] = useState([]);

  const toggle = () => {   
    setIsOpen( open => !open );
  } 

  useEffect(() => {
    axios.get('http://localhost:3001/whisky2')
      .then(response => {
        setWhisky(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/beer')
      .then(response => {
        setBeer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);  

  return (
    <>
      <Router>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle = {toggle} />
        <Routes>
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/whisky' element = {<WhiskyPage whisky = {whisky} />} />
          <Route path = '/beer' element = {<BeerPage beer = {beer} />} />
          <Route path = '/sports' element = {<SportsPage />} />
          <Route path = '/story' element = {<StoryPage />} />
          <Route path = '/testi' element = {<TestPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
