import './App.css';
import React from 'react';

import Routes from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
