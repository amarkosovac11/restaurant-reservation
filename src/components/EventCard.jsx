import React from 'react';
import './EventCard.css';

const EventCard = ({ title, cover, onViewAll }) => {
  return (
    <div className='event-card'>
      <img src={cover} alt={title} />
      <div className='event-overlay'>
        <h2>{title}</h2>
        <button onClick={onViewAll}>View All</button>
      </div>
    </div>
  );
};

export default EventCard;
