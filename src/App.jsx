import React, { useState, useEffect } from 'react';
import './App.css'
import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
// import Project from './Components/Project'
import Loader from './Components/Loader';
import Contact from './Components/Contact';
import Owner from './Components/Owner';
// import Services from './Components/Services';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <div>
   
      <>
      <Navbar />
      <Hero />
      <About/>
      {/* <Project /> */}
      {/* <Services/> */}
      <Owner/>
      
      <Contact/>
    </>
  
  </div>


   
  )
}

export default App
