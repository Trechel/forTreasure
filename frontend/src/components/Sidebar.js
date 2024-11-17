// Sidebar.js
import React, { useState } from 'react';
import { MdAdd, MdRemove } from 'react-icons/md'; // Import plus and minus icons
import './Sidebar.css'; // Import your sidebar CSS

export function Sidebar({ options, onOptionClick, selectedOption }) {
    const [isMinimized, setIsMinimized] = useState(false); // State to track minimized state

    // Toggle minimized state
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
            <div className="sidebar-header">
                {isMinimized ? (
                    <MdAdd className="icon" onClick={toggleMinimize} /> // Plus icon for expanded
                ) : (
                    <MdRemove className="icon" onClick={toggleMinimize} /> // Minus icon for minimized
                )}
            </div>
            <ul>
                {options.map((option, index) => (
                    <li 
                        key={index} 
                        className={`sidebar-item ${option === selectedOption ? 'active' : ''}`} 
                        onClick={() => onOptionClick(option)} // Handle option click
                    >
                        {!isMinimized && option} {/* Show option text only if not minimized */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
