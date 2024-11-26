import React from 'react';
// import './HeroSection.css'; // Import the CSS file if it's separate

function HeroSection() {
  return (
    <div className="hero h-screen bg-asphalt bg-cover bg-center flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">Welcome to Talukdar Hardware</h1>
        <p className="text-2xl mt-4">Your one-stop shop for all hardware needs</p>
        <button className="mt-8 px-6 py-3 bg-yellow-600 text-white text-lg rounded-md hover:bg-yellow-700 transition">
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
