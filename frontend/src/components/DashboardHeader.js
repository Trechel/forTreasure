// DashboardHeader.js
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
import './DashboardHeader.css'; // Import your CSS for styles
import ProfileSettingsModal from './ProfileSettingsModal'; // Import the Profile Settings Modal

export function DashboardHeader() {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // State to manage modal visibility

    return (
        <header className="headers">
            <h1 className="headers__title">Dashboard</h1>
            <nav className="headers__menu">
                <ul>
                    <li className="headers__menu-item">Delivery History</li>
                    <li className="headers__menu-item">Settings</li>
                </ul>
            </nav>
            {/* Profile Icon as Clickable Element */}
            <div className="headers__profile" onClick={() => setIsProfileModalOpen(true)}>
                <FaUserCircle size={24} /> {/* Profile icon */}
            </div>

            {/* Profile Settings Modal */}
            {isProfileModalOpen && (
                <ProfileSettingsModal onClose={() => setIsProfileModalOpen(false)} />
            )}
        </header>
    );
}
