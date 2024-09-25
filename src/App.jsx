// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';




function App() {
  return (
    // <BrowserRouter basename="/portfolio">
    <>
        <ParallaxProvider>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
      </ParallaxProvider>

      </>
    // </BrowserRouter>
  );
}

export default App;