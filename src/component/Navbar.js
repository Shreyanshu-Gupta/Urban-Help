// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Urban-Help</div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#testimonials">Testimonials</a></li>
//         <li><a href="#contact">Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Urban-Help</div>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-yellow-500"><a href="#home">Home</a></li>
          <li className="text-white hover:text-yellow-500"><a href="#services">Services</a></li>
          <li className="text-white hover:text-yellow-500"><a href="#testimonials">Testimonials</a></li>
          <li className="text-white hover:text-yellow-500"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

