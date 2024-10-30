import AboutUs from 'components/AboutUs';
import Benefits from 'components/Benefits';
import CTASec from 'components/CTASec';
import Testimonials from 'components/Testimonials';
import React from 'react';

const About = () => {
  return (
    <div>
      <AboutUs />
      <Benefits />
      <Testimonials />
      {/* <ImageSlider leftImage={leftImage} rightImage={rightImage} className="hidden lg:block" /> */}
      <CTASec />
    </div>
  );
};

export default About;
