// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>© 2024 UrbanPro. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 UrbanClone. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#testimonials" className="hover:text-yellow-500">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
