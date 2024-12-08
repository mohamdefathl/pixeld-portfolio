import React, { useState } from 'react';
import './contact.css';
import { TypingAnimation } from '../../components/typing-text/typing-text';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const personalInfo = `> Name: Mohammed Fathl Mohammed Al-Ghorbany
> Phone: +967 778 940 511
> Email: mohammedfadl.work@gmail.com
> Birth Date: 2001/01/05`;

  return (
    <div className='contact-container'>
      <div className='contact-personal'>
        <h2 className='text-q contact-title'>Personal Information</h2>
        <div className='personal-info'>
          <TypingAnimation text={personalInfo} duration={30} />
        </div>
      </div>
      <div className='contact-contact'>
        <h2 className='text-q contact-title'>Contact Information</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='form-group'>
            <label style={{ display: 'flex', gap: '4px' }} htmlFor='name' className={`form-label ${formData.name ? 'filled' : 'empty'}`}>
              <span>Name</span><span>{'>> '}</span>
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Your Name'
              className='form-input'
              required
            />
          </div>
          <div className='form-group'>
            <label style={{ display: 'flex', gap: '4px' }} htmlFor='email' className={`form-label ${formData.email ? 'filled' : 'empty'}`}>
              <span>Email</span><span>{'>> '}</span>
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Your Email'
              className='form-input'
              required
            />
          </div>
          <div className='form-group'>
            <label style={{ display: 'flex', gap: '4px' }} htmlFor='message' className={`form-label ${formData.message ? 'filled' : 'empty'}`}>
              <span>Message</span><span>{'>> '}</span>
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Your Message'
              className='form-input message-input scroll'
              rows={5}
              required
            />
          </div>
          <button type='submit' className='submit-button'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
