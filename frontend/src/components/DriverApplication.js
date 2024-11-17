// DriverApplication.js
import React, { useState } from 'react';
import { FaClipboardCheck, FaHome, FaIdCard, FaImage, FaPhone, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './DriverApplication.css';

const DriverApplication = () => {
    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        idNumber: '',
        supportingDoc: null,
        licenseImage: null,
        phoneNumber: '',
        homeAddress: '',
        driverExperience: '',
        criminalHistory: 'no',
        explanation: '',
        driverType: 'fuel',
        vinNumber: '',
        vehicleImage: null,
        profileImage: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you can handle form submission (e.g., API call)

        // Redirect to driver-dashboard
        navigate('/fuel-dashboard'); // Use navigate to go to the dashboard
    };

    return (
        <div className="driver-application">
            <h2>Driver Application Form</h2>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="form-step">
                        <label htmlFor="idNumber">
                            <FaIdCard /> South African ID Number:
                        </label>
                        <input
                            type="text"
                            id="idNumber"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your ID number"
                            required
                        />
                        <small>Enter your 13-digit South African ID number. It should only contain numbers.</small>
                        <label htmlFor="supportingDoc">
                            <FaImage /> Supporting Document:
                        </label>
                        <input
                            type="file"
                            id="supportingDoc"
                            name="supportingDoc"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                        <small>Please upload a clear image of your supporting document.</small>
                        <button type="button" onClick={handleNextStep}>Next</button>
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <label htmlFor="licenseImage">
                            <FaImage /> South African License Image:
                        </label>
                        <input
                            type="file"
                            id="licenseImage"
                            name="licenseImage"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                        <small>Please upload a clear image of your South African driver's license.</small>
                        <button type="button" onClick={handleNextStep}>Next</button>
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step">
                        <label htmlFor="phoneNumber">
                            <FaPhone /> Phone Number:
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                        />
                        <small>Enter a valid 10-digit South African phone number.</small>
                        <label htmlFor="homeAddress">
                            <FaHome /> Home Address:
                        </label>
                        <input
                            type="text"
                            id="homeAddress"
                            name="homeAddress"
                            value={formData.homeAddress}
                            onChange={handleInputChange}
                            placeholder="Enter your home address"
                            required
                        />
                        <small>Provide your residential address including street name and number.</small>
                        <label htmlFor="driverExperience">
                            <FaClipboardCheck /> Driver Experience (Years):
                        </label>
                        <input
                            type="number"
                            id="driverExperience"
                            name="driverExperience"
                            value={formData.driverExperience}
                            onChange={handleInputChange}
                            placeholder="Enter your experience in years"
                            required
                        />
                        <small>Enter the number of years you have been driving professionally.</small>
                        <label htmlFor="criminalHistory">Criminal History:</label>
                        <select
                            id="criminalHistory"
                            name="criminalHistory"
                            value={formData.criminalHistory}
                            onChange={handleInputChange}
                        >
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        {formData.criminalHistory === 'yes' && (
                            <div>
                                <label htmlFor="explanation">Please explain:</label>
                                <textarea
                                    id="explanation"
                                    name="explanation"
                                    value={formData.explanation}
                                    onChange={handleInputChange}
                                    placeholder="Explain your criminal history"
                                    required
                                />
                                <small>Provide details regarding your criminal history, if any.</small>
                            </div>
                        )}
                        <button type="button" onClick={handleNextStep}>Next</button>
                    </div>
                )}

                {step === 4 && (
                    <div className="form-step">
                        <label htmlFor="driverType">Driver Type:</label>
                        <select
                            id="driverType"
                            name="driverType"
                            value={formData.driverType}
                            onChange={handleInputChange}
                        >
                            <option value="fuel">Fuel</option>
                            <option value="tyreRepair">Tyre Repair</option>
                        </select>
                        <small>Select the type of driver you will be (e.g., Fuel or Tyre Repair).</small>
                        <label htmlFor="vinNumber">Vehicle VIN Number:</label>
                        <input
                            type="text"
                            id="vinNumber"
                            name="vinNumber"
                            value={formData.vinNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your vehicle's VIN number"
                            required
                        />
                        <small>Enter your vehicle's 17-character VIN (Vehicle Identification Number).</small>
                        <label htmlFor="vehicleImage">
                            <FaImage /> Vehicle Image:
                        </label>
                        <input
                            type="file"
                            id="vehicleImage"
                            name="vehicleImage"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                        <small>Please upload a clear image of your vehicle.</small>
                        <button type="button" onClick={handleNextStep}>Next</button>
                    </div>
                )}

                {step === 5 && (
                    <div className="form-step">
                        <label htmlFor="profileImage">
                            <FaUserCircle /> Your Current Image:
                        </label>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                        <small>Upload a recent image of yourself for identification purposes.</small>
                        <button type="submit">Submit Application</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default DriverApplication;
