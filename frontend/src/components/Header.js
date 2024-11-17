// Header.js
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Header.css';
import LocationModal from './LocationModal';

const Header = ({ setSelectedOption, isLoggedIn, onLogout }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false); // Close the side menu
    };

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/" className="header__company">LTRS</Link>
                <div className="header__location" onClick={() => setIsModalOpen(true)}>
                    <MdLocationOn className="location__icon" />
                    12 Banana Street
                </div>
            </div>
            <div className="header__right">
                <div className="header__cart">
                    <AiOutlineShoppingCart className="cart__icon" />
                    <span className="cart__count">0</span>
                </div>
                <div className="header__auth">
                    {isLoggedIn ? null : ( // No need to show Login/Sign Up buttons in header if logged in
                        <>
                            <Link to="/login">
                                <button className="auth__button">Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className="auth__button">Sign Up</button>
                            </Link>
                        </>
                    )}
                </div>
                <div className="header__hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <HiMenu className="hamburger__icon" />
                </div>
            </div>

            {/* Side Menu */}
            {isMenuOpen && (
                <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
                    <button className="close-menu" onClick={closeMenu}>✖</button>
                    <ul>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/tyre-repair" onClick={closeMenu}>Request Tyre Repair</Link></li>
                        <li><Link to="/order-fuel" onClick={closeMenu}>Order Fuel</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                        <li><Link to="/help" onClick={closeMenu}>Help</Link></li>
                        <li><Link to="/become-driver" onClick={closeMenu}>Become a Driver</Link></li>
                        {isLoggedIn && ( // Show Profile and Logout options only when logged in
                            <>
                                <li><Link to="/user-profile" onClick={closeMenu}>Profile</Link></li>
                                <li>
                                    <button className="logout-button" onClick={() => { onLogout(); closeMenu(); }}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}

            <LocationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onChangeLocation={() => {}} 
            />
        </div>
    );
};

export default Header;
