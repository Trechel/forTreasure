import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic (e.g., API call to register user)
    console.log('Signing up:', { name, surname, phoneNumber, email, username, password });
    // Redirect to login page after signup
    navigate('/login');
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h2 className="signup__title">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Name" 
            className="signup__input"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Surname" 
            className="signup__input"
            value={surname} 
            onChange={(e) => setSurname(e.target.value)} 
            required 
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="signup__input"
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="signup__input"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Username" 
            className="signup__input"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="signup__input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="signup__button">Sign Up</button>
          <p>
            Already have an account? <a href="/login" className="signup__link">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
