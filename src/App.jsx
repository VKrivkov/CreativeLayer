import React, { useEffect } from 'react';
import { MainPage, Navbar, PrintTypes, Gallery, ContactPage, Footer, HowItWorks, PriceCalculator} from './components';

import { MainPage2, Navbar2, PrintTypes2, Gallery2, Footer2, HowItWorks2, PriceCalculator2} from './components-el';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeadTags from './components/HeadTags'; // Ensure the correct path is set
import NotFoundPage from './components/NotFoundPage/NotFoundPage'; // Ensure the correct path is set
import ThanxPage from './components/ThanxPage/ThanxPage'; // Ensure the correct path is set


import './App.css'


function App() {
  return (
    <Router>
      <HeadTags /> 
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
      <Route path="/el"  lang="el" element={
            <>
            <Navbar2/>
            <MainPage2/>
            <HowItWorks2/>
            <PrintTypes2/>
            <PriceCalculator2/>
            <Gallery2/>
            <ContactPage/>
            <Footer2/>
            </>
          } />

      <Route path="/thanks" element={<ThanxPage />}/>

      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );

  function LangUpdater() {
    const location = useLocation();
  
    useEffect(() => {
      const htmlLangAttribute = location.pathname.startsWith('/el') ? 'el' : 'en';
      document.documentElement.lang = htmlLangAttribute;
    }, [location]);
  
    return null;
  }
}

export default App
