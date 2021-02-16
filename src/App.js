import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';


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
