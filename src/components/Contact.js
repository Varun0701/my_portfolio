import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-message">
        Feel free to reach out to me for any queries or collaborations!
      </p>
      <div className="contact-details">
        <div className="detail">
          <i className="fas fa-phone"></i>
          <span>9866754512</span>
        </div>
        <div className="detail">
          <i className="fas fa-envelope"></i>
          <span>varunchowdary560@gmail.com</span>
        </div>
        <div className="detail">
          <i className="fas fa-map-marker-alt"></i>
          <span>Bangalore, India</span>
        </div>
      </div>
      <p className="contact-note">
        I’d love to hear from you! Reach out to me for any details.
      </p>
    </div>
  );
};

export default Contact;
