import React from 'react';

const benefitslist = ['Quality Craftsmanship', 'Elegant Designs', 'Durability', 'Customer Support'];

const Benefits = () => (
  <section className="flex flex-col items-center bg-gray-100 px-4 py-8 lg:px-16">
    <h2 className="mb-6 text-center text-3xl font-semibold">Why Choose Us</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {benefitslist.map((benefit, index) => (
        <div
          key={index}
          className="flex h-40 w-full items-center justify-center rounded-lg bg-white p-4 text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-tertiary/30"
        >
          <h3 className="mb-2 text-xl font-semibold">{benefit}</h3>
          <p className="text-gray-700">{/* Add specific descriptions for each benefit */}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
