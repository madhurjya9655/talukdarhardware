import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Products from '../components/Products';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Products />  {/* Product List Section */}
      <Testimonials />
      <ContactSection />
    </>
  );
}

export default Home;
