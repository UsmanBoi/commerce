import AboutUs from 'components/AboutUs';
import Benefits from 'components/Benefits';
import CTASec from 'components/CTASec';
import Faqs from 'components/Faqs';
import Testimonials from 'components/Testimonials';
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col">
      <AboutUs />
      <Benefits />
      <Testimonials />
      <Faqs />
      {/* <ImageSlider leftImage={leftImage} rightImage={rightImage} className="hidden lg:block" /> */}
      <CTASec />
    </div>
  );
};

export default About;
