import React, { useState, useEffect } from 'react';
import './App.css'
import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Loader from './Components/Loader';
import Contact from './Components/Contact';
import Owner from './Components/Owner';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

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
      <Owner/>
      <Contact/>
    </>
    )}
  </div>


   
  )
}

export default App
