// App.js
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BecomeDriver from './components/BecomeDriver';
import DriverApplication from './components/DriverApplication';
import DriverLogin from './components/DriverLogin';
import DriverSignUp from './components/DriverSignUp';
import Fuel from './components/Fuel';
import { FuelDashboard } from './components/FuelDashboard';
import Header from './components/Header'; // Import Header
import Help from './components/Help';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TyreRepair from './components/TyreRepair';
import UserProfile from './components/UserProfile';

function App() {
    const [selectedOption, setSelectedOption] = useState('Tyre');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

    const handleLogin = () => {
        setIsLoggedIn(true); // Set logged in state
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Set logged out state
    };

    return (
        <div className="App">
            <Header 
                setSelectedOption={setSelectedOption} 
                isLoggedIn={isLoggedIn} 
                onLogout={handleLogout} 
            /> {/* Pass props to Header */}
            <Routes>
                <Route path="/" element={<HomePage selectedOption={selectedOption} />} /> 
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass handleLogin to Login */}
                <Route path="/tyre-repair" element={<TyreRepair />} />
                <Route path="/fuel" element={<Fuel />} /> 
                <Route path="/help" element={<Help />} /> 
                <Route path="/become-driver" element={<BecomeDriver />} /> 
                <Route path="/driver-signup" element={<DriverSignUp />} /> 
                <Route path="/driver-login" element={<DriverLogin />} /> 
                <Route path="/fuel-dashboard" element={<FuelDashboard />} />
                <Route path="/driver-application" element={<DriverApplication />} />
                <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
