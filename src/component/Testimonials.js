// import React from 'react';
// import './Testimonials.css';

// const testimonialsData = [
//   { id: 1, name: 'John Doe', feedback: 'Excellent service! Highly recommend.' },
//   { id: 2, name: 'Jane Smith', feedback: 'Quick and professional staff.' },
// ];

// const Testimonials = () => {
//   return (
//     <div className="testimonials" id="testimonials">
//       <h2>What Our Customers Say</h2>
//       <div className="testimonials-list">
//         {testimonialsData.map(testimonial => (
//           <div key={testimonial.id} className="testimonial-card">
//             <h3>{testimonial.name}</h3>
//             <p>"{testimonial.feedback}"</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import React from 'react';

const testimonials = [
  { name: "John Doe", review: "Excellent service! Highly recommend." },
  { name: "Jane Smith", review: "Very professional and efficient." },
  { name: "Michael Lee", review: "Affordable and top-notch services." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
              <p className="text-lg italic">"{testimonial.review}"</p>
              <h3 className="mt-4 text-2xl font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
