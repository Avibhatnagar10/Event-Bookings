// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout, onSignIn }) => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Event Booking</Link>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About Us</Link>
                <div className="dropdown">
                    <span className="dropdown-toggle nav-link">Profile</span>
                    <div className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item">User Profile</Link>
                        <span className="dropdown-item" onClick={onLogout}>Logout</span>
                    </div>
                </div>
                <button onClick={onSignIn} className="nav-link">Sign In</button> {/* Sign In Button */}
            </div>
        </nav>
    );
};

export default Navbar;
