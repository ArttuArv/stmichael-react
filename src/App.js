import React from 'react';
import Home from './pages';
import SigninPage from './pages/signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path = '/' exact element = {<Home />} />
        <Route path = '/signin' element = {<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
