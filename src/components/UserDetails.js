import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({ user, onLogout }) => {
    return (
        <div className="user-details-container">
            <h2>Welcome, {user.firstName}!</h2>
            <img src={user.photo[0]} alt={user.firstName} />
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <button onClick={onLogout}>Logout</button>
            <Link to="/vehicles">Browse Vehicles</Link>
        </div>
    );
};

export default UserDetails;
