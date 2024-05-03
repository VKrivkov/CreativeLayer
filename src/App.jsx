import React, { useEffect } from 'react';
import { MainPage, Navbar, PrintTypes, Gallery, ContactPage, Footer, HowItWorks, PriceCalculator} from './components';

import { MainPage2, Navbar2, PrintTypes2, Gallery2, ContactPage2, Footer2, HowItWorks2, PriceCalculator2} from './components-el';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'


function App() {
  return (
    <Router>
      <LangUpdater />
      <Routes>
        <Route path="/" element={
          <>
          <Navbar/>
          <MainPage/>
          <HowItWorks/>
          <PrintTypes/>
          <PriceCalculator/>
          <Gallery/>
          <ContactPage/>
          <Footer/>
          </>
        } />
      <Route path="/el"  lang="el-CY" element={
            <>
            <Navbar2/>
            <MainPage2/>
            <HowItWorks2/>
            <PrintTypes2/>
            <PriceCalculator2/>
            <Gallery2/>
            <ContactPage2/>
            <Footer2/>
            </>
          } />
      </Routes>
    </Router>
  );

  function LangUpdater() {
    const location = useLocation();
  
    useEffect(() => {
      const htmlLangAttribute = location.pathname.startsWith('/el') ? 'el-CY' : 'en-CY';
      document.documentElement.lang = htmlLangAttribute;
    }, [location]);
  
    return null;
  }
}

export default App
