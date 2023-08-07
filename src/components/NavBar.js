import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = ({ loggedInUser }) => {
    return (
        <nav className="custom-nav">
            <h2 id='h2'>Roll <span id='spann'>Motion</span> </h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/vehicles">Vehicles</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
