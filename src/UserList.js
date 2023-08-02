import React, { useState, useEffect } from 'react';
import './App.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8002/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        // Make an API request to delete the user
        fetch(`http://localhost:8002/users/${userId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // If the user was successfully deleted from the server, update the local state
                setUsers(prevUsers => prevUsers.filter(user => user.shortId !== userId));
            }
        })
        .catch(error => {
            console.error('Error deleting user:', error);
        });
    };

    return (
        <div className="user-list-container">
            <h1 className="user-list-title">User List</h1>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.shortId} className="user-card">
                        <img src={user.photo} alt={user.username} className="user-photo" />
                        <div className="user-info">
                            <p><span className="label">Username:</span> {user.username}</p>
                            <p><span className="label">First Name:</span> {user.firstName}</p>
                            <p><span className="label">Last Name:</span> {user.lastName}</p>
                            <p><span className="label">Email:</span> {user.email}</p>
                            <p><span className="label">Address:</span> {user.address}</p>
                            <p><span className="label">Rating:</span> {user.ratingValue} (Based on {user.reviews} reviews)</p>
                        </div>
                        <button className="delete-button" onClick={() => handleDelete(user.shortId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;





