// src/components/UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => (
  <div className="user-profile">
    <h1>User Profile</h1>
    <div>
      <img src={user.photo} alt={user.username} />
      <p>Username: {user.username}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Rating: {user.ratingValue} (Based on {user.reviews} reviews)</p>
    </div>
  </div>
);

export default UserProfile;
