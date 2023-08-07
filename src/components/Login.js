import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleSignUp = async () => {
        try {
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className='login-page'>
            <div className="login-container">
                <div className="login-section">
                    <h2>Login</h2>
                    <input
                        id="login"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                <div className="signup-section">
                    <h2>Sign Up</h2>
                    <input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        id="signup-password"
                        type="password"
                        placeholder="Choose a password"
                    />
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>

            </div>
            <footer>
                <p>&copy; Copyright Roll Motion 2023. Rental Agreement. Terms of service. Privacy policy.</p>
            </footer>
        </div>
    );
};

export default Login;
