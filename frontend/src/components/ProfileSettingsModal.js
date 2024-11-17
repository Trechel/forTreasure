// ProfileSettingsModal.js
import React, { useState } from 'react';
import { FaClipboardList, FaLock, FaUserCircle } from 'react-icons/fa'; // Import additional icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ProfileSettingsModal.css';

const ProfileSettingsModal = ({ onClose }) => {
    const [activeSetting, setActiveSetting] = useState('profile'); // State to track the active setting
    const navigate = useNavigate(); // Get the navigate function for navigation

    const handleSettingChange = (setting) => {
        setActiveSetting(setting); // Update the active setting
    };

    const handleCompleteApplication = () => {
        navigate('/driver-application'); // Navigate to the Driver Application route
    };

    return (
        <div className="profile-settings-modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="settings-left">
                    <ul>
                        <li
                            onClick={() => handleSettingChange('profile')}
                            className={activeSetting === 'profile' ? 'active' : ''}
                        >
                            <FaUserCircle /> Profile
                        </li>
                        <li
                            onClick={() => handleSettingChange('security')}
                            className={activeSetting === 'security' ? 'active' : ''}
                        >
                            <FaLock /> Security Settings
                        </li>
                        <li
                            onClick={() => handleSettingChange('application')} // Update to change setting
                        >
                            <FaClipboardList /> Complete Application
                        </li>
                    </ul>
                </div>
                <div className="settings-right">
                    {activeSetting === 'profile' && (
                        <div>
                            <h3>Profile Details</h3>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" placeholder="Enter your username" />

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter your password" />

                            <label htmlFor="profilePicture">Profile Picture:</label>
                            <input type="file" id="profilePicture" accept="image/*" />
                        </div>
                    )}
                    {activeSetting === 'security' && (
                        <div>
                            <h3>Security Settings</h3>
                            <label htmlFor="twoFactor">Enable Two-Factor Authentication:</label>
                            <input type="checkbox" id="twoFactor" />

                            <label htmlFor="securityQuestion">Security Question:</label>
                            <input type="text" id="securityQuestion" placeholder="Enter a security question" />
                        </div>
                    )}
                    {activeSetting === 'application' && ( // Add the new section for Complete Application
                        <div>
                            <h3>Complete Application</h3>
                            <p>Please complete your application process.</p>
                            <button onClick={handleCompleteApplication}>Complete Application</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileSettingsModal;
