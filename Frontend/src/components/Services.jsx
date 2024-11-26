import React from 'react';

function Services() {
  const services = [
    { id: 1, title: 'Quality Tools', description: 'We provide a wide range of high-quality tools.' },
    { id: 2, title: 'Construction Materials', description: 'Everything you need for construction.' },
    { id: 3, title: 'Expert Advice', description: 'Consult with our experts on the best solutions.' },
  ];

  return (
    <div className="services-section py-16">
      <h2 className="text-center text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="service-card p-6 bg-gray-100 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
