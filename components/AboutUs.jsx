import Image from 'next/image';
import React from 'react';

const AboutUs = () => (
  <section className="flex flex-col items-center bg-white px-4 py-8 lg:flex-row lg:px-16">
    <div className="relative h-96 w-96 lg:w-full">
      <Image
        src="/kitchensink.jpg"
        alt="Our company"
        className="mb-6 w-full rounded-lg lg:mb-0 2xl:max-w-[70%]"
        fill
      />
    </div>
    <div className="mt-6 text-gray-800 lg:ml-8 lg:mt-0">
      <h2 className="mb-4 text-3xl font-semibold">About Our Store</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Established with a passion for elegant interiors, we specialize in unique, high-quality
        vanities designed to elevate any bathroom space. From timeless pieces to modern innovations,
        each vanity in our collection is carefully chosen for both functionality and style.
      </p>
      <p className="text-lg leading-relaxed">
        We pride ourselves on craftsmanship, quality, and a genuine commitment to customer
        satisfaction, ensuring that every vanity we offer enhances your space with beauty and
        purpose.
      </p>
    </div>
  </section>
);

export default AboutUs;
