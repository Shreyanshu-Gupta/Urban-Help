import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  { id: 1, name: 'John Doe', feedback: 'Excellent service! Highly recommend.' },
  { id: 2, name: 'Jane Smith', feedback: 'Quick and professional staff.' },
];

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
