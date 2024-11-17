import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaCar, FaCheckCircle, FaClipboardCheck, FaIdCard, FaUpload, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BecomeDriver.css';

const BecomeDriver = () => {
    return (
        <div className="become-driver">
            <div className="top-section">
                <div className="intro-section">
                    <h1>Become a Driver with Us</h1>
                    <p>Join our team and make a difference by providing fuel delivery and tire repair services. Sign up today to help us keep our customers moving safely and efficiently.</p>
                </div>
                <div className="signup-buttons">
                    <Link to="/driver-signup">
                        <button className="signup-button"><FaUserPlus /> Sign Up as a Driver</button>
                    </Link>
                    <Link to="/driver-login">
                        <button className="login-button"><FaUserPlus /> Login to Continue</button>
                    </Link>
                </div>
            </div>

            <div className="video-section">
                <h2>Watch How to Sign Up</h2>
                <p>This quick video will walk you through each step in becoming a certified driver.</p>
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/your-video-id"
                        title="Driver Signup Tutorial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="flowchart-section">
                <h2>How to Sign Up as a Driver</h2>
                <div className="flowchart">
                    {[
                        { icon: <FaUserPlus />, title: 'Create an Account', description: 'Register with a valid email and password. A confirmation link will be sent to you.' },
                        { icon: <FaIdCard />, title: 'Fill in Personal Details', description: 'Provide your name, address, and a valid driver\'s license.' },
                        { icon: <FaCar />, title: 'Fill in Vehicle Details', description: 'Add your vehicle make, model, year, and plate number.' },
                        { icon: <FaUpload />, title: 'Upload Documents', description: 'Upload your driver\'s license, registration, and insurance.' },
                        { icon: <FaUpload />, title: 'Upload Vehicle Images', description: 'Provide images of your vehicle for verification.' },
                        { icon: <FaClipboardCheck />, title: 'Information is Reviewed', description: 'Our team will review your application within 1-3 days.' },
                        { icon: <FaCheckCircle />, title: 'You are Accepted', description: 'Upon approval, you\'ll receive further instructions to start.' }
                    ].map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="step">
                                <div className="icon-container">{step.icon}</div>
                                <div className="text-container">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                            {index < 6 && <BiChevronDown className="arrow-icon" />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BecomeDriver;
