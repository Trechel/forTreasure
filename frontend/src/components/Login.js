// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();
            console.log('Logged in:', data);

            // Store user data in local storage without a token
            localStorage.setItem('user', JSON.stringify(data.user));

            // Notify the parent component about the login status
            onLogin(); // Call the onLogin function without user data
            navigate('/'); // Redirect to the homepage after state is updated
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__title">Login</h2>
                <form onSubmit={handleLogin}>
                    {error && <p className="login__error">{error}</p>}
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="login__input"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="login__input"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="login__button">Login</button>
                    <p>
                        Don't have an account? <a href="/signup" className="login__link">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
