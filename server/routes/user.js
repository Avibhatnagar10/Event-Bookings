// routes/user.js
const express = require('express');
const User = require('../models/user'); // Ensure you have a User model set up
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { fullName, email, password, phone } = req.body;

    try {
        // Create a new user
        const newUser = new User({
            fullName,
            email,
            password, // Make sure to hash the password before saving (using bcrypt or similar)
            phone,
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

module.exports = router;
