import React from 'react';

const Testimonials = () => (
  <section className="bg-white px-4 py-8 lg:px-16">
    <h2 className="mb-6 text-center text-3xl font-semibold">What Our Customers Say</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[
        { name: 'John Doe', comment: 'Amazing quality!' },
        { name: 'Jane Smith', comment: 'Perfect for my space!' }
      ].map((testimonial, index) => (
        <div key={index} className="rounded-lg bg-gray-50 p-6 shadow-md">
          <p className="mb-4 text-lg">"{testimonial.comment}"</p>
          <p className="font-semibold text-gray-800">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
