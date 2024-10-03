// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import EventCategories from './components/EventCategories';
import SignUpForm from './components/SignUpForm';
import ProfilePage from './components/ProfilePage';
import loggedinState from './contexts/loggedinState';

const App = () => {
    const { isLoggedIn, setIsLoggedIn } = loggedinState();
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openSignUp = () => {
        setIsSignUpOpen(true);
    };

    const closeSignUp = () => {
        setIsSignUpOpen(false);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsSignUpOpen(false); // Close signup on successful login
        console.log('User logged in successfully');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
                <Navbar onLogout={handleLogout} />
                {isSignUpOpen && <SignUpForm onBack={closeSignUp} onLogin={handleLogin} />}
                <Routes>
                    <Route path="/" element={<><HeroSection /><EventCategories /></>} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
