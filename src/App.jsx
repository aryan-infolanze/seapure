import React from 'react'
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Home from './Pages/Home/Home'
import Header from './CommanComponent/Header'
import Footer from './CommanComponent/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
// import SeoManager from './CommanComponent/SeoManager';
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* <SeoManager/> */}
      <Header/>
      
      <main className="mt-20 md:mt-0">
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</main>
        <Footer/>
      
    </div>
  )
}

export default App