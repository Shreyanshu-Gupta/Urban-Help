// import React from 'react';
// import './Home.css';

// function Home() {
//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <h1>Welcome to Our Service</h1>
//         <p>Your satisfaction is our priority</p>
//         <button className="btn-primary">Explore Now</button>
//       </div>
//     </section>
//   );
// }

// export default Home;

import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('/assets/images/image2.jpeg')` }}>
      <div className="flex flex-col justify-center items-center h-full bg-gray-900 bg-opacity-50">
        <h1 className="text-white text-5xl md:text-6xl font-bold">Your Urban Service Partner</h1>
        <p className="text-white text-lg mt-4">Experience quality services from the comfort of your home</p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all">Get Started</button>
      </div>
    </section>
  );
};

export default Home;

