import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaCalendarAlt, FaCar, FaCarSide, FaImage, FaMapMarkerAlt, FaMoneyBillWave, FaPercentage, FaPhone } from 'react-icons/fa'; // Added FaCalendarAlt import
import './TyreRepair.css'; // Import your CSS file for styling

const TyreRepair = () => {
    const [formData, setFormData] = useState({
        vehicleType: '',
        tireCondition: '',
        location: '',
        contactName: '',
        contactPhone: '',
        email: '',
        paymentMethod: '',
        tireImage: null,
        tireType: '', // New state for tire type (1st hand or 2nd hand)
        schedule: 'now', // New state for scheduling
    });

    const [price, setPrice] = useState(0); // State for price
    const [vat, setVat] = useState(0); // State for VAT
    const [subtotal, setSubtotal] = useState(0); // State for subtotal

    // Simulate fetching user info from an account
    useEffect(() => {
        const fetchUserInfo = async () => {
            // Simulated API call - replace with your actual data fetching
            const userInfo = {
                vehicleType: 'Car',
                tireCondition: 'Flat',
                location: '123 Main St, Anytown',
                contactName: 'John Doe',
                contactPhone: '123-456-7890',
                email: 'john.doe@example.com',
                paymentMethod: 'creditCard',
                tireType: '1st Hand', // Set default tire type
                schedule: 'now', // Set default schedule
            };

            setFormData(userInfo);
        };

        fetchUserInfo();
    }, []);

    // Price calculation (example logic)
    useEffect(() => {
        let basePrice = 0;

        if (formData.tireCondition) {
            switch (formData.tireCondition) {
                case 'Flat':
                    basePrice = 50;
                    break;
                case 'Burst':
                    basePrice = 100;
                    break;
                case 'Worn':
                    basePrice = 75;
                    break;
                default:
                    basePrice = 0;
            }
        }

        // Adjust base price based on tire type
        if (formData.tireType === '2nd Hand') {
            basePrice *= 0.8; // Example discount for second-hand tires
        }

        setPrice(basePrice);

        // Calculate subtotal and VAT
        const calculatedSubtotal = basePrice; // Base price as subtotal
        const calculatedVat = calculatedSubtotal * 0.15; // 15% VAT
        setSubtotal(calculatedSubtotal);
        setVat(calculatedVat);
    }, [formData.tireCondition, formData.tireType]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, tireImage: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Checkout successful!'); // Change alert message
    };

    return (
        <div className="tyre-repair-container">
            <h2 className="tyre-repair-header"><FaCar /> Tire Repair Request</h2>
            <div className="tyre-repair-content">
                <div className="tyre-info-section">
                    <h3>Tyre Information</h3>
                    <form onSubmit={handleSubmit} className="tyre-repair-form">
                        <div className="form-group">
                            <label><FaCarSide /> Vehicle Type:</label>
                            <select 
                                name="vehicleType" 
                                value={formData.vehicleType} 
                                onChange={handleChange} 
                                required 
                                className="input-field"
                            >
                                <option value="">Select...</option>
                                <option value="Car">Car</option>
                                <option value="SUV">SUV</option>
                                <option value="Truck">Truck</option>
                                <option value="Van">Van</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><FaCarSide /> Tire Condition:</label>
                            <select 
                                name="tireCondition" 
                                value={formData.tireCondition} 
                                onChange={handleChange} 
                                required 
                                className="input-field"
                            >
                                <option value="">Select...</option>
                                <option value="Flat">Flat</option>
                                <option value="Burst">Burst</option>
                                <option value="Worn">Worn</option>
                                <option value="Good">Good</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><FaCarSide /> Tire Type:</label>
                            <select 
                                name="tireType" 
                                value={formData.tireType} 
                                onChange={handleChange} 
                                required 
                                className="input-field"
                            >
                                <option value="">Select...</option>
                                <option value="1st Hand">1st Hand</option>
                                <option value="2nd Hand">2nd Hand (70% Tread)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><FaCalendarAlt /> Schedule:</label>
                            <select 
                                name="schedule" 
                                value={formData.schedule} 
                                onChange={handleChange} 
                                required 
                                className="input-field"
                            >
                                <option value="now">Now</option>
                                <option value="later">Set Time & Date</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ flexDirection: 'column' }}>
                            <label><FaImage /> Attach Tire Image:</label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleFileChange} 
                                required 
                                className="input-field"
                            />
                        </div>

                        
                    </form>
                </div>
                <div className="location-payment-section">
                    <h3>Location & Payment Information</h3>
                    <div className="form-group">
                        <label><FaMapMarkerAlt /> Location:</label>
                        <input 
                            type="text" 
                            name="location" 
                            value={formData.location} 
                            onChange={handleChange} 
                            required 
                            placeholder="e.g., 123 Main St, Anytown" 
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label><FaPhone /> Contact Name:</label>
                        <input 
                            type="text" 
                            name="contactName" 
                            value={formData.contactName} 
                            onChange={handleChange} 
                            required 
                            placeholder="e.g., John Doe" 
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label><FaPhone /> Contact Phone:</label>
                        <input 
                            type="tel" 
                            name="contactPhone" 
                            value={formData.contactPhone} 
                            onChange={handleChange} 
                            required 
                            placeholder="e.g., 012-345-6789" 
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label><AiOutlineMail /> Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            placeholder="e.g., john.doe@example.com" 
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label><FaMoneyBillWave /> Payment Method:</label>
                        <select 
                            name="paymentMethod" 
                            value={formData.paymentMethod} 
                            onChange={handleChange} 
                            required 
                            className="input-field"
                        >
                            <option value="">Select...</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="cash">Cash</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>
                    <h4><FaPercentage /> Subtotal: R{subtotal.toFixed(2)}</h4> {/* Display subtotal */}
                    <h4><FaPercentage /> VAT (15%): R{vat.toFixed(2)}</h4> {/* Display VAT */}
                    <h4><FaMoneyBillWave /> Total: R{(subtotal + vat).toFixed(2)}</h4> {/* Display total */}
                    <button type="submit" className="submit-button">Request Repair</button> {/* Button for submission */}
                </div>
            </div>
        </div>
    );
};

export default TyreRepair;
