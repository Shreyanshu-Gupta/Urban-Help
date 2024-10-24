// import React from 'react';
// import './Services.css';

// const servicesData = [
//   { id: 1, name: 'Home Cleaning', description: 'Professional home cleaning service.' },
//   { id: 2, name: 'Plumbing', description: 'Reliable plumbing services.' },
//   { id: 3, name: 'Salon at Home', description: 'Beauty services at your doorstep.' },
// ];

// const Services = () => {
//   return (
//     <div className="services" id="services">
//       <h2>Our Services</h2>
//       <div className="services-list">
//         {servicesData.map(service => (
//           <div key={service.id} className="service-card">
//             <h3>{service.name}</h3>
//             <p>{service.description}</p>
//             <button className="learn-more">Learn More</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

// function Services() {
//   return (
//     <div className="services-container">
//       <div className="service-card">
//         <h3>Web Development</h3>
//         <p>We offer high-quality web development services.</p>
//       </div>
//       <div className="service-card">
//         <h3>SEO Optimization</h3>
//         <p>Boost your website's visibility with our SEO services.</p>
//       </div>
//     </div>
//   );
// }

// export default Services;


import React from 'react';

const services = [
  { title: "Plumbing", description: "Expert plumbing services at your doorstep.", icon: "🔧" },
  { title: "Cleaning", description: "Professional cleaning services for your home.", icon: "🧹" },
  { title: "Electrician", description: "Reliable electricians for all your needs.", icon: "💡" },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
              <div className="text-6xl">{service.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
