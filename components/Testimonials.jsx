import Image from 'next/image';
import React from 'react';

const Testimonials = () => (
  <section className="relative px-6 py-12 lg:px-16 lg:py-24">
    {/* Background Image */}
    <div className="absolute inset-0 -z-50 min-h-44 w-full">
      <Image src="/bathroom6.jpg" alt="Our company" className="object-cover object-bottom" fill />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 -z-40 h-full w-full bg-black opacity-40"></div>

    {/* Testimonial Content */}
    <h2 className="mb-10 mt-6 text-center text-3xl font-semibold text-secwhite">
      What Our Customers Say
    </h2>
    <div className="relative grid grid-cols-1 gap-4 gap-y-6 p-2 sm:grid-cols-2 sm:p-0 md:px-8 lg:px-16 xl:grid-cols-4">
      {[
        {
          name: 'John Doe',
          comment: 'Amazing quality! They have the best products available at very low prices.'
        },
        {
          name: 'Jane Smith',
          comment: 'Great Collection! Price is fair with no compromise on quality.'
        },
        {
          name: 'Rafael Trejo',
          comment: 'Perfect for my space! Been shopping for 3 years from here.'
        },
        { name: 'Dani Simon', comment: 'They got all the things that my house needs.' }
      ].map((testimonial, index) => (
        <div
          key={index}
          className="h-full w-full max-w-80 place-self-center rounded-lg border-[1px] border-gunMetal-200 border-opacity-50 bg-white bg-opacity-30 p-8 text-sm backdrop-blur-[6px] transition-all duration-300 ease-linear hover:bg-gunMetal-200 hover:bg-opacity-20 hover:text-secwhite hover:shadow-md sm:h-44 sm:w-80 sm:max-w-full lg:text-base"
        >
          <p className="mb-4 lg:min-h-20">"{testimonial.comment}"</p>
          <p className="font-semibold">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
