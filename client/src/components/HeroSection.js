// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img
        src="/image.jpg" // Correctly reference the image in the public folder
        alt="Event Background"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1>Welcome to Event Booking</h1>
        <p>Find and Book Your Next Favorite Event</p>
        <button className="cta-button">View Upcoming Events</button>
      </div>
    </div>
  );
};

export default HeroSection;
