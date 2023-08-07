import React, { useState } from 'react';
import './App.css';
import "../src/components/Styles.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Vehicles from "./components/Vehicles.js";
import HomePage from './components/Homepage';
import About from './components/About';
import BookingForm from './components/BookingForm';
import BikesAndScooters from './components/BikesAndScooters';
import Login from './components/Login';
import UserDetails from './components/UserDetails';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = user => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div>
        <NavBar loggedInUser={loggedInUser} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking/:type/:id" element={<BookingForm />} />
          <Route path="/bikes" element={<BikesAndScooters />} />
          <Route path="/scooters" element={<BikesAndScooters />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/user-details"
            element={<UserDetails user={loggedInUser} onLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
