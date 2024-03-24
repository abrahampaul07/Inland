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
import {BrowserRouter} from "react-router-dom";
import GoToTop from './Components/GoToTop';
import { ThemeProvider } from 'styled-components';

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "#D6AD63",
      footer_bg: "#0a1435",
      btn: "#D6AD63",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { small: "425px", mobile: "768px", tab: "998px" },
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({once:true});
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000); 

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <>
      
    {loading ? (
      <Loader />
    ) : (
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar />
      <GoToTop />
      <Hero />
      <About/> 
      <Services/>
      <Owner/>
      <Project/>
      <Videos/>
      <Contact/>
    </BrowserRouter>
    </ThemeProvider>
    )}
  </>


   
  )
}

export default App




