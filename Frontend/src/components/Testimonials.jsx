import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Great service and quality products!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Amazing customer support and fast delivery.',
    },
  ];

  return (
    <div className="testimonials-section py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card p-6 bg-white rounded-md shadow-md">
            <p className="mb-4">"{testimonial.comment}"</p>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
