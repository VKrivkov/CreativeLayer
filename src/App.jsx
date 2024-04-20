import React from 'react'
import { MainPage, Navbar, PrintTypes, Gallery, ContactPage, Footer, HowItWorks, PriceCalculator} from './components';

import './App.css'


function App() {


  return (
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
  )
}

export default App
