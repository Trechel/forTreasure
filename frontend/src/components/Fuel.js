import React, { useEffect, useState } from 'react';
import './Fuel.css';

const Fuel = () => {
    const [formData, setFormData] = useState({
        fuelType: '',
        fuelSubtype: '',
        location: '',
        contactName: '',
        contactPhone: '',
        email: '',
        paymentMethod: '',
        schedule: 'now',
        fuelAmount: '',
    });

    const [pricePerLiter, setPricePerLiter] = useState(0);
    const [liters, setLiters] = useState(0);
    const [vat, setVat] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const userInfo = {
            fuelType: 'Petrol',
            fuelSubtype: '93 Unleaded',
            location: '456 Elm St, Somecity',
            contactName: 'Jane Doe',
            contactPhone: '987-654-3210',
            email: 'jane.doe@example.com',
            paymentMethod: 'creditCard',
            schedule: 'now',
            fuelAmount: '500',
        };
        setFormData(userInfo);
    }, []);

    useEffect(() => {
        const price = formData.fuelType === 'Petrol' ? 30 : formData.fuelType === 'Diesel' ? 40 : 0;
        setPricePerLiter(price);

        const amountInZar = parseFloat(formData.fuelAmount) || 0;
        const calculatedLiters = amountInZar / price;
        const calculatedSubtotal = amountInZar;
        const calculatedVat = calculatedSubtotal * 0.15;

        setLiters(calculatedLiters.toFixed(2));
        setSubtotal(calculatedSubtotal);
        setVat(calculatedVat);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Checkout successful!');
    };

    return (
        <div className="fuel-container">
            <form onSubmit={handleSubmit} className="fuel-form">
                <div className="form-section fuel-details">
                    <h3>Fuel Details</h3>
                    <div className="form-group">
                        <label>Fuel Type:</label>
                        <select name="fuelType" value={formData.fuelType} onChange={handleChange} required className="input-field">
                            <option value="">Select...</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                        </select>
                    </div>

                    {formData.fuelType === 'Petrol' && (
                        <div className="form-group">
                            <label>Fuel Subtype:</label>
                            <select name="fuelSubtype" value={formData.fuelSubtype} onChange={handleChange} required className="input-field">
                                <option value="">Select...</option>
                                <option value="93 Unleaded">93 Unleaded</option>
                                <option value="95 Unleaded">95 Unleaded</option>
                            </select>
                        </div>
                    )}

                    <div className="form-group">
                        <label>Fuel Amount (ZAR):</label>
                        <input type="number" name="fuelAmount" value={formData.fuelAmount} onChange={handleChange} required className="input-field" />
                    </div>

                    <div className="form-group">
                        <label>Liters:</label>
                        <span className="liters-display">{liters} Liters</span>
                    </div>

                    <div className="form-group">
                        <label>Schedule:</label>
                        <select name="schedule" value={formData.schedule} onChange={handleChange} required className="input-field">
                            <option value="now">Now</option>
                            <option value="later">Later</option>
                        </select>
                    </div>
                </div>

                <div className="form-section personal-info">
                    <h3>Personal Information</h3>
                    <div className="form-group">
                        <label>Location:</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} required className="input-field" />
                    </div>

                    <div className="form-group">
                        <label>Contact Name:</label>
                        <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required className="input-field" />
                    </div>

                    <div className="form-group">
                        <label>Contact Phone:</label>
                        <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required className="input-field" />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" />
                    </div>

                    <div className="form-group">
                        <label>Payment Method:</label>
                        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required className="input-field">
                            <option value="">Select...</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="cash">Cash</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>
                </div>

                <div className="totals-section">
                    <h4>Subtotal: ZAR {subtotal.toFixed(2)}</h4>
                    <h4>VAT (15%): ZAR {vat.toFixed(2)}</h4>
                    <h4>Total: ZAR {(subtotal + vat).toFixed(2)}</h4>
                    <button type="submit" className="checkout-button">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default Fuel;
