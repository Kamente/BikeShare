import React from 'react';
import './/NavBar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
        <h1>Roll<span>Motion</span></h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/e-vehicles">E-Vehicles</NavLink>
        </li>
      </ul>
      <button class="book">Booking</button>
    </nav>
  );
};

export default Navbar;
