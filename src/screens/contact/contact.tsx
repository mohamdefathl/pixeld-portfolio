import React from 'react';
import './contact.css';

export const Contact: React.FC = () => (
  <div className='contact-container'>
    <div className='contact-personal'>
      <h3 className='text-q contact-title'>Personal Information</h3>
    </div>
    <div className='contact-contact'>      
      <h3 className='text-q contact-title'>Contact Information</h3>
    </div>
  </div>
);
