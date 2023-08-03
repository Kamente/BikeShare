import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bikes from "./components/Bikes";
import Scooters from "./components/Scooters";
import Vehicles from "./components/Vehicles";
import BookingForm from "./components/BookingForm";

import "./Styles.css";

const App = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('https://e-bikes.onrender.com/Bikes')
      .then((resp) => resp.json())
      .then((data) => setBikes(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setBikes([]);
      });
  }, []);

  const bikesData = bikes.slice(0, 7);
  const scootersData = bikes.slice(7, 16);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vehicles vehicles={bikes} />} />
        <Route path="/bikes" element={<Bikes bikesData={bikesData} />} />
        <Route path="/scooters" element={<Scooters scootersData={scootersData} />} />
        <Route path="/booking/:type/:id" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;