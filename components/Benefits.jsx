import React from 'react';

const benefitsList = [
  {
    title: 'Quality Craftsmanship',
    description:
      'Built with the finest materials to ensure lasting quality. You can find best materials only here.'
  },
  {
    title: 'Elegant Designs',
    description:
      'Designed to bring a touch of elegance to your space. We make the best products in market.'
  },
  {
    title: 'Durability',
    description:
      'Made to withstand daily use and time. Need no mention anything lorem ipsum anything lorem ipsum'
  },
  {
    title: 'Customer Support',
    description:
      'Our team is here to assist you every step of the way. Got Milk lorem ipsum lorem ist'
  }
];

const Benefits = () => (
  <section className="flex flex-col items-center bg-[#FaFaf4] px-4 py-8 lg:p-16">
    <h2 className={`mb-10 text-center font-semibold`}>Why Choose Us</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 2xl:gap-10">
      {benefitsList.map((benefit, index) => (
        <div
          key={index}
          className="group relative flex h-40 w-60 items-center justify-center overflow-hidden rounded-lg bg-white p-4 text-center shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-tertiary/30 sm:w-80"
        >
          <div className="absolute inset-0 flex translate-y-0 items-center justify-center transition-all delay-100 duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            <h3
              className="p-8 font-semibold tracking-tight text-gunMetal-200 xl:text-lg"
              style={{ wordSpacing: '2px' }}
            >
              {benefit.title.toUpperCase()}
            </h3>
          </div>
          <div className="absolute inset-0 flex translate-y-8 flex-col items-center justify-center opacity-0 transition-all delay-100 duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <p className="px-4">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
