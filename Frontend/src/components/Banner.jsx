import React, { useState, useEffect } from 'react';

function Banner() {
  const slides = [
    {
      title: "Welcome to Talukder Hardware",
      description: "Your one-stop shop for all hardware needs, from construction materials to household tools.",
      buttonText: "Shop Now",
      image: "https://via.placeholder.com/500x300.png?text=Hardware+Store+Image+1",
    },
    {
      title: "High-Quality Products",
      description: "Find top-quality tools and materials for your next construction project.",
      buttonText: "Explore Tools",
      image: "https://via.placeholder.com/500x300.png?text=Hardware+Store+Image+2",
    },
    {
      title: "Affordable Prices",
      description: "Get the best deals on a wide range of hardware products.",
      buttonText: "See Offers",
      image: "https://via.placeholder.com/500x300.png?text=Hardware+Store+Image+3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Go to the next or previous slide manually
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
        {/* Slide Content */}
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out opacity-100">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{slides[currentSlide].title}</h1>
            <p className="text-lg text-gray-600 mb-6">{slides[currentSlide].description}</p>
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 transform hover:scale-105">
              {slides[currentSlide].buttonText}
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={slides[currentSlide].image}
              alt="Hardware store items"
              className="rounded-lg shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-center px-4">
          <button
            onClick={prevSlide}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
          >
            &#9664;
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-center px-4">
          <button
            onClick={nextSlide}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
          >
            &#9654;
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-green-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Banner;
