import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <img src={image} alt="preview" />
        <div className='modal-buttons'>
          <a href={image} download>
            <button>Download</button>
          </a>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
