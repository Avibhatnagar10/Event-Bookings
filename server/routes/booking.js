const express = require('express');
const Booking = require('../models/booking');
const Event = require('../models/event');

const router = express.Router();

// Create Booking
router.post('/', async (req, res) => {
  const { userId, eventId, numberOfSeats } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event || event.seatsAvailable < numberOfSeats) {
      return res.status(400).send('Not enough seats available');
    }

    const booking = new Booking({ userId, eventId, numberOfSeats });
    await booking.save();

    // Update available seats
    event.seatsAvailable -= numberOfSeats;
    await event.save();

    res.status(201).send('Booking successful');
  } catch (error) {
    res.status(400).send('Error creating booking');
  }
});

// Get User Bookings
router.get('/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate('eventId');
    res.json(bookings);
  } catch (error) {
    res.status(400).send('Error fetching bookings');
  }
});

module.exports = router;
