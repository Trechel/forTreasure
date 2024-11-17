// LocationModal.js
import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md'; // Pin drop icon
import './LocationModal.css';

const LocationModal = ({ isOpen, onClose, onChangeLocation }) => {
    const [currentLocation, setCurrentLocation] = useState('Current Location'); // Placeholder for actual current location
    const [searchTerm, setSearchTerm] = useState('');
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSearching, setIsSearching] = useState(false); // To toggle between current location and search bar

    // Handle searching locations
    const handleSearch = async (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term) {
            setLoading(true);
            try {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${term}&addressdetails=1&limit=5`);
                setLocations(response.data);
            } catch (error) {
                console.error('Error fetching locations:', error);
            } finally {
                setLoading(false);
            }
        } else {
            setLocations([]);
        }
    };

    // Handle selecting a location
    const handleSelectLocation = (location) => {
        const streetName = location.address?.road || ''; // Extract street name
        const cityName = location.address?.city || location.address?.town || ''; // Extract city/town name
        const fullLocation = `${streetName}, ${cityName}`; // Combine street and city/town

        setCurrentLocation(fullLocation); // Set full location for display
        onChangeLocation(fullLocation); // Pass full location to the header
        setLocations([]);
        setSearchTerm('');
        setIsSearching(false); // Switch back to current location view
    };

    // Handle done action
    const handleDone = () => {
        // Handle storing the selected location if necessary
        console.log('Selected Location:', currentLocation);
        onClose();
    };

    // Function to format the current location for display in the header
    const formatLocation = (location) => {
        const maxLength = 20; // Maximum length of the street name to display in the header
        if (location.length > maxLength) {
            return location.slice(0, maxLength) + '...'; // Add ellipsis if too long
        }
        return location;
    };

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Location Details</h2>
                {!isSearching ? (
                    <div className="current-location">
                        <MdLocationOn className="location-icon" /> {/* Use pin drop icon */}
                        <span>{currentLocation}</span> {/* Display full location */}
                        <button className="change-button" onClick={() => setIsSearching(true)}>Change</button>
                    </div>
                ) : (
                    <div className="search-container">
                        <MdLocationOn className="search-icon" /> {/* Use pin drop icon */}
                        <input
                            type="text"
                            placeholder="Choose current location"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        {loading && <AiOutlineLoading className="loading-icon" />}
                    </div>
                )}
                <div className="location-results">
                    {loading && <div className="loading-message">Loading...</div>}
                    {!loading && locations.map(location => (
                        <div key={location.place_id} className="location-item" onClick={() => handleSelectLocation(location)}>
                            {location.display_name} {/* Show full location in results */}
                        </div>
                    ))}
                </div>
                <button className="done-button" onClick={handleDone}>Done</button>
            </div>
        </div>
    );
};

export default LocationModal;
