import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Services from './component/Services';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';
import myImage from './assets/images/myImage.webp'; // Adjust the file name if needed


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
