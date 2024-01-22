import React from 'react'
import './/Global.css'
import { AnimatePresence, motion } from 'framer-motion';
//react-router-dom
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import Home from './assets/pages/Home';
import About from './assets/pages/About';
// import Layout from './assets/components/Layout';
import Work from './assets/pages/Work';
import Services from './assets/pages/Services';
import Contact from './assets/pages/Contact';


const App = () => {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;