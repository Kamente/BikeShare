import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Evehicles from './Components/Evehicle';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/e-vehicles" element={<Evehicles />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
