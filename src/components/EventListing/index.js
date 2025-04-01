import React, { useState } from 'react';
import Header from '../Header';
import './index.css';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Sunday Service', date: '2025-04-05', location: 'Church Hall', category: 'Religious', description: 'Join us for a spirit-filled service.' },
    { id: 2, title: 'Community Cleanup', date: '2025-04-12', location: 'City Park', category: 'Charity', description: 'Volunteer to clean up our neighborhood.' },
    { id: 3, title: 'Youth Social Night', date: '2025-04-19', location: 'Youth Center', category: 'Social', description: 'An evening of fun and networking.' },
  ]);

  const [filter, setFilter] = useState('All');
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', category: 'Religious', description: '' });

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.description) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ title: '', date: '', location: '', category: 'Religious', description: '' });
    }
  };

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

  return (
    <>
      <Header />
      <div className="events-container">
        <h2>Upcoming Events</h2>
        
        <div className="filter-buttons">
          {['All', 'Religious', 'Social', 'Charity'].map(category => (
            <button key={category} onClick={() => handleFilterChange(category)} className={filter === category ? 'active' : ''}>
              {category}
            </button>
          ))}
        </div>
        
        <div className="events-list">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
              <span className={`category-tag ${event.category.toLowerCase()}`}>{event.category}</span>
            </div>
          ))}
        </div>

        <h2>Add a New Event</h2>
        <form className="event-form" onSubmit={addEvent}>
          <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleInputChange} required />
          <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} required />
          <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} required />
          <select name="category" value={newEvent.category} onChange={handleInputChange}>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleInputChange} required></textarea>
          <button type="submit">Add Event</button>
        </form>
      </div>
    </>
  );
};

export default Events;
