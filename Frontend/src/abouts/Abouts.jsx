import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar

function Abouts() {
  return (
    <>
      <Navbar />  {/* Include Navbar here */}
      <div className="about-content p-8 bg-gray-100 text-gray-800">
        
        {/* Hero Section */}
        <div className="hero-section bg-blue-900 text-white p-8 rounded-lg mb-8 shadow-lg">
          <h1 className="text-5xl font-bold mb-4">About Talukdar Hardware</h1>
          <p className="text-lg">
            Talukdar Hardware has been providing high-quality tools and building materials in New Guwahati since its establishment. We pride ourselves on serving both individual customers and businesses with the best hardware products in the market.
          </p>
        </div>

        {/* Company History Section */}
        <section className="company-history mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg mb-4">
            Established in the early 2000s, Talukdar Hardware has grown from a small family-run shop to one of the leading hardware suppliers in the region. Over the years, we’ve expanded our product offerings and now carry a wide range of building materials, tools, and industrial supplies to meet the needs of our diverse clientele.
          </p>
          <p className="text-lg">
            Our commitment to quality and customer satisfaction has remained unchanged. We believe in fostering strong relationships with our customers by providing them with reliable products and exceptional service.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section bg-white p-6 rounded-lg mb-12 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to provide top-quality hardware products and outstanding customer service. We aim to support the construction and industrial sectors by supplying reliable and innovative products that help build stronger communities.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="core-values mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li><strong>Quality:</strong> We ensure that every product we sell meets the highest standards of quality and durability.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and respect for our customers.</li>
            <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do, and we strive to meet their needs in the best possible way.</li>
            <li><strong>Innovation:</strong> We continuously look for new products and solutions to serve our customers better.</li>
          </ul>
        </section>

        {/* Google Maps Section */}
        <section className="location-section bg-gray-200 p-6 rounded-lg mb-12 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Visit Us</h2>
          <p className="text-lg mb-4">
            We are located in New Guwahati, 781030. Feel free to visit us for all your hardware needs.
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56631.01362504983!2d91.7162922!3d26.1776445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374ec15757f67875%3A0x5039b1b1ec1e3f7!2sNew%20Guwahati%2C%20Guwahati%2C%20Assam%20781030!5e0!3m2!1sen!2sin!4v1694516523452!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials bg-white p-6 rounded-lg mb-12 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
          <div className="testimonial-item mb-4">
            <p className="text-lg italic">"The best hardware store in Guwahati! The staff is knowledgeable, and they always have what I need."</p>
            <span className="font-semibold">– Rajesh, Contractor</span>
          </div>
          <div className="testimonial-item">
            <p className="text-lg italic">"I’ve been coming to Talukdar Hardware for years. Their products are top-notch, and they offer great service!"</p>
            <span className="font-semibold">– Priya, Architect</span>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions, feel free to reach out to us at:
          </p>
          <ul className="list-none text-lg space-y-2">
            <li><strong>Email:</strong> info@talukdarhardware.com</li>
            <li><strong>Phone:</strong> +91-9876543210</li>
            <li><strong>Address:</strong> New Guwahati, 781030, Assam, India</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Abouts;
