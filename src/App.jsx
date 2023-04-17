// import React, { Component, Fragment } from "react"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';

import Home from './components/Home/Home';
import About from './components/About/About';
import Chemspider from './components/Chemspider/Chemspider';
import PeriodicTableOfElements from './pages/PeriodicTableOfElements/PeriodicTableOfElements';


function App() {  
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="periodictable" element={<PeriodicTableOfElements />}/>
        <Route path="chemspider" element={<Chemspider />}/>
      </Routes>
    </>
  );
}


export default App;