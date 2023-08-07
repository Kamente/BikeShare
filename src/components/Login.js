import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await fetch('https://users-qoqt.onrender.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            const foundUser = data.users.find(u => u.email === email);

            if (foundUser) {
                setUser(foundUser);
                onLogin(foundUser);
            } else {
                alert('User not found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                id="login"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {user && (
                <div className="user-details">
                    <img src={user.photo[0]} alt={user.firstName} />
                    <p>Name: {user.firstName} {user.lastName}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default Login;
