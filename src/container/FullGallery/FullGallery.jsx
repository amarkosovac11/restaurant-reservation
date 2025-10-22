import React from 'react';
import Modal from '../../components/Modal';
import { images } from "../../constants";
import './FullGallery.css';

const FullGallery = ({ event, onBack }) => {
  // Get images for the selected event, fallback to empty array
  const eventImages = images[event] || [];
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Show message if no images exist
  if (eventImages.length === 0) {
    return (
      <div className='full-gallery'>
        <button className='back-btn' onClick={onBack}>← Back to Events</button>
        <h2 style={{ color: 'white', textAlign: 'center', marginTop: '3rem' }}>
          No images found for this event yet.
        </h2>
      </div>
    );
  }


  return (
    <div className='full-gallery'>
      <button className='back-btn' onClick={onBack}>← Back to Events</button>
      <h1 className='full-gallery-title'>{event} Gallery</h1>

      <div className='gallery-grid'>
        {eventImages.map((img, idx) => (
          <div key={`gallery-image-${idx}`} className='gallery-image-card'>
            <img
              src={img}
              alt={`${event}-${idx}`}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default FullGallery;
