import React, {useEffect }  from 'react'
import { MainPage, Navbar, PrintTypes, Gallery} from './components';

import './App.css'


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {

  useEffect(() => {

 // Function to block horizontal scrolling
 const blockHorizontalScroll = (e) => {
  window.scrollTo(0, window.scrollY);
};

// Add event listener when component mounts
window.addEventListener('wheel', blockHorizontalScroll, { passive: false });

// Cleanup event listener when component unmounts
return () => window.removeEventListener('wheel', blockHorizontalScroll, { passive: false });
}, []); // Emp

  return (
    <>
     <Navbar />
     <MainPage />
     <PrintTypes/>
     <Gallery/>
    </>
  )
}

export default App
