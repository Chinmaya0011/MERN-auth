const express = require('express');
const router = express.Router();
const User = require("../models/User");

// Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Respond with a success message or user data if needed
        res.status(200).json({ message: "Login successful", user: { id: user._id, name: user.name, email: user.email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
