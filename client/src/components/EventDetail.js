import React from 'react';

const EventDetail = ({ event }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      {/* Add booking form or button here */}
    </div>
  );
};

export default EventDetail;
