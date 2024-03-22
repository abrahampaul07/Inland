import React, { useState, useEffect } from 'react';
import './App.css'
import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Loader from './Components/Loader';
import Contact from './Components/Contact';
import Owner from './Components/Owner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Video from './Components/Videos';
import Videos from './Components/Videos';
import Services from './Components/Services';
import Project from './Components/Project';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({once:true});
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <div>
    {loading ? (
      <Loader />
    ) : (
      <>
      <Navbar />
      <Hero />
      <About/> 
      <Services/>
      <Owner/>
      <Project/>
      <Videos/>
      <Contact/>
    </>
    )}
  </div>


   
  )
}

export default App
