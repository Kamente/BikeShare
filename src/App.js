import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Evehicles from './Pages/Evehicle';
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
