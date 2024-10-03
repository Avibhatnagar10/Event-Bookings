// src/components/ProfilePage.js
import React from 'react';
import './ProfilePage.css'; // Optional: Import CSS for styling

const ProfilePage = () => {
    // Dummy user data (you can replace it with actual user data)
    const userData = {
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
    };

    return (
        <div className="profile-page">
            <h2>Profile Dashboard</h2>
            <div className="profile-info">
                <p><strong>Name:</strong> {userData.fullName}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
            </div>
            <button className="edit-button">Edit Profile</button>
            {/* Add more features as needed */}
        </div>
    );
};

export default ProfilePage;
