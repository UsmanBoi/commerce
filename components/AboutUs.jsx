import Image from 'next/image';
import React from 'react';

const AboutUs = () => (
  <section className="grid grid-cols-1 gap-2 bg-white px-4 py-10 lg:grid-cols-2 lg:flex-row lg:px-16 xl:gap-6 xl:py-14">
    <div className="relative h-80 w-full lg:w-full">
      <Image
        src="/bathroom6.jpg"
        alt="Our company"
        className="mb-6 w-full rounded-lg object-cover md:object-bottom lg:mb-0"
        fill
      />
    </div>
    <div className="mt-6 text-gray-800 lg:ml-8 lg:mt-0">
      <h2 className="mb-4 text-center text-3xl font-semibold lg:text-start xl:text-4xl">
        About Our Store
      </h2>
      <p className="mb-4 text-sm leading-relaxed tracking-tight md:text-base xl:text-lg">
        Established with a passion for elegant interiors, we specialize in unique, high-quality
        vanities designed to elevate any bathroom space. From timeless pieces to modern innovations,
        each vanity in our collection is carefully chosen for both functionality and style.
      </p>
      <p className="text-sm leading-relaxed tracking-tight md:text-base xl:text-lg">
        We pride ourselves on craftsmanship, quality, and a genuine commitment to customer
        satisfaction, ensuring that every vanity we offer enhances your space with beauty and
        purpose.
      </p>
    </div>
  </section>
);

export default AboutUs;
