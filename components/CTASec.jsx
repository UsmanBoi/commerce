import React from 'react';
import ShopNow from './ShopNow';

const CTA = () => (
  <section className="flex flex-col items-center bg-[#FaFaf4] px-4 py-8 lg:p-16">
    <h2 className="mb-4 text-center text-3xl font-semibold">Ready to Transform Your Space?</h2>
    <p className="mb-6 text-center text-lg">
      Discover our unique selection of vanities tailored to bring elegance and functionality to any
      room.
    </p>
    <ShopNow
      className="rounded px-6 py-3 font-medium text-white transition hover:border-2 hover:bg-opacity-0 hover:font-semibold hover:text-gunMetal-200"
      title="Shop Our Collection"
      link="/search"
    />
  </section>
);

export default CTA;
