const express = require('express');
const Event = require('../models/event');

const router = express.Router();

// Create Event
router.post('/', async (req, res) => {
  const event = new Event(req.body);

  try {
    await event.save();
    res.status(201).send('Event created');
  } catch (error) {
    res.status(400).send('Error creating event');
  }
});

// Get Events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
