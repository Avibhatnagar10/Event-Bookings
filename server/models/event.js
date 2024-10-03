const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // In models/Event.js
seatsAvailable: {
    type: Number,
    required: true,
  }
  
  // You can add more fields, like images, categories, etc.
});

module.exports = mongoose.model('Event', eventSchema);
