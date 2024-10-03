// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        bookings: [
            { id: 1, title: "Concert in the Park", date: "2024-10-15" },
            { id: 2, title: "Art Workshop", date: "2024-10-20" },
            { id: 3, title: "Tech Conference", date: "2024-10-25" },
        ]
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-card">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-email">{user.email}</p>
                <h3 className="bookings-title">Your Bookings:</h3>
                <ul className="bookings-list">
                    {user.bookings.map(booking => (
                        <li key={booking.id} className="booking-item">
                            {booking.title} - {booking.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;
