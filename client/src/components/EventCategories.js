// src/components/EventCategories.js
import React from 'react';
import './EventCategories.css';

const categories = [
  { name: 'Concerts', icon: '🎵' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Workshops', icon: '📚' },
  { name: 'Online Events', icon: '💻' },
];

const EventCategories = () => {
  return (
    <div className="categories-container">
      <h2>Event Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <span className="category-icon">{category.icon}</span>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategories;
