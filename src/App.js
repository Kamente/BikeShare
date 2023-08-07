import React from 'react';
import './App.css';
import "../src/components/Styles.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Bikes from "./components/Bikes.js";
// import Scooters from "./components/Scooters.js";
import Vehicles from "./components/Vehicles.js";
import HomePage from './components/Homepage';
import About from './components/About';
import BookingForm from './components/BookingForm'; 
import BikesAndScooters from './components/BikesAndScooters';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking/:type/:id" element={<BookingForm />} />
          <Route path="/bikes" element={<BikesAndScooters />} />
          <Route path="/scooters" element={<BikesAndScooters />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
