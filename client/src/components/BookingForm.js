import React from 'react';

const BookingForm = ({ event }) => {
  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic here
  };

  return (
    <form onSubmit={handleBooking}>
      <h3>Book {event.name}</h3>
      {/* Add form fields for booking details */}
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
    