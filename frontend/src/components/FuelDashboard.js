// FuelDashboard.js
import React, { useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import './FuelDashboard.css'; 
import { Map } from './Map';
import { Sidebar } from './Sidebar';

export function FuelDashboard() {
    const [orders, setOrders] = useState([
        {
            id: 1,
            location: [51.505, -0.09],
            description: "Fuel Delivery",
            details: "Diesel - 500 Liters",
        },
        {
            id: 2,
            location: [51.51, -0.1],
            description: "Tire Repair",
            details: "Flat tire repair at customer location",
        },
    ]);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOrderResponse = (order, response) => {
        alert(`${response.toUpperCase()} the order: ${order.description}`);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option); 
        alert(`Option selected: ${option}`);
    };

    return (
        <div className="dashboard">
            <DashboardHeader /> 
            <div className="dashboard-body">
                <Sidebar 
                    options={[
                        'Active Delivery',
                        'Delivery History',
                        'New Delivery Request',
                        'Track Delivery Route',
                        'Manage Fuel Types',
                        'Customer Support',
                        'Fuel Pricing Information',
                    ]} 
                    onOptionClick={handleOptionClick} 
                    selectedOption={selectedOption} // Pass the selected option
                />
                <Map orders={orders} onOrderResponse={handleOrderResponse} />
            </div>
        </div>
    );
}
