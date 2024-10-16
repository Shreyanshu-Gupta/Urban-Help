import React from 'react';
import './Services.css';

const servicesData = [
  { id: 1, name: 'Home Cleaning', description: 'Professional home cleaning service.' },
  { id: 2, name: 'Plumbing', description: 'Reliable plumbing services.' },
  { id: 3, name: 'Salon at Home', description: 'Beauty services at your doorstep.' },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
