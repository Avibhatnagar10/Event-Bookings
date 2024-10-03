// src/components/SignUpForm.js
import React, { useState } from 'react';
import './SignUpForm.css'; // Import the CSS file for styling

const SignUpForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic password match check
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        // For now, just show success and close the form
        setShowSuccess(true);
        setError('');
        
        setTimeout(() => {
            setShowSuccess(false);
            onClose(); // Close the sign-up form after 5 seconds
        }, 5000);
    };

    return (
        <div className="signup-form">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="signup-button">Create Account</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            
            {showSuccess && (
                <div className="success-popup">
                    <h3>Account Created Successfully!</h3>
                    <p>This window will close in 5 seconds.</p>
                </div>
            )}
        </div>
    );
};

export default SignUpForm;
