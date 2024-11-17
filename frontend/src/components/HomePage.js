// HomePage.js
import React from 'react';
import { FaCar } from 'react-icons/fa';
import { MdLocalGasStation } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate(); 

    const handleOrderTyreRepair = () => {
        navigate('/tyre-repair'); 
    };

    const handleOrderFuel = () => {
        navigate('/fuel'); 
    };

    return (
        <div className="home">
            <div className="home__hero">
                <h1 className="home__title">LTRS</h1>
                <p className="home__slogan">Delivering Tyres, Fuel, and Repairs to Your Doorstep</p>
            </div>

            {/* Fuel Prices Section */}
            <div className="home__fuel-prices">
                <div className="fuel-prices-container">
                    <div className="fuel-card fuel-card--petrol">
                        <h3>93 Unleaded <MdLocalGasStation /></h3>
                        <p>R23.50 per litre</p>
                    </div>
                    <div className="fuel-card fuel-card--petrol">
                        <h3>95 Unleaded <MdLocalGasStation /></h3>
                        <p>R24.00 per litre</p>
                    </div>
                    <div className="fuel-card fuel-card--diesel">
                        <h3>Ultra Low Sulfur Diesel <MdLocalGasStation /></h3>
                        <p>R22.00 per litre</p>
                    </div>
                    <div className="fuel-card fuel-card--diesel">
                        <h3>Low Sulfur Diesel <MdLocalGasStation /></h3>
                        <p>R21.50 per litre</p>
                    </div>
                </div>
            </div>

            {/* Summary Section */}
            <div className="summary-section">
                <img 
                    src="https://www.drivertrainer.org/wp-content/uploads/2023/10/cheerful-girl-in-sunglasses-smiling-from-car-windo-2023-01-06-04-31-10-utc-e1696578366406.jpg" 
                    alt="Happy Person" 
                    className="summary-image" 
                />
                <div className="summary-text">
                    <p>
                        The combined fuel and tyre delivery app aims to solve these problems by offering a convenient, reliable, and professional solution. 
                        The app leverages technology and a network of trained drivers and technicians to ensure that customers can receive fuel and tyre 
                        replacements whenever and wherever they need them. This service not only saves time but also enhances safety and convenience for drivers. 
                        Our service provides expert fuel delivery and tyre replacement, ensuring quality and reliability, with 24/7 availability for emergency assistance.
                    </p>
                    <button className="summary-button">Learn More</button>
                </div>
            </div>

            {/* Fuel Service Section */}
            <div className="home__fuel-service">
                <img 
                    src="https://wabash.ca/wp-content/uploads/2020/12/50818-scaled.jpg" 
                    alt="Fuel Delivery" 
                    className="fuel-service-image" 
                />
                <div className="fuel-service-text">
                    <h3>Fuel Delivery <MdLocalGasStation /></h3>
                    <p>Experience convenient fuel delivery right at your doorstep, ensuring you're never left without fuel.</p>
                    <button className="order-button" onClick={handleOrderFuel}>Order Fuel</button>
                </div>
            </div>

            {/* Tyre Repair Service Section */}
            <div className="home__tyre-service">
                <div className="tyre-service-text">
                    <h3>Tyre Repair <FaCar /></h3>
                    <p>Get fast and reliable tyre repair services with expert technicians ready to assist you.</p>
                    <button className="order-button" onClick={handleOrderTyreRepair}>Order Tyre Repair</button>
                </div>
                <img 
                    src="https://media.istockphoto.com/id/1309994486/photo/female-car-mechanic-changing-wheel.jpg?s=612x612&w=0&k=20&c=QuBa2RcCL0ZMkk4xWrqms8XvBr9_x9V17TLvy5pt_nw=" 
                    alt="Tyre Repair" 
                    className="tyre-service-image" 
                />
            </div>

            <div className="home__enquiry">
                <h2 className="enquiry-heading">Enquire Now</h2>
                <div className='enquire_P2'>
                    <form className="enquiry-form">
                        <input type="text" placeholder="Full Name (e.g. Jane Smith)" required />
                        <input type="email" placeholder="Email Address (name@website.com)" required />
                        <textarea placeholder="Type your message..." required />
                        <button type="submit">Submit Form</button>
                    </form>
                    <div className="contact-text">
                        <p>Need assistance? Contact us for more information!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
