import React from 'react';

const Benefits = () => (
  <section className="flex flex-col items-center bg-gray-100 px-4 py-8 lg:px-16">
    <h2 className="mb-6 text-center text-3xl font-semibold">Why Choose Us</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {['Quality Craftsmanship', 'Elegant Designs', 'Durability', 'Customer Support'].map(
        (benefit, index) => (
          <div key={index} className="rounded-lg bg-white p-4 text-center shadow-md">
            <h3 className="mb-2 text-xl font-semibold">{benefit}</h3>
            <p className="text-gray-700">{/* Add specific descriptions for each benefit */}</p>
          </div>
        )
      )}
    </div>
  </section>
);

export default Benefits;
