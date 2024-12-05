import React from 'react';

const AboutUs = () => (
  <section className="px-4 py-6 lg:px-16 xl:py-10">
    <div className="mt-6 flex w-80 flex-col items-center place-self-center text-center sm:w-full lg:gap-4">
      <h2 className="mb-6 font-semibold lg:mb-4">About Our Store</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-10 lg:gap-20">
        <p className="mb-4 leading-relaxed tracking-tight md:w-80 lg:w-96">
          With a passion for elegant interiors, we specialize in unique, high-quality vanities
          designed to elevate your bathroom space. Each vanity in our collection is made for both
          functionality and style.
        </p>
        <p className="leading-relaxed tracking-tight md:w-80 lg:w-96">
          We pride ourselves on craftsmanship, quality, and a genuine commitment to customer
          satisfaction, ensuring that every vanity we offer enhances your space with beauty and
          purpose.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;
