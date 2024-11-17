// src/components/DriverLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api'; // Import the configured API instance
import './DriverLogin.css'; // Import the CSS file for styles

const DriverLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Enter Password
    const [error, setError] = useState(null); // State to store login errors
    const navigate = useNavigate();

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setStep(2); // Move to password entry
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/auth/login', { email, password });
            console.log('Login successful:', response.data);

            // Since there's no token to store, just navigate directly
            navigate('/fuel-dashboard');
        } catch (err) {
            console.error('Login failed:', err); // Log the error for debugging
            console.error('Response data:', err.response?.data); // Log response data from the server
            setError(err.response?.data.message || 'Invalid email or password. Please try again.');
            setPassword(''); // Clear the password field
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Driver Login</h2>
            {error && <div className="login-error">{error}</div>} {/* Display any errors */}
            {step === 1 && (
                <form onSubmit={handleEmailSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field"
                            placeholder='Enter your email.'
                        />
                    </div>
                    <button type="submit" className="submit-button">Continue</button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={handlePasswordSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="password" className="input-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field"
                            placeholder='Enter your password.'
                        />
                    </div>
                    <button type="submit" className="submit-button">Login</button>
                </form>
            )}
        </div>
    );
};

export default DriverLogin;
