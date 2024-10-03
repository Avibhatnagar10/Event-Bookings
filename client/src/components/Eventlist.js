import React, { useEffect, useState } from 'react';
import api from '../Services/api'; // Import the API service

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await api.get('/api/events'); // Adjust based on your API
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>{event.name}</li> // Display event name
        ))}
      </ul>
    </div>
  );
};

export default EventList;
