import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Search icon
import { BsFillPersonFill } from 'react-icons/bs'; // Profile icon
import { FaQuestionCircle } from 'react-icons/fa'; // Question icon for FAQ
import { GiFuelTank } from 'react-icons/gi'; // Fuel icon
import { HiOutlineCash } from 'react-icons/hi'; // Payment icon
import { IoIosHelpCircle } from 'react-icons/io'; // General help icon
import { MdHelpOutline, MdLocalGasStation } from 'react-icons/md'; // Help icon for info blocks
import './Help.css';

const Help = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded FAQ index

    const faqItems = [
        { question: "How do I order fuel for delivery?", answer: "To order fuel, simply log in to your account, select the type of fuel you need, and provide your delivery location." },
        { question: "What types of fuel do you deliver?", answer: "We deliver various types of fuel, including gasoline, diesel, and kerosene." },
        { question: "How do I request a tire repair service?", answer: "You can request tire repair by choosing the service from our app and scheduling a convenient time." },
        { question: "What areas do you service for tire repairs?", answer: "We offer tire repair services in multiple remote locations. Check our app for coverage." },
        { question: "How do I update my profile information?", answer: "You can update your profile in the settings section of the app." },
        { question: "What payment methods are accepted?", answer: "We accept major credit cards, debit cards, and digital wallets." },
        { question: "How do I track my order?", answer: "You can track your order status in the 'My Orders' section of the app." },
    ];

    const handleToggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const infoBlocks = [
        { icon: <BsFillPersonFill />, title: "Getting Started", text: "Learn how to set up your account.", borderColor: "#FFD700" },
        { icon: <MdHelpOutline />, title: "Your Profile", text: "Manage your personal details.", borderColor: "#FF7F50" },
        { icon: <GiFuelTank />, title: "Ordering Fuel", text: "Steps to order fuel easily.", borderColor: "#ADFF2F" },
        { icon: <IoIosHelpCircle />, title: "Requesting Repairs", text: "Get your tires fixed quickly.", borderColor: "#87CEEB" },
        { icon: <HiOutlineCash />, title: "Payment Methods", text: "Explore our payment options.", borderColor: "#FF69B4" },
        { icon: <MdLocalGasStation />, title: "Track My Order", text: "Follow your order status.", borderColor: "#32CD32" },
        { icon: <MdHelpOutline />, title: "Contact Support", text: "Reach out for help.", borderColor: "#6A5ACD" },
        { icon: <MdHelpOutline />, title: "Service Areas", text: "Find out where we operate.", borderColor: "#FF4500" },
    ];

    return (
        <div className="help-container">
            <div className="search-section">
                <h2>Search for Help</h2>
                <div className="search-input-container">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Topics: Fuel Delivery, Tire Repair, Profile Update..."
                        className="search-input"
                    />
                    <AiOutlineSearch className="search-icon" />
                </div>
            </div>

            <div className="info-blocks">
                {infoBlocks.map((block, index) => (
                    <div key={index} className="info-block" style={{ borderColor: block.borderColor }}>
                        {block.icon}
                        <h3 className="info-title">{block.title}</h3>
                        <div className="supporting-text">{block.text}</div>
                    </div>
                ))}
            </div>

            <div className="faq-section">
                <h2>Frequently Asked Questions (FAQ)</h2>
                <ul className="faq-list">
                    {faqItems.map((item, index) => (
                        <li key={index} className="faq-item">
                            <div className="faq-question" onClick={() => handleToggleFAQ(index)}>
                                <FaQuestionCircle className="faq-icon" />
                                {item.question}
                                <span className="faq-toggle">{expandedIndex === index ? '-' : '+'}</span>
                            </div>
                            {expandedIndex === index && <div className="faq-answer">{item.answer}</div>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Help;
