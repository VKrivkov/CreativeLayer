import React, {useEffect }  from 'react'
import { MainPage, Navbar, PrintTypes, Gallery, ContactPage, Footer, HowItWorks} from './components';

import './App.css'


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {


  return (
    <>
     <Navbar/>
     <MainPage/>
     <HowItWorks/>
     <PrintTypes/>
     <Gallery/>
     <ContactPage/>
     <Footer/>
    </>
  )
}

export default App
