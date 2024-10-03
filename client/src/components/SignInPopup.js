// src/components/SignInPopup.js
import React from 'react';
import { auth } from '../firebaseConfig'; // Import Firebase auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './SignInPopup.css'; // Import the CSS for animation

const SignInPopup = ({ onClose }) => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            onClose(); // Close the popup after successful login
        } catch (error) {
            console.error("Error during Google sign-in: ", error);
        }
    };

    return (
        <div className="signin-popup">
            <div className="popup-content">
                <h2>Sign In</h2>
                <button onClick={handleGoogleSignIn} className="google-signin-button">
                    Sign in with Google
                </button>
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default SignInPopup;
