// UserProfile.js
import React, { useEffect, useState } from 'react';
import { FaCamera, FaSave, FaUserEdit } from 'react-icons/fa';
import api from './api'; // Import the api instance
import Header from './Header'; // Assuming Header is in the same directory
import './UserProfile.css';

const UserProfile = () => {
    const [userData, setUserData] = useState(null); // State to hold user data
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [profilePic, setProfilePic] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = 1; // Replace this with the actual user ID from your auth context or state
                const data = await api.get(`/user/${userId}`);
                setUserData(data.user);
                setFormData(data.user); // Set form data for editing
                setLoading(false); // Stop loading
            } catch (err) {
                setError(err.message);
                setLoading(false); // Stop loading even on error
            }
        };

        fetchUserData();
    }, []);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setProfilePic(URL.createObjectURL(e.target.files[0])); // Show selected profile pic
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            // Here you would typically send the updated data to your backend API
            await api.put(`/user/${userData.id}`, formData);
            setUserData(formData); // Save changes to userData
            setIsEditing(false); // Exit editing mode
        } catch (err) {
            setError(err.message); // Handle error
        }
    };

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>Error: {error}</div>; // Show error state

    return (
        <div className="user-profile">
            <Header />
            <h1>User Profile</h1>
            {profilePic && <img src={profilePic} alt="Profile" className="profile-pic" />}
            <form onSubmit={handleSave} className="profile-form">
                <div className="form-group">
                    <label>Name:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    ) : (
                        <span>{userData.name}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Surname:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                    ) : (
                        <span>{userData.surname}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    ) : (
                        <span>{userData.email}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    {isEditing ? (
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    ) : (
                        <span>{'******'}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    ) : (
                        <span>{userData.location}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Payment Method:</label>
                    {isEditing ? (
                        <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="credit">Credit/Debit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="other">Other</option>
                        </select>
                    ) : (
                        <span>{formData.paymentMethod === 'credit' ? 'Credit/Debit Card' : formData.paymentMethod.charAt(0).toUpperCase() + formData.paymentMethod.slice(1)}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Payment Details:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="paymentDetails"
                            value={formData.paymentDetails}
                            onChange={handleChange}
                            placeholder="Enter payment details"
                            required
                        />
                    ) : (
                        <span>{userData.paymentDetails}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Profile Picture:</label>
                    {isEditing ? (
                        <div className="profile-pic-input">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <FaCamera className="camera-icon" />
                        </div>
                    ) : (
                        <span>{profilePic ? 'Profile picture uploaded' : 'No profile picture'}</span>
                    )}
                </div>
                <div className="button-group">
                    <button type="button" onClick={handleEditToggle}>
                        {isEditing ? <FaSave /> : <FaUserEdit />} {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                    {isEditing && <button type="submit">Save</button>}
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
